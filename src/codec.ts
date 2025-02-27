import { create, Message, MessageInitShape } from "@bufbuild/protobuf";
import { GenMessage } from "@bufbuild/protobuf/codegenv1";
import { Any } from "@bufbuild/protobuf/wkt";
import { Registry } from "@cosmjs/proto-signing";
import type { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";
import { defaultRegistryTypes } from "@cosmjs/stargate";

import { convertBufProtocGenEsTypeToPbJsType } from "./internal/registry-adapter";
import { getTypeUrl, packAny } from "./internal/type-url";
import * as accounts from "./types/cosmos/accounts";
import * as circuit from "./types/cosmos/circuit";
import * as group from "./types/cosmos/group";
import * as mint from "./types/cosmos/mint";
import * as nft from "./types/cosmos/nft";
import * as protocolpool from "./types/cosmos/protocolpool";
import * as slashing from "./types/cosmos/slashing";
import * as upgrade from "./types/cosmos/upgrade";
import * as lockup from "./types/sunrise/accounts/self_delegatable_lockup";
import * as proxy from "./types/sunrise/accounts/self_delegation_proxy";
import * as da from "./types/sunrise/da";
import * as fee from "./types/sunrise/fee";
import * as liquidityincentive from "./types/sunrise/liquidityincentive";
import * as liquiditypool from "./types/sunrise/liquiditypool";
import * as swap from "./types/sunrise/swap";
import * as tokenconverter from "./types/sunrise/tokenconverter";

const schemas: GenMessage<Message>[] = [
  // sunrise
  lockup.MsgSelfDelegateSchema,
  lockup.MsgWithdrawSelfDelegationUnbondedSchema,
  lockup.MsgSendSchema,
  proxy.MsgUndelegateSchema,
  proxy.MsgWithdrawRewardSchema,
  proxy.MsgSendSchema,
  da.ParamsSchema,
  da.MsgUpdateParamsSchema,
  da.MsgPublishDataSchema,
  da.MsgSubmitValidityProofSchema,
  da.MsgSubmitInvaliditySchema,
  da.MsgRegisterProofDeputySchema,
  da.MsgUnregisterProofDeputySchema,
  fee.ParamsSchema,
  fee.MsgUpdateParamsSchema,
  liquidityincentive.ParamsSchema,
  liquidityincentive.MsgUpdateParamsSchema,
  liquidityincentive.MsgVoteGaugeSchema,
  liquidityincentive.MsgCollectVoteRewardsSchema,
  liquiditypool.ParamsSchema,
  liquiditypool.MsgUpdateParamsSchema,
  liquiditypool.MsgCreatePoolSchema,
  liquiditypool.MsgCreatePositionSchema,
  liquiditypool.MsgIncreaseLiquiditySchema,
  liquiditypool.MsgDecreaseLiquiditySchema,
  liquiditypool.MsgClaimRewardsSchema,
  swap.ParamsSchema,
  swap.MsgUpdateParamsSchema,
  swap.MsgSwapExactAmountInSchema,
  swap.MsgSwapExactAmountOutSchema,
  tokenconverter.ParamsSchema,
  tokenconverter.MsgUpdateParamsSchema,
  tokenconverter.MsgConvertSchema,
  // cosmos not included cosmjs
  accounts.MsgInitSchema,
  accounts.MsgExecuteSchema,
  accounts.MsgExecuteBundleSchema,
  circuit.MsgAuthorizeCircuitBreakerSchema,
  circuit.MsgResetCircuitBreakerSchema,
  circuit.MsgTripCircuitBreakerSchema,
  group.MsgCreateGroupPolicySchema,
  group.MsgCreateGroupSchema,
  group.MsgCreateGroupWithPolicySchema,
  group.MsgExecSchema,
  group.MsgLeaveGroupSchema,
  group.MsgSubmitProposalSchema,
  group.MsgUpdateGroupAdminSchema,
  group.MsgUpdateGroupMembersSchema,
  group.MsgUpdateGroupMetadataSchema,
  group.MsgUpdateGroupPolicyAdminSchema,
  group.MsgUpdateGroupPolicyDecisionPolicySchema,
  group.MsgUpdateGroupPolicyMetadataSchema,
  group.MsgVoteSchema,
  group.MsgWithdrawProposalSchema,
  mint.MsgUpdateParamsSchema,
  nft.MsgSendSchema,
  protocolpool.MsgCancelContinuousFundSchema,
  protocolpool.MsgClaimBudgetSchema,
  protocolpool.MsgCommunityPoolSpendSchema,
  protocolpool.MsgCreateContinuousFundSchema,
  protocolpool.MsgFundCommunityPoolSchema,
  protocolpool.MsgSubmitBudgetProposalSchema,
  protocolpool.MsgUpdateParamsSchema,
  protocolpool.MsgWithdrawContinuousFundSchema,
  slashing.MsgUnjailSchema,
  slashing.MsgUpdateParamsSchema,
  upgrade.MsgCancelUpgradeSchema,
  upgrade.MsgSoftwareUpgradeSchema,
];

export const sunriseTypesRegistry = new Registry([
  ...defaultRegistryTypes,
  ...schemas.map<[string, GeneratedType]>((schema) => [
    getTypeUrl(schema),
    new convertBufProtocGenEsTypeToPbJsType(schema),
  ]),
]);

export function createEncodeObject<T extends Message>(
  schema: GenMessage<T>,
  value: MessageInitShape<GenMessage<T>>,
): EncodeObject {
  return {
    typeUrl: getTypeUrl(schema),
    value,
  };
}

export function createAnyMessage<T extends Message>(
  schema: GenMessage<Message>,
  value: MessageInitShape<GenMessage<T>>,
): Any {
  const msg = create(schema, value);
  return packAny(schema, msg);
}

export function decodeAnyMessage(message: Any) {
  const msg = sunriseTypesRegistry.decode(message);
  return msg;
}
