import { SwaggerService } from "./swagger.service";
import { IApiOperationArgsBase } from "./i-api-operation-args.base";

export interface IApiModelArgs {
  description?: string;
  name?: string;
  apiVersion?: [string];
}

export function ApiModel(args?: IApiModelArgs): ClassDecorator {
  return function(target: any) {
    const apiVersions = args.apiVersion || ["v1"];
    apiVersions.forEach((apiV: string) => {
      SwaggerService.getInstance(apiV).addApiModel(args, target);
    });
  };
}
