import { SigningStargateClient } from "@cosmjs/stargate";
import { describe, expect, test } from "vitest";

import { createEncodeObject, sunriseTypesRegistry } from "./codec";
import { MsgSwapExactAmountInSchema } from "./types/sunrise/swap";

describe("codec", () => {
  test("encodeObject MsgExactAmountIn", () => {
    const encodeObject = createEncodeObject(MsgSwapExactAmountInSchema, {
      sender: "a",
    });
    console.log(encodeObject);

    expect(encodeObject.value.sender).toBe("a");

    const binary = sunriseTypesRegistry.encode(encodeObject);

    console.log(binary);
  });

  test("signAndBroadcastSync MsgExactAmountIn", async () => {
    try {
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
      console.log(txHash);
    } catch {}
  });
});
