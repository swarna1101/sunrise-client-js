import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import {
  QueryAddressPositionsRequestSchema,
  QueryAddressPositionsResponseSchema,
  QueryCalculationCreatePositionRequestSchema,
  QueryCalculationCreatePositionResponseSchema,
  QueryCalculationIncreaseLiquidityRequestSchema,
  QueryCalculationIncreaseLiquidityResponseSchema,
  QueryParamsRequestSchema,
  QueryParamsResponseSchema,
  QueryPoolPositionsRequestSchema,
  QueryPoolPositionsResponseSchema,
  QueryPoolRequestSchema,
  QueryPoolResponseSchema,
  QueryPoolsRequestSchema,
  QueryPoolsResponseSchema,
  QueryPositionFeesRequestSchema,
  QueryPositionFeesResponseSchema,
  QueryPositionRequestSchema,
  QueryPositionResponseSchema,
  QueryPositionsRequestSchema,
  QueryPositionsResponseSchema,
} from "../types/sunrise/liquiditypool";

export type LiquidityPoolExtension = ReturnType<typeof setupLiquidityPoolExtension>;

export function setupLiquidityPoolExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const service = "sunrise.liquiditypool.v1.Query";

  return {
    liquiditypool: {
      params: queryFactory(
        rpc,
        service,
        "Params",
        QueryParamsRequestSchema,
        QueryParamsResponseSchema,
      ),
      pool: queryFactory(rpc, service, "Pool", QueryPoolRequestSchema, QueryPoolResponseSchema),
      pools: queryFactory(rpc, service, "Pools", QueryPoolsRequestSchema, QueryPoolsResponseSchema),
      position: queryFactory(
        rpc,
        service,
        "Position",
        QueryPositionRequestSchema,
        QueryPositionResponseSchema,
      ),
      positions: queryFactory(
        rpc,
        service,
        "Positions",
        QueryPositionsRequestSchema,
        QueryPositionsResponseSchema,
      ),
      poolPositions: queryFactory(
        rpc,
        service,
        "PoolPositions",
        QueryPoolPositionsRequestSchema,
        QueryPoolPositionsResponseSchema,
      ),
      addressPositions: queryFactory(
        rpc,
        service,
        "AddressPositions",
        QueryAddressPositionsRequestSchema,
        QueryAddressPositionsResponseSchema,
      ),
      positionFees: queryFactory(
        rpc,
        service,
        "PositionFees",
        QueryPositionFeesRequestSchema,
        QueryPositionFeesResponseSchema,
      ),
      calculationCreatePosition: queryFactory(
        rpc,
        service,
        "CalculationCreatePosition",
        QueryCalculationCreatePositionRequestSchema,
        QueryCalculationCreatePositionResponseSchema,
      ),
      calculationIncreaseLiquidity: queryFactory(
        rpc,
        service,
        "CalculationIncreaseLiquidity",
        QueryCalculationIncreaseLiquidityRequestSchema,
        QueryCalculationIncreaseLiquidityResponseSchema,
      ),
    },
  };
}
