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

  const downloadFile = async () => {
    setPageLoading(true)
    await fetch(`https://cors-anywhere.herokuapp.com/${file.url}`)
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
            <Col md={6} className='center' >
              <Row style={{ padding: '20px' }}>
                <div className='preview-area center'>
                  <Preview
                    url={file.url}
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
                  <h2>You have been invited to view a public file!</h2>
                  <div className='text-filename'>{file && file.title}</div>
                  <div className='text-filesize'></div>
                  <div className='row mb-3' style={{ justifyContent: 'center' }}>
                    <div className='col-md-12'>
                      <a className='btn btn-pill btn-download' onClick={downloadFile}>
                        <span></span>
                        Download File
                    </a>
                    </div>
                  </div>
                  <div>
                    <div><a href={HOME_URL + "/plans"} target='_blank'>Get 10GB file storage and file sharing for free</a></div>
                    Free to share ideas. Free to be private. Free to be you.
                  </div>
                  <a className='learn-more' href={HOME_URL + "/platform"} target="_blank">
                    Learn More
                  </a>
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
