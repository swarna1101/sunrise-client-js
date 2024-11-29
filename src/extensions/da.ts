import { createProtobufRpcClient, ProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

export interface DaExtension {
  readonly da: {};
}

export function setupDaExtension(base: QueryClient): DaExtension {
  const rpc = createProtobufRpcClient(base);
  return {
    da: {},
  };
}

function request(rpc: ProtobufRpcClient, method: string, data: Uint8Array): Promise<Uint8Array> {
  return rpc.request("sunrise.da.Query", method, data);
}
