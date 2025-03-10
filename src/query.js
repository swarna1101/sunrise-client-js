import { SunriseClient } from "@sunriselayer/client";

async function queryBlockchain() {
  try {
    const cometRpc = "https://sunrise-test-da-1.cauchye.net/";
    const client = await SunriseClient.connect(cometRpc);
    const queryClient = client.getQueryClient();

    if (!queryClient) {
      console.error("Query client not initialized");
      return;
    }

    // Query various parameters
    const daParams = await queryClient.da.params({});
    const feeParams = await queryClient.fee.params({});
    const liquidityIncentiveParams = await queryClient.liquidityincentive.params({});
    const liquidityPoolParams = await queryClient.liquiditypool.params({});
    const swapParams = await queryClient.swap.params({});
    const tokenConverterParams = await queryClient.tokenconverter.params({});

    console.log("DA Params:", daParams);
    console.log("Fee Params:", feeParams);
    console.log("Liquidity Incentive Params:", liquidityIncentiveParams);
    console.log("Liquidity Pool Params:", liquidityPoolParams);
    console.log("Swap Params:", swapParams);
    console.log("Token Converter Params:", tokenConverterParams);
  } catch (error) {
    console.error("Error querying blockchain:", error);
  }
}

queryBlockchain();
