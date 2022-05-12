import * as React from "react";
// import { Link } from "react-router-dom";
import "./Footer.scss";
const logo = require("../../assets/logo.svg");
const github = require("../../assets/github.svg");
const reddit = require("../../assets/reddit.svg");
const telegram = require("../../assets/telegram.svg");
const twitter = require("../../assets/twitter.svg");
const youtube = require("../../assets/youtube.svg");

const Footer = () => {
  return (
    <footer>
      <div className="container-xl">
        <div className="row">
          <div className="col-md-6 footer-logo">
            <a
              href={window.OpacityConfig.opacityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-logo"
            >
              <img width={78} height={78} src={logo} />
              <span className="ml-3">OPACITY</span>
            </a>
          </div>
          <div className="col-md-6 footer-third">
            <div
              className="d-flex h-100 align-items-center"
              style={{ justifyContent: "flex-end" }}
            >
              <a
                href="https://github.com/opacity"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img width={43} height={43} src={github} />
              </a>
              <a
                href="https://www.reddit.com/r/Opacity/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img width={43} height={43} src={reddit} />
              </a>
              <a
                href="https://telegram.me/opacitystorage"
                className="social-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img width={43} height={43} src={telegram} />
              </a>
              <a
                href="https://twitter.com/Opacity_Storage"
                className="social-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img width={43} height={43} src={twitter} />
              </a>
              <a
                href="https://www.youtube.com/opacitystorage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width={43} height={43} src={youtube} />
              </a>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className=" footer-links">
          <div className="link-wrapper">
            <span className="title"> Company</span>
            <a
              href="https://telegram.me/opacitystorage"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              About Us
            </a>
            <br />
            <a
              href="https://blog.opacity.io"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Blog
            </a>
          </div>
          <div className="link-wrapper">
            <span className="title"> Resources</span>
            <a
              href={`${window.OpacityConfig.opacityUrl}downloads`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Downloads
            </a>
            <br />
            <a
              href="https://opacitystora.ge/GalaxyWhitepaperV1"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Whitepaper
            </a>
            <br />
            <a
              href="https://medium.com/opacity-storage"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Learn
            </a>
            <br />
            <a
              href="https://api.opacity.io:3000/swagger/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              API for Developers
            </a>
          </div>
          <div className="link-wrapper">
            <span className="title"> Help</span>
            <a
              href="https://help.opacity.io"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Help Center
            </a>
            <br />
            <a
              href="https://telegram.me/opacitystorage"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Telegram
            </a>
            <br />
            <a
              href="http://discord.opacity.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Discord
            </a>
          </div>
          <div className="link-wrapper">
            <span className="title"> Legal</span>
            <a
              href={`${window.OpacityConfig.opacityUrl}terms-of-service`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Terms of Service
            </a>
            <br />

            <a
              href={`${window.OpacityConfig.opacityUrl}privacy-policy`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Privacy Policy
            </a>
            <br />

            <a
              href={`${window.OpacityConfig.opacityUrl}code-review-license`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Code License
            </a>
          </div>
        </div>
        <div className="divider"></div>
        <div className="row">
          <div className="col-md-12 text-center copywrite">
            {" "}
            © 2018-2021 Opacity Storage Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
