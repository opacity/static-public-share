import React, { useState, useMemo } from "react";
import SiteWrapper from "../../SiteWrapper";
import { Row, Col, Container } from "react-bootstrap";
import "./SharePage.scss";
import { formatBytes } from "opacity-web2.0/src/helpers"
import { HOME_URL } from "../../config"
import { Preview } from "./preview";

const shareImg = require("../../assets/share-download.svg");

declare global {
  interface window {
    OpacityFile: {
      url: string,
      data: object,
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

  return (
    <>
      <SiteWrapper history={history}>
        <Container fluid='xl share'>
          <Row>
            <Col md={6} className='center' >
              <Row style={{ padding: '20px' }}>
                <div className='preview-area center'>
                  <Preview
                    url={file.thumbnail}
                    ext={file.fileExtension}
                    type={file.mimeType}
                    className='preview-content'
                  />
                </div>
              </Row>
            </Col>
            <Col md={6} className="control-area">
              <Row className='align-items-center'>
                <Col className='text-center'>
                  <img width='88' src={shareImg} />
                  <h2>You have been invited to view a Public File!</h2>
                  <div className='text-filename'>{file && file.title}</div>
                  <div className='text-filesize'></div>
                  <div className='row mb-3' style={{ justifyContent: 'center' }}>
                    <div className='col-md-12'>
                      <a href={file.url} className='btn btn-pill btn-download'>
                        <span></span>
                        Download File
                    </a>
                    </div>
                  </div>
                  <div>
                    <div><a href={HOME_URL + "/sign-up"}>Get 10GB file storage and file sharing for free</a></div>
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
