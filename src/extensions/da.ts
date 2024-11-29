import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import {
  QueryAllPublishedDataRequestSchema,
  QueryAllPublishedDataResponseSchema,
  QueryParamsRequestSchema,
  QueryParamsResponseSchema,
  QueryPublishedDataRequestSchema,
  QueryPublishedDataResponseSchema,
  QueryZkpProofThresholdRequestSchema,
  QueryZkpProofThresholdResponseSchema,
} from "../types/sunrise/da";
import { queryFactory } from "./factory";

export interface DaExtension {
  readonly da: {};
}

export function setupDaExtension(base: QueryClient): DaExtension {
  const rpc = createProtobufRpcClient(base);
  const service = "sunrise.da.Query";

  return {
    da: {
      params: queryFactory(
        rpc,
        service,
        "Params",
        QueryParamsRequestSchema,
        QueryParamsResponseSchema,
      ),
      publishedData: queryFactory(
        rpc,
        service,
        "PublishedData",
        QueryPublishedDataRequestSchema,
        QueryPublishedDataResponseSchema,
      ),
      allPublishedData: queryFactory(
        rpc,
        service,
        "AllPublishedData",
        QueryAllPublishedDataRequestSchema,
        QueryAllPublishedDataResponseSchema,
      ),
      zkpProofThreshold: queryFactory(
        rpc,
        service,
        "ZkpProofThreshold",
        QueryZkpProofThresholdRequestSchema,
        QueryZkpProofThresholdResponseSchema,
      ),
    },
  };
}
