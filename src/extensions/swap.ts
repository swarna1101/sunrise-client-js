import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import { QueryParamsRequestSchema, QueryParamsResponseSchema } from "../types/sunrise/swap";

export type SwapExtension = ReturnType<typeof setupSwapExtension>;

export function setupSwapExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const service = "sunrise.swap.Query";

  return {
    swap: {
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
