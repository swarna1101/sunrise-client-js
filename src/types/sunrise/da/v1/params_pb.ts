// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/da/v1/params.proto (package sunrise.da.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Coin } from "../../../cosmos/base/v1beta1/coin_pb";
import { file_cosmos_base_v1beta1_coin } from "../../../cosmos/base/v1beta1/coin_pb";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import type { Duration } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_duration } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/da/v1/params.proto.
 */
export const file_sunrise_da_v1_params: GenFile = /*@__PURE__*/
  fileDesc("ChpzdW5yaXNlL2RhL3YxL3BhcmFtcy5wcm90bxINc3VucmlzZS5kYS52MSK4BgoGUGFyYW1zEisKE2NoYWxsZW5nZV90aHJlc2hvbGQYASABKAlCDtK0LQpjb3Ntb3MuRGVjEioKEnJlcGxpY2F0aW9uX2ZhY3RvchgCIAEoCUIO0rQtCmNvc21vcy5EZWMSEwoLc2xhc2hfZXBvY2gYAyABKAQSLQoVc2xhc2hfZmF1bHRfdGhyZXNob2xkGAQgASgJQg7StC0KY29zbW9zLkRlYxImCg5zbGFzaF9mcmFjdGlvbhgFIAEoCUIO0rQtCmNvc21vcy5EZWMSPQoQY2hhbGxlbmdlX3BlcmlvZBgGIAEoCzIZLmdvb2dsZS5wcm90b2J1Zi5EdXJhdGlvbkIIyN4fAJjfHwESOQoMcHJvb2ZfcGVyaW9kGAcgASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uQgjI3h8AmN8fARJEChdyZWplY3RlZF9yZW1vdmFsX3BlcmlvZBgIIAEoCzIZLmdvb2dsZS5wcm90b2J1Zi5EdXJhdGlvbkIIyN4fAJjfHwESRAoXdmVyaWZpZWRfcmVtb3ZhbF9wZXJpb2QYCSABKAsyGS5nb29nbGUucHJvdG9idWYuRHVyYXRpb25CCMjeHwCY3x8BEmwKF3B1Ymxpc2hfZGF0YV9jb2xsYXRlcmFsGAogAygLMhkuY29zbW9zLmJhc2UudjFiZXRhMS5Db2luQjDI3h8Aqt8fKGdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuQ29pbnMScQocc3VibWl0X2ludmFsaWRpdHlfY29sbGF0ZXJhbBgLIAMoCzIZLmNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbkIwyN4fAKrfHyhnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkNvaW5zEhkKEXprcF92ZXJpZnlpbmdfa2V5GAwgASgMEhcKD3prcF9wcm92aW5nX2tleRgNIAEoDBIXCg9taW5fc2hhcmRfY291bnQYDiABKAQSFwoPbWF4X3NoYXJkX2NvdW50GA8gASgEEhYKDm1heF9zaGFyZF9zaXplGBAgASgEOgTooB8BQqIBChFjb20uc3VucmlzZS5kYS52MUILUGFyYW1zUHJvdG9QAVoqZ2l0aHViLmNvbS9zdW5yaXNlbGF5ZXIvc3VucmlzZS94L2RhL3R5cGVzogIDU0RYqgINU3VucmlzZS5EYS5WMcoCDVN1bnJpc2VcRGFcVjHiAhlTdW5yaXNlXERhXFYxXEdQQk1ldGFkYXRh6gIPU3VucmlzZTo6RGE6OlYxYgZwcm90bzM", [file_cosmos_base_v1beta1_coin, file_cosmos_proto_cosmos, file_gogoproto_gogo, file_google_protobuf_duration]);

/**
 * Params defines the parameters for the module.
 *
 * @generated from message sunrise.da.v1.Params
 */
export type Params = Message<"sunrise.da.v1.Params"> & {
  /**
   * Invalid shard threshold required to go to STATUS_CHALLENGING.
   *
   * @generated from field: string challenge_threshold = 1;
   */
  challengeThreshold: string;

  /**
   * https://docs.sunriselayer.io/learn/sunrise/data-availability#the-condition-of-data-availability
   *
   * @generated from field: string replication_factor = 2;
   */
  replicationFactor: string;

  /**
   * How many blocks of slash are done every
   *
   * @generated from field: uint64 slash_epoch = 3;
   */
  slashEpoch: bigint;

  /**
   * (number of challenges a validator did not submit proof / number of all challenge) is over this threshold in an epoch
   * that validator will be slashed
   *
   * @generated from field: string slash_fault_threshold = 4;
   */
  slashFaultThreshold: string;

  /**
   * voting power deducted during slash
   *
   * @generated from field: string slash_fraction = 5;
   */
  slashFraction: string;

  /**
   * @generated from field: google.protobuf.Duration challenge_period = 6;
   */
  challengePeriod?: Duration;

  /**
   * @generated from field: google.protobuf.Duration proof_period = 7;
   */
  proofPeriod?: Duration;

  /**
   * @generated from field: google.protobuf.Duration rejected_removal_period = 8;
   */
  rejectedRemovalPeriod?: Duration;

  /**
   * @generated from field: google.protobuf.Duration verified_removal_period = 9;
   */
  verifiedRemovalPeriod?: Duration;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin publish_data_collateral = 10;
   */
  publishDataCollateral: Coin[];

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin submit_invalidity_collateral = 11;
   */
  submitInvalidityCollateral: Coin[];

  /**
   * @generated from field: bytes zkp_verifying_key = 12;
   */
  zkpVerifyingKey: Uint8Array;

  /**
   * proving key used in sunrise-data
   *
   * @generated from field: bytes zkp_proving_key = 13;
   */
  zkpProvingKey: Uint8Array;

  /**
   * min_shard_count used in sunrise-data
   *
   * @generated from field: uint64 min_shard_count = 14;
   */
  minShardCount: bigint;

  /**
   * max_shard_count used in sunrise-data
   *
   * @generated from field: uint64 max_shard_count = 15;
   */
  maxShardCount: bigint;

  /**
   * max_shard_size used in sunrise-data
   *
   * @generated from field: uint64 max_shard_size = 16;
   */
  maxShardSize: bigint;
};

/**
 * Describes the message sunrise.da.v1.Params.
 * Use `create(ParamsSchema)` to create a new message.
 */
export const ParamsSchema: GenMessage<Params> = /*@__PURE__*/
  messageDesc(file_sunrise_da_v1_params, 0);

