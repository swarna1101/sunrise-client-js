import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgAuctionBidResponse } from "./types/../../../../../go/pkg/mod/github.com/skip-mev/block-sdk/v2@v2.1.5/proto/sdk/auction/v1/tx";
import { MsgUpdateParams } from "./types/../../../../../go/pkg/mod/github.com/skip-mev/block-sdk/v2@v2.1.5/proto/sdk/auction/v1/tx";
import { GenesisState } from "./types/../../../../../go/pkg/mod/github.com/skip-mev/block-sdk/v2@v2.1.5/proto/sdk/auction/v1/genesis";
import { QueryParamsRequest } from "./types/../../../../../go/pkg/mod/github.com/skip-mev/block-sdk/v2@v2.1.5/proto/sdk/auction/v1/query";
import { Params } from "./types/../../../../../go/pkg/mod/github.com/skip-mev/block-sdk/v2@v2.1.5/proto/sdk/auction/v1/genesis";
import { MsgAuctionBid } from "./types/../../../../../go/pkg/mod/github.com/skip-mev/block-sdk/v2@v2.1.5/proto/sdk/auction/v1/tx";
import { MsgUpdateParamsResponse } from "./types/../../../../../go/pkg/mod/github.com/skip-mev/block-sdk/v2@v2.1.5/proto/sdk/auction/v1/tx";
import { QueryParamsResponse } from "./types/../../../../../go/pkg/mod/github.com/skip-mev/block-sdk/v2@v2.1.5/proto/sdk/auction/v1/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sdk.auction.v1.MsgAuctionBidResponse", MsgAuctionBidResponse],
    ["/sdk.auction.v1.MsgUpdateParams", MsgUpdateParams],
    ["/sdk.auction.v1.GenesisState", GenesisState],
    ["/sdk.auction.v1.QueryParamsRequest", QueryParamsRequest],
    ["/sdk.auction.v1.Params", Params],
    ["/sdk.auction.v1.MsgAuctionBid", MsgAuctionBid],
    ["/sdk.auction.v1.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sdk.auction.v1.QueryParamsResponse", QueryParamsResponse],
    
];

export { msgTypes }