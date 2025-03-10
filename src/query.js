import { SunriseClient } from "@sunriselayer/client";

export async function queryBlockchain() {
  try {
    const cometRpc = "https://sunrise-test-da-1.cauchye.net/";
    const client = await SunriseClient.connect(cometRpc);
    const queryClient = client.getQueryClient();

    if (!queryClient) {
      console.error("Query client not initialized");
      return null;
    }

    // Query various parameters
    const daParams = await queryClient.da.params({});
    const feeParams = await queryClient.fee.params({});
    const liquidityIncentiveParams = await queryClient.liquidityincentive.params({});
    const liquidityPoolParams = await queryClient.liquiditypool.params({});
    const swapParams = await queryClient.swap.params({});
    const tokenConverterParams = await queryClient.tokenconverter.params({});

    // Return all queried data
    return {
      daParams: daParams.params,
      feeParams: feeParams.params,
      liquidityIncentiveParams: liquidityIncentiveParams.params,
      liquidityPoolParams: liquidityPoolParams.params,
      swapParams: swapParams.params,
      tokenConverterParams: tokenConverterParams.params,
    };
  } catch (error) {
    console.error("Error querying blockchain:", error);
    return null;
  }
}
