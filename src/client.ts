import {
  AuthExtension,
  BankExtension,
  GovExtension,
  HttpEndpoint,
  IbcExtension,
  QueryClient,
  setupAuthExtension,
  setupBankExtension,
  setupGovExtension,
  setupIbcExtension,
  setupStakingExtension,
  setupTxExtension,
  StakingExtension,
  StargateClient,
  StargateClientOptions,
  TxExtension,
} from "@cosmjs/stargate";
import { CometClient, connectComet } from "@cosmjs/tendermint-rpc";

import {
  AccountsExtension,
  DaExtension,
  FeeExtension,
  GovV1Extension,
  LiquidityIncentiveExtension,
  LiquidityPoolExtension,
  setupAccountsExtension,
  setupDaExtension,
  setupFeeExtension,
  setupGovV1Extension,
  setupLiquidityIncentiveExtension,
  setupLiquidityPoolExtension,
  setupSwapExtension,
  setupTokenConverterExtension,
  SwapExtension,
  TokenConverterExtension,
} from "./extensions";

type Extensions = AuthExtension &
  BankExtension &
  StakingExtension &
  TxExtension &
  // Above are default
  GovExtension &
  IbcExtension &
  // Sunrise
  AccountsExtension &
  GovV1Extension &
  DaExtension &
  FeeExtension &
  LiquidityIncentiveExtension &
  LiquidityPoolExtension &
  SwapExtension &
  TokenConverterExtension;

export class SunriseClient extends StargateClient {
  private readonly _queryClient?: QueryClient & Extensions;

  static async connect(
    endpoint: string | HttpEndpoint,
    options: StargateClientOptions = {},
  ): Promise<SunriseClient> {
    const cometClient = await connectComet(endpoint);
    return SunriseClient.create(cometClient, options);
  }

  static async create(
    cometClient: CometClient,
    options: StargateClientOptions = {},
  ): Promise<SunriseClient> {
    return new SunriseClient(cometClient, options);
  }

  constructor(cometClient: CometClient | undefined, options: StargateClientOptions) {
    super(cometClient, options);

    if (cometClient) {
      this._queryClient = QueryClient.withExtensions(
        cometClient,
        setupAuthExtension,
        setupBankExtension,
        setupStakingExtension,
        setupTxExtension,
        setupGovExtension,
        setupIbcExtension,
        (base) => setupAccountsExtension(base, this.targetAddress),
        setupGovV1Extension,
        setupDaExtension,
        setupFeeExtension,
        setupLiquidityIncentiveExtension,
        setupLiquidityPoolExtension,
        setupSwapExtension,
        setupTokenConverterExtension,
      );
    }
  }

  private targetAddress: string = "";

  setTargetAddress(targetAddress: string) {
    this.targetAddress = targetAddress;
    if (this._queryClient) {
      (this._queryClient as any).lockup = setupAccountsExtension(
        this._queryClient,
        targetAddress,
      ).lockup;
    }
  }

  public getQueryClient(): (QueryClient & Extensions) | undefined {
    return this._queryClient;
  }

  public forceGetQueryClient(): QueryClient & Extensions {
    const queryClient = this.getQueryClient();
    if (!queryClient) {
      throw new Error(
        "Query client not available. You cannot use online functionality in offline mode.",
      );
    }
    return queryClient;
  }
}
