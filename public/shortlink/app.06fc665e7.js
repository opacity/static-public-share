(function() {
  var f = window.__fuse = window.__fuse || {};
  var modules = f.modules = f.modules || {}; f.dt = function (x) { return x && x.__esModule ? x : { "default": x }; };

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
1: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(2);
var react_dom_1 = __fusereq(3);
var SharePage_1 = __fusereq(4);
var SharePage_1d = __fuse.dt(SharePage_1);
function App() {
  return react_1.createElement(SharePage_1d.default, null);
}
react_dom_1.render(react_1.createElement(App, null), document.getElementById("root"));

},
4: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(2);
var react_1d = __fuse.dt(react_1);
var SiteWrapper_1 = __fusereq(8);
var SiteWrapper_1d = __fuse.dt(SiteWrapper_1);
var react_bootstrap_1 = __fusereq(9);
var config_1 = __fusereq(11);
var preview_1 = __fusereq(12);
var file_saver_1 = __fusereq(13);
var react_loading_1 = __fusereq(14);
var react_loading_1d = __fuse.dt(react_loading_1);
const SharePage = ({history}) => {
  const file = react_1.useMemo(() => window.OpacityFile, [window.OpacityFile]);
  const [pageLoading, setPageLoading] = react_1.useState(false);
  const downloadFile = async () => {
    setPageLoading(true);
    await fetch(`${file.url}`).then(res => res.blob()).then(res => {
      const blob = new Blob([res]);
      file_saver_1.saveAs(blob, file.title);
      setPageLoading(false);
    });
  };
  return react_1d.default.createElement(react_1d.default.Fragment, null, react_1d.default.createElement(SiteWrapper_1d.default, {
    history: history
  }, react_1d.default.createElement(react_bootstrap_1.Container, {
    fluid: 'xl share'
  }, react_1d.default.createElement(react_bootstrap_1.Row, null, react_1d.default.createElement(react_bootstrap_1.Col, {
    md: 6,
    xs: 12,
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
    type: 'image/png',
    className: 'preview-content'
  })))), react_1d.default.createElement(react_bootstrap_1.Col, {
    md: 6,
    xs: 12,
    className: "control-area"
  }, react_1d.default.createElement(react_bootstrap_1.Row, {
    className: 'align-items-center'
  }, react_1d.default.createElement(react_bootstrap_1.Col, {
    className: 'text-center'
  }, react_1d.default.createElement("div", {
    className: 'text-filename'
  }, file && file.title), react_1d.default.createElement("div", {
    className: "text-filesize"
  }, file && file.description), react_1d.default.createElement("div", {
    className: "row mb-3",
    style: {
      justifyContent: "center"
    }
  }, react_1d.default.createElement("div", {
    className: "col-md-5"
  }, react_1d.default.createElement("button", {
    className: "btn btn-pill btn-download",
    onClick: downloadFile
  }, react_1d.default.createElement("span", null), "\n                      Download File\n                    "))), react_1d.default.createElement("h2", null, "Easily share your files with Opacity"), react_1d.default.createElement("div", {
    className: "free-signup-text"
  }, react_1d.default.createElement("a", {
    href: config_1.HOME_URL + "/plans",
    target: '_blank'
  }, "Get 10GB file storage and file sharing for free")), react_1d.default.createElement("div", {
    style: {
      fontSize: "1.1rem"
    }
  }, "\n                    Free to share ideas. Free to be protected. Free to be you.\n                ")))))), pageLoading && react_1d.default.createElement("div", {
    className: 'loading'
  }, react_1d.default.createElement(react_loading_1d.default, {
    type: "spinningBubbles",
    color: "#2e6dde"
  }))));
};
exports.default = SharePage;

},
8: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(2);
var tabler_react_1 = __fusereq(94);
var aos_1 = __fusereq(95);
var aos_1d = __fuse.dt(aos_1);
var footer_1 = __fusereq(96);
var footer_1d = __fuse.dt(footer_1);
var config_1 = __fusereq(11);
aos_1d.default.init({
  once: true,
  anchorPlacement: "center-bottom",
  offset: 200,
  delay: 50,
  duration: 700
});
const logo = __fusereq(93);
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
        window.open(`${config_1.HOME_URL}/`, '_blank');
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
    }, "\n                              Dashboard\n                            ")), react_1.createElement("li", {
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
11: function(__fusereq, exports, module){
exports.__esModule = true;
exports.HOME_URL = "https://dev2.opacity.io";

},
12: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(2);
var react_1d = __fuse.dt(react_1);
var preview_renderer_1 = __fusereq(98);
var react_markdown_1 = __fusereq(99);
var react_markdown_1d = __fuse.dt(react_markdown_1);
var react_file_icon_1 = __fusereq(100);
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
      }, react_file_icon_1.defaultStyles[ext], {
        extension: ext
      })));
  }
};
exports.getTypeFromExt = getTypeFromExt;
exports.Preview = Preview;

},
93: function(__fusereq, exports, module){
module.exports = "/resources/06dfaeef0.svg";
},
98: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(2);
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

}
})
//# sourceMappingURL=app.06fc665e7.js.map