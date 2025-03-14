import { SunriseClient } from "@sunriselayer/client";

export async function queryLiquidityPools() {
  try {
    const cometRpc = "https://sunrise-test-da-1.cauchye.net/";
    const client = await SunriseClient.connect(cometRpc);
    const queryClient = client.getQueryClient();

    if (!queryClient) {
      console.error("Query client not initialized");
      return null;
    }

    // Query all liquidity pools
    const poolsResponse = await queryClient.liquiditypool.pools({});

    // Return the pools
    return poolsResponse.pools;
  } catch (error) {
    console.error("Error querying liquidity pools:", error);
    return null;
  }
}
