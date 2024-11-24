import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgClaimRewards } from "./types/sunrise/liquiditypool/tx";
import { QueryCalculationCreatePositionRequest } from "./types/sunrise/liquiditypool/query";
import { QueryCalculationIncreaseLiquidityRequest } from "./types/sunrise/liquiditypool/query";
import { MsgUpdateParams } from "./types/sunrise/liquiditypool/tx";
import { MsgDecreaseLiquidity } from "./types/sunrise/liquiditypool/tx";
import { MsgDecreaseLiquidityResponse } from "./types/sunrise/liquiditypool/tx";
import { QueryParamsResponse } from "./types/sunrise/liquiditypool/query";
import { QueryPoolRequest } from "./types/sunrise/liquiditypool/query";
import { QueryPoolsRequest } from "./types/sunrise/liquiditypool/query";
import { QueryPositionFeesRequest } from "./types/sunrise/liquiditypool/query";
import { Pool } from "./types/sunrise/liquiditypool/pool";
import { EventCollectFees } from "./types/sunrise/liquiditypool/events";
import { PoolInfo } from "./types/sunrise/liquiditypool/query";
import { QueryPoolResponse } from "./types/sunrise/liquiditypool/query";
import { QueryCalculationCreatePositionResponse } from "./types/sunrise/liquiditypool/query";
import { AccumulatorPosition } from "./types/sunrise/liquiditypool/accumulator";
import { QueryParamsRequest } from "./types/sunrise/liquiditypool/query";
import { EventSetPool } from "./types/sunrise/liquiditypool/events";
import { QueryPositionRequest } from "./types/sunrise/liquiditypool/query";
import { QueryPositionsResponse } from "./types/sunrise/liquiditypool/query";
import { MsgCreatePoolResponse } from "./types/sunrise/liquiditypool/tx";
import { QueryPositionsRequest } from "./types/sunrise/liquiditypool/query";
import { AccumulatorObject } from "./types/sunrise/liquiditypool/accumulator";
import { EventRemovePool } from "./types/sunrise/liquiditypool/events";
import { EventRemovePosition } from "./types/sunrise/liquiditypool/events";
import { QueryPoolsResponse } from "./types/sunrise/liquiditypool/query";
import { QueryPositionResponse } from "./types/sunrise/liquiditypool/query";
import { QueryAddressPositionsRequest } from "./types/sunrise/liquiditypool/query";
import { QueryAddressPositionsResponse } from "./types/sunrise/liquiditypool/query";
import { TickInfo } from "./types/sunrise/liquiditypool/ticker";
import { MsgClaimRewardsResponse } from "./types/sunrise/liquiditypool/tx";
import { GenesisState } from "./types/sunrise/liquiditypool/genesis";
import { MsgIncreaseLiquidity } from "./types/sunrise/liquiditypool/tx";
import { MsgCreatePositionResponse } from "./types/sunrise/liquiditypool/tx";
import { QueryCalculationIncreaseLiquidityResponse } from "./types/sunrise/liquiditypool/query";
import { EventSetPosition } from "./types/sunrise/liquiditypool/events";
import { QueryPositionFeesResponse } from "./types/sunrise/liquiditypool/query";
import { Position } from "./types/sunrise/liquiditypool/position";
import { Params } from "./types/sunrise/liquiditypool/params";
import { QueryPoolPositionsRequest } from "./types/sunrise/liquiditypool/query";
import { QueryPoolPositionsResponse } from "./types/sunrise/liquiditypool/query";
import { EventSwapExactAmountIn } from "./types/sunrise/liquiditypool/events";
import { MsgCreatePool } from "./types/sunrise/liquiditypool/tx";
import { PositionInfo } from "./types/sunrise/liquiditypool/query";
import { MsgCreatePosition } from "./types/sunrise/liquiditypool/tx";
import { MsgUpdateParamsResponse } from "./types/sunrise/liquiditypool/tx";
import { TickParams } from "./types/sunrise/liquiditypool/pool";
import { EventSwapExactAmountOut } from "./types/sunrise/liquiditypool/events";
import { MsgIncreaseLiquidityResponse } from "./types/sunrise/liquiditypool/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sunrise.liquiditypool.MsgClaimRewards", MsgClaimRewards],
    ["/sunrise.liquiditypool.QueryCalculationCreatePositionRequest", QueryCalculationCreatePositionRequest],
    ["/sunrise.liquiditypool.QueryCalculationIncreaseLiquidityRequest", QueryCalculationIncreaseLiquidityRequest],
    ["/sunrise.liquiditypool.MsgUpdateParams", MsgUpdateParams],
    ["/sunrise.liquiditypool.MsgDecreaseLiquidity", MsgDecreaseLiquidity],
    ["/sunrise.liquiditypool.MsgDecreaseLiquidityResponse", MsgDecreaseLiquidityResponse],
    ["/sunrise.liquiditypool.QueryParamsResponse", QueryParamsResponse],
    ["/sunrise.liquiditypool.QueryPoolRequest", QueryPoolRequest],
    ["/sunrise.liquiditypool.QueryPoolsRequest", QueryPoolsRequest],
    ["/sunrise.liquiditypool.QueryPositionFeesRequest", QueryPositionFeesRequest],
    ["/sunrise.liquiditypool.Pool", Pool],
    ["/sunrise.liquiditypool.EventCollectFees", EventCollectFees],
    ["/sunrise.liquiditypool.PoolInfo", PoolInfo],
    ["/sunrise.liquiditypool.QueryPoolResponse", QueryPoolResponse],
    ["/sunrise.liquiditypool.QueryCalculationCreatePositionResponse", QueryCalculationCreatePositionResponse],
    ["/sunrise.liquiditypool.AccumulatorPosition", AccumulatorPosition],
    ["/sunrise.liquiditypool.QueryParamsRequest", QueryParamsRequest],
    ["/sunrise.liquiditypool.EventSetPool", EventSetPool],
    ["/sunrise.liquiditypool.QueryPositionRequest", QueryPositionRequest],
    ["/sunrise.liquiditypool.QueryPositionsResponse", QueryPositionsResponse],
    ["/sunrise.liquiditypool.MsgCreatePoolResponse", MsgCreatePoolResponse],
    ["/sunrise.liquiditypool.QueryPositionsRequest", QueryPositionsRequest],
    ["/sunrise.liquiditypool.AccumulatorObject", AccumulatorObject],
    ["/sunrise.liquiditypool.EventRemovePool", EventRemovePool],
    ["/sunrise.liquiditypool.EventRemovePosition", EventRemovePosition],
    ["/sunrise.liquiditypool.QueryPoolsResponse", QueryPoolsResponse],
    ["/sunrise.liquiditypool.QueryPositionResponse", QueryPositionResponse],
    ["/sunrise.liquiditypool.QueryAddressPositionsRequest", QueryAddressPositionsRequest],
    ["/sunrise.liquiditypool.QueryAddressPositionsResponse", QueryAddressPositionsResponse],
    ["/sunrise.liquiditypool.TickInfo", TickInfo],
    ["/sunrise.liquiditypool.MsgClaimRewardsResponse", MsgClaimRewardsResponse],
    ["/sunrise.liquiditypool.GenesisState", GenesisState],
    ["/sunrise.liquiditypool.MsgIncreaseLiquidity", MsgIncreaseLiquidity],
    ["/sunrise.liquiditypool.MsgCreatePositionResponse", MsgCreatePositionResponse],
    ["/sunrise.liquiditypool.QueryCalculationIncreaseLiquidityResponse", QueryCalculationIncreaseLiquidityResponse],
    ["/sunrise.liquiditypool.EventSetPosition", EventSetPosition],
    ["/sunrise.liquiditypool.QueryPositionFeesResponse", QueryPositionFeesResponse],
    ["/sunrise.liquiditypool.Position", Position],
    ["/sunrise.liquiditypool.Params", Params],
    ["/sunrise.liquiditypool.QueryPoolPositionsRequest", QueryPoolPositionsRequest],
    ["/sunrise.liquiditypool.QueryPoolPositionsResponse", QueryPoolPositionsResponse],
    ["/sunrise.liquiditypool.EventSwapExactAmountIn", EventSwapExactAmountIn],
    ["/sunrise.liquiditypool.MsgCreatePool", MsgCreatePool],
    ["/sunrise.liquiditypool.PositionInfo", PositionInfo],
    ["/sunrise.liquiditypool.MsgCreatePosition", MsgCreatePosition],
    ["/sunrise.liquiditypool.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sunrise.liquiditypool.TickParams", TickParams],
    ["/sunrise.liquiditypool.EventSwapExactAmountOut", EventSwapExactAmountOut],
    ["/sunrise.liquiditypool.MsgIncreaseLiquidityResponse", MsgIncreaseLiquidityResponse],
    
];

export { msgTypes }