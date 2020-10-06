import React from 'react';
import { Button } from 'react-bootstrap';
import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Resume = (props) =>  {
  const btnColor = props.btnColor;
  const resumePDF = props.resumePDF;

  return(
    <div className='container'>
      <h1>Resume</h1>
      <br />
      <div>
        <Button href='/pdf' download variant={ btnColor } className='mr-2'>Download PDF <i className="far fa-file-pdf"></i></Button>
        <Button href='/docx' download variant={ btnColor } >Download Docx <i className="far fa-file-word"></i></Button>
      </div>
      <br />
      <div>
        <Document
          file={ resumePDF }
          onSourceSuccess={(success) => {
            console.log("Pdf load success")
            console.log(success)
          }}
          onLoadError={(error) => {
            console.error("PDF load error")
            console.error(error)
          }}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}