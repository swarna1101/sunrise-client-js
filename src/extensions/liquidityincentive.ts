import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import {
  QueryEpochRequestSchema,
  QueryEpochResponseSchema,
  QueryEpochsRequestSchema,
  QueryEpochsResponseSchema,
  QueryGaugeRequestSchema,
  QueryGaugeResponseSchema,
  QueryGaugesRequestSchema,
  QueryGaugesResponseSchema,
  QueryParamsRequestSchema,
  QueryParamsResponseSchema,
  QueryVoteRequestSchema,
  QueryVoteResponseSchema,
  QueryVotesRequestSchema,
  QueryVotesResponseSchema,
} from "../types/sunrise/liquidityincentive";

export type LiquidityIncentiveExtension = ReturnType<typeof setupLiquidityIncentiveExtension>;

export function setupLiquidityIncentiveExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const service = "sunrise.liquidityincentive.Query";

  return {
    liquidityincentive: {
      params: queryFactory(
        rpc,
        service,
        "Params",
        QueryParamsRequestSchema,
        QueryParamsResponseSchema,
      ),
      epoch: queryFactory(rpc, service, "Epoch", QueryEpochRequestSchema, QueryEpochResponseSchema),
      epochs: queryFactory(
        rpc,
        service,
        "Epochs",
        QueryEpochsRequestSchema,
        QueryEpochsResponseSchema,
      ),
      gauge: queryFactory(rpc, service, "Gauge", QueryGaugeRequestSchema, QueryGaugeResponseSchema),
      gauges: queryFactory(
        rpc,
        service,
        "Gauges",
        QueryGaugesRequestSchema,
        QueryGaugesResponseSchema,
      ),
      vote: queryFactory(rpc, service, "Vote", QueryVoteRequestSchema, QueryVoteResponseSchema),
      votes: queryFactory(rpc, service, "Votes", QueryVotesRequestSchema, QueryVotesResponseSchema),
    },
  };
}
