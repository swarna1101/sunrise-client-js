import { createProtobufRpcClient, ProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

export interface LiquidityPoolExtension {
  readonly liquiditypool: {};
}

export function setupLiquidityPoolExtension(base: QueryClient): LiquidityPoolExtension {
  const rpc = createProtobufRpcClient(base);
  return {
    liquiditypool: {},
  };
}

function request(rpc: ProtobufRpcClient, method: string, data: Uint8Array): Promise<Uint8Array> {
  return rpc.request("sunrise.liquiditypool.Query", method, data);
}
