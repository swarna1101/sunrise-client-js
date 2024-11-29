// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/da/published_data.proto (package sunrise.da, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import { file_amino_amino } from "../../amino/amino_pb";
import { file_cosmos_msg_v1_msg } from "../../cosmos/msg/v1/msg_pb";
import { file_cosmos_proto_cosmos } from "../../cosmos_proto/cosmos_pb";
import { file_gogoproto_gogo } from "../../gogoproto/gogo_pb";
import { file_sunrise_da_params } from "./params_pb";
import type { Coin } from "../../cosmos/base/v1beta1/coin_pb";
import { file_cosmos_base_v1beta1_coin } from "../../cosmos/base/v1beta1/coin_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/da/published_data.proto.
 */
export const file_sunrise_da_published_data: GenFile = /*@__PURE__*/
  fileDesc("Ch9zdW5yaXNlL2RhL3B1Ymxpc2hlZF9kYXRhLnByb3RvEgpzdW5yaXNlLmRhIowDCg1QdWJsaXNoZWREYXRhEhQKDG1ldGFkYXRhX3VyaRgBIAEoCRIaChJwYXJpdHlfc2hhcmRfY291bnQYAiABKAQSGwoTc2hhcmRfZG91YmxlX2hhc2hlcxgDIAMoDBI3Cgl0aW1lc3RhbXAYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgjI3h8AkN8fARIOCgZzdGF0dXMYBSABKAkSEQoJcHVibGlzaGVyGAYgASgJEhIKCmNoYWxsZW5nZXIYByABKAkSXwoKY29sbGF0ZXJhbBgIIAMoCzIZLmNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbkIwyN4fAKrfHyhnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkNvaW5zEkEKE2NoYWxsZW5nZV90aW1lc3RhbXAYCSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgjI3h8AkN8fARIYChBkYXRhX3NvdXJjZV9pbmZvGAogASgJImUKBVByb29mEhQKDG1ldGFkYXRhX3VyaRgBIAEoCRIOCgZzZW5kZXIYAiABKAkSDwoHaW5kaWNlcxgDIAMoAxIOCgZwcm9vZnMYBCADKAwSFQoNaXNfdmFsaWRfZGF0YRgFIAEoCEKZAQoOY29tLnN1bnJpc2UuZGFCElB1Ymxpc2hlZERhdGFQcm90b1ABWipnaXRodWIuY29tL3N1bnJpc2VsYXllci9zdW5yaXNlL3gvZGEvdHlwZXOiAgNTRFiqAgpTdW5yaXNlLkRhygIKU3VucmlzZVxEYeICFlN1bnJpc2VcRGFcR1BCTWV0YWRhdGHqAgtTdW5yaXNlOjpEYWIGcHJvdG8z", [file_google_protobuf_timestamp, file_amino_amino, file_cosmos_msg_v1_msg, file_cosmos_proto_cosmos, file_gogoproto_gogo, file_sunrise_da_params, file_cosmos_base_v1beta1_coin]);

/**
 * @generated from message sunrise.da.PublishedData
 */
export type PublishedData = Message<"sunrise.da.PublishedData"> & {
  /**
   * @generated from field: string metadata_uri = 1;
   */
  metadataUri: string;

  /**
   * @generated from field: uint64 parity_shard_count = 2;
   */
  parityShardCount: bigint;

  /**
   * @generated from field: repeated bytes shard_double_hashes = 3;
   */
  shardDoubleHashes: Uint8Array[];

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 4;
   */
  timestamp?: Timestamp;

  /**
   * TODO: to be replaced with enum
   *
   * @generated from field: string status = 5;
   */
  status: string;

  /**
   * @generated from field: string publisher = 6;
   */
  publisher: string;

  /**
   * @generated from field: string challenger = 7;
   */
  challenger: string;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin collateral = 8;
   */
  collateral: Coin[];

  /**
   * @generated from field: google.protobuf.Timestamp challenge_timestamp = 9;
   */
  challengeTimestamp?: Timestamp;

  /**
   * @generated from field: string data_source_info = 10;
   */
  dataSourceInfo: string;
};

/**
 * Describes the message sunrise.da.PublishedData.
 * Use `create(PublishedDataSchema)` to create a new message.
 */
export const PublishedDataSchema: GenMessage<PublishedData> = /*@__PURE__*/
  messageDesc(file_sunrise_da_published_data, 0);

/**
 * @generated from message sunrise.da.Proof
 */
export type Proof = Message<"sunrise.da.Proof"> & {
  /**
   * @generated from field: string metadata_uri = 1;
   */
  metadataUri: string;

  /**
   * @generated from field: string sender = 2;
   */
  sender: string;

  /**
   * @generated from field: repeated int64 indices = 3;
   */
  indices: bigint[];

  /**
   * @generated from field: repeated bytes proofs = 4;
   */
  proofs: Uint8Array[];

  /**
   * @generated from field: bool is_valid_data = 5;
   */
  isValidData: boolean;
};

/**
 * Describes the message sunrise.da.Proof.
 * Use `create(ProofSchema)` to create a new message.
 */
export const ProofSchema: GenMessage<Proof> = /*@__PURE__*/
  messageDesc(file_sunrise_da_published_data, 1);

