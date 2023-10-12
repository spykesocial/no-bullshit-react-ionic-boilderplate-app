import { CodegenConfig } from "@graphql-codegen/cli";

//https://www.apollographql.com/docs/react/development-testing/static-typing/

const config: CodegenConfig = {
  schema: [
    {
      "https://api.spyke.social/graphql": {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImI5YWM2MDFkMTMxZmQ0ZmZkNTU2ZmYwMzJhYWIxODg4ODBjZGUzYjkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI3OTk0MzU1MzE4NTEtb20ycTcwbWE5c2tsbDZwZzN0OW1sZDBpbWV2MWppa2MuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3OTk0MzU1MzE4NTEtb20ycTcwbWE5c2tsbDZwZzN0OW1sZDBpbWV2MWppa2MuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDIwOTEwNDExMzI3Mzg4ODg0MDYiLCJlbWFpbCI6ImVlc2hhbi5rZW5pQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiYjlKeWk2d0xYQUxiODROMjh0Qm1jZyIsIm5hbWUiOiJFZXNoYW4gS2VuaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NMblI5Vi1EcnFYODdvOWFuaGpwU3NlYU5HY1MzOFRiaDJ1ZnBqNFZlS2pNOG8yPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkVlc2hhbiIsImZhbWlseV9uYW1lIjoiS2VuaSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjk2NTc4MDI2LCJleHAiOjE2OTY1ODE2MjZ9.hxEtGbfY0uwbDx1ehysGWDqqQzueHMnNtDxMbvgFFs5gppDs5kyg2wPdVOwhxe4du6dx9cK5TGduYhDgkmXEBruttda4RGB8ei1sGuHETAY0HkWGdLBYapaeRXNmyJjKZMnCTkTSknOYvni4T1ImGZclKvURPtTOJy3oAVwciYnJg-cKLNq6hDXMiKAjAJXLYfpxSZZzosex6Wl9QDsbInOSt8Xt9SgsorTHPFI2rVQZYQxxASa4APCV9JlA2Fb6i87vFTLNqk5-uUmChZj0jt2BYM8Pfk25nikO6SZdLsfGOr8-UQBvkeNa5eKOGW7PIE8w03FOuiARmDTaYIw1ug",
        },
      },
    },
  ],
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/components/features/apollo/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
