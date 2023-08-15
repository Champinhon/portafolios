import React from 'react'
import '../css/portfolio.css'
import PDFViewer from './pdfviewer.jsx';
import PDFViewer2 from './pdfviewer2.jsx';
import PDFViewer3 from './pdfviewer3.jsx';
export default function Portfolios() {
  return (
    <div>
    <div className="pdf-viewer-container">
      <PDFViewer file='/curriculum.pdf'/>
      <PDFViewer3 file="/Resume_English.pdf"/>
      <PDFViewer2 file='/Profile.pdf'/>
    </div>
  </div>
  )
}
