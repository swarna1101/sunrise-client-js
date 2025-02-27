// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/liquiditypool/v1/pool.proto (package sunrise.liquiditypool.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_amino_amino } from "../../../amino/amino_pb";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/liquiditypool/v1/pool.proto.
 */
export const file_sunrise_liquiditypool_v1_pool: GenFile = /*@__PURE__*/
  fileDesc("CiNzdW5yaXNlL2xpcXVpZGl0eXBvb2wvdjEvcG9vbC5wcm90bxIYc3VucmlzZS5saXF1aWRpdHlwb29sLnYxIpcCCgRQb29sEhEKAmlkGAEgASgEQgWo57AqARISCgpkZW5vbV9iYXNlGAIgASgJEhMKC2Rlbm9tX3F1b3RlGAMgASgJEiAKCGZlZV9yYXRlGAQgASgJQg7StC0KY29zbW9zLkRlYxI/Cgt0aWNrX3BhcmFtcxgFIAEoCzIkLnN1bnJpc2UubGlxdWlkaXR5cG9vbC52MS5UaWNrUGFyYW1zQgTI3h8AEhQKDGN1cnJlbnRfdGljaxgGIAEoAxIuChZjdXJyZW50X3RpY2tfbGlxdWlkaXR5GAcgASgJQg7StC0KY29zbW9zLkRlYxIqChJjdXJyZW50X3NxcnRfcHJpY2UYCCABKAlCDtK0LQpjb3Ntb3MuRGVjIlYKClRpY2tQYXJhbXMSIwoLcHJpY2VfcmF0aW8YASABKAlCDtK0LQpjb3Ntb3MuRGVjEiMKC2Jhc2Vfb2Zmc2V0GAIgASgJQg7StC0KY29zbW9zLkRlY0LiAQocY29tLnN1bnJpc2UubGlxdWlkaXR5cG9vbC52MUIJUG9vbFByb3RvUAFaNWdpdGh1Yi5jb20vc3VucmlzZWxheWVyL3N1bnJpc2UveC9saXF1aWRpdHlwb29sL3R5cGVzogIDU0xYqgIYU3VucmlzZS5MaXF1aWRpdHlwb29sLlYxygIYU3VucmlzZVxMaXF1aWRpdHlwb29sXFYx4gIkU3VucmlzZVxMaXF1aWRpdHlwb29sXFYxXEdQQk1ldGFkYXRh6gIaU3VucmlzZTo6TGlxdWlkaXR5cG9vbDo6VjFiBnByb3RvMw", [file_amino_amino, file_cosmos_proto_cosmos, file_gogoproto_gogo]);

/**
 * Pool
 *
 * @generated from message sunrise.liquiditypool.v1.Pool
 */
export type Pool = Message<"sunrise.liquiditypool.v1.Pool"> & {
  /**
   * @generated from field: uint64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: string denom_base = 2;
   */
  denomBase: string;

  /**
   * @generated from field: string denom_quote = 3;
   */
  denomQuote: string;

  /**
   * @generated from field: string fee_rate = 4;
   */
  feeRate: string;

  /**
   * @generated from field: sunrise.liquiditypool.v1.TickParams tick_params = 5;
   */
  tickParams?: TickParams;

  /**
   * @generated from field: int64 current_tick = 6;
   */
  currentTick: bigint;

  /**
   * @generated from field: string current_tick_liquidity = 7;
   */
  currentTickLiquidity: string;

  /**
   * @generated from field: string current_sqrt_price = 8;
   */
  currentSqrtPrice: string;
};

/**
 * Describes the message sunrise.liquiditypool.v1.Pool.
 * Use `create(PoolSchema)` to create a new message.
 */
export const PoolSchema: GenMessage<Pool> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_v1_pool, 0);

/**
 * TickParams
 * PriceRatio^(Tick - BaseOffSet)
 *
 * @generated from message sunrise.liquiditypool.v1.TickParams
 */
export type TickParams = Message<"sunrise.liquiditypool.v1.TickParams"> & {
  /**
   * Basically 1.0001
   *
   * @generated from field: string price_ratio = 1;
   */
  priceRatio: string;

  /**
   * basically 0 and (-1,0]. In the 1:1 stable pair, -0.5 would work
   *
   * @generated from field: string base_offset = 2;
   */
  baseOffset: string;
};

/**
 * Describes the message sunrise.liquiditypool.v1.TickParams.
 * Use `create(TickParamsSchema)` to create a new message.
 */
export const TickParamsSchema: GenMessage<TickParams> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_v1_pool, 1);

