"use client";

import { useEffect } from "react";
import { useBoolean } from "usehooks-ts";

import { PreviewModal } from "@/components/previewModal";

const ModalProvider = () => {
    const {value: isMounted, setTrue: setMountedTrue} = useBoolean(false)

    useEffect(() => {
        setMountedTrue()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!isMounted) return null
  return ( 
    <>
      <PreviewModal />
    </>
   );
}
 
export default ModalProvider;