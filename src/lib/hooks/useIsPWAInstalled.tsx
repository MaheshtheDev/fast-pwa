import { useState, useEffect } from "react";

const useIsPWAInstalled = () => {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const checkPWAInstallation = () => {
      if (window.matchMedia("(display-mode: standalone)").matches) {
        setIsInstalled(true);
      }
    };

    checkPWAInstallation();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        checkPWAInstallation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return isInstalled;
};

export default useIsPWAInstalled;
