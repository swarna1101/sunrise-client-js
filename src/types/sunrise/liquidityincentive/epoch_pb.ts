// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/liquidityincentive/epoch.proto (package sunrise.liquidityincentive, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../gogoproto/gogo_pb";
import type { Gauge } from "./gauge_pb";
import { file_sunrise_liquidityincentive_gauge } from "./gauge_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/liquidityincentive/epoch.proto.
 */
export const file_sunrise_liquidityincentive_epoch: GenFile = /*@__PURE__*/
  fileDesc("CiZzdW5yaXNlL2xpcXVpZGl0eWluY2VudGl2ZS9lcG9jaC5wcm90bxIac3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUidAoFRXBvY2gSCgoCaWQYASABKAQSEwoLc3RhcnRfYmxvY2sYAiABKAMSEQoJZW5kX2Jsb2NrGAMgASgDEjcKBmdhdWdlcxgEIAMoCzIhLnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLkdhdWdlQgTI3h8AQvEBCh5jb20uc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmVCCkVwb2NoUHJvdG9QAVo6Z2l0aHViLmNvbS9zdW5yaXNlbGF5ZXIvc3VucmlzZS94L2xpcXVpZGl0eWluY2VudGl2ZS90eXBlc6ICA1NMWKoCGlN1bnJpc2UuTGlxdWlkaXR5aW5jZW50aXZlygIaU3VucmlzZVxMaXF1aWRpdHlpbmNlbnRpdmXiAiZTdW5yaXNlXExpcXVpZGl0eWluY2VudGl2ZVxHUEJNZXRhZGF0YeoCG1N1bnJpc2U6OkxpcXVpZGl0eWluY2VudGl2ZWIGcHJvdG8z", [file_gogoproto_gogo, file_sunrise_liquidityincentive_gauge]);

/**
 * Epoch
 *
 * @generated from message sunrise.liquidityincentive.Epoch
 */
export type Epoch = Message<"sunrise.liquidityincentive.Epoch"> & {
  /**
   * @generated from field: uint64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: int64 start_block = 2;
   */
  startBlock: bigint;

  /**
   * @generated from field: int64 end_block = 3;
   */
  endBlock: bigint;

  /**
   * @generated from field: repeated sunrise.liquidityincentive.Gauge gauges = 4;
   */
  gauges: Gauge[];
};

/**
 * Describes the message sunrise.liquidityincentive.Epoch.
 * Use `create(EpochSchema)` to create a new message.
 */
export const EpochSchema: GenMessage<Epoch> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_epoch, 0);

