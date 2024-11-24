import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryOutgoingInFlightPacketResponse } from "./types/sunrise/swap/query";
import { QueryParamsResponse } from "./types/sunrise/swap/query";
import { QueryCalculationSwapExactAmountOutResponse } from "./types/sunrise/swap/query";
import { RouteParallel } from "./types/sunrise/swap/route";
import { Params } from "./types/sunrise/swap/params";
import { ExactAmountIn } from "./types/sunrise/swap/metadata";
import { RouteSeries } from "./types/sunrise/swap/route";
import { QueryOutgoingInFlightPacketsRequest } from "./types/sunrise/swap/query";
import { MsgSwapExactAmountOutResponse } from "./types/sunrise/swap/tx";
import { RouteResultParallel } from "./types/sunrise/swap/route";
import { ExactAmountOut } from "./types/sunrise/swap/metadata";
import { RoutePool } from "./types/sunrise/swap/route";
import { GenesisState } from "./types/sunrise/swap/genesis";
import { PacketMetadata } from "./types/sunrise/swap/metadata";
import { QueryParamsRequest } from "./types/sunrise/swap/query";
import { QueryCalculationSwapExactAmountInRequest } from "./types/sunrise/swap/query";
import { Route } from "./types/sunrise/swap/route";
import { QueryIncomingInFlightPacketRequest } from "./types/sunrise/swap/query";
import { QueryCalculationSwapExactAmountInResponse } from "./types/sunrise/swap/query";
import { RouteResult } from "./types/sunrise/swap/route";
import { MsgUpdateParams } from "./types/sunrise/swap/tx";
import { QueryOutgoingInFlightPacketRequest } from "./types/sunrise/swap/query";
import { MsgSwapExactAmountInResponse } from "./types/sunrise/swap/tx";
import { MsgSwapExactAmountOut } from "./types/sunrise/swap/tx";
import { RouteResultPool } from "./types/sunrise/swap/route";
import { ForwardMetadata } from "./types/sunrise/swap/metadata";
import { QueryIncomingInFlightPacketsRequest } from "./types/sunrise/swap/query";
import { IncomingInFlightPacket } from "./types/sunrise/swap/in_flight_packet";
import { QueryOutgoingInFlightPacketsResponse } from "./types/sunrise/swap/query";
import { QueryCalculationSwapExactAmountOutRequest } from "./types/sunrise/swap/query";
import { RouteResultSeries } from "./types/sunrise/swap/route";
import { QueryIncomingInFlightPacketsResponse } from "./types/sunrise/swap/query";
import { MsgSwapExactAmountIn } from "./types/sunrise/swap/tx";
import { PacketIndex } from "./types/sunrise/swap/in_flight_packet";
import { OutgoingInFlightPacket } from "./types/sunrise/swap/in_flight_packet";
import { SwapMetadata } from "./types/sunrise/swap/metadata";
import { QueryIncomingInFlightPacketResponse } from "./types/sunrise/swap/query";
import { MsgUpdateParamsResponse } from "./types/sunrise/swap/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sunrise.swap.QueryOutgoingInFlightPacketResponse", QueryOutgoingInFlightPacketResponse],
    ["/sunrise.swap.QueryParamsResponse", QueryParamsResponse],
    ["/sunrise.swap.QueryCalculationSwapExactAmountOutResponse", QueryCalculationSwapExactAmountOutResponse],
    ["/sunrise.swap.RouteParallel", RouteParallel],
    ["/sunrise.swap.Params", Params],
    ["/sunrise.swap.ExactAmountIn", ExactAmountIn],
    ["/sunrise.swap.RouteSeries", RouteSeries],
    ["/sunrise.swap.QueryOutgoingInFlightPacketsRequest", QueryOutgoingInFlightPacketsRequest],
    ["/sunrise.swap.MsgSwapExactAmountOutResponse", MsgSwapExactAmountOutResponse],
    ["/sunrise.swap.RouteResultParallel", RouteResultParallel],
    ["/sunrise.swap.ExactAmountOut", ExactAmountOut],
    ["/sunrise.swap.RoutePool", RoutePool],
    ["/sunrise.swap.GenesisState", GenesisState],
    ["/sunrise.swap.PacketMetadata", PacketMetadata],
    ["/sunrise.swap.QueryParamsRequest", QueryParamsRequest],
    ["/sunrise.swap.QueryCalculationSwapExactAmountInRequest", QueryCalculationSwapExactAmountInRequest],
    ["/sunrise.swap.Route", Route],
    ["/sunrise.swap.QueryIncomingInFlightPacketRequest", QueryIncomingInFlightPacketRequest],
    ["/sunrise.swap.QueryCalculationSwapExactAmountInResponse", QueryCalculationSwapExactAmountInResponse],
    ["/sunrise.swap.RouteResult", RouteResult],
    ["/sunrise.swap.MsgUpdateParams", MsgUpdateParams],
    ["/sunrise.swap.QueryOutgoingInFlightPacketRequest", QueryOutgoingInFlightPacketRequest],
    ["/sunrise.swap.MsgSwapExactAmountInResponse", MsgSwapExactAmountInResponse],
    ["/sunrise.swap.MsgSwapExactAmountOut", MsgSwapExactAmountOut],
    ["/sunrise.swap.RouteResultPool", RouteResultPool],
    ["/sunrise.swap.ForwardMetadata", ForwardMetadata],
    ["/sunrise.swap.QueryIncomingInFlightPacketsRequest", QueryIncomingInFlightPacketsRequest],
    ["/sunrise.swap.IncomingInFlightPacket", IncomingInFlightPacket],
    ["/sunrise.swap.QueryOutgoingInFlightPacketsResponse", QueryOutgoingInFlightPacketsResponse],
    ["/sunrise.swap.QueryCalculationSwapExactAmountOutRequest", QueryCalculationSwapExactAmountOutRequest],
    ["/sunrise.swap.RouteResultSeries", RouteResultSeries],
    ["/sunrise.swap.QueryIncomingInFlightPacketsResponse", QueryIncomingInFlightPacketsResponse],
    ["/sunrise.swap.MsgSwapExactAmountIn", MsgSwapExactAmountIn],
    ["/sunrise.swap.PacketIndex", PacketIndex],
    ["/sunrise.swap.OutgoingInFlightPacket", OutgoingInFlightPacket],
    ["/sunrise.swap.SwapMetadata", SwapMetadata],
    ["/sunrise.swap.QueryIncomingInFlightPacketResponse", QueryIncomingInFlightPacketResponse],
    ["/sunrise.swap.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }