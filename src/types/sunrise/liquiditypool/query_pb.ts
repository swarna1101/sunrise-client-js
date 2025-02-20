// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/liquiditypool/query.proto (package sunrise.liquiditypool, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination_pb";
import { file_cosmos_base_query_v1beta1_pagination } from "../../cosmos/base/query/v1beta1/pagination_pb";
import type { Coin } from "../../cosmos/base/v1beta1/coin_pb";
import { file_cosmos_base_v1beta1_coin } from "../../cosmos/base/v1beta1/coin_pb";
import { file_gogoproto_gogo } from "../../gogoproto/gogo_pb";
import { file_google_api_annotations } from "../../google/api/annotations_pb";
import type { Params } from "./params_pb";
import { file_sunrise_liquiditypool_params } from "./params_pb";
import type { Pool } from "./pool_pb";
import { file_sunrise_liquiditypool_pool } from "./pool_pb";
import type { Position } from "./position_pb";
import { file_sunrise_liquiditypool_position } from "./position_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/liquiditypool/query.proto.
 */
export const file_sunrise_liquiditypool_query: GenFile = /*@__PURE__*/
  fileDesc("CiFzdW5yaXNlL2xpcXVpZGl0eXBvb2wvcXVlcnkucHJvdG8SFXN1bnJpc2UubGlxdWlkaXR5cG9vbCIUChJRdWVyeVBhcmFtc1JlcXVlc3QiSgoTUXVlcnlQYXJhbXNSZXNwb25zZRIzCgZwYXJhbXMYASABKAsyHS5zdW5yaXNlLmxpcXVpZGl0eXBvb2wuUGFyYW1zQgTI3h8AIh4KEFF1ZXJ5UG9vbFJlcXVlc3QSCgoCaWQYASABKAQipgEKCFBvb2xJbmZvEi8KBHBvb2wYASABKAsyGy5zdW5yaXNlLmxpcXVpZGl0eXBvb2wuUG9vbEIEyN4fABIzCgp0b2tlbl9iYXNlGAIgASgLMhkuY29zbW9zLmJhc2UudjFiZXRhMS5Db2luQgTI3h8AEjQKC3Rva2VuX3F1b3RlGAMgASgLMhkuY29zbW9zLmJhc2UudjFiZXRhMS5Db2luQgTI3h8AIkgKEVF1ZXJ5UG9vbFJlc3BvbnNlEjMKBHBvb2wYASABKAsyHy5zdW5yaXNlLmxpcXVpZGl0eXBvb2wuUG9vbEluZm9CBMjeHwAiTwoRUXVlcnlQb29sc1JlcXVlc3QSOgoKcGFnaW5hdGlvbhgBIAEoCzImLmNvc21vcy5iYXNlLnF1ZXJ5LnYxYmV0YTEuUGFnZVJlcXVlc3QihwEKElF1ZXJ5UG9vbHNSZXNwb25zZRI0CgVwb29scxgBIAMoCzIfLnN1bnJpc2UubGlxdWlkaXR5cG9vbC5Qb29sSW5mb0IEyN4fABI7CgpwYWdpbmF0aW9uGAIgASgLMicuY29zbW9zLmJhc2UucXVlcnkudjFiZXRhMS5QYWdlUmVzcG9uc2UiIgoUUXVlcnlQb3NpdGlvblJlcXVlc3QSCgoCaWQYASABKAQisgEKDFBvc2l0aW9uSW5mbxI3Cghwb3NpdGlvbhgBIAEoCzIfLnN1bnJpc2UubGlxdWlkaXR5cG9vbC5Qb3NpdGlvbkIEyN4fABIzCgp0b2tlbl9iYXNlGAIgASgLMhkuY29zbW9zLmJhc2UudjFiZXRhMS5Db2luQgTI3h8AEjQKC3Rva2VuX3F1b3RlGAMgASgLMhkuY29zbW9zLmJhc2UudjFiZXRhMS5Db2luQgTI3h8AIlQKFVF1ZXJ5UG9zaXRpb25SZXNwb25zZRI7Cghwb3NpdGlvbhgBIAEoCzIjLnN1bnJpc2UubGlxdWlkaXR5cG9vbC5Qb3NpdGlvbkluZm9CBMjeHwAiUwoVUXVlcnlQb3NpdGlvbnNSZXF1ZXN0EjoKCnBhZ2luYXRpb24YASABKAsyJi5jb3Ntb3MuYmFzZS5xdWVyeS52MWJldGExLlBhZ2VSZXF1ZXN0IpMBChZRdWVyeVBvc2l0aW9uc1Jlc3BvbnNlEjwKCXBvc2l0aW9ucxgBIAMoCzIjLnN1bnJpc2UubGlxdWlkaXR5cG9vbC5Qb3NpdGlvbkluZm9CBMjeHwASOwoKcGFnaW5hdGlvbhgCIAEoCzInLmNvc21vcy5iYXNlLnF1ZXJ5LnYxYmV0YTEuUGFnZVJlc3BvbnNlIiwKGVF1ZXJ5UG9vbFBvc2l0aW9uc1JlcXVlc3QSDwoHcG9vbF9pZBgBIAEoBCJaChpRdWVyeVBvb2xQb3NpdGlvbnNSZXNwb25zZRI8Cglwb3NpdGlvbnMYASADKAsyIy5zdW5yaXNlLmxpcXVpZGl0eXBvb2wuUG9zaXRpb25JbmZvQgTI3h8AIi8KHFF1ZXJ5QWRkcmVzc1Bvc2l0aW9uc1JlcXVlc3QSDwoHYWRkcmVzcxgBIAEoCSJdCh1RdWVyeUFkZHJlc3NQb3NpdGlvbnNSZXNwb25zZRI8Cglwb3NpdGlvbnMYASADKAsyIy5zdW5yaXNlLmxpcXVpZGl0eXBvb2wuUG9zaXRpb25JbmZvQgTI3h8AIiYKGFF1ZXJ5UG9zaXRpb25GZWVzUmVxdWVzdBIKCgJpZBgBIAEoBCJ2ChlRdWVyeVBvc2l0aW9uRmVlc1Jlc3BvbnNlElkKBGZlZXMYASADKAsyGS5jb3Ntb3MuYmFzZS52MWJldGExLkNvaW5CMMjeHwCq3x8oZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5Db2lucyJ/CiVRdWVyeUNhbGN1bGF0aW9uQ3JlYXRlUG9zaXRpb25SZXF1ZXN0Eg8KB3Bvb2xfaWQYASABKAQSEgoKbG93ZXJfdGljaxgCIAEoCRISCgp1cHBlcl90aWNrGAMgASgJEg4KBmFtb3VudBgEIAEoCRINCgVkZW5vbRgFIAEoCSJZCiZRdWVyeUNhbGN1bGF0aW9uQ3JlYXRlUG9zaXRpb25SZXNwb25zZRIvCgZhbW91bnQYASABKAsyGS5jb3Ntb3MuYmFzZS52MWJldGExLkNvaW5CBMjeHwAiWwooUXVlcnlDYWxjdWxhdGlvbkluY3JlYXNlTGlxdWlkaXR5UmVxdWVzdBIKCgJpZBgBIAEoBBIRCglhbW91bnRfaW4YAiABKAkSEAoIZGVub21faW4YAyABKAkiZAopUXVlcnlDYWxjdWxhdGlvbkluY3JlYXNlTGlxdWlkaXR5UmVzcG9uc2USNwoOdG9rZW5fcmVxdWlyZWQYASABKAsyGS5jb3Ntb3MuYmFzZS52MWJldGExLkNvaW5CBMjeHwAyuA0KBVF1ZXJ5EoYBCgZQYXJhbXMSKS5zdW5yaXNlLmxpcXVpZGl0eXBvb2wuUXVlcnlQYXJhbXNSZXF1ZXN0Giouc3VucmlzZS5saXF1aWRpdHlwb29sLlF1ZXJ5UGFyYW1zUmVzcG9uc2UiJYLT5JMCHxIdL3N1bnJpc2UvbGlxdWlkaXR5cG9vbC9wYXJhbXMShAEKBFBvb2wSJy5zdW5yaXNlLmxpcXVpZGl0eXBvb2wuUXVlcnlQb29sUmVxdWVzdBooLnN1bnJpc2UubGlxdWlkaXR5cG9vbC5RdWVyeVBvb2xSZXNwb25zZSIpgtPkkwIjEiEvc3VucmlzZS9saXF1aWRpdHlwb29sL3Bvb2xzL3tpZH0SggEKBVBvb2xzEiguc3VucmlzZS5saXF1aWRpdHlwb29sLlF1ZXJ5UG9vbHNSZXF1ZXN0Gikuc3VucmlzZS5saXF1aWRpdHlwb29sLlF1ZXJ5UG9vbHNSZXNwb25zZSIkgtPkkwIeEhwvc3VucmlzZS9saXF1aWRpdHlwb29sL3Bvb2xzEpQBCghQb3NpdGlvbhIrLnN1bnJpc2UubGlxdWlkaXR5cG9vbC5RdWVyeVBvc2l0aW9uUmVxdWVzdBosLnN1bnJpc2UubGlxdWlkaXR5cG9vbC5RdWVyeVBvc2l0aW9uUmVzcG9uc2UiLYLT5JMCJxIlL3N1bnJpc2UvbGlxdWlkaXR5cG9vbC9wb3NpdGlvbnMve2lkfRKSAQoJUG9zaXRpb25zEiwuc3VucmlzZS5saXF1aWRpdHlwb29sLlF1ZXJ5UG9zaXRpb25zUmVxdWVzdBotLnN1bnJpc2UubGlxdWlkaXR5cG9vbC5RdWVyeVBvc2l0aW9uc1Jlc3BvbnNlIiiC0+STAiISIC9zdW5yaXNlL2xpcXVpZGl0eXBvb2wvcG9zaXRpb25zEq4BCg1Qb29sUG9zaXRpb25zEjAuc3VucmlzZS5saXF1aWRpdHlwb29sLlF1ZXJ5UG9vbFBvc2l0aW9uc1JlcXVlc3QaMS5zdW5yaXNlLmxpcXVpZGl0eXBvb2wuUXVlcnlQb29sUG9zaXRpb25zUmVzcG9uc2UiOILT5JMCMhIwL3N1bnJpc2UvbGlxdWlkaXR5cG9vbC9wb29scy97cG9vbF9pZH0vcG9zaXRpb25zErkBChBBZGRyZXNzUG9zaXRpb25zEjMuc3VucmlzZS5saXF1aWRpdHlwb29sLlF1ZXJ5QWRkcmVzc1Bvc2l0aW9uc1JlcXVlc3QaNC5zdW5yaXNlLmxpcXVpZGl0eXBvb2wuUXVlcnlBZGRyZXNzUG9zaXRpb25zUmVzcG9uc2UiOoLT5JMCNBIyL3N1bnJpc2UvbGlxdWlkaXR5cG9vbC9hZGRyZXNzL3thZGRyZXNzfS9wb3NpdGlvbnMSpQEKDFBvc2l0aW9uRmVlcxIvLnN1bnJpc2UubGlxdWlkaXR5cG9vbC5RdWVyeVBvc2l0aW9uRmVlc1JlcXVlc3QaMC5zdW5yaXNlLmxpcXVpZGl0eXBvb2wuUXVlcnlQb3NpdGlvbkZlZXNSZXNwb25zZSIygtPkkwIsEiovc3VucmlzZS9saXF1aWRpdHlwb29sL3Bvc2l0aW9ucy97aWR9L2ZlZXMS5QEKGUNhbGN1bGF0aW9uQ3JlYXRlUG9zaXRpb24SPC5zdW5yaXNlLmxpcXVpZGl0eXBvb2wuUXVlcnlDYWxjdWxhdGlvbkNyZWF0ZVBvc2l0aW9uUmVxdWVzdBo9LnN1bnJpc2UubGlxdWlkaXR5cG9vbC5RdWVyeUNhbGN1bGF0aW9uQ3JlYXRlUG9zaXRpb25SZXNwb25zZSJLgtPkkwJFEkMvc3VucmlzZS9saXF1aWRpdHlwb29sL3Bvb2xzL3twb29sX2lkfS9jYWxjdWxhdGlvbnMvY3JlYXRlLXBvc2l0aW9uEvABChxDYWxjdWxhdGlvbkluY3JlYXNlTGlxdWlkaXR5Ej8uc3VucmlzZS5saXF1aWRpdHlwb29sLlF1ZXJ5Q2FsY3VsYXRpb25JbmNyZWFzZUxpcXVpZGl0eVJlcXVlc3QaQC5zdW5yaXNlLmxpcXVpZGl0eXBvb2wuUXVlcnlDYWxjdWxhdGlvbkluY3JlYXNlTGlxdWlkaXR5UmVzcG9uc2UiTYLT5JMCRxJFL3N1bnJpc2UvbGlxdWlkaXR5cG9vbC9wb3NpdGlvbnMve2lkfS9jYWxjdWxhdGlvbnMvaW5jcmVhc2UtbGlxdWlkaXR5QtMBChljb20uc3VucmlzZS5saXF1aWRpdHlwb29sQgpRdWVyeVByb3RvUAFaNWdpdGh1Yi5jb20vc3VucmlzZWxheWVyL3N1bnJpc2UveC9saXF1aWRpdHlwb29sL3R5cGVzogIDU0xYqgIVU3VucmlzZS5MaXF1aWRpdHlwb29sygIVU3VucmlzZVxMaXF1aWRpdHlwb29s4gIhU3VucmlzZVxMaXF1aWRpdHlwb29sXEdQQk1ldGFkYXRh6gIWU3VucmlzZTo6TGlxdWlkaXR5cG9vbGIGcHJvdG8z", [file_cosmos_base_query_v1beta1_pagination, file_cosmos_base_v1beta1_coin, file_gogoproto_gogo, file_google_api_annotations, file_sunrise_liquiditypool_params, file_sunrise_liquiditypool_pool, file_sunrise_liquiditypool_position]);

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message sunrise.liquiditypool.QueryParamsRequest
 */
export type QueryParamsRequest = Message<"sunrise.liquiditypool.QueryParamsRequest"> & {
};

/**
 * Describes the message sunrise.liquiditypool.QueryParamsRequest.
 * Use `create(QueryParamsRequestSchema)` to create a new message.
 */
export const QueryParamsRequestSchema: GenMessage<QueryParamsRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 0);

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message sunrise.liquiditypool.QueryParamsResponse
 */
export type QueryParamsResponse = Message<"sunrise.liquiditypool.QueryParamsResponse"> & {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: sunrise.liquiditypool.Params params = 1;
   */
  params?: Params;
};

/**
 * Describes the message sunrise.liquiditypool.QueryParamsResponse.
 * Use `create(QueryParamsResponseSchema)` to create a new message.
 */
export const QueryParamsResponseSchema: GenMessage<QueryParamsResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 1);

/**
 * QueryPoolRequest
 *
 * @generated from message sunrise.liquiditypool.QueryPoolRequest
 */
export type QueryPoolRequest = Message<"sunrise.liquiditypool.QueryPoolRequest"> & {
  /**
   * @generated from field: uint64 id = 1;
   */
  id: bigint;
};

/**
 * Describes the message sunrise.liquiditypool.QueryPoolRequest.
 * Use `create(QueryPoolRequestSchema)` to create a new message.
 */
export const QueryPoolRequestSchema: GenMessage<QueryPoolRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 2);

/**
 * PoolInfo
 *
 * @generated from message sunrise.liquiditypool.PoolInfo
 */
export type PoolInfo = Message<"sunrise.liquiditypool.PoolInfo"> & {
  /**
   * @generated from field: sunrise.liquiditypool.Pool pool = 1;
   */
  pool?: Pool;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin token_base = 2;
   */
  tokenBase?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin token_quote = 3;
   */
  tokenQuote?: Coin;
};

/**
 * Describes the message sunrise.liquiditypool.PoolInfo.
 * Use `create(PoolInfoSchema)` to create a new message.
 */
export const PoolInfoSchema: GenMessage<PoolInfo> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 3);

/**
 * QueryPoolResponse
 *
 * @generated from message sunrise.liquiditypool.QueryPoolResponse
 */
export type QueryPoolResponse = Message<"sunrise.liquiditypool.QueryPoolResponse"> & {
  /**
   * @generated from field: sunrise.liquiditypool.PoolInfo pool = 1;
   */
  pool?: PoolInfo;
};

/**
 * Describes the message sunrise.liquiditypool.QueryPoolResponse.
 * Use `create(QueryPoolResponseSchema)` to create a new message.
 */
export const QueryPoolResponseSchema: GenMessage<QueryPoolResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 4);

/**
 * QueryPoolsRequest
 *
 * @generated from message sunrise.liquiditypool.QueryPoolsRequest
 */
export type QueryPoolsRequest = Message<"sunrise.liquiditypool.QueryPoolsRequest"> & {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;
};

/**
 * Describes the message sunrise.liquiditypool.QueryPoolsRequest.
 * Use `create(QueryPoolsRequestSchema)` to create a new message.
 */
export const QueryPoolsRequestSchema: GenMessage<QueryPoolsRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 5);

/**
 * QueryPoolsResponse
 *
 * @generated from message sunrise.liquiditypool.QueryPoolsResponse
 */
export type QueryPoolsResponse = Message<"sunrise.liquiditypool.QueryPoolsResponse"> & {
  /**
   * @generated from field: repeated sunrise.liquiditypool.PoolInfo pools = 1;
   */
  pools: PoolInfo[];

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;
};

/**
 * Describes the message sunrise.liquiditypool.QueryPoolsResponse.
 * Use `create(QueryPoolsResponseSchema)` to create a new message.
 */
export const QueryPoolsResponseSchema: GenMessage<QueryPoolsResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 6);

/**
 * QueryPositionRequest
 *
 * @generated from message sunrise.liquiditypool.QueryPositionRequest
 */
export type QueryPositionRequest = Message<"sunrise.liquiditypool.QueryPositionRequest"> & {
  /**
   * @generated from field: uint64 id = 1;
   */
  id: bigint;
};

/**
 * Describes the message sunrise.liquiditypool.QueryPositionRequest.
 * Use `create(QueryPositionRequestSchema)` to create a new message.
 */
export const QueryPositionRequestSchema: GenMessage<QueryPositionRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 7);

/**
 * PositionInfo
 *
 * @generated from message sunrise.liquiditypool.PositionInfo
 */
export type PositionInfo = Message<"sunrise.liquiditypool.PositionInfo"> & {
  /**
   * @generated from field: sunrise.liquiditypool.Position position = 1;
   */
  position?: Position;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin token_base = 2;
   */
  tokenBase?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin token_quote = 3;
   */
  tokenQuote?: Coin;
};

/**
 * Describes the message sunrise.liquiditypool.PositionInfo.
 * Use `create(PositionInfoSchema)` to create a new message.
 */
export const PositionInfoSchema: GenMessage<PositionInfo> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 8);

/**
 * QueryPositionResponse
 *
 * @generated from message sunrise.liquiditypool.QueryPositionResponse
 */
export type QueryPositionResponse = Message<"sunrise.liquiditypool.QueryPositionResponse"> & {
  /**
   * @generated from field: sunrise.liquiditypool.PositionInfo position = 1;
   */
  position?: PositionInfo;
};

/**
 * Describes the message sunrise.liquiditypool.QueryPositionResponse.
 * Use `create(QueryPositionResponseSchema)` to create a new message.
 */
export const QueryPositionResponseSchema: GenMessage<QueryPositionResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 9);

/**
 * QueryPositionsRequest
 *
 * @generated from message sunrise.liquiditypool.QueryPositionsRequest
 */
export type QueryPositionsRequest = Message<"sunrise.liquiditypool.QueryPositionsRequest"> & {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;
};

/**
 * Describes the message sunrise.liquiditypool.QueryPositionsRequest.
 * Use `create(QueryPositionsRequestSchema)` to create a new message.
 */
export const QueryPositionsRequestSchema: GenMessage<QueryPositionsRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 10);

/**
 * QueryPositionsResponse
 *
 * @generated from message sunrise.liquiditypool.QueryPositionsResponse
 */
export type QueryPositionsResponse = Message<"sunrise.liquiditypool.QueryPositionsResponse"> & {
  /**
   * @generated from field: repeated sunrise.liquiditypool.PositionInfo positions = 1;
   */
  positions: PositionInfo[];

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;
};

/**
 * Describes the message sunrise.liquiditypool.QueryPositionsResponse.
 * Use `create(QueryPositionsResponseSchema)` to create a new message.
 */
export const QueryPositionsResponseSchema: GenMessage<QueryPositionsResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 11);

/**
 * QueryPoolPositionsRequest
 *
 * @generated from message sunrise.liquiditypool.QueryPoolPositionsRequest
 */
export type QueryPoolPositionsRequest = Message<"sunrise.liquiditypool.QueryPoolPositionsRequest"> & {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId: bigint;
};

/**
 * Describes the message sunrise.liquiditypool.QueryPoolPositionsRequest.
 * Use `create(QueryPoolPositionsRequestSchema)` to create a new message.
 */
export const QueryPoolPositionsRequestSchema: GenMessage<QueryPoolPositionsRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 12);

/**
 * QueryPoolPositionsResponse
 *
 * @generated from message sunrise.liquiditypool.QueryPoolPositionsResponse
 */
export type QueryPoolPositionsResponse = Message<"sunrise.liquiditypool.QueryPoolPositionsResponse"> & {
  /**
   * @generated from field: repeated sunrise.liquiditypool.PositionInfo positions = 1;
   */
  positions: PositionInfo[];
};

/**
 * Describes the message sunrise.liquiditypool.QueryPoolPositionsResponse.
 * Use `create(QueryPoolPositionsResponseSchema)` to create a new message.
 */
export const QueryPoolPositionsResponseSchema: GenMessage<QueryPoolPositionsResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 13);

/**
 * QueryAddressPositionsRequest
 *
 * @generated from message sunrise.liquiditypool.QueryAddressPositionsRequest
 */
export type QueryAddressPositionsRequest = Message<"sunrise.liquiditypool.QueryAddressPositionsRequest"> & {
  /**
   * @generated from field: string address = 1;
   */
  address: string;
};

/**
 * Describes the message sunrise.liquiditypool.QueryAddressPositionsRequest.
 * Use `create(QueryAddressPositionsRequestSchema)` to create a new message.
 */
export const QueryAddressPositionsRequestSchema: GenMessage<QueryAddressPositionsRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 14);

/**
 * QueryAddressPositionsResponse
 *
 * @generated from message sunrise.liquiditypool.QueryAddressPositionsResponse
 */
export type QueryAddressPositionsResponse = Message<"sunrise.liquiditypool.QueryAddressPositionsResponse"> & {
  /**
   * @generated from field: repeated sunrise.liquiditypool.PositionInfo positions = 1;
   */
  positions: PositionInfo[];
};

/**
 * Describes the message sunrise.liquiditypool.QueryAddressPositionsResponse.
 * Use `create(QueryAddressPositionsResponseSchema)` to create a new message.
 */
export const QueryAddressPositionsResponseSchema: GenMessage<QueryAddressPositionsResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 15);

/**
 * QueryPositionFeesRequest
 *
 * @generated from message sunrise.liquiditypool.QueryPositionFeesRequest
 */
export type QueryPositionFeesRequest = Message<"sunrise.liquiditypool.QueryPositionFeesRequest"> & {
  /**
   * @generated from field: uint64 id = 1;
   */
  id: bigint;
};

/**
 * Describes the message sunrise.liquiditypool.QueryPositionFeesRequest.
 * Use `create(QueryPositionFeesRequestSchema)` to create a new message.
 */
export const QueryPositionFeesRequestSchema: GenMessage<QueryPositionFeesRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 16);

/**
 * QueryPositionFeesResponse
 *
 * @generated from message sunrise.liquiditypool.QueryPositionFeesResponse
 */
export type QueryPositionFeesResponse = Message<"sunrise.liquiditypool.QueryPositionFeesResponse"> & {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin fees = 1;
   */
  fees: Coin[];
};

/**
 * Describes the message sunrise.liquiditypool.QueryPositionFeesResponse.
 * Use `create(QueryPositionFeesResponseSchema)` to create a new message.
 */
export const QueryPositionFeesResponseSchema: GenMessage<QueryPositionFeesResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 17);

/**
 * QueryCalculationCreatePositionRequest
 *
 * @generated from message sunrise.liquiditypool.QueryCalculationCreatePositionRequest
 */
export type QueryCalculationCreatePositionRequest = Message<"sunrise.liquiditypool.QueryCalculationCreatePositionRequest"> & {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId: bigint;

  /**
   * @generated from field: string lower_tick = 2;
   */
  lowerTick: string;

  /**
   * @generated from field: string upper_tick = 3;
   */
  upperTick: string;

  /**
   * @generated from field: string amount = 4;
   */
  amount: string;

  /**
   * @generated from field: string denom = 5;
   */
  denom: string;
};

/**
 * Describes the message sunrise.liquiditypool.QueryCalculationCreatePositionRequest.
 * Use `create(QueryCalculationCreatePositionRequestSchema)` to create a new message.
 */
export const QueryCalculationCreatePositionRequestSchema: GenMessage<QueryCalculationCreatePositionRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 18);

/**
 * QueryCalculationCreatePositionResponse
 *
 * @generated from message sunrise.liquiditypool.QueryCalculationCreatePositionResponse
 */
export type QueryCalculationCreatePositionResponse = Message<"sunrise.liquiditypool.QueryCalculationCreatePositionResponse"> & {
  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 1;
   */
  amount?: Coin;
};

/**
 * Describes the message sunrise.liquiditypool.QueryCalculationCreatePositionResponse.
 * Use `create(QueryCalculationCreatePositionResponseSchema)` to create a new message.
 */
export const QueryCalculationCreatePositionResponseSchema: GenMessage<QueryCalculationCreatePositionResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 19);

/**
 * QueryCalculationIncreaseLiquidityRequest
 *
 * @generated from message sunrise.liquiditypool.QueryCalculationIncreaseLiquidityRequest
 */
export type QueryCalculationIncreaseLiquidityRequest = Message<"sunrise.liquiditypool.QueryCalculationIncreaseLiquidityRequest"> & {
  /**
   * @generated from field: uint64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: string amount_in = 2;
   */
  amountIn: string;

  /**
   * @generated from field: string denom_in = 3;
   */
  denomIn: string;
};

/**
 * Describes the message sunrise.liquiditypool.QueryCalculationIncreaseLiquidityRequest.
 * Use `create(QueryCalculationIncreaseLiquidityRequestSchema)` to create a new message.
 */
export const QueryCalculationIncreaseLiquidityRequestSchema: GenMessage<QueryCalculationIncreaseLiquidityRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 20);

/**
 * QueryCalculationIncreaseLiquidityResponse
 *
 * @generated from message sunrise.liquiditypool.QueryCalculationIncreaseLiquidityResponse
 */
export type QueryCalculationIncreaseLiquidityResponse = Message<"sunrise.liquiditypool.QueryCalculationIncreaseLiquidityResponse"> & {
  /**
   * @generated from field: cosmos.base.v1beta1.Coin token_required = 1;
   */
  tokenRequired?: Coin;
};

/**
 * Describes the message sunrise.liquiditypool.QueryCalculationIncreaseLiquidityResponse.
 * Use `create(QueryCalculationIncreaseLiquidityResponseSchema)` to create a new message.
 */
export const QueryCalculationIncreaseLiquidityResponseSchema: GenMessage<QueryCalculationIncreaseLiquidityResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_query, 21);

/**
 * Query defines the gRPC querier service.
 *
 * @generated from service sunrise.liquiditypool.Query
 */
export const Query: GenService<{
  /**
   * Parameters queries the parameters of the module.
   *
   * @generated from rpc sunrise.liquiditypool.Query.Params
   */
  params: {
    methodKind: "unary";
    input: typeof QueryParamsRequestSchema;
    output: typeof QueryParamsResponseSchema;
  },
  /**
   * Pool
   *
   * @generated from rpc sunrise.liquiditypool.Query.Pool
   */
  pool: {
    methodKind: "unary";
    input: typeof QueryPoolRequestSchema;
    output: typeof QueryPoolResponseSchema;
  },
  /**
   * Pools
   *
   * @generated from rpc sunrise.liquiditypool.Query.Pools
   */
  pools: {
    methodKind: "unary";
    input: typeof QueryPoolsRequestSchema;
    output: typeof QueryPoolsResponseSchema;
  },
  /**
   * Position
   *
   * @generated from rpc sunrise.liquiditypool.Query.Position
   */
  position: {
    methodKind: "unary";
    input: typeof QueryPositionRequestSchema;
    output: typeof QueryPositionResponseSchema;
  },
  /**
   * Positions
   *
   * @generated from rpc sunrise.liquiditypool.Query.Positions
   */
  positions: {
    methodKind: "unary";
    input: typeof QueryPositionsRequestSchema;
    output: typeof QueryPositionsResponseSchema;
  },
  /**
   * PoolPositions
   *
   * @generated from rpc sunrise.liquiditypool.Query.PoolPositions
   */
  poolPositions: {
    methodKind: "unary";
    input: typeof QueryPoolPositionsRequestSchema;
    output: typeof QueryPoolPositionsResponseSchema;
  },
  /**
   * AddressPositions
   *
   * @generated from rpc sunrise.liquiditypool.Query.AddressPositions
   */
  addressPositions: {
    methodKind: "unary";
    input: typeof QueryAddressPositionsRequestSchema;
    output: typeof QueryAddressPositionsResponseSchema;
  },
  /**
   * Query fees by position id
   *
   * @generated from rpc sunrise.liquiditypool.Query.PositionFees
   */
  positionFees: {
    methodKind: "unary";
    input: typeof QueryPositionFeesRequestSchema;
    output: typeof QueryPositionFeesResponseSchema;
  },
  /**
   * Query calculation another amount of create position
   *
   * @generated from rpc sunrise.liquiditypool.Query.CalculationCreatePosition
   */
  calculationCreatePosition: {
    methodKind: "unary";
    input: typeof QueryCalculationCreatePositionRequestSchema;
    output: typeof QueryCalculationCreatePositionResponseSchema;
  },
  /**
   * Query calculation another amount of increase liquidity
   *
   * @generated from rpc sunrise.liquiditypool.Query.CalculationIncreaseLiquidity
   */
  calculationIncreaseLiquidity: {
    methodKind: "unary";
    input: typeof QueryCalculationIncreaseLiquidityRequestSchema;
    output: typeof QueryCalculationIncreaseLiquidityResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_sunrise_liquiditypool_query, 0);

