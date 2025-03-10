import { SunriseClient } from "@sunriselayer/client";

export async function queryEpochBlocks() {
  try {
    const cometRpc = "https://sunrise-test-da-1.cauchye.net/";
    const client = await SunriseClient.connect(cometRpc);
    const queryClient = client.getQueryClient();

    if (!queryClient) {
      console.error("Query client not initialized");
      return;
    }

    // Query liquidity incentive epoch blocks
    const liquidityIncentiveParams = await queryClient.liquidityincentive.params({});
    console.log("Epoch Blocks:", liquidityIncentiveParams.params.epochBlocks);
  } catch (error) {
    console.error("Error querying epoch blocks:", error);
  }
}

queryEpochBlocks();
