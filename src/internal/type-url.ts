import { Message } from "@bufbuild/protobuf";
import { GenMessage } from "@bufbuild/protobuf/codegenv1";

export function getTypeUrl<T extends Message>(schema: GenMessage<T>) {
  return `/${schema.typeName}`;
}
