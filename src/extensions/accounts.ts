import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { accountsQueryFactory } from "../internal/query-factory";
import {
  QueryLockingPeriodsRequestSchema,
  QueryLockingPeriodsResponseSchema,
  QueryLockupAccountInfoRequestSchema,
  QueryLockupAccountInfoResponseSchema,
  QuerySpendableAmountRequestSchema,
  QuerySpendableAmountResponseSchema,
  QueryUnbondingEntriesRequestSchema,
  QueryUnbondingEntriesResponseSchema,
} from "../types/sunrise/accounts/self_delegatable_lockup";

export type AccountsExtension = ReturnType<typeof setupAccountsExtension>;

export function setupAccountsExtension(base: QueryClient, targetAddress: string) {
  const rpc = createProtobufRpcClient(base);
  const service = "sunrise.accounts.self_delegatable_lockup.v1.Query";

  return {
    lockup: {
      lockupAccountInfo: accountsQueryFactory(
        targetAddress,
        rpc,
        service,
        "LockupAccountInfo",
        QueryLockupAccountInfoRequestSchema,
        QueryLockupAccountInfoResponseSchema,
      ),
      unbondingEntries: accountsQueryFactory(
        targetAddress,
        rpc,
        service,
        "UnbondingEntries",
        QueryUnbondingEntriesRequestSchema,
        QueryUnbondingEntriesResponseSchema,
      ),
      lockingPeriods: accountsQueryFactory(
        targetAddress,
        rpc,
        service,
        "LockingPeriods",
        QueryLockingPeriodsRequestSchema,
        QueryLockingPeriodsResponseSchema,
      ),
      spendableAmount: accountsQueryFactory(
        targetAddress,
        rpc,
        service,
        "SpendableAmount",
        QuerySpendableAmountRequestSchema,
        QuerySpendableAmountResponseSchema,
      ),
    },
  };
}
