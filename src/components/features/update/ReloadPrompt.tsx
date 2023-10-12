import { useContext, useEffect } from "react";
import { UpdateContext } from "./UpdateContext";
import { useIonToast } from "@ionic/react";

export const ReloadPrompt: React.FC = () => {
  const { status, checkForUpdates, updateServiceWorker } =
    useContext(UpdateContext);
  const [present, dismiss] = useIonToast();

  useEffect(() => {
    checkForUpdates();
  }, [checkForUpdates]);

  async function onInstallUpdate() {
    try {
      await updateServiceWorker();
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Sometimes updateServiceWorker() doesn't refresh in Safari,
      // even though the page needs refresh?!
      location.reload();
    }
  }

  // If there is an update available, show the toast.
  if (status === "outdated") {
    present({
      message: "New update available! Reload to see changes...",
      color: "primary",
      buttons: [
        {
          role: "reload",
          text: "Reload",
          handler: () => onInstallUpdate(),
        },
      ],
    });
  }

  return <span>Updating...</span>;
};
