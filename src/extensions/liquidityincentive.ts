import { createProtobufRpcClient, ProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

export interface LiquidityIncentiveExtension {
  readonly liquidityincentive: {};
}

export function setupLiquidityIncentiveExtension(base: QueryClient): LiquidityIncentiveExtension {
  const rpc = createProtobufRpcClient(base);
  return {
    liquidityincentive: {},
  };
}

function request(rpc: ProtobufRpcClient, method: string, data: Uint8Array): Promise<Uint8Array> {
  return rpc.request("sunrise.liquidityincentive.Query", method, data);
}
