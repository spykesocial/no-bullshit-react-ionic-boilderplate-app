/*
 * This script deploys the latest build to the CDN.
 * It is run after the build is complete as part of CICD.
 */
import fs from "fs";

const baseurl = process.env.BASE_URL; // contains trailing slash
const apikey = process.env.API_KEY;
const pullzone = process.env.PULLZONE; // contains trailing slash
const pullkey = process.env.PULL_KEY;

if (!(baseurl && apikey && pullzone && pullkey)) {
  throw new Error(
    "Missing environment variables. Please check CICD configuration.",
  );
}

const deploy = async () => {
  console.log("Deleting previous build from CDN...");
  try {
    // delete all files in dist folder
    const res = await fetch(baseurl, {
      method: "DELETE",
      headers: {
        AccessKey: apikey,
      },
    });
    // 200 = success, 400 = no files to delete
    if (![200, 400].includes(res.status)) {
      const data = await res.json();
      throw new Error(JSON.stringify(data));
    }
  } catch (e) {
    throw new Error("Couldn't delete previous build from CDN: " + e);
  }

  console.log("Uploading new build to CDN...");
  try {
    const files = getFiles("./dist"); // get all files in dist folder
    let promises = [];
    for (const file of files) {
      const data = fs.readFileSync(file);
      const filename = file.replace("./dist/", "");
      promises.push(
        fetch(baseurl + filename, {
          method: "PUT",
          headers: {
            AccessKey: apikey,
            "Content-Type": "application/octet-stream",
          },
          body: data,
        }).then(async (res) => {
          // 201 = successful upload
          if (res.status !== 201) {
            const data = await res.json();
            throw new Error(JSON.stringify(data));
          }
          console.log("\t Uploaded " + filename);
        }),
      );
    }
    // upload files in parallel
    await Promise.all(promises);
  } catch (e) {
    throw new Error("Couldn't upload new build to CDN: " + e);
  }

  console.log("Purging CDN cache...");
  try {
    const res = await fetch(pullzone + "/purgeCache", {
      method: "POST",
      headers: {
        AccessKey: pullkey,
      },
    });
    // 204 = successful cache purge
    if (res.status !== 204) {
      const data = await res.json();
      throw new Error(JSON.stringify(data));
    }
  } catch (e) {
    throw new Error("Couldn't purge CDN cache: " + e);
  }

  console.log("Deployment complete!");
};

// DEPLOY TO CDN
deploy().catch((e) => {
  console.error(e);
  process.exit(127);
});

// Reference for dir walk https://stackoverflow.com/a/20525865/13227113
function getFiles(dir, _files = []) {
  var files = fs.readdirSync(dir);
  for (var i in files) {
    var name = dir + "/" + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, _files);
    } else {
      _files.push(name);
    }
  }
  return _files;
}
