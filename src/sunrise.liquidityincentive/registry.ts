import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryGaugeResponse } from "./types/sunrise/liquidityincentive/query";
import { Params } from "./types/sunrise/liquidityincentive/params";
import { QueryEpochsResponse } from "./types/sunrise/liquidityincentive/query";
import { MsgCollectVoteRewardsResponse } from "./types/sunrise/liquidityincentive/tx";
import { GenesisState } from "./types/sunrise/liquidityincentive/genesis";
import { QueryVotesResponse } from "./types/sunrise/liquidityincentive/query";
import { Vote } from "./types/sunrise/liquidityincentive/gauge";
import { MsgCollectVoteRewards } from "./types/sunrise/liquidityincentive/tx";
import { QueryParamsRequest } from "./types/sunrise/liquidityincentive/query";
import { QueryVoteRequest } from "./types/sunrise/liquidityincentive/query";
import { EventSetVote } from "./types/sunrise/liquidityincentive/events";
import { PoolWeight } from "./types/sunrise/liquidityincentive/gauge";
import { MsgVoteGaugeResponse } from "./types/sunrise/liquidityincentive/tx";
import { Epoch } from "./types/sunrise/liquidityincentive/epoch";
import { QueryGaugeRequest } from "./types/sunrise/liquidityincentive/query";
import { QueryVoteResponse } from "./types/sunrise/liquidityincentive/query";
import { QueryVotesRequest } from "./types/sunrise/liquidityincentive/query";
import { QueryGaugesResponse } from "./types/sunrise/liquidityincentive/query";
import { QueryEpochResponse } from "./types/sunrise/liquidityincentive/query";
import { QueryEpochsRequest } from "./types/sunrise/liquidityincentive/query";
import { QueryGaugesRequest } from "./types/sunrise/liquidityincentive/query";
import { Gauge } from "./types/sunrise/liquidityincentive/gauge";
import { MsgVoteGauge } from "./types/sunrise/liquidityincentive/tx";
import { MsgUpdateParams } from "./types/sunrise/liquidityincentive/tx";
import { MsgUpdateParamsResponse } from "./types/sunrise/liquidityincentive/tx";
import { QueryParamsResponse } from "./types/sunrise/liquidityincentive/query";
import { QueryEpochRequest } from "./types/sunrise/liquidityincentive/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sunrise.liquidityincentive.QueryGaugeResponse", QueryGaugeResponse],
    ["/sunrise.liquidityincentive.Params", Params],
    ["/sunrise.liquidityincentive.QueryEpochsResponse", QueryEpochsResponse],
    ["/sunrise.liquidityincentive.MsgCollectVoteRewardsResponse", MsgCollectVoteRewardsResponse],
    ["/sunrise.liquidityincentive.GenesisState", GenesisState],
    ["/sunrise.liquidityincentive.QueryVotesResponse", QueryVotesResponse],
    ["/sunrise.liquidityincentive.Vote", Vote],
    ["/sunrise.liquidityincentive.MsgCollectVoteRewards", MsgCollectVoteRewards],
    ["/sunrise.liquidityincentive.QueryParamsRequest", QueryParamsRequest],
    ["/sunrise.liquidityincentive.QueryVoteRequest", QueryVoteRequest],
    ["/sunrise.liquidityincentive.EventSetVote", EventSetVote],
    ["/sunrise.liquidityincentive.PoolWeight", PoolWeight],
    ["/sunrise.liquidityincentive.MsgVoteGaugeResponse", MsgVoteGaugeResponse],
    ["/sunrise.liquidityincentive.Epoch", Epoch],
    ["/sunrise.liquidityincentive.QueryGaugeRequest", QueryGaugeRequest],
    ["/sunrise.liquidityincentive.QueryVoteResponse", QueryVoteResponse],
    ["/sunrise.liquidityincentive.QueryVotesRequest", QueryVotesRequest],
    ["/sunrise.liquidityincentive.QueryGaugesResponse", QueryGaugesResponse],
    ["/sunrise.liquidityincentive.QueryEpochResponse", QueryEpochResponse],
    ["/sunrise.liquidityincentive.QueryEpochsRequest", QueryEpochsRequest],
    ["/sunrise.liquidityincentive.QueryGaugesRequest", QueryGaugesRequest],
    ["/sunrise.liquidityincentive.Gauge", Gauge],
    ["/sunrise.liquidityincentive.MsgVoteGauge", MsgVoteGauge],
    ["/sunrise.liquidityincentive.MsgUpdateParams", MsgUpdateParams],
    ["/sunrise.liquidityincentive.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sunrise.liquidityincentive.QueryParamsResponse", QueryParamsResponse],
    ["/sunrise.liquidityincentive.QueryEpochRequest", QueryEpochRequest],
    
];

export { msgTypes }