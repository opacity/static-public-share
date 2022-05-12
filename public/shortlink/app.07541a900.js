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
var SiteWrapper_1 = __fusereq(7);
var SiteWrapper_1d = __fuse.dt(SiteWrapper_1);
var react_bootstrap_1 = __fusereq(8);
var preview_1 = __fusereq(10);
var file_saver_1 = __fusereq(11);
var react_loading_1 = __fusereq(12);
var react_loading_1d = __fuse.dt(react_loading_1);
var a404Page_1 = __fusereq(13);
var a404Page_1d = __fuse.dt(a404Page_1);
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
  if (Number(file.fileSizeBytes) === 0) {
    return react_1d.default.createElement(a404Page_1d.default, {
      history: history
    });
  }
  return react_1d.default.createElement(SiteWrapper_1d.default, {
    history: history
  }, react_1d.default.createElement(react_bootstrap_1.Container, {
    fluid: "xl",
    className: "share"
  }, react_1d.default.createElement(react_bootstrap_1.Row, null, react_1d.default.createElement(react_bootstrap_1.Col, {
    md: 6,
    xs: 12,
    className: "center"
  }, react_1d.default.createElement(react_bootstrap_1.Row, {
    style: {
      padding: "20px"
    }
  }, react_1d.default.createElement("div", {
    className: "preview-area center"
  }, react_1d.default.createElement(preview_1.Preview, {
    url: file.url,
    ext: file.fileExtension,
    type: file.mimeType,
    defaultThumbnail: file.defaultThumbnail,
    className: "preview-content"
  })))), react_1d.default.createElement(react_bootstrap_1.Col, {
    md: 6,
    xs: 12,
    className: "control-area"
  }, react_1d.default.createElement(react_bootstrap_1.Row, {
    className: "align-items-center"
  }, react_1d.default.createElement(react_bootstrap_1.Col, {
    className: "text-center"
  }, react_1d.default.createElement("div", {
    className: "text-filename"
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
    href: window.OpacityConfig.opacityUrl + "plans",
    target: "_blank"
  }, "\n                    Get 10GB file storage and file sharing for free\n                  ")), react_1d.default.createElement("div", {
    style: {
      fontSize: "1.1rem"
    }
  }, "\n                  Free to share ideas. Free to be protected. Free to be you.\n                ")))))), pageLoading && react_1d.default.createElement("div", {
    className: "loading"
  }, react_1d.default.createElement(react_loading_1d.default, {
    type: "spinningBubbles",
    color: "#2e6dde"
  })));
};
exports.default = SharePage;

},
7: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(2);
var tabler_react_1 = __fusereq(16);
var aos_1 = __fusereq(17);
var aos_1d = __fuse.dt(aos_1);
var Footer_1 = __fusereq(19);
var Footer_1d = __fuse.dt(Footer_1);
aos_1d.default.init({
  once: true,
  anchorPlacement: "center-bottom",
  offset: 200,
  delay: 50,
  duration: 700
});
const logo = __fusereq(15);
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
    return react_1.createElement("div", {
      className: "page"
    }, react_1.createElement("header", {
      className: this.props.isHome ? "navbar navbar-expand-md navbar-light d-print-none " : "navbar navbar-expand-md navbar-light d-print-none border-bottom"
    }, react_1.createElement("div", {
      className: "container-xl"
    }, react_1.createElement("h1", {
      className: "navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3 mb-0"
    }, react_1.createElement("a", {
      href: window.OpacityConfig.opacityUrl,
      className: "logo-wrapper",
      target: "_blank",
      rel: "noopener noreferrer"
    }, react_1.createElement("img", {
      src: logo,
      width: "60",
      height: "60",
      alt: "Opacity",
      className: "navbar-brand-image"
    }), react_1.createElement("span", {
      className: "ml-3"
    }, "OPACITY"))), react_1.createElement("button", {
      className: "navbar-toggler",
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#navbar-menu",
      "aria-expanded": this.state.showMobileMenu,
      onClick: this.SetMobileMenu.bind(this)
    }, react_1.createElement("span", {
      className: "navbar-toggler-icon"
    })), react_1.createElement("div", {
      className: "collapse navbar-collapse",
      id: "navbar-menu"
    }, react_1.createElement("div", {
      className: "d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center justify-content-end"
    }, react_1.createElement("ul", {
      className: "navbar-nav"
    }, react_1.createElement("li", {
      className: "nav-item"
    }, react_1.createElement("a", {
      href: window.OpacityConfig.opacityUrl + "platform",
      className: "nav-link",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "\n                      Why Opacity?\n                    ")), react_1.createElement("li", {
      className: "nav-item"
    }, react_1.createElement("a", {
      href: window.OpacityConfig.opacityUrl + "downloads",
      className: "nav-link",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "\n                      Downloads\n                    ")), react_1.createElement("li", {
      className: "nav-item"
    }, react_1.createElement("a", {
      className: "nav-link",
      href: "https://medium.com/opacity-storage",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "\n                      Learn\n                    ")), react_1.createElement("li", {
      className: "nav-item"
    }, react_1.createElement("a", {
      className: "nav-link",
      href: "https://help.opacity.io",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "\n                      Help Center\n                    ")), react_1.createElement("li", {
      className: "nav-item"
    }, react_1.createElement("div", {
      className: "nav-link"
    }, react_1.createElement(tabler_react_1.Button, {
      className: "btn btn-white btn-pill",
      onClick: () => {
        window.open(`${window.OpacityConfig.opacityUrl}plans`, "_blank");
      }
    }, "\n                        Explore Plans\n                      "))), react_1.createElement("li", {
      className: "nav-item"
    }, react_1.createElement("div", {
      className: ""
    }, react_1.createElement(tabler_react_1.Button, {
      className: "btn btn-primary btn-pill",
      onClick: () => {
        window.open(window.OpacityConfig.opacityUrl, "_blank");
      }
    }, "\n                        Log in\n                      ")))))), this.state.showMobileMenu && react_1.createElement("div", {
      className: "mobile-menu"
    }, react_1.createElement("div", {
      className: "d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center justify-content-center"
    }, react_1.createElement("ul", {
      className: "navbar-nav"
    }, react_1.createElement("li", {
      className: "nav-item"
    }, react_1.createElement(tabler_react_1.NavLink, {
      to: window.OpacityConfig.opacityUrl + "platform",
      className: "nav-link"
    }, "\n                        Why Opacity?\n                      ")), react_1.createElement("li", {
      className: "nav-item"
    }, react_1.createElement(tabler_react_1.NavLink, {
      to: window.OpacityConfig.opacityUrl + "downloads",
      className: "nav-link"
    }, "\n                        Downloads\n                      ")), react_1.createElement("li", {
      className: "nav-item"
    }, react_1.createElement(tabler_react_1.NavLink, {
      to: window.OpacityConfig.opacityUrl + "about",
      className: "nav-link"
    }, "\n                        About\n                      ")), react_1.createElement("li", {
      className: "nav-item"
    }, react_1.createElement(tabler_react_1.Nav.Link, {
      href: "https://blog.opacity.io",
      target: "_blank"
    }, "\n                        Blog\n                      ")), react_1.createElement("li", {
      className: "nav-item"
    }, react_1.createElement(tabler_react_1.Nav.Link, {
      href: "https://help.opacity.io",
      target: "_blank"
    }, "\n                        Help Center\n                      ")), react_1.createElement(react_1.Fragment, null, react_1.createElement("li", {
      className: "nav-item"
    }, react_1.createElement(tabler_react_1.Nav.Link, {
      href: "/plans"
    }, "Explore Plans")), react_1.createElement("li", {
      className: "nav-item",
      onClick: () => {
        this.setState({
          showLoginModal: true
        });
      }
    }, react_1.createElement(tabler_react_1.Nav.Link, null, "Log in")))))))), this.props.children, react_1.createElement(Footer_1d.default, null));
  }
}
exports.default = SiteWrapper;

},
10: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(2);
var react_1d = __fuse.dt(react_1);
var preview_renderer_1 = __fusereq(24);
var react_markdown_1 = __fusereq(25);
var react_markdown_1d = __fuse.dt(react_markdown_1);
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
const Preview = ({ext, type, url, defaultThumbnail, className, onLoad, onUnload}) => {
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
      return react_1d.default.createElement("img", {
        className: className,
        src: defaultThumbnail
      });
  }
};
exports.getTypeFromExt = getTypeFromExt;
exports.Preview = Preview;

},
13: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(2);
var tabler_react_1 = __fusereq(16);
var SiteWrapper_1 = __fusereq(7);
var SiteWrapper_1d = __fuse.dt(SiteWrapper_1);
const logo = __fusereq(22);
const Page404 = ({history}) => {
  return react_1.createElement(SiteWrapper_1d.default, {
    history: history
  }, react_1.createElement("div", {
    className: "page404"
  }, react_1.createElement("div", {
    className: "content"
  }, react_1.createElement("div", {
    className: "title",
    title: "Error 404"
  }, react_1.createElement("svg", {
    className: "shape shape-rock-1",
    width: "71",
    height: "70",
    viewBox: "0 0 71 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react_1.createElement("path", {
    d: "M11.5 26L11.5 46.5L33.5001 57L49.3246 57.8977L62.5 44.0001L62 28.5001L51.2115 15.2668L41.5 16.5L26.5 9.50002L11.5 26Z",
    fill: "#4C4C4C"
  }), react_1.createElement("path", {
    d: "M20.5 24L22 41L36 52.5L49.3246 57.8977L62.5001 44L62 28.5L51.2115 15.2668L41.5 16.5L26.5 9.50001L20.5 24Z",
    fill: "#A4A4A5"
  })), react_1.createElement("svg", {
    className: "shape shape-four-1",
    width: "124",
    height: "142",
    viewBox: "0 0 124 142",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react_1.createElement("path", {
    d: "M89.0471 141.322L95.3623 117.754L111.01 121.947L118.827 92.7756L103.179 88.5828L123.574 12.4678L77.4023 0.0962432L7.25156 66.3991L0.315214 92.2859L61.9413 108.799L55.6261 132.367L89.0471 141.322ZM69.7576 79.6276L40.3935 71.7595L82.388 32.4904L69.7576 79.6276Z",
    fill: "url(#paint0_linear)"
  }), react_1.createElement("defs", null, react_1.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "67",
    y1: "57",
    x2: "101",
    y2: "168",
    gradientUnits: "userSpaceOnUse"
  }, react_1.createElement("stop", {
    "stop-color": "white"
  }), react_1.createElement("stop", {
    offset: "1",
    "stop-color": "white",
    "stop-opacity": "0"
  })))), react_1.createElement("svg", {
    className: "shape shape-zero",
    width: "104",
    height: "121",
    viewBox: "0 0 104 121",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react_1.createElement("path", {
    d: "M66.017 119.444C99.347 111.482 108 78.88 100.814 48.7976C93.6278 18.7151 71.2141 -6.28433 37.8841 1.67783C4.55407 9.63998 -4.14024 42.0707 3.04612 72.1532C10.2325 102.236 32.687 127.406 66.017 119.444ZM59.8106 93.4635C46.1368 96.7301 37.6049 85.2175 32.7867 65.0485C27.9686 44.8796 30.4166 30.9247 44.0905 27.6581C57.7643 24.3916 66.2554 35.7333 71.0735 55.9023C75.8916 76.0712 73.4845 90.197 59.8106 93.4635Z",
    fill: "url(#paint0_linear)"
  }), react_1.createElement("defs", null, react_1.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "80.0001",
    y1: "53",
    x2: "132",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, react_1.createElement("stop", {
    "stop-color": "white"
  }), react_1.createElement("stop", {
    offset: "1",
    "stop-color": "white",
    "stop-opacity": "0"
  })))), react_1.createElement("svg", {
    className: "shape shape-rock-2",
    width: "71",
    height: "72",
    viewBox: "0 0 71 72",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react_1.createElement("path", {
    d: "M23.6404 14.9808L4.68481 34.9094L25.8063 65.3995L43 65.2361L51.0289 46.1523C51.0289 46.1523 62.7982 46.1912 63.6985 47.2673C64.5988 48.3434 66.8592 29.8569 66.8592 29.8569L58.1282 8.55272L33.5203 9.83583L23.6404 14.9808Z",
    fill: "#4C4C4C"
  }), react_1.createElement("path", {
    d: "M58.1294 8.5519L33.5214 9.83501L23.6413 14.981L21.2386 17.5064L32.1271 23.5505L28.421 43.9649L36.9157 65.2942L43.0011 65.2353L51.0301 46.1515C51.0301 46.1515 62.7994 46.1904 63.6996 47.2665C64.5999 48.3426 66.8604 29.8561 66.8604 29.8561L58.1294 8.5519Z",
    fill: "#A4A4A5"
  })), react_1.createElement("svg", {
    className: "shape shape-four-2",
    width: "119",
    height: "139",
    viewBox: "0 0 119 139",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react_1.createElement("path", {
    d: "M103.82 135.525L101.989 110.776L118.42 109.56L116.154 78.9278L99.7221 80.1436L93.8083 0.215792L45.3242 3.80309L0.168954 90.977L2.18024 118.161L66.8934 113.372L68.7245 138.122L103.82 135.525ZM64.6269 82.7403L33.7918 85.0217L60.9646 33.2418L64.6269 82.7403Z",
    fill: "url(#paint0_linear)"
  }), react_1.createElement("defs", null, react_1.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "76.2591",
    y1: "77.0593",
    x2: "166.259",
    y2: "18.0593",
    gradientUnits: "userSpaceOnUse"
  }, react_1.createElement("stop", {
    "stop-color": "white"
  }), react_1.createElement("stop", {
    offset: "1",
    "stop-color": "white",
    "stop-opacity": "0"
  })))), react_1.createElement("svg", {
    className: "shape shape-rock-3",
    width: "31",
    height: "32",
    viewBox: "0 0 31 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react_1.createElement("path", {
    d: "M4.49999 5.5L6.49996 13.5L2.49997 22L11.5 29.5L23.5 28L28.5 14L21.385 4.42362L11.5 1.49999L4.49999 5.5Z",
    fill: "#4C4C4C"
  }), react_1.createElement("path", {
    d: "M4.49999 5.5L8.99998 7.5L14.5 15.5L14.5 24L23.5 28L28.5 14L21.385 4.42362L11.5 1.49999L4.49999 5.5Z",
    fill: "#A4A4A5"
  }))), react_1.createElement("div", {
    className: "description"
  }, react_1.createElement("h1", null, "Uh oh! You've reached a dead-end. "), react_1.createElement("h2", null, "\n              If you're looking for an image, it's probably been deleted or may\n              not have existed at all. If you are looking to share your images,\n              ", react_1.createElement("a", {
    href: "https://opacity.io"
  }, "visit our homepage"), "!\n            "), react_1.createElement(tabler_react_1.NavLink, {
    href: "https://opacity.io"
  }, react_1.createElement("div", {
    className: "d-flex justify-content-center w-100 mt-3"
  }, react_1.createElement("div", {
    className: "logo-wrapper"
  }, react_1.createElement("img", {
    src: logo,
    width: "60",
    height: "60",
    alt: "Opacity"
  }), react_1.createElement("span", {
    className: "ml-3"
  }, "OPACITY"))))))));
};
exports.default = Page404;

},
15: function(__fusereq, exports, module){
module.exports = "/resources/609cde56.svg";
},
19: function(__fusereq, exports, module){
exports.__esModule = true;
var Footer_1 = __fusereq(102);
var Footer_1d = __fuse.dt(Footer_1);
exports.default = Footer_1d.default;

},
22: function(__fusereq, exports, module){
module.exports = "/resources/04ce82873.png";
},
24: function(__fusereq, exports, module){
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

},
102: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(2);
const logo = __fusereq(15);
const github = __fusereq(175);
const reddit = __fusereq(176);
const telegram = __fusereq(177);
const twitter = __fusereq(178);
const youtube = __fusereq(179);
const Footer = () => {
  return react_1.createElement("footer", null, react_1.createElement("div", {
    className: "container-xl"
  }, react_1.createElement("div", {
    className: "row"
  }, react_1.createElement("div", {
    className: "col-md-6 footer-logo"
  }, react_1.createElement("a", {
    href: window.OpacityConfig.opacityUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "footer-logo"
  }, react_1.createElement("img", {
    width: 78,
    height: 78,
    src: logo
  }), react_1.createElement("span", {
    className: "ml-3"
  }, "OPACITY"))), react_1.createElement("div", {
    className: "col-md-6 footer-third"
  }, react_1.createElement("div", {
    className: "d-flex h-100 align-items-center",
    style: {
      justifyContent: "flex-end"
    }
  }, react_1.createElement("a", {
    href: "https://github.com/opacity",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "social-link"
  }, react_1.createElement("img", {
    width: 43,
    height: 43,
    src: github
  })), react_1.createElement("a", {
    href: "https://www.reddit.com/r/Opacity/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "social-link"
  }, react_1.createElement("img", {
    width: 43,
    height: 43,
    src: reddit
  })), react_1.createElement("a", {
    href: "https://telegram.me/opacitystorage",
    className: "social-link",
    rel: "noopener noreferrer",
    target: "_blank"
  }, react_1.createElement("img", {
    width: 43,
    height: 43,
    src: telegram
  })), react_1.createElement("a", {
    href: "https://twitter.com/Opacity_Storage",
    className: "social-link",
    rel: "noopener noreferrer",
    target: "_blank"
  }, react_1.createElement("img", {
    width: 43,
    height: 43,
    src: twitter
  })), react_1.createElement("a", {
    href: "https://www.youtube.com/opacitystorage",
    target: "_blank",
    rel: "noopener noreferrer"
  }, react_1.createElement("img", {
    width: 43,
    height: 43,
    src: youtube
  }))))), react_1.createElement("div", {
    className: "divider"
  }), react_1.createElement("div", {
    className: " footer-links"
  }, react_1.createElement("div", {
    className: "link-wrapper"
  }, react_1.createElement("span", {
    className: "title"
  }, " Company"), react_1.createElement("a", {
    href: "https://telegram.me/opacitystorage",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "nav-link"
  }, "\n              About Us\n            "), react_1.createElement("br", null), react_1.createElement("a", {
    href: "https://blog.opacity.io",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "nav-link"
  }, "\n              Blog\n            ")), react_1.createElement("div", {
    className: "link-wrapper"
  }, react_1.createElement("span", {
    className: "title"
  }, " Resources"), react_1.createElement("a", {
    href: `${window.OpacityConfig.opacityUrl}downloads`,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "nav-link"
  }, "\n              Downloads\n            "), react_1.createElement("br", null), react_1.createElement("a", {
    href: "https://opacitystora.ge/GalaxyWhitepaperV1",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "nav-link"
  }, "\n              Whitepaper\n            "), react_1.createElement("br", null), react_1.createElement("a", {
    href: "https://medium.com/opacity-storage",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "nav-link"
  }, "\n              Learn\n            "), react_1.createElement("br", null), react_1.createElement("a", {
    href: "https://api.opacity.io:3000/swagger/index.html",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "nav-link"
  }, "\n              API for Developers\n            ")), react_1.createElement("div", {
    className: "link-wrapper"
  }, react_1.createElement("span", {
    className: "title"
  }, " Help"), react_1.createElement("a", {
    href: "https://help.opacity.io",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "nav-link"
  }, "\n              Help Center\n            "), react_1.createElement("br", null), react_1.createElement("a", {
    href: "https://telegram.me/opacitystorage",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "nav-link"
  }, "\n              Telegram\n            "), react_1.createElement("br", null), react_1.createElement("a", {
    href: "http://discord.opacity.io/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "nav-link"
  }, "\n              Discord\n            ")), react_1.createElement("div", {
    className: "link-wrapper"
  }, react_1.createElement("span", {
    className: "title"
  }, " Legal"), react_1.createElement("a", {
    href: `${window.OpacityConfig.opacityUrl}terms-of-service`,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "nav-link"
  }, "\n              Terms of Service\n            "), react_1.createElement("br", null), react_1.createElement("a", {
    href: `${window.OpacityConfig.opacityUrl}privacy-policy`,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "nav-link"
  }, "\n              Privacy Policy\n            "), react_1.createElement("br", null), react_1.createElement("a", {
    href: `${window.OpacityConfig.opacityUrl}code-review-license`,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "nav-link"
  }, "\n              Code License\n            "))), react_1.createElement("div", {
    className: "divider"
  }), react_1.createElement("div", {
    className: "row"
  }, react_1.createElement("div", {
    className: "col-md-12 text-center copywrite"
  }, " ", "\n            © 2018-2021 Opacity Storage Inc. All rights reserved.\n          "))));
};
exports.default = Footer;

},
175: function(__fusereq, exports, module){
module.exports = "/resources/045ef80b2.svg";
},
176: function(__fusereq, exports, module){
module.exports = "/resources/07d019bb7.svg";
},
177: function(__fusereq, exports, module){
module.exports = "/resources/1fed042c.svg";
},
178: function(__fusereq, exports, module){
module.exports = "/resources/038ead66c.svg";
},
179: function(__fusereq, exports, module){
module.exports = "/resources/2f86d244.svg";
}
})
//# sourceMappingURL=app.07541a900.js.map