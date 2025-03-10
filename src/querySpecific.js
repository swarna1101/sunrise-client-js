import { SunriseClient } from "@sunriselayer/client";

async function querySpecificParameters() {
  try {
    const cometRpc = "https://sunrise-test-da-1.cauchye.net/";
    const client = await SunriseClient.connect(cometRpc);
    const queryClient = client.getQueryClient();

    if (!queryClient) {
      console.error("Query client not initialized");
      return;
    }

    // Query specific parameters
    const daParams = await queryClient.da.params({});
    console.log("Data Availability Params:", daParams.params);

    const feeParams = await queryClient.fee.params({});
    console.log("Fee Params:", feeParams.params);

    const liquidityPoolParams = await queryClient.liquiditypool.params({});
    console.log("Liquidity Pool Params:", liquidityPoolParams.params);

  } catch (error) {
    console.error("Error querying specific parameters:", error);
  }
}

querySpecificParameters();
