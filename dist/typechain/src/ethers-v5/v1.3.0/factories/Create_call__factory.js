"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create_call__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newContract",
                type: "address",
            },
        ],
        name: "ContractCreation",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "deploymentData",
                type: "bytes",
            },
        ],
        name: "performCreate",
        outputs: [
            {
                internalType: "address",
                name: "newContract",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "deploymentData",
                type: "bytes",
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32",
            },
        ],
        name: "performCreate2",
        outputs: [
            {
                internalType: "address",
                name: "newContract",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class Create_call__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Create_call__factory = Create_call__factory;
Create_call__factory.abi = _abi;
//# sourceMappingURL=Create_call__factory.js.map