import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import { QueryParamsRequestSchema, QueryParamsResponseSchema } from "../types/sunrise/fee";

export type FeeExtension = ReturnType<typeof setupFeeExtension>;

export function setupFeeExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const service = "sunrise.fee.v1.Query";

  return {
    fee: {
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
