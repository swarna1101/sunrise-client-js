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
    // See https://docs.cosmos.network/main/learn/advanced/grpc_rest
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
