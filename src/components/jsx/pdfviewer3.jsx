import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configura el worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer3() {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="App">
      <Document
        file="/Resume_English.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Página {pageNumber} de {numPages}</p>
      <button onClick={() => setPageNumber(prevPage => Math.max(prevPage - 1, 1))}>Anterior</button>
      <button onClick={() => setPageNumber(prevPage => Math.min(prevPage + 1, numPages))}>Siguiente</button>
    </div>
  );
}

export default PDFViewer3;
