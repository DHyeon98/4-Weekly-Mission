import React, { ReactElement, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ModalPortal = ({
  children,
  isOpen = false,
}: {
  children: ReactElement;
  isOpen: boolean;
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen) return null;
  return mounted
    ? createPortal(
        children,
        document.getElementById("modal-root") as HTMLElement
      )
    : null;
};

export default ModalPortal;
