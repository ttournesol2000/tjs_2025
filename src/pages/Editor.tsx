import React from "react";
import MemeSVGViewer from "../components/ui/MemeSVGViewer/MemeSVGViewer";
import MemeForm from "../components/ui/MemeForm/MemeForm";

const Editor = () => {
  return (
    <>
      <MemeSVGViewer basePath="" />
      <MemeForm />
    </>
  );
};

export default Editor;
