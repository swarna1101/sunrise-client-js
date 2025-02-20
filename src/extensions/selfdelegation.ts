import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import {
  QueryLockupAccountsByOwnerRequestSchema,
  QueryLockupAccountsByOwnerResponseSchema,
  QueryParamsRequestSchema,
  QueryParamsResponseSchema,
  QuerySelfDelegationProxyAccountByOwnerRequestSchema,
  QuerySelfDelegationProxyAccountByOwnerResponseSchema,
} from "../types/sunrise/selfdelegation";

export type SelfDelegationExtension = ReturnType<typeof setupSelfDelegationExtension>;

export function setupSelfDelegationExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const service = "sunrise.selfdelegation.v1.Query";

  return {
    selfdelegation: {
      params: queryFactory(
        rpc,
        service,
        "Params",
        QueryParamsRequestSchema,
        QueryParamsResponseSchema,
      ),
      selfDelegationProxyAccountByOwner: queryFactory(
        rpc,
        service,
        "SelfDelegationProxyAccount",
        QuerySelfDelegationProxyAccountByOwnerRequestSchema,
        QuerySelfDelegationProxyAccountByOwnerResponseSchema,
      ),
      lockupAccountsByOwner: queryFactory(
        rpc,
        service,
        "LockupAccountsByOwner",
        QueryLockupAccountsByOwnerRequestSchema,
        QueryLockupAccountsByOwnerResponseSchema,
      ),
    },
  };
}
