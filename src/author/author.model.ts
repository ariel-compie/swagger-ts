import {
  ApiModel,
  ApiModelProperty,
  SwaggerDefinitionConstant
} from "../lib/swagger-express-ts";
import { VersionModel } from "../version/version.model";

@ApiModel({
  description: "Description Author.",
  name: "Author",
  apiVersion: ["1.0"]
})
export class AuthorModel {
  @ApiModelProperty({
    description: "Id of author",
    required: true,
    apiVersion: ["1.0"]
  })
  id: string;

  @ApiModelProperty({
    description: "Name of author",
    required: true,
    apiVersion: ["1.0"],
    itemType: SwaggerDefinitionConstant.Model.Property.Type.STRING
  })
  name: string[];
}
