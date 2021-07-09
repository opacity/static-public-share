import React, { useState, useMemo } from "react";
import SiteWrapper from "../../SiteWrapper";
import { Row, Col, Container } from "react-bootstrap";
import "./SharePage.scss";
import { HOME_URL } from "../../config"
import { Preview } from "./preview";
import { saveAs } from 'file-saver'
import ReactLoading from "react-loading";

const shareImg = require("../../assets/share-download.svg");

declare global {
  interface window {
    OpacityFile: {
      shortlink: string,
      url: string,
      title: string,
      description: string,
      thumbnail: string,
      mimeType: string,
      fileExtension: string,
    }
  }
}

const SharePage = ({ history }) => {
  const file = useMemo(() => window.OpacityFile, [window.OpacityFile])
  const [pageLoading, setPageLoading] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)

  const downloadFile = async () => {
    setPageLoading(true)
    await fetch(`${file.url}`)
      .then(res => res.blob())
      .then(res => {
        const blob = new Blob([res])
        saveAs(blob, file.title)
        setPageLoading(false)
      })
  }

  return (
    <>
      <SiteWrapper history={history}>
        <Container fluid='xl share'>
          <Row>
            <Col md={6} xs={12} className='center' >
              <Row style={{ padding: '20px' }}>
                <div className='preview-area center'>
                  {previewOpen
                    ?
                    <Preview
                      url={file.url}
                      ext={file.fileExtension}
                      type={file.mimeType}
                      className='preview-content'
                    />
                    :
                    <div style={{ width: "100%" }}>
                      <img src={file.thumbnail} alt='thumbnail' />
                    </div>
                  }
                </div>
              </Row>
            </Col>
            <Col md={6} xs={12} className="control-area">
              <Row className='align-items-center'>
                <Col className='text-center'>
                  <div className='text-filename'>{file && file.title}</div>
                  <div className='text-filesize'></div>
                  <div className="row mb-3" style={{ justifyContent: "center" }}>
                    <div className="col-md-5">
                      <button
                        className="btn btn-pill btn-download"
                        onClick={downloadFile}
                      >
                        <span></span>
                      Download File
                    </button>
                    </div>
                    <div className="col-md-5">
                      <button
                        className="btn btn-pill btn-preview"
                        onClick={() => setPreviewOpen(prev => !prev)}
                      >
                        <span></span>
                        {previewOpen ? "Hide" : "Show"} Preview
                    </button>
                    </div>
                  </div>

                  <h2>Easily share your files with Opacity</h2>

                  <div className="free-signup-text">
                    <a href={HOME_URL + "/plans"} target='_blank'>Get 10GB file storage and file sharing for free</a>
                  </div>
                  <div style={{ fontSize: "1.1rem" }}>
                    Free to share ideas. Free to be protected. Free to be you.
                </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        {
          pageLoading && <div className='loading'>
            <ReactLoading type="spinningBubbles" color="#2e6dde" />
          </div>
        }
      </SiteWrapper >
    </>
  )
}

export default SharePage;
