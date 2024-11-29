import { createProtobufRpcClient, ProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import { QueryParamsRequestSchema, QueryParamsResponseSchema } from "../types/sunrise/fee";

export interface FeeExtension {
  readonly fee: {};
}

export function setupFeeExtension(base: QueryClient): FeeExtension {
  const rpc = createProtobufRpcClient(base);
  const service = "sunrise.fee.Query";

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

function request(rpc: ProtobufRpcClient, method: string, data: Uint8Array): Promise<Uint8Array> {
  return rpc.request("sunrise.fee.Query", method, data);
}
