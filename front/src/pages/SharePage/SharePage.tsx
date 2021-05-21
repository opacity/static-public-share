import React, { useState } from "react";
import SiteWrapper from "../../SiteWrapper";
import { Row, Col, Container } from "react-bootstrap";
import "./SharePage.scss";
import { formatBytes } from "opacity-web2.0/src/helpers"
import { FileIcon, defaultStyles } from 'react-file-icon';
import { HOME_URL } from "../../config"

const shareImg = require("../../assets/share-download.svg");

declare global {
  interface window {
    OPACITY_FILE: {
      url: string,
      title: string,
      description: string,
      thumbnail: string,
    }
  }
}

const SharePage = ({ history }) => {
  const [previewOpen, setPreviewOpen] = useState(false)

  return (
    <>
      <SiteWrapper history={history}>
        <Container fluid='xl share'>
          <Row>
            <Col md={6} className='center' >
              <Row style={{ padding: '20px' }}>
                <div className='preview-area center'>
                  {
                    (previewOpen) ?
                      <div>
                        {/* PUT PREVIEW HERE */}
                      </div>
                      :
                      <div style={{ width: '300px' }}>
                        <FileIcon
                          color="#A8A8A8"
                          glyphColor="#ffffff"
                          {...defaultStyles[file && getFileExtension(file.name)]}
                          extension={file && getFileExtension(file.name)}
                        />
                      </div>
                  }
                </div>
              </Row>
            </Col>
            <Col md={6} className="control-area">
              <Row className='align-items-center'>
                <Col className='text-center'>
                  <img width='88' src={shareImg} />
                  <h2>You have been invited to view a file!</h2>
                  <div className='text-filename'>{file && file.name}</div>
                  <div className='text-filesize'>{file && formatBytes(file.size)}</div>
                  <div className='row mb-3' style={{ justifyContent: 'center' }}>
                    <div className='col-md-5'>
                      <a href={window.OPACITY_FILE.url} className='btn btn-pill btn-download'>
                        <span></span>
                        Download File
                    </a>
                    </div>
                    <div className='col-md-5'>
                      <button className='btn btn-pill btn-preview' onClick={() => filePreview(handle)}>
                        <span></span>
                        {previewOpen ? 'Hide' : 'Show'} Preview
                    </button>
                    </div>
                  </div>
                  <div>
                    <div><a href={ HOME_URL + "/sign-up" }>Get 10GB file storage and file sharing for free</a></div>
                    Free to share ideas. Free to be protected. Free to be you.
                  </div>
                  <a className='learn-more' href={HOME_URL + "/platform"} target="_blank">
                    Learn More
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </SiteWrapper >
    </>
  )
}

export default SharePage;
