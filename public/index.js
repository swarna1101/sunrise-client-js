import { queryBlockchain } from "../src/query.js";
import { queryLiquidityPools } from "../src/queryLiquidityPool.js";
import { queryTokenConverterParams } from "../src/queryTokenParam.js";

async function renderInsights() {
  console.log("Fetching data...");

  // Fetch data from scripts
  const blockchainData = await queryBlockchain();
  const liquidityPools = await queryLiquidityPools();
  const tokenConverterData = await queryTokenConverterParams();

  console.log("Blockchain Data:", blockchainData);
  console.log("Liquidity Pools:", liquidityPools);
  console.log("Token Converter Data:", tokenConverterData);

  // Check if data is available
  if (!blockchainData || !liquidityPools || !tokenConverterData) {
    document.getElementById("insights").innerHTML =
      "<p>Error fetching data. Please try again later.</p>";
    return;
  }

  // Update UI with fetched data
  document.getElementById("data-availability").innerHTML = `
        <h3>Data Availability (DA)</h3>
        <p><strong>Challenge Threshold:</strong> ${blockchainData.daParams.challengeThreshold}</p>
        <p><strong>Replication Factor:</strong> ${blockchainData.daParams.replicationFactor}</p>
        <p><strong>Max Shard Count:</strong> ${blockchainData.daParams.maxShardCount}</p>
        <p><strong>Proof Period (seconds):</strong> ${blockchainData.daParams.proofPeriod.seconds}</p>
  `;

  document.getElementById("liquidity-pools").innerHTML = `
        <h3>Liquidity Pools</h3>
        ${
    liquidityPools.length > 0
      ? liquidityPools.map(
        (pool, index) =>
          `<p><strong>Pool ${index + 1}:</strong> ${JSON.stringify(pool)}</p>`
      ).join("")
      : "<p>No liquidity pools available.</p>"
  }
  `;

  document.getElementById("token-converter").innerHTML = `
        <h3>Token Converter</h3>
        <p><strong>Bond Denomination:</strong> ${tokenConverterData.bondDenom}</p>
        <p><strong>Fee Denomination:</strong> ${tokenConverterData.feeDenom}</p>
  `;
}

document.addEventListener("DOMContentLoaded", renderInsights);
