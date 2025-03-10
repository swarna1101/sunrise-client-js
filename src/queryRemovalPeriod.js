import { SunriseClient } from "@sunriselayer/client";

export async function queryRemovalPeriods() {
  try {
    const cometRpc = "https://sunrise-test-da-1.cauchye.net/";
    const client = await SunriseClient.connect(cometRpc);

    const queryClient = client.getQueryClient();

    if (!queryClient) {
      console.error("Query client not initialized");
      return;
    }

    // Query removal periods
    const daParams = await queryClient.da.params({});

    console.log("Rejected Removal Period (seconds):", daParams.params.rejectedRemovalPeriod.seconds);
    console.log("Verified Removal Period (seconds):", daParams.params.verifiedRemovalPeriod.seconds);
  } catch (error) {
    console.error("Error querying removal periods:", error);
  }
}

queryRemovalPeriods();
