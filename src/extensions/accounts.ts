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

  return {
    lockup: {
      lockupAccountInfo: accountsQueryFactory(
        targetAddress,
        rpc,
        QueryLockupAccountInfoRequestSchema,
        QueryLockupAccountInfoResponseSchema,
      ),
      unbondingEntries: accountsQueryFactory(
        targetAddress,
        rpc,
        QueryUnbondingEntriesRequestSchema,
        QueryUnbondingEntriesResponseSchema,
      ),
      lockingPeriods: accountsQueryFactory(
        targetAddress,
        rpc,
        QueryLockingPeriodsRequestSchema,
        QueryLockingPeriodsResponseSchema,
      ),
      spendableAmount: accountsQueryFactory(
        targetAddress,
        rpc,
        QuerySpendableAmountRequestSchema,
        QuerySpendableAmountResponseSchema,
      ),
    },
  };
}
