import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import {
  QueryParamsRequestSchema,
  QueryParamsResponseSchema,
} from "../types/sunrise/tokenconverter";

export type TokenConverterExtension = ReturnType<typeof setupTokenConverterExtension>;

export function setupTokenConverterExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const service = "sunrise.tokenconverter.Query";

  return {
    tokenconverter: {
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
