# Sunrise Client JS Project

## Overview
This project demonstrates how to interact with the **Sunrise Layer 1 Blockchain** using the `@sunriselayer/client` library. It includes scripts for querying blockchain parameters, interacting with liquidity pools, performing token swaps, and more.

---

## Folder Structure

```
src/
├── addLiquidity.js # Script to add liquidity to a pool
├── query.js # Script to query all blockchain parameters
├── queryLiquidityPool.js # Script to query details of liquidity pools
├── querySpecific.js # Script to query specific blockchain parameters
├── queryTokenParam.js # Script to query token converter parameters
```

## Scripts and Their Usage

### **1. `query.js`**
**Purpose**: Queries all major blockchain parameters, including DA Params, Fee Params, Liquidity Incentive Params, Liquidity Pool Params, Swap Params, and Token Converter Params.

**Snippet**:

```javascript
import { SunriseClient } from "@sunriselayer/client";

async function main() {
const cometRpc = "https://sunrise-test-da-1.cauchye.net/";
const client = await SunriseClient.connect(cometRpc);
const queryClient = client.getQueryClient();
  if (!queryClient) return;
  console.log("DA Params:", await queryClient.da.params({}));
  console.log("Fee Params:", await queryClient.fee.params({}));
  console.log("Liquidity Incentive Params:", await queryClient.liquidityincentive.params({}));
  console.log("Liquidity Pool Params:", await queryClient.liquiditypool.params({}));
  console.log("Swap Params:", await queryClient.swap.params({}));
  console.log("Token Converter Params:", await queryClient.tokenconverter.params({}));
```

**Example Output**:
- **DA Params**: Includes challenge thresholds, replication factors, shard counts, and ZKP keys.
- **Fee Params**: Fee denomination (`urise`) and burn ratio.
- **Liquidity Incentive Params**: Epoch blocks and staking reward ratio.
- **Liquidity Pool Params**: Withdraw fee rate and treasury tax rate.
- **Swap Params**: Interface fee rate.
- **Token Converter Params**: Bond denomination (`uvrise`) and fee denomination (`urise`).

---

### **2. `querySpecific.js`**
**Purpose**: Queries specific blockchain parameters such as DA Params, Fee Params, and Liquidity Pool Params.

**Snippet**:

```javascript
import { SunriseClient } from "@sunriselayer/client";

async function querySpecificParameters() {
const cometRpc = "https://sunrise-test-da-1.cauchye.net/";
const client = await SunriseClient.connect(cometRpc);
const queryClient = client.getQueryClient();
  if (!queryClient) return;

  console.log("Data Availability Params:", await queryClient.da.params({}).params);
  console.log("Fee Params:", await queryClient.fee.params({}).params);
  console.log("Liquidity Pool Params:", await queryClient.liquiditypool.params({}).params);
```

**Example Output**:
- **Data Availability (DA) Parameters**:
    - Challenge threshold: `0.33`
    - Replication factor: `5`
    - Shard count range: `10 - 255`
    - ZKP keys.
- **Fee Parameters**:
    - Fee denom: `urise`
    - Burn ratio: `0.5`.
- **Liquidity Pool Parameters**:
    - Withdraw fee rate: `0.01`.

---

### **3. `queryLiquidityPool.js`**
**Purpose**: Queries details of all existing liquidity pools.

**Snippet**:

```javascript
import { SunriseClient } from "@sunriselayer/client";

async function queryLiquidityPools() {
const cometRpc = "https://sunrise-test-da-1.cauchye.net/";
const client = await SunriseClient.connect(cometRpc);
const queryClient = client.getQueryClient();
  if (!queryClient) return;

  const poolsResponse = await queryClient.liquiditypool.pools({});
  console.log("Liquidity Pools:", poolsResponse.pools);

```

**Example Output**:
- If no pools exist:
  -    Liquidity Pools: []


---

### **4. `addLiquidity.js`**
**Purpose**: Adds liquidity to an existing pool.

**Snippet**:

```javascript
import { SigningStargateClient } from "@cosmjs/stargate";
import { createEncodeObject, sunriseTypesRegistry } from "@sunriselayer/client";
import { MsgAddLiquiditySchema } from "@sunriselayer/client/types/liquiditypool";

async function addLiquidity() {
const cometRpc = "https://sunrise-test-da-1.cauchye.net/";
const address = "sunrise..."; // Replace with your wallet address
  const client = await SigningStargateClient.connectWithSigner(cometRpc, {} as any, {
    registry: sunriseTypesRegistry,
  });

  const msgAddLiquidity = createEncodeObject(MsgAddLiquiditySchema, {
    sender: address,
    poolId: BigInt(1),
    tokenA: { denom: "urise", amount: "100000" },
    tokenB: { denom: "uvrise", amount: "100000" },
    minShares: "90000",
    deadline: Math.floor(Date.now() / 1000) + 600,
  });

  const txHash = await client.signAndBroadcastSync(address, [msgAddLiquidity], "auto");
  console.log("Transaction Hash (Add Liquidity):", txHash);

```


---

### **5. `queryTokenParam.js`**
**Purpose**: Queries token converter parameters.

**Snippet**:

```javascript
const queryClient = client.getQueryClient();

if (!queryClient) return;

console.log("Token Converter Params:", await queryClient.tokenconverter.params({}).params);

```

**Example Output**:
```
Token Converter Params:
{
bondDenom: 'uvrise',
feeDenom: 'urise'
}
```

