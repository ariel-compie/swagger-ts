import { ApiModel, ApiModelProperty } from "../lib/swagger-express-ts";
import { AuthorModel } from "../author/author.model";

@ApiModel({
  description: "Version description",
  name: "Version",
  apiVersion: ["1.0"]
})
export class VersionModel {
  @ApiModelProperty({
    description: "Id of version",
    required: true,
    apiVersion: ["1.0"]
  })
  id: string;

  @ApiModelProperty({
    description: "",
    required: true,
    apiVersion: ["1.0"]
  })
  name: string;

  @ApiModelProperty({
    description: "Description of version",
    required: true,
    apiVersion: ["1.0"]
  })
  description: string;

  @ApiModelProperty({
    description: "Author of version",
    model: "Author",
    apiVersion: ["1.0"]
  })
  author: AuthorModel;
}
