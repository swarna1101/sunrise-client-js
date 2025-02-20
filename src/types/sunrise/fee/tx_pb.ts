// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/fee/tx.proto (package sunrise.fee, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_cosmos_msg_v1_msg } from "../../cosmos/msg/v1/msg_pb";
import { file_cosmos_proto_cosmos } from "../../cosmos_proto/cosmos_pb";
import { file_gogoproto_gogo } from "../../gogoproto/gogo_pb";
import type { Params } from "./params_pb";
import { file_sunrise_fee_params } from "./params_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/fee/tx.proto.
 */
export const file_sunrise_fee_tx: GenFile = /*@__PURE__*/
  fileDesc("ChRzdW5yaXNlL2ZlZS90eC5wcm90bxILc3VucmlzZS5mZWUieQoPTXNnVXBkYXRlUGFyYW1zEisKCWF1dGhvcml0eRgBIAEoCUIY0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nEikKBnBhcmFtcxgCIAEoCzITLnN1bnJpc2UuZmVlLlBhcmFtc0IEyN4fADoOguewKglhdXRob3JpdHkiGQoXTXNnVXBkYXRlUGFyYW1zUmVzcG9uc2UyYAoDTXNnElIKDFVwZGF0ZVBhcmFtcxIcLnN1bnJpc2UuZmVlLk1zZ1VwZGF0ZVBhcmFtcxokLnN1bnJpc2UuZmVlLk1zZ1VwZGF0ZVBhcmFtc1Jlc3BvbnNlGgWA57AqAUKUAQoPY29tLnN1bnJpc2UuZmVlQgdUeFByb3RvUAFaK2dpdGh1Yi5jb20vc3VucmlzZWxheWVyL3N1bnJpc2UveC9mZWUvdHlwZXOiAgNTRliqAgtTdW5yaXNlLkZlZcoCC1N1bnJpc2VcRmVl4gIXU3VucmlzZVxGZWVcR1BCTWV0YWRhdGHqAgxTdW5yaXNlOjpGZWViBnByb3RvMw", [file_cosmos_msg_v1_msg, file_cosmos_proto_cosmos, file_gogoproto_gogo, file_sunrise_fee_params]);

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * @generated from message sunrise.fee.MsgUpdateParams
 */
export type MsgUpdateParams = Message<"sunrise.fee.MsgUpdateParams"> & {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   *
   * @generated from field: string authority = 1;
   */
  authority: string;

  /**
   * params defines the module parameters to update.
   *
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: sunrise.fee.Params params = 2;
   */
  params?: Params;
};

/**
 * Describes the message sunrise.fee.MsgUpdateParams.
 * Use `create(MsgUpdateParamsSchema)` to create a new message.
 */
export const MsgUpdateParamsSchema: GenMessage<MsgUpdateParams> = /*@__PURE__*/
  messageDesc(file_sunrise_fee_tx, 0);

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * @generated from message sunrise.fee.MsgUpdateParamsResponse
 */
export type MsgUpdateParamsResponse = Message<"sunrise.fee.MsgUpdateParamsResponse"> & {
};

/**
 * Describes the message sunrise.fee.MsgUpdateParamsResponse.
 * Use `create(MsgUpdateParamsResponseSchema)` to create a new message.
 */
export const MsgUpdateParamsResponseSchema: GenMessage<MsgUpdateParamsResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_fee_tx, 1);

/**
 * Msg defines the Msg service.
 *
 * @generated from service sunrise.fee.Msg
 */
export const Msg: GenService<{
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   *
   * @generated from rpc sunrise.fee.Msg.UpdateParams
   */
  updateParams: {
    methodKind: "unary";
    input: typeof MsgUpdateParamsSchema;
    output: typeof MsgUpdateParamsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_sunrise_fee_tx, 0);

