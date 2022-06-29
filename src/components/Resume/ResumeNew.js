import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Tech Resume 2022 D.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "https://raw.githubusercontent.com/felicitybrammer/wild-port/main/src/Assets/Tech%20Resume%202022%20E.pdf";


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            {/* <AiOutlineDownload /> */}
            &nbsp;Download
          </Button>
        </Row>

        <Row className="resume">
          <Col md={8}>
            <Document file={resumeLink} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
            
            <Document file={resumeLink} className="d-flex justify-content-center">
              <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Col>
        </Row>

        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download
          </Button>
        </Row> */}
      </Container>
    </div>
  );
}

export default ResumeNew;
