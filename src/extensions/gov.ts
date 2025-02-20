import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import {
  QueryConstitutionRequestSchema,
  QueryConstitutionResponseSchema,
  QueryDepositRequestSchema,
  QueryDepositResponseSchema,
  QueryDepositsRequestSchema,
  QueryDepositsResponseSchema,
  QueryMessageBasedParamsRequestSchema,
  QueryMessageBasedParamsResponseSchema,
  QueryParamsRequestSchema,
  QueryParamsResponseSchema,
  QueryProposalRequestSchema,
  QueryProposalResponseSchema,
  QueryProposalsRequestSchema,
  QueryProposalsResponseSchema,
  QueryTallyResultRequestSchema,
  QueryTallyResultResponseSchema,
  QueryVoteRequestSchema,
  QueryVoteResponseSchema,
  QueryVotesRequestSchema,
  QueryVotesResponseSchema,
} from "../types/cosmos/gov";

export type GovExtension = ReturnType<typeof setupGovExtension>;

export function setupGovExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const service = "sunrise.gov.Query";

  return {
    gov: {
      constitution: queryFactory(
        rpc,
        service,
        "Constitution",
        QueryConstitutionRequestSchema,
        QueryConstitutionResponseSchema,
      ),
      proposal: queryFactory(
        rpc,
        service,
        "Proposal",
        QueryProposalRequestSchema,
        QueryProposalResponseSchema,
      ),
      proposals: queryFactory(
        rpc,
        service,
        "Proposals",
        QueryProposalsRequestSchema,
        QueryProposalsResponseSchema,
      ),
      vote: queryFactory(rpc, service, "Vote", QueryVoteRequestSchema, QueryVoteResponseSchema),
      votes: queryFactory(rpc, service, "Votes", QueryVotesRequestSchema, QueryVotesResponseSchema),
      params: queryFactory(
        rpc,
        service,
        "Params",
        QueryParamsRequestSchema,
        QueryParamsResponseSchema,
      ),
      eposit: queryFactory(
        rpc,
        service,
        "Deposit",
        QueryDepositRequestSchema,
        QueryDepositResponseSchema,
      ),
      deposits: queryFactory(
        rpc,
        service,
        "Deposits",
        QueryDepositsRequestSchema,
        QueryDepositsResponseSchema,
      ),
      tallyResult: queryFactory(
        rpc,
        service,
        "TallyResult",
        QueryTallyResultRequestSchema,
        QueryTallyResultResponseSchema,
      ),
      messageBasedParams: queryFactory(
        rpc,
        service,
        "MessageBasedParams",
        QueryMessageBasedParamsRequestSchema,
        QueryMessageBasedParamsResponseSchema,
      ),
    },
  };
}
