import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import {
  QueryParamsRequestSchema,
  QueryParamsResponseSchema,
} from "../types/sunrise/liquiditypool";

export type LiquidityPoolExtension = ReturnType<typeof setupLiquidityPoolExtension>;

export function setupLiquidityPoolExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const service = "sunrise.liquiditypool.Query";

  return {
    liquiditypool: {
      params: queryFactory(
        rpc,
        service,
        "Params",
        QueryParamsRequestSchema,
        QueryParamsResponseSchema,
      ),
    },
  };
}
