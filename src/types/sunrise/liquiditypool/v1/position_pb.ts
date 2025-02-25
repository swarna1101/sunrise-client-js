// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/liquiditypool/v1/position.proto (package sunrise.liquiditypool.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_amino_amino } from "../../../amino/amino_pb";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/liquiditypool/v1/position.proto.
 */
export const file_sunrise_liquiditypool_v1_position: GenFile = /*@__PURE__*/
  fileDesc("CidzdW5yaXNlL2xpcXVpZGl0eXBvb2wvdjEvcG9zaXRpb24ucHJvdG8SGHN1bnJpc2UubGlxdWlkaXR5cG9vbC52MSK5AQoIUG9zaXRpb24SEQoCaWQYASABKARCBajnsCoBEikKB2FkZHJlc3MYAiABKAlCGNK0LRRjb3Ntb3MuQWRkcmVzc1N0cmluZxIWCgdwb29sX2lkGAMgASgEQgWo57AqARIZCgpsb3dlcl90aWNrGAQgASgDQgWo57AqARIZCgp1cHBlcl90aWNrGAUgASgDQgWo57AqARIhCglsaXF1aWRpdHkYBiABKAlCDtK0LQpjb3Ntb3MuRGVjQuYBChxjb20uc3VucmlzZS5saXF1aWRpdHlwb29sLnYxQg1Qb3NpdGlvblByb3RvUAFaNWdpdGh1Yi5jb20vc3VucmlzZWxheWVyL3N1bnJpc2UveC9saXF1aWRpdHlwb29sL3R5cGVzogIDU0xYqgIYU3VucmlzZS5MaXF1aWRpdHlwb29sLlYxygIYU3VucmlzZVxMaXF1aWRpdHlwb29sXFYx4gIkU3VucmlzZVxMaXF1aWRpdHlwb29sXFYxXEdQQk1ldGFkYXRh6gIaU3VucmlzZTo6TGlxdWlkaXR5cG9vbDo6VjFiBnByb3RvMw", [file_amino_amino, file_cosmos_proto_cosmos]);

/**
 * Position
 *
 * @generated from message sunrise.liquiditypool.v1.Position
 */
export type Position = Message<"sunrise.liquiditypool.v1.Position"> & {
  /**
   * @generated from field: uint64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: string address = 2;
   */
  address: string;

  /**
   * @generated from field: uint64 pool_id = 3;
   */
  poolId: bigint;

  /**
   * @generated from field: int64 lower_tick = 4;
   */
  lowerTick: bigint;

  /**
   * @generated from field: int64 upper_tick = 5;
   */
  upperTick: bigint;

  /**
   * @generated from field: string liquidity = 6;
   */
  liquidity: string;
};

/**
 * Describes the message sunrise.liquiditypool.v1.Position.
 * Use `create(PositionSchema)` to create a new message.
 */
export const PositionSchema: GenMessage<Position> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_v1_position, 0);

