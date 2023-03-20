"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proxy_factory__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "_mastercopy",
                type: "address",
            },
            {
                name: "initializer",
                type: "bytes",
            },
            {
                name: "saltNonce",
                type: "uint256",
            },
        ],
        name: "createProxyWithNonce",
        outputs: [
            {
                name: "proxy",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "proxyCreationCode",
        outputs: [
            {
                name: "",
                type: "bytes",
            },
        ],
        payable: false,
        stateMutability: "pure",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "masterCopy",
                type: "address",
            },
            {
                name: "data",
                type: "bytes",
            },
        ],
        name: "createProxy",
        outputs: [
            {
                name: "proxy",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "proxyRuntimeCode",
        outputs: [
            {
                name: "",
                type: "bytes",
            },
        ],
        payable: false,
        stateMutability: "pure",
        type: "function",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "proxy",
                type: "address",
            },
        ],
        name: "ProxyCreation",
        type: "event",
    },
];
class Proxy_factory__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Proxy_factory__factory = Proxy_factory__factory;
Proxy_factory__factory.abi = _abi;
//# sourceMappingURL=Proxy_factory__factory.js.map