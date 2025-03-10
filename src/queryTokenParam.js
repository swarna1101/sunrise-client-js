import { SunriseClient } from "@sunriselayer/client";

export async function queryTokenConverterParams() {
  try {
    const cometRpc = "https://sunrise-test-da-1.cauchye.net/";
    const client = await SunriseClient.connect(cometRpc);

    const queryClient = client.getQueryClient();

    if (!queryClient) {
      console.error("Query client not initialized");
      return null;
    }

    // Query token converter parameters
    const tokenConverterParams = await queryClient.tokenconverter.params({});

    // Return the parameters
    return tokenConverterParams.params;
  } catch (error) {
    console.error("Error querying token converter params:", error);
    return null;
  }
}
