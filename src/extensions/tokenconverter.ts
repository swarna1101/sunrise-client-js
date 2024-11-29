import { createProtobufRpcClient, ProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

export interface TokenConverterExtension {
  readonly tokenconverter: {};
}

export function setupTokenConverterExtension(base: QueryClient): TokenConverterExtension {
  const rpc = createProtobufRpcClient(base);
  return {
    tokenconverter: {},
  };
}

function request(rpc: ProtobufRpcClient, method: string, data: Uint8Array): Promise<Uint8Array> {
  return rpc.request("sunrise.tokenconverter.Query", method, data);
}
