// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: cosmos/reflection/v1/reflection.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { FileDescriptorProto } from "../../../google/protobuf/descriptor";

export const protobufPackage = "cosmos.reflection.v1";

/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequest {
}

/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponse {
  /** files is the file descriptors. */
  files: FileDescriptorProto[];
}

function createBaseFileDescriptorsRequest(): FileDescriptorsRequest {
  return {};
}

export const FileDescriptorsRequest: MessageFns<FileDescriptorsRequest> = {
  encode(_: FileDescriptorsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): FileDescriptorsRequest {
    return {};
  },

  toJSON(_: FileDescriptorsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<FileDescriptorsRequest>, I>>(base?: I): FileDescriptorsRequest {
    return FileDescriptorsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileDescriptorsRequest>, I>>(_: I): FileDescriptorsRequest {
    const message = createBaseFileDescriptorsRequest();
    return message;
  },
};

function createBaseFileDescriptorsResponse(): FileDescriptorsResponse {
  return { files: [] };
}

export const FileDescriptorsResponse: MessageFns<FileDescriptorsResponse> = {
  encode(message: FileDescriptorsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.files) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.files.push(FileDescriptorProto.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FileDescriptorsResponse {
    return {
      files: globalThis.Array.isArray(object?.files)
        ? object.files.map((e: any) => FileDescriptorProto.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FileDescriptorsResponse): unknown {
    const obj: any = {};
    if (message.files?.length) {
      obj.files = message.files.map((e) => FileDescriptorProto.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileDescriptorsResponse>, I>>(base?: I): FileDescriptorsResponse {
    return FileDescriptorsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileDescriptorsResponse>, I>>(object: I): FileDescriptorsResponse {
    const message = createBaseFileDescriptorsResponse();
    message.files = object.files?.map((e) => FileDescriptorProto.fromPartial(e)) || [];
    return message;
  },
};

/**
 * Package cosmos.reflection.v1 provides support for inspecting protobuf
 * file descriptors.
 */
export interface ReflectionService {
  /**
   * FileDescriptors queries all the file descriptors in the app in order
   * to enable easier generation of dynamic clients.
   */
  FileDescriptors(request: FileDescriptorsRequest): Promise<FileDescriptorsResponse>;
}

export const ReflectionServiceServiceName = "cosmos.reflection.v1.ReflectionService";
export class ReflectionServiceClientImpl implements ReflectionService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ReflectionServiceServiceName;
    this.rpc = rpc;
    this.FileDescriptors = this.FileDescriptors.bind(this);
  }
  FileDescriptors(request: FileDescriptorsRequest): Promise<FileDescriptorsResponse> {
    const data = FileDescriptorsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FileDescriptors", data);
    return promise.then((data) => FileDescriptorsResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
