import { create, fromBinary, Message, MessageInitShape, toBinary } from "@bufbuild/protobuf";
import { GenMessage } from "@bufbuild/protobuf/codegenv1";
import { PbjsGeneratedType } from "@cosmjs/proto-signing";
import protobuf from "protobufjs";

export class convertBufProtocGenEsTypeToPbJsType<T extends Message> implements PbjsGeneratedType {
  constructor(public schema: GenMessage<T>) {}

  create(properties?: { [k: string]: any }): any {
    return create(this.schema, properties as any);
  }

  encode(message: any | { [k: string]: any }, _writer?: any): protobuf.Writer {
    return {
      finish: () => toBinary(this.schema, message),
      ...({} as any),
    };
  }

  decode(reader: protobuf.Reader | Uint8Array, _length?: number): any {
    return fromBinary(this.schema, reader as Uint8Array);
  }
}
