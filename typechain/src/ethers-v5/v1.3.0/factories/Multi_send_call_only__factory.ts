/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Multi_send_call_only,
  Multi_send_call_onlyInterface,
} from "../Multi_send_call_only";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "transactions",
        type: "bytes",
      },
    ],
    name: "multiSend",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class Multi_send_call_only__factory {
  static readonly abi = _abi;
  static createInterface(): Multi_send_call_onlyInterface {
    return new utils.Interface(_abi) as Multi_send_call_onlyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multi_send_call_only {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Multi_send_call_only;
  }
}
