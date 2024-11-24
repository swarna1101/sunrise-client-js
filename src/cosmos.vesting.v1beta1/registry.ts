import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreatePermanentLockedAccountResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/tx";
import { BaseVestingAccount } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/vesting";
import { MsgCreatePeriodicVestingAccount } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/tx";
import { MsgCreatePeriodicVestingAccountResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/tx";
import { ContinuousVestingAccount } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/vesting";
import { DelayedVestingAccount } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/vesting";
import { PeriodicVestingAccount } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/vesting";
import { MsgCreateVestingAccount } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/tx";
import { MsgCreateVestingAccountResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/tx";
import { MsgCreatePermanentLockedAccount } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/tx";
import { PermanentLockedAccount } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/vesting";
import { Period } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/vesting";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse", MsgCreatePermanentLockedAccountResponse],
    ["/cosmos.vesting.v1beta1.BaseVestingAccount", BaseVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount", MsgCreatePeriodicVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse", MsgCreatePeriodicVestingAccountResponse],
    ["/cosmos.vesting.v1beta1.ContinuousVestingAccount", ContinuousVestingAccount],
    ["/cosmos.vesting.v1beta1.DelayedVestingAccount", DelayedVestingAccount],
    ["/cosmos.vesting.v1beta1.PeriodicVestingAccount", PeriodicVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", MsgCreateVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse", MsgCreateVestingAccountResponse],
    ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount", MsgCreatePermanentLockedAccount],
    ["/cosmos.vesting.v1beta1.PermanentLockedAccount", PermanentLockedAccount],
    ["/cosmos.vesting.v1beta1.Period", Period],
    
];

export { msgTypes }