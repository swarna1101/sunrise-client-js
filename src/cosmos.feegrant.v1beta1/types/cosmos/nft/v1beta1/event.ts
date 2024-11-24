// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: cosmos/nft/v1beta1/event.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "cosmos.nft.v1beta1";

/** EventSend is emitted on Msg/Send */
export interface EventSend {
  /** class_id associated with the nft */
  classId: string;
  /** id is a unique identifier of the nft */
  id: string;
  /** sender is the address of the owner of nft */
  sender: string;
  /** receiver is the receiver address of nft */
  receiver: string;
}

/** EventMint is emitted on Mint */
export interface EventMint {
  /** class_id associated with the nft */
  classId: string;
  /** id is a unique identifier of the nft */
  id: string;
  /** owner is the owner address of the nft */
  owner: string;
}

/** EventBurn is emitted on Burn */
export interface EventBurn {
  /** class_id associated with the nft */
  classId: string;
  /** id is a unique identifier of the nft */
  id: string;
  /** owner is the owner address of the nft */
  owner: string;
}

function createBaseEventSend(): EventSend {
  return { classId: "", id: "", sender: "", receiver: "" };
}

export const EventSend: MessageFns<EventSend> = {
  encode(message: EventSend, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EventSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.classId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.sender = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.receiver = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventSend {
    return {
      classId: isSet(object.classId) ? globalThis.String(object.classId) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      receiver: isSet(object.receiver) ? globalThis.String(object.receiver) : "",
    };
  },

  toJSON(message: EventSend): unknown {
    const obj: any = {};
    if (message.classId !== "") {
      obj.classId = message.classId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.receiver !== "") {
      obj.receiver = message.receiver;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventSend>, I>>(base?: I): EventSend {
    return EventSend.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventSend>, I>>(object: I): EventSend {
    const message = createBaseEventSend();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
};

function createBaseEventMint(): EventMint {
  return { classId: "", id: "", owner: "" };
}

export const EventMint: MessageFns<EventMint> = {
  encode(message: EventMint, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EventMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.classId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.owner = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventMint {
    return {
      classId: isSet(object.classId) ? globalThis.String(object.classId) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
    };
  },

  toJSON(message: EventMint): unknown {
    const obj: any = {};
    if (message.classId !== "") {
      obj.classId = message.classId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventMint>, I>>(base?: I): EventMint {
    return EventMint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventMint>, I>>(object: I): EventMint {
    const message = createBaseEventMint();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseEventBurn(): EventBurn {
  return { classId: "", id: "", owner: "" };
}

export const EventBurn: MessageFns<EventBurn> = {
  encode(message: EventBurn, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EventBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.classId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.owner = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventBurn {
    return {
      classId: isSet(object.classId) ? globalThis.String(object.classId) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
    };
  },

  toJSON(message: EventBurn): unknown {
    const obj: any = {};
    if (message.classId !== "") {
      obj.classId = message.classId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventBurn>, I>>(base?: I): EventBurn {
    return EventBurn.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventBurn>, I>>(object: I): EventBurn {
    const message = createBaseEventBurn();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
