// @flow

import * as React from "react";
import type { ReactElement, ReactNode } from "react";
import { Nav, Button } from "tabler-react";
import AOS from "aos";
import type { NotificationProps } from "tabler-react";
import Footer from "opacity-web2.0/src/components/footer/footer";
import "aos/dist/aos.css";
import { HOME_URL } from "./config"

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
  recoveryHandle: string;
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
    const loggedIn = localStorage.getItem('key') ? true : false;
    return (
      <div className='page'>
        <header
          className={
            this.props.isHome
              ? "navbar navbar-expand-md navbar-light d-print-none "
              : "navbar navbar-expand-md navbar-light d-print-none border-bottom"
          }
        >
          <div className='container-xl'>
            <h1 className='navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3 mb-0'>
              <a href={HOME_URL + '/'} className='logo-wrapper'>
                <img src={logo} width='60' height='60' alt='Opacity' className='navbar-brand-image' />
                <span className='ml-3'>OPACITY</span>
              </a>
            </h1>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbar-menu'
              aria-expanded={this.state.showMobileMenu}
              onClick={this.SetMobileMenu.bind(this)}
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbar-menu'>
              <div className='d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center justify-content-end'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a href={HOME_URL + '/platform'} className='nav-link'>
                      Why Opacity?
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href={HOME_URL + '/community'} className='nav-link'>
                      App Gallery
                    </a>
                  </li>
                  <li className='nav-item'>
                    <Nav.Link href='/blog'>Learn</Nav.Link>
                  </li>
                  <li className='nav-item'>
                    {loggedIn ?
                      (
                        <div className='nav-link'>
                          <Button
                            className='btn btn-primary'
                            onClick={() => {
                              window.open(`${HOME_URL}/file-manager`, '_blank');
                            }}
                          >
                            Dashboard
                        </Button>
                        </div>
                      ) : (
                        <div className='nav-link'>
                          <Button
                            className='btn btn-white btn-pill'
                            onClick={() => {
                              window.open(`${HOME_URL}/plans`, '_blank');
                            }}
                          >
                            Explore Plans
                      </Button>
                        </div>
                      )
                    }

                  </li>
                  <li className='nav-item'>
                    {loggedIn ? (
                      <div className=''>
                        <Button
                          className='btn btn-primary'
                          onClick={() => {
                            window.open(`${HOME_URL}/`, '_blank');
                          }}
                        >
                          Logout
                        </Button>
                      </div>
                    ) : (
                      <div className=''>
                        <Button
                          className='btn btn-primary btn-pill'
                          onClick={() => {
                            window.open(`${HOME_URL}/`, '_blank');
                          }}
                        >
                          Log in
                      </Button>
                      </div>
                    )}

                  </li>
                </ul>
              </div>
            </div>
            {this.state.showMobileMenu && (
              <div className='mobile-menu'>
                <div className='d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center justify-content-center'>
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <a href={HOME_URL + '/platform'} className='nav-link'>
                        Why Opacity?
                    </a>
                    </li>
                    <li className='nav-item'>
                      <a href={HOME_URL + '/community'} className='nav-link'>
                        App Gallery
                    </a>
                    </li>
                    <li className='nav-item'>
                      <Nav.Link href='/blog'>Learn</Nav.Link>
                    </li>

                    {
                      loggedIn ? (
                        <>
                          <li className='nav-item'>
                            <a href={HOME_URL + '/file-manager'} className='nav-link' >
                              Dashboard
                            </a>
                          </li>
                          <li
                            className='nav-item'
                            onClick={() => {
                              window.open(`${HOME_URL}/`, ' _blank');
                            }}
                          >
                            <Nav.Link>Logout</Nav.Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className='nav-item'>
                            <Nav.Link href='/plans'>Explore Plans</Nav.Link>
                          </li>
                          <li
                            className='nav-item'
                            onClick={() => {
                              this.setState({ showLoginModal: true });
                            }}
                          >
                            <Nav.Link>Log in</Nav.Link>
                          </li>
                        </>
                      )
                    }

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
