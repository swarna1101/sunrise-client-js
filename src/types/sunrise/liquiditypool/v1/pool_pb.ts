// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/liquiditypool/v1/pool.proto (package sunrise.liquiditypool.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/liquiditypool/v1/pool.proto.
 */
export const file_sunrise_liquiditypool_v1_pool: GenFile = /*@__PURE__*/
  fileDesc("CiNzdW5yaXNlL2xpcXVpZGl0eXBvb2wvdjEvcG9vbC5wcm90bxIYc3VucmlzZS5saXF1aWRpdHlwb29sLnYxIvkCCgRQb29sEgoKAmlkGAEgASgEEhIKCmRlbm9tX2Jhc2UYAiABKAkSEwoLZGVub21fcXVvdGUYAyABKAkSQwoIZmVlX3JhdGUYBCABKAlCMcjeHwDa3h8bY29zbW9zc2RrLmlvL21hdGguTGVnYWN5RGVj0rQtCmNvc21vcy5EZWMSPwoLdGlja19wYXJhbXMYBSABKAsyJC5zdW5yaXNlLmxpcXVpZGl0eXBvb2wudjEuVGlja1BhcmFtc0IEyN4fABIUCgxjdXJyZW50X3RpY2sYBiABKAMSUQoWY3VycmVudF90aWNrX2xpcXVpZGl0eRgHIAEoCUIxyN4fANreHxtjb3Ntb3NzZGsuaW8vbWF0aC5MZWdhY3lEZWPStC0KY29zbW9zLkRlYxJNChJjdXJyZW50X3NxcnRfcHJpY2UYCCABKAlCMcjeHwDa3h8bY29zbW9zc2RrLmlvL21hdGguTGVnYWN5RGVj0rQtCmNvc21vcy5EZWMinAEKClRpY2tQYXJhbXMSRgoLcHJpY2VfcmF0aW8YASABKAlCMcjeHwDa3h8bY29zbW9zc2RrLmlvL21hdGguTGVnYWN5RGVj0rQtCmNvc21vcy5EZWMSRgoLYmFzZV9vZmZzZXQYAiABKAlCMcjeHwDa3h8bY29zbW9zc2RrLmlvL21hdGguTGVnYWN5RGVj0rQtCmNvc21vcy5EZWNC4gEKHGNvbS5zdW5yaXNlLmxpcXVpZGl0eXBvb2wudjFCCVBvb2xQcm90b1ABWjVnaXRodWIuY29tL3N1bnJpc2VsYXllci9zdW5yaXNlL3gvbGlxdWlkaXR5cG9vbC90eXBlc6ICA1NMWKoCGFN1bnJpc2UuTGlxdWlkaXR5cG9vbC5WMcoCGFN1bnJpc2VcTGlxdWlkaXR5cG9vbFxWMeICJFN1bnJpc2VcTGlxdWlkaXR5cG9vbFxWMVxHUEJNZXRhZGF0YeoCGlN1bnJpc2U6OkxpcXVpZGl0eXBvb2w6OlYxYgZwcm90bzM", [file_cosmos_proto_cosmos, file_gogoproto_gogo]);

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

