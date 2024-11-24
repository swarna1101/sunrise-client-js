import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgConvertResponse } from "./types/sunrise/tokenconverter/tx";
import { MsgConvert } from "./types/sunrise/tokenconverter/tx";
import { Params } from "./types/sunrise/tokenconverter/params";
import { GenesisState } from "./types/sunrise/tokenconverter/genesis";
import { MsgUpdateParams } from "./types/sunrise/tokenconverter/tx";
import { MsgUpdateParamsResponse } from "./types/sunrise/tokenconverter/tx";
import { EventConvert } from "./types/sunrise/tokenconverter/events";
import { QueryParamsRequest } from "./types/sunrise/tokenconverter/query";
import { QueryParamsResponse } from "./types/sunrise/tokenconverter/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sunrise.tokenconverter.MsgConvertResponse", MsgConvertResponse],
    ["/sunrise.tokenconverter.MsgConvert", MsgConvert],
    ["/sunrise.tokenconverter.Params", Params],
    ["/sunrise.tokenconverter.GenesisState", GenesisState],
    ["/sunrise.tokenconverter.MsgUpdateParams", MsgUpdateParams],
    ["/sunrise.tokenconverter.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sunrise.tokenconverter.EventConvert", EventConvert],
    ["/sunrise.tokenconverter.QueryParamsRequest", QueryParamsRequest],
    ["/sunrise.tokenconverter.QueryParamsResponse", QueryParamsResponse],
    
];

export { msgTypes }