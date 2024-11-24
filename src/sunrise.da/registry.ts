import { GeneratedType } from "@cosmjs/proto-signing";
import { Proof } from "./types/sunrise/da/published_data";
import { QueryAllPublishedDataResponse } from "./types/sunrise/da/query";
import { PublishedData } from "./types/sunrise/da/published_data";
import { QueryZkpProofThresholdRequest } from "./types/sunrise/da/query";
import { MsgSubmitProof } from "./types/sunrise/da/tx";
import { MsgChallengeForFraud } from "./types/sunrise/da/tx";
import { GenesisState } from "./types/sunrise/da/genesis";
import { Metadata } from "./types/sunrise/da/metadata";
import { MsgUpdateParamsResponse } from "./types/sunrise/da/tx";
import { MsgChallengeForFraudResponse } from "./types/sunrise/da/tx";
import { Params } from "./types/sunrise/da/params";
import { QueryAllPublishedDataRequest } from "./types/sunrise/da/query";
import { MsgPublishData } from "./types/sunrise/da/tx";
import { MsgSubmitProofResponse } from "./types/sunrise/da/tx";
import { VoteExtension } from "./types/sunrise/da/vote_extension";
import { MsgUpdateParams } from "./types/sunrise/da/tx";
import { QueryParamsResponse } from "./types/sunrise/da/query";
import { QueryPublishedDataRequest } from "./types/sunrise/da/query";
import { QueryZkpProofThresholdResponse } from "./types/sunrise/da/query";
import { MsgPublishDataResponse } from "./types/sunrise/da/tx";
import { QueryParamsRequest } from "./types/sunrise/da/query";
import { QueryPublishedDataResponse } from "./types/sunrise/da/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sunrise.da.Proof", Proof],
    ["/sunrise.da.QueryAllPublishedDataResponse", QueryAllPublishedDataResponse],
    ["/sunrise.da.PublishedData", PublishedData],
    ["/sunrise.da.QueryZkpProofThresholdRequest", QueryZkpProofThresholdRequest],
    ["/sunrise.da.MsgSubmitProof", MsgSubmitProof],
    ["/sunrise.da.MsgChallengeForFraud", MsgChallengeForFraud],
    ["/sunrise.da.GenesisState", GenesisState],
    ["/sunrise.da.Metadata", Metadata],
    ["/sunrise.da.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sunrise.da.MsgChallengeForFraudResponse", MsgChallengeForFraudResponse],
    ["/sunrise.da.Params", Params],
    ["/sunrise.da.QueryAllPublishedDataRequest", QueryAllPublishedDataRequest],
    ["/sunrise.da.MsgPublishData", MsgPublishData],
    ["/sunrise.da.MsgSubmitProofResponse", MsgSubmitProofResponse],
    ["/sunrise.da.VoteExtension", VoteExtension],
    ["/sunrise.da.MsgUpdateParams", MsgUpdateParams],
    ["/sunrise.da.QueryParamsResponse", QueryParamsResponse],
    ["/sunrise.da.QueryPublishedDataRequest", QueryPublishedDataRequest],
    ["/sunrise.da.QueryZkpProofThresholdResponse", QueryZkpProofThresholdResponse],
    ["/sunrise.da.MsgPublishDataResponse", MsgPublishDataResponse],
    ["/sunrise.da.QueryParamsRequest", QueryParamsRequest],
    ["/sunrise.da.QueryPublishedDataResponse", QueryPublishedDataResponse],
    
];

export { msgTypes }