import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import {
  QueryCalculationSwapExactAmountInRequestSchema,
  QueryCalculationSwapExactAmountInResponseSchema,
  QueryCalculationSwapExactAmountOutRequestSchema,
  QueryCalculationSwapExactAmountOutResponseSchema,
  QueryIncomingInFlightPacketRequestSchema,
  QueryIncomingInFlightPacketResponseSchema,
  QueryIncomingInFlightPacketsRequestSchema,
  QueryIncomingInFlightPacketsResponseSchema,
  QueryOutgoingInFlightPacketRequestSchema,
  QueryOutgoingInFlightPacketResponseSchema,
  QueryOutgoingInFlightPacketsRequestSchema,
  QueryOutgoingInFlightPacketsResponseSchema,
  QueryParamsRequestSchema,
  QueryParamsResponseSchema,
} from "../types/sunrise/swap";

export type SwapExtension = ReturnType<typeof setupSwapExtension>;

export function setupSwapExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const service = "sunrise.swap.v1.Query";

  return {
    swap: {
      params: queryFactory(
        rpc,
        service,
        "Params",
        QueryParamsRequestSchema,
        QueryParamsResponseSchema,
      ),
      incomingInFlightPacket: queryFactory(
        rpc,
        service,
        "IncomingInFlightPacket",
        QueryIncomingInFlightPacketRequestSchema,
        QueryIncomingInFlightPacketResponseSchema,
      ),
      incomingInFlightPackets: queryFactory(
        rpc,
        service,
        "IncomingInFlightPackets",
        QueryIncomingInFlightPacketsRequestSchema,
        QueryIncomingInFlightPacketsResponseSchema,
      ),
      outgoingInFlightPacket: queryFactory(
        rpc,
        service,
        "OutgoingInFlightPacket",
        QueryOutgoingInFlightPacketRequestSchema,
        QueryOutgoingInFlightPacketResponseSchema,
      ),
      outgoingInFlightPackets: queryFactory(
        rpc,
        service,
        "OutgoingInFlightPackets",
        QueryOutgoingInFlightPacketsRequestSchema,
        QueryOutgoingInFlightPacketsResponseSchema,
      ),
      calculationSwapExactAmountIn: queryFactory(
        rpc,
        service,
        "CalculationSwapExactAmountIn",
        QueryCalculationSwapExactAmountInRequestSchema,
        QueryCalculationSwapExactAmountInResponseSchema,
      ),
      calculationSwapExactAmountOut: queryFactory(
        rpc,
        service,
        "CalculationSwapExactAmountOut",
        QueryCalculationSwapExactAmountOutRequestSchema,
        QueryCalculationSwapExactAmountOutResponseSchema,
      ),
    },
  };
}
