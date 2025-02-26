import { create, fromBinary, Message, MessageInitShape, toBinary } from "@bufbuild/protobuf";
import { GenMessage } from "@bufbuild/protobuf/codegenv1";
import { ProtobufRpcClient } from "@cosmjs/stargate";

import { AccountQueryRequestSchema, AccountQueryResponseSchema } from "../types/cosmos/accounts";
import { packAny } from "./type-url";

export function queryFactory<Req extends Message, Res extends Message>(
  rpc: ProtobufRpcClient,
  service: string,
  method: string,
  reqSchema: GenMessage<Req>,
  resSchema: GenMessage<Res>,
): (req: MessageInitShape<GenMessage<Req>>) => Promise<Res> {
  return async (req) => {
    const reqBinary = toBinary(reqSchema, create(reqSchema, req));
    const resBinary = await rpc.request(service, method, reqBinary);
    const res = fromBinary(resSchema, resBinary);

    return res;
  };
}

export function accountsQueryFactory<Req extends Message, Res extends Message>(
  targetAddress: string,
  rpc: ProtobufRpcClient,
  reqSchema: GenMessage<Req>,
  resSchema: GenMessage<Res>,
): (req: MessageInitShape<GenMessage<Req>>) => Promise<Res> {
  return async (req) => {
    const reqAny = packAny(reqSchema, create(reqSchema, req));
    const accountReqBinary = toBinary(
      AccountQueryRequestSchema,
      create(AccountQueryRequestSchema, { target: targetAddress, request: reqAny }),
    );
    const resBinary = await rpc.request(
      "cosmos.accounts.v1.Query",
      "AccountQuery",
      accountReqBinary,
    );
    const accountRes = fromBinary(AccountQueryResponseSchema, resBinary);
    if (!accountRes.response) {
      throw new Error("Unexpected response");
    }
    const res = fromBinary(resSchema, accountRes.response.value);

    return res;
  };
}
