import { createProtobufRpcClient, ProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

export interface SwapExtension {
  readonly swap: {};
}

export function setupSwapExtension(base: QueryClient): SwapExtension {
  const rpc = createProtobufRpcClient(base);
  return {
    swap: {},
  };
}

function request(rpc: ProtobufRpcClient, method: string, data: Uint8Array): Promise<Uint8Array> {
  return rpc.request("sunrise.swap.Query", method, data);
}
