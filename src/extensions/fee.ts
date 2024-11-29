import { createProtobufRpcClient, ProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

export interface FeeExtension {
  readonly fee: {};
}

export function setupFeeExtension(base: QueryClient): FeeExtension {
  const rpc = createProtobufRpcClient(base);
  return {
    fee: {},
  };
}

function request(rpc: ProtobufRpcClient, method: string, data: Uint8Array): Promise<Uint8Array> {
  return rpc.request("sunrise.fee.Query", method, data);
}
