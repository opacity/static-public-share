(function() {
  var f = window.__fuse = window.__fuse || {};
  var modules = f.modules = f.modules || {}; f.dt = function (x) { return x && x.__esModule ? x : { "default": x }; };

f.modules = modules;
  f.bundle = function(collection, fn) {
    for (var num in collection) {
      modules[num] = collection[num];
    }
    fn ? fn() : void 0;
  };
  f.c = {};
  f.r = function(id) {
    var cached = f.c[id];
    if (cached) return cached.m.exports;
    var module = modules[id];
    if (!module) {
      
      throw new Error('Module ' + id + ' was not found');
    }
    cached = f.c[id] = {};
    cached.exports = {};
    cached.m = { exports: cached.exports };
    module(f.r, cached.exports, cached.m);
    return cached.m.exports;
  }; 
})();
__fuse.bundle({

// src/index.scss @7
7: function(__fusereq, exports, module){
__fusereq(8)("src/index.scss","body {\n  background-color: white; }\n\nheader {\n  height: 100px;\n  background-color: #2e6dde !important; }\n  header.border-bottom {\n    border-bottom: 2px solid #c4c4c4 !important; }\n  @media (max-width: 767.9px) {\n    header {\n      height: 70px; } }\n  header .navbar-brand-image {\n    height: 60px; }\n    @media (max-width: 767.9px) {\n      header .navbar-brand-image {\n        height: 30px; } }\n  header.navbar .navbar-nav .nav-link {\n    color: white !important;\n    font-size: 20px;\n    line-height: 30px; }\n    header.navbar .navbar-nav .nav-link:hover {\n      color: white;\n      opacity: 0.8; }\n  header .logo-wrapper {\n    display: flex;\n    align-items: center;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 45px;\n    color: #ffffff;\n    text-decoration: none !important; }\n    @media (max-width: 767.9px) {\n      header .logo-wrapper {\n        font-size: 14px;\n        line-height: 21px; }\n        header .logo-wrapper .ml-3 {\n          margin-inline-start: 0px !important; } }\n  header .nav-item .btn {\n    font-size: 16px;\n    line-height: 24px; }\n    header .nav-item .btn.btn-primary {\n      background-color: transparent;\n      border-color: white; }\n      header .nav-item .btn.btn-primary:hover {\n        opacity: 0.8; }\n  header.navbar .navbar-toggler {\n    color: white; }\n  header .mobile-menu {\n    position: absolute;\n    top: 73px;\n    background: #2e6dde;\n    z-index: 10;\n    padding-bottom: 30px;\n    border-bottom: 2px solid white;\n    left: 0;\n    right: 0; }\n\n.page .loading {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  background: rgba(0, 0, 0, 0.2); }\n\n/*# sourceMappingURL=/resources/css/02a64a5f7.css.map */")
},

// src/pages/SharePage/SharePage.tsx @6
6: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(4);
var react_1d = __fuse.dt(react_1);
var SiteWrapper_1 = __fusereq(13);
var SiteWrapper_1d = __fuse.dt(SiteWrapper_1);
var react_bootstrap_1 = __fusereq(14);
__fusereq(15);
var config_1 = __fusereq(16);
var preview_1 = __fusereq(17);
const shareImg = __fusereq(12);
const SharePage = ({history}) => {
  const file = react_1.useMemo(() => window.OpacityFile, [window.OpacityFile]);
  console.log(file.data, '-----');
  return react_1d.default.createElement(react_1d.default.Fragment, null, react_1d.default.createElement(SiteWrapper_1d.default, {
    history: history
  }, react_1d.default.createElement(react_bootstrap_1.Container, {
    fluid: 'xl share'
  }, react_1d.default.createElement(react_bootstrap_1.Row, null, react_1d.default.createElement(react_bootstrap_1.Col, {
    md: 6,
    className: 'center'
  }, react_1d.default.createElement(react_bootstrap_1.Row, {
    style: {
      padding: '20px'
    }
  }, react_1d.default.createElement("div", {
    className: 'preview-area center'
  }, react_1d.default.createElement(preview_1.Preview, {
    url: file.thumbnail,
    ext: file.fileExtension,
    type: file.mimeType,
    className: 'preview-content'
  })))), react_1d.default.createElement(react_bootstrap_1.Col, {
    md: 6,
    className: "control-area"
  }, react_1d.default.createElement(react_bootstrap_1.Row, {
    className: 'align-items-center'
  }, react_1d.default.createElement(react_bootstrap_1.Col, {
    className: 'text-center'
  }, react_1d.default.createElement("img", {
    width: '88',
    src: shareImg
  }), react_1d.default.createElement("h2", null, "You have been invited to view a Public File!"), react_1d.default.createElement("div", {
    className: 'text-filename'
  }, file && file.title), react_1d.default.createElement("div", {
    className: 'text-filesize'
  }), react_1d.default.createElement("div", {
    className: 'row mb-3',
    style: {
      justifyContent: 'center'
    }
  }, react_1d.default.createElement("div", {
    className: 'col-md-12'
  }, react_1d.default.createElement("a", {
    href: file.url,
    className: 'btn btn-pill btn-download'
  }, react_1d.default.createElement("span", null), "\n                        Download File\n                    "))), react_1d.default.createElement("div", null, react_1d.default.createElement("div", null, react_1d.default.createElement("a", {
    href: config_1.HOME_URL + "/sign-up"
  }, "Get 10GB file storage and file sharing for free")), "\n                    Free to share ideas. Free to be protected. Free to be you.\n                  "), react_1d.default.createElement("a", {
    className: 'learn-more',
    href: config_1.HOME_URL + "/platform",
    target: "_blank"
  }, "\n                    Learn More\n                  "))))))));
};
exports.default = SharePage;

},

// src/index.tsx @1
1: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(4);
var react_dom_1 = __fusereq(5);
var SharePage_1 = __fusereq(6);
var SharePage_1d = __fuse.dt(SharePage_1);
__fusereq(7);
function App() {
  return react_1.createElement(SharePage_1d.default, null);
}
react_dom_1.render(react_1.createElement(App, null), document.getElementById("root"));

},

// src/assets/share-download.svg @12
12: function(__fusereq, exports, module){
module.exports = "/resources/1a6475db.svg";
},

// src/config.ts @16
16: function(__fusereq, exports, module){
exports.__esModule = true;
exports.HOME_URL = "https://dev2.opacity.io";

},

// src/assets/logo.svg @20
20: function(__fusereq, exports, module){
module.exports = "/resources/06dfaeef0.svg";
},

// src/SiteWrapper.tsx @13
13: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(4);
var tabler_react_1 = __fusereq(21);
var aos_1 = __fusereq(22);
var aos_1d = __fuse.dt(aos_1);
var footer_1 = __fusereq(23);
var footer_1d = __fuse.dt(footer_1);
__fusereq(24);
var config_1 = __fusereq(16);
aos_1d.default.init({
  once: true,
  anchorPlacement: "center-bottom",
  offset: 200,
  delay: 50,
  duration: 700
});
const logo = __fusereq(20);
class SiteWrapper extends react_1.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false,
      showLoginModal: false,
      showSignUpModal: false
    };
  }
  SetMobileMenu() {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
  }
  render() {
    const loggedIn = localStorage.getItem('key') ? true : false;
    return react_1.createElement("div", {
      className: 'page'
    }, react_1.createElement("header", {
      className: this.props.isHome ? "navbar navbar-expand-md navbar-light d-print-none " : "navbar navbar-expand-md navbar-light d-print-none border-bottom"
    }, react_1.createElement("div", {
      className: 'container-xl'
    }, react_1.createElement("h1", {
      className: 'navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3 mb-0'
    }, react_1.createElement("a", {
      href: config_1.HOME_URL + '/',
      className: 'logo-wrapper'
    }, react_1.createElement("img", {
      src: logo,
      width: '60',
      height: '60',
      alt: 'Opacity',
      className: 'navbar-brand-image'
    }), react_1.createElement("span", {
      className: 'ml-3'
    }, "OPACITY"))), react_1.createElement("button", {
      className: 'navbar-toggler',
      type: 'button',
      "data-bs-toggle": 'collapse',
      "data-bs-target": '#navbar-menu',
      "aria-expanded": this.state.showMobileMenu,
      onClick: this.SetMobileMenu.bind(this)
    }, react_1.createElement("span", {
      className: 'navbar-toggler-icon'
    })), react_1.createElement("div", {
      className: 'collapse navbar-collapse',
      id: 'navbar-menu'
    }, react_1.createElement("div", {
      className: 'd-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center justify-content-end'
    }, react_1.createElement("ul", {
      className: 'navbar-nav'
    }, react_1.createElement("li", {
      className: 'nav-item'
    }, react_1.createElement("a", {
      href: config_1.HOME_URL + '/platform',
      className: 'nav-link'
    }, "\n                      Why Opacity?\n                    ")), react_1.createElement("li", {
      className: 'nav-item'
    }, react_1.createElement("a", {
      href: config_1.HOME_URL + '/community',
      className: 'nav-link'
    }, "\n                      App Gallery\n                    ")), react_1.createElement("li", {
      className: 'nav-item'
    }, react_1.createElement(tabler_react_1.Nav.Link, {
      href: '/blog'
    }, "Learn")), react_1.createElement("li", {
      className: 'nav-item'
    }, loggedIn ? react_1.createElement("div", {
      className: 'nav-link'
    }, react_1.createElement(tabler_react_1.Button, {
      className: 'btn btn-primary',
      onClick: () => {
        window.open(`${config_1.HOME_URL}/file-manager`, '_blank');
      }
    }, "\n                            Dashboard\n                        ")) : react_1.createElement("div", {
      className: 'nav-link'
    }, react_1.createElement(tabler_react_1.Button, {
      className: 'btn btn-white btn-pill',
      onClick: () => {
        window.open(`${config_1.HOME_URL}/plans`, '_blank');
      }
    }, "\n                            Explore Plans\n                      "))), react_1.createElement("li", {
      className: 'nav-item'
    }, loggedIn ? react_1.createElement("div", {
      className: ''
    }, react_1.createElement(tabler_react_1.Button, {
      className: 'btn btn-primary',
      onClick: () => {
        window.open(`${config_1.HOME_URL}/`, '_blank');
      }
    }, "\n                          Logout\n                        ")) : react_1.createElement("div", {
      className: ''
    }, react_1.createElement(tabler_react_1.Button, {
      className: 'btn btn-primary btn-pill',
      onClick: () => {
        this.setState({
          showLoginModal: true
        });
      }
    }, "\n                          Log in\n                      ")))))), this.state.showMobileMenu && react_1.createElement("div", {
      className: 'mobile-menu'
    }, react_1.createElement("div", {
      className: 'd-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center justify-content-center'
    }, react_1.createElement("ul", {
      className: 'navbar-nav'
    }, react_1.createElement("li", {
      className: 'nav-item'
    }, react_1.createElement("a", {
      href: config_1.HOME_URL + '/platform',
      className: 'nav-link'
    }, "\n                        Why Opacity?\n                    ")), react_1.createElement("li", {
      className: 'nav-item'
    }, react_1.createElement("a", {
      href: config_1.HOME_URL + '/community',
      className: 'nav-link'
    }, "\n                        App Gallery\n                    ")), react_1.createElement("li", {
      className: 'nav-item'
    }, react_1.createElement(tabler_react_1.Nav.Link, {
      href: '/blog'
    }, "Learn")), loggedIn ? react_1.createElement(react_1.Fragment, null, react_1.createElement("li", {
      className: 'nav-item'
    }, react_1.createElement("a", {
      href: config_1.HOME_URL + '/file-manager',
      className: 'nav-link'
    }, "\n                              Dashboard \n                            ")), react_1.createElement("li", {
      className: 'nav-item',
      onClick: () => {
        window.open(`${config_1.HOME_URL}/`, ' _blank');
      }
    }, react_1.createElement(tabler_react_1.Nav.Link, null, "Logout"))) : react_1.createElement(react_1.Fragment, null, react_1.createElement("li", {
      className: 'nav-item'
    }, react_1.createElement(tabler_react_1.Nav.Link, {
      href: '/plans'
    }, "Explore Plans")), react_1.createElement("li", {
      className: 'nav-item',
      onClick: () => {
        this.setState({
          showLoginModal: true
        });
      }
    }, react_1.createElement(tabler_react_1.Nav.Link, null, "Log in")))))))), this.props.children, react_1.createElement(footer_1d.default, null));
  }
}
exports.default = SiteWrapper;

},

// src/pages/SharePage/SharePage.scss @15
15: function(__fusereq, exports, module){
__fusereq(8)("src/pages/SharePage/SharePage.scss",".share {\n  margin-top: 100px;\n  margin-bottom: 100px; }\n  .share .preview-area {\n    background: #FFFFFF;\n    box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.17);\n    border-radius: 5px;\n    min-width: 300px;\n    padding: 10px;\n    margin-bottom: 30px; }\n    @media (max-width: 767.9px) {\n      .share .preview-area {\n        padding: 10px; } }\n  .share .preview-content {\n    width: 500px;\n    min-height: 200px; }\n    @media (max-width: 767.9px) {\n      .share .preview-content {\n        width: 300px;\n        min-height: 200px; } }\n    .share .preview-content pre {\n      text-align: left; }\n  .share .center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center; }\n  .share .control-area h2 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 30px;\n    color: #2e6dde;\n    margin-bottom: 35px;\n    position: relative;\n    margin-top: 30px; }\n    .share .control-area h2::after {\n      content: \"\";\n      width: 184px;\n      height: 3px;\n      background-color: #2e6dde;\n      position: absolute;\n      bottom: -10px;\n      margin-left: auto;\n      margin-right: auto;\n      left: 0;\n      right: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n    @media (max-width: 767.9px) {\n      .share .control-area h2 {\n        font-size: 20px;\n        line-height: 30px;\n        margin-top: 20px;\n        margin-bottom: 40px; } }\n  .share .control-area .btn-download {\n    font-weight: 600;\n    font-size: 15px;\n    line-height: 26px;\n    color: #084bc3;\n    border: 2px solid #4680E8;\n    padding-left: 0.5rem; }\n    .share .control-area .btn-download:hover {\n      opacity: 0.8; }\n    .share .control-area .btn-download span {\n      width: 40px;\n      height: 40px;\n      border: 2px solid #4680E8;\n      background-color: #fff;\n      border-radius: 50%;\n      margin-right: 15px;\n      background-image: url(\"/resources/images/06b798870.svg\");\n      background-repeat: no-repeat;\n      background-size: 18px;\n      background-position: center; }\n  .share .control-area .btn-preview {\n    font-weight: 600;\n    font-size: 15px;\n    line-height: 26px;\n    color: white;\n    padding-left: 0.5rem;\n    background-color: #084bc4; }\n    .share .control-area .btn-preview:hover {\n      opacity: 0.8;\n      border-color: #084bc4 !important; }\n    .share .control-area .btn-preview span {\n      width: 40px;\n      height: 40px;\n      background-color: #fff;\n      border-radius: 50%;\n      margin-right: 15px;\n      background-image: url(\"/resources/images/7536b0ea.svg\");\n      background-repeat: no-repeat;\n      background-size: 18px;\n      background-position: center; }\n  @media (max-width: 767.9px) {\n    .share .control-area .btn {\n      width: 245px;\n      height: 51px;\n      margin: 10px 0;\n      position: relative;\n      padding-left: 60px; }\n      .share .control-area .btn span {\n        position: absolute;\n        left: 6px; } }\n  .share .control-area .text-filename {\n    word-wrap: break-word !important;\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 27px;\n    color: #000000; }\n  .share .control-area .text-filesize {\n    font-style: normal;\n    font-weight: normal;\n    font-size: 15px;\n    line-height: 22px;\n    color: #484848;\n    margin-top: 10px;\n    margin-bottom: 35px; }\n  .share .control-area .text-commment {\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 26px;\n    text-align: center;\n    color: #000000;\n    padding: 20px; }\n  .share .control-area .free-signup-text {\n    margin-top: 50px;\n    cursor: pointer; }\n    .share .control-area .free-signup-text:hover {\n      text-decoration-line: underline; }\n  .share .control-area .learn-more {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 26px;\n    float: right;\n    text-decoration-line: underline;\n    color: #000000; }\n\n.loading {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 15px; }\n\n/*# sourceMappingURL=/resources/css/53ddf619.css.map */")
},

// src/pages/SharePage/preview-renderer.tsx @101
101: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(4);
var react_1d = __fuse.dt(react_1);
const PreviewRenderer = ({url, render = text => react_1d.default.createElement("div", {
  onClick: e => {
    const selection = getSelection();
    if (selection && selection.isCollapsed) {
      const range = document.createRange();
      range.selectNode(e.currentTarget);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  },
  style: {
    textAlign: 'left'
  }
}, text.split(/\n+/).map((paragraph, i) => react_1d.default.createElement("p", {
  key: i
}, paragraph)))}) => {
  const [text, setText] = react_1.useState();
  react_1.useEffect(() => {
    fetch(url).then(res => res.text()).then(text => setText(text)).catch(err => console.warn(err));
  }, [url]);
  return react_1d.default.createElement(react_1d.default.Fragment, null, text && render(text));
};
exports.PreviewRenderer = PreviewRenderer;

},

// src/pages/SharePage/preview.tsx @17
17: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(4);
var react_1d = __fuse.dt(react_1);
var preview_renderer_1 = __fusereq(101);
var react_markdown_1 = __fusereq(102);
var react_markdown_1d = __fuse.dt(react_markdown_1);
var react_file_icon_1 = __fusereq(103);
const getTypeFromExt = ext => {
  ext = ("" + ext).replace(/^\./, "");
  if (["png", "apng", "svg", "gif", "bmp", "ico", "cur", "jpg", "jpeg", "jfif", "pjpeg", "pjp", "webp"].includes(ext)) {
    return "image";
  }
  if (["mp4", "ogg", "webm"].includes(ext)) {
    return "video";
  }
  if (["mp3", "flac"].includes(ext)) {
    return "audio";
  }
  if (["txt", "md"].includes(ext)) {
    return "text";
  }
  return undefined;
};
const Preview = ({ext, type, url, className, onLoad, onUnload}) => {
  react_1.useEffect(() => {
    onLoad && onLoad();
    return () => {
      onUnload && onUnload();
    };
  });
  const newType = "" + (type || getTypeFromExt(ext));
  switch (newType.split("/")[0]) {
    case "image":
      return react_1d.default.createElement("img", {
        className: className,
        src: url
      });
    case "video":
      return react_1d.default.createElement("video", {
        className: className,
        controls: true
      }, react_1d.default.createElement("source", {
        src: url,
        type: type
      }), "\n          Your browser doesn't support this video type.\n        ");
    case "audio":
      return react_1d.default.createElement("audio", {
        className: className,
        controls: true
      }, react_1d.default.createElement("source", {
        src: url,
        type: type
      }), "\n          Your browser doesn't support this audio type.\n        ");
    case "text":
      switch (newType.split("/")[1]) {
        case "markdown":
          return react_1d.default.createElement("div", {
            className: className
          }, react_1d.default.createElement(preview_renderer_1.PreviewRenderer, {
            url: url,
            render: text => react_1d.default.createElement(react_markdown_1d.default, {
              source: text
            })
          }));
        default:
          return react_1d.default.createElement("div", {
            className: className
          }, react_1d.default.createElement(preview_renderer_1.PreviewRenderer, {
            url: url
          }));
      }
    default:
      return react_1d.default.createElement("div", {
        style: {
          width: '300px'
        }
      }, react_1d.default.createElement(react_file_icon_1.FileIcon, Object.assign({
        color: "#A8A8A8",
        glyphColor: "#ffffff"
      }, react_file_icon_1.defaultStyles[type], {
        extension: type
      })));
  }
};
exports.getTypeFromExt = getTypeFromExt;
exports.Preview = Preview;

}
})
//# sourceMappingURL=app.js.map