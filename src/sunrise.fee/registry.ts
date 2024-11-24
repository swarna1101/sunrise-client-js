import { GeneratedType } from "@cosmjs/proto-signing";
import { EventFeeBurn } from "./types/sunrise/fee/events";
import { MsgUpdateParamsResponse } from "./types/sunrise/fee/tx";
import { QueryParamsResponse } from "./types/sunrise/fee/query";
import { Params } from "./types/sunrise/fee/params";
import { MsgUpdateParams } from "./types/sunrise/fee/tx";
import { GenesisState } from "./types/sunrise/fee/genesis";
import { QueryParamsRequest } from "./types/sunrise/fee/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sunrise.fee.EventFeeBurn", EventFeeBurn],
    ["/sunrise.fee.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sunrise.fee.QueryParamsResponse", QueryParamsResponse],
    ["/sunrise.fee.Params", Params],
    ["/sunrise.fee.MsgUpdateParams", MsgUpdateParams],
    ["/sunrise.fee.GenesisState", GenesisState],
    ["/sunrise.fee.QueryParamsRequest", QueryParamsRequest],
    
];

export { msgTypes }