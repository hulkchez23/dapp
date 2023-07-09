"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(998);
/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(697);
/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(225);
/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(226);
/* harmony import */ var wagmi_connectors_ledger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(511);
/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(350);
/* harmony import */ var wagmi_connectors_safe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98);
/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(601);
/* harmony import */ var wagmi_connectors_walletConnectLegacy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(367);
/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(502);
/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(737);
/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(577);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_3__, wagmi_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__, wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_6__, wagmi_connectors_ledger__WEBPACK_IMPORTED_MODULE_7__, wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_8__, wagmi_connectors_safe__WEBPACK_IMPORTED_MODULE_9__, wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_10__, wagmi_connectors_walletConnectLegacy__WEBPACK_IMPORTED_MODULE_11__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_12__, wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_13__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_14__]);
([wagmi__WEBPACK_IMPORTED_MODULE_3__, wagmi_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__, wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_6__, wagmi_connectors_ledger__WEBPACK_IMPORTED_MODULE_7__, wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_8__, wagmi_connectors_safe__WEBPACK_IMPORTED_MODULE_9__, wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_10__, wagmi_connectors_walletConnectLegacy__WEBPACK_IMPORTED_MODULE_11__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_12__, wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_13__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const { chains , publicClient , webSocketPublicClient  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([
    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.mainnet,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.goerli,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.optimism,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.avalanche
], [
    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_12__.alchemyProvider)({
        apiKey: "mC68CNYcO0gODSN6xyK6ZZb9iac13idJ"
    }),
    (0,wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_13__.infuraProvider)({
        apiKey: "25626681e0954bac947ba3693b68e919"
    }),
    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_14__.publicProvider)(), 
]);
const config = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createConfig)({
    autoConnect: true,
    connectors: [
        new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_8__.MetaMaskConnector({
            chains,
            options: {
                UNSTABLE_shimOnConnectSelectAccount: true
            }
        }),
        new wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__.CoinbaseWalletConnector({
            chains,
            options: {
                appName: "wagmi"
            }
        }),
        new wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_10__.WalletConnectConnector({
            chains,
            options: {
                projectId: "4fa8988b6cddddf700f46b2d958db085" ?? 0
            }
        }),
        new wagmi_connectors_walletConnectLegacy__WEBPACK_IMPORTED_MODULE_11__.WalletConnectLegacyConnector({
            chains,
            options: {
                qrcode: true
            }
        }),
        new wagmi_connectors_ledger__WEBPACK_IMPORTED_MODULE_7__.LedgerConnector({
            chains,
            options: {
                projectId: "4fa8988b6cddddf700f46b2d958db085" ?? 0
            }
        }),
        new wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_6__.InjectedConnector({
            chains,
            options: {
                name: (detectedName)=>`Injected (${typeof detectedName === "string" ? detectedName : detectedName.join(", ")})`,
                shimDisconnect: true
            }
        }),
        new wagmi_connectors_safe__WEBPACK_IMPORTED_MODULE_9__.SafeConnector({
            chains,
            options: {
                allowedDomains: [
                    /https:\/\/app.safe.global$/
                ],
                debug: false
            }
        }), 
    ],
    publicClient,
    webSocketPublicClient
});
const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    className: "jsx-e8fea637d776da78",
                    children: "Dapp"
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "e8fea637d776da78",
                children: "div{}#__next{}body{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:100vh}#sendTxn{padding:20px;background:#73e600;width:20vw;margin:0px auto;float:none;display:block;text-align:center;font-weight:bold;font-family:sans-serif;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;color:#000000b0;width:100vw;height:100vh;position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}#sendTxn button{padding:20px 40px;background:black;color:white;border:none;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font-size:18px;font-weight:bold}"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {
                config: config,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps,
                    id: "btns",
                    className: "jsx-e8fea637d776da78" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "../action.js",
                className: "jsx-e8fea637d776da78"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 998:
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ }),

/***/ 697:
/***/ ((module) => {

module.exports = import("wagmi/chains");;

/***/ }),

/***/ 225:
/***/ ((module) => {

module.exports = import("wagmi/connectors/coinbaseWallet");;

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = import("wagmi/connectors/injected");;

/***/ }),

/***/ 511:
/***/ ((module) => {

module.exports = import("wagmi/connectors/ledger");;

/***/ }),

/***/ 350:
/***/ ((module) => {

module.exports = import("wagmi/connectors/metaMask");;

/***/ }),

/***/ 98:
/***/ ((module) => {

module.exports = import("wagmi/connectors/safe");;

/***/ }),

/***/ 601:
/***/ ((module) => {

module.exports = import("wagmi/connectors/walletConnect");;

/***/ }),

/***/ 367:
/***/ ((module) => {

module.exports = import("wagmi/connectors/walletConnectLegacy");;

/***/ }),

/***/ 502:
/***/ ((module) => {

module.exports = import("wagmi/providers/alchemy");;

/***/ }),

/***/ 737:
/***/ ((module) => {

module.exports = import("wagmi/providers/infura");;

/***/ }),

/***/ 577:
/***/ ((module) => {

module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(505));
module.exports = __webpack_exports__;

})();