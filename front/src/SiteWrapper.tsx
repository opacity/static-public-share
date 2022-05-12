// @flow

import * as React from "react";
import type { ReactElement, ReactNode } from "react";
import { Nav, Button, NavLink } from "tabler-react";
import AOS from "aos";
import type { NotificationProps } from "tabler-react";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

AOS.init({
  once: true,
  anchorPlacement: "center-bottom",
  offset: 200,
  delay: 50,
  duration: 700,
});
const logo = require("./assets/logo.svg");
type Props = {
  children: ReactNode;
  showSignUpModal?: boolean;
  handleCloseSignUpModal?: Function;
  showLoginModal?: boolean;
  handleCloseLoginModal?: Function;
  isHome?: boolean;
  history: any;
  recoveryHandle?: string;
};

type State = {
  notificationsObjects?: Array<typeof NotificationProps>;
  showMobileMenu: boolean;
  showLoginModal: boolean;
  showSignUpModal: boolean;
};

class SiteWrapper extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false,
      showLoginModal: false,
      showSignUpModal: false,
    };
  }
  SetMobileMenu() {
    this.setState({ showMobileMenu: !this.state.showMobileMenu });
  }

  render(): ReactElement {
    return (
      <div className="page">
        <header
          className={
            this.props.isHome
              ? "navbar navbar-expand-md navbar-light d-print-none "
              : "navbar navbar-expand-md navbar-light d-print-none border-bottom"
          }
        >
          <div className="container-xl">
            <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3 mb-0">
              <a
                href={window.OpacityConfig.opacityUrl}
                className="logo-wrapper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={logo}
                  width="60"
                  height="60"
                  alt="Opacity"
                  className="navbar-brand-image"
                />
                <span className="ml-3">OPACITY</span>
              </a>
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-menu"
              aria-expanded={this.state.showMobileMenu}
              onClick={this.SetMobileMenu.bind(this)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar-menu">
              <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center justify-content-end">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      href={window.OpacityConfig.opacityUrl + "platform"}
                      className="nav-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Why Opacity?
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href={window.OpacityConfig.opacityUrl + "downloads"}
                      className="nav-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Downloads
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://medium.com/opacity-storage"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://help.opacity.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Help Center
                    </a>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      <Button
                        className="btn btn-white btn-pill"
                        onClick={() => {
                          window.open(
                            `${window.OpacityConfig.opacityUrl}plans`,
                            "_blank"
                          );
                        }}
                      >
                        Explore Plans
                      </Button>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="">
                      <Button
                        className="btn btn-primary btn-pill"
                        onClick={() => {
                          window.open(
                            window.OpacityConfig.opacityUrl,
                            "_blank"
                          );
                        }}
                      >
                        Log in
                      </Button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {this.state.showMobileMenu && (
              <div className="mobile-menu">
                <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center justify-content-center">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink
                        to={window.OpacityConfig.opacityUrl + "platform"}
                        className="nav-link"
                      >
                        Why Opacity?
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to={window.OpacityConfig.opacityUrl + "downloads"}
                        className="nav-link"
                      >
                        Downloads
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to={window.OpacityConfig.opacityUrl + "about"}
                        className="nav-link"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <Nav.Link href="https://blog.opacity.io" target="_blank">
                        Blog
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link href="https://help.opacity.io" target="_blank">
                        Help Center
                      </Nav.Link>
                    </li>

                    <>
                      <li className="nav-item">
                        <Nav.Link href="/plans">Explore Plans</Nav.Link>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          this.setState({ showLoginModal: true });
                        }}
                      >
                        <Nav.Link>Log in</Nav.Link>
                      </li>
                    </>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </header>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default SiteWrapper;
