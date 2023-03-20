/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Create_call, Create_callInterface } from "../Create_call";

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
] as const;

export class Create_call__factory {
  static readonly abi = _abi;
  static createInterface(): Create_callInterface {
    return new utils.Interface(_abi) as Create_callInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Create_call {
    return new Contract(address, _abi, signerOrProvider) as Create_call;
  }
}
