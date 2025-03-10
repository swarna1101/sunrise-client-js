import { SunriseClient } from "@sunriselayer/client";

export async function querySwapFeeRate() {
  try {
    const cometRpc = "https://sunrise-test-da-1.cauchye.net/";
    const client = await SunriseClient.connect(cometRpc);
    const queryClient = client.getQueryClient();

    if (!queryClient) {
      console.error("Query client not initialized");
      return;
    }

    // Query swap fee rate
    const swapParams = await queryClient.swap.params({});
    console.log("Swap Fee Rate:", swapParams.params.interfaceFeeRate);
  } catch (error) {
    console.error("Error querying swap fee rate:", error);
  }
}

querySwapFeeRate();
