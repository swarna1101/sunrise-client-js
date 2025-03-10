import { SunriseClient } from "@sunriselayer/client";

export async function queryMaxShardCount() {
  try {
    const cometRpc = "https://sunrise-test-da-1.cauchye.net/";
    const client = await SunriseClient.connect(cometRpc);
    const queryClient = client.getQueryClient();

    if (!queryClient) {
      console.error("Query client not initialized");
      return;
    }

    // Query maximum shard count
    const daParams = await queryClient.da.params({});
    console.log("Max Shard Count:", daParams.params.maxShardCount);
  } catch (error) {
    console.error("Error querying max shard count:", error);
  }
}

queryMaxShardCount();
