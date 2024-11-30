# Sunrise Client JS

## Install

```shell
npm i @sunriselayer/client
```

## Example

### Query

```ts
import { SunriseClient } from "@sunriselayer/client";

async function main() {
    // See
    // https://docs.cosmos.network/main/learn/advanced/grpc_rest
    // https://github.com/cosmos/chain-registry
    const cometRpc = "http://localhost:26657";
    const client = await SunriseClient.create(cometRpc);
    const queryClient = client.getQueryClient();
    if (!queryClient) {
        return;
    }

    await queryClient.da.params({});
    await queryClient.fee.params({});
    await queryClient.liquidityincentive.params({});
    await queryClient.liquiditypool.params({});
    await queryClient.swap.params({});
    await queryClient.tokenconverter.params({});
}
```

### Tx

```ts
import { SigningStargateClient } from "@cosmjs/stargate";

import { createEncodeObject, sunriseTypesRegistry } from "@sunriselayer/client";
import { MsgSwapExactAmountInSchema } from "@sunriselayer/client/types/swap";

const address = "sunrise...";
const client = await SigningStargateClient.connectWithSigner(
    "http://localhost:26657",
    {} as any, // Change here
    {
        registry: sunriseTypesRegistry,
    },
);

const msgSwapExactAmountIn = createEncodeObject(MsgSwapExactAmountInSchema, {
    sender: address,
});

const txHash = await client.signAndBroadcastSync(address, [msgSwapExactAmountIn], "auto");
```
