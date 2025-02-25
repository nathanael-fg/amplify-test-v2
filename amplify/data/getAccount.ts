import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx: { args: { id: any; }; }) {
  return ddb.get({ key: { id: ctx.args.id } });
}

export const response = (ctx: { result: any; }) => ctx.result;