import React, { useCallback, useEffect } from "react";

interface BrochureProps {
  brochure: string;
}

const BrochureRenderer: React.FC<BrochureProps> = ({ brochure }) => {
  const renderPDFFromFile = useCallback((brochure: string) => {
    window.$("#flipbookContainer").empty();
    window.$("#flipbookContainer").flipBook(brochure);
  }, []);

  useEffect(() => {
    renderPDFFromFile(brochure);
  }, [brochure, renderPDFFromFile]);

  return (
    <div className="bgImg brochure-container">
      <div id="flipbookContainer" style={{ margin: "auto" }}></div>
    </div>
  );
};

export default BrochureRenderer;
