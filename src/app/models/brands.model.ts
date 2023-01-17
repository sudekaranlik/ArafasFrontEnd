import PictureModel from "./picture.model"

export default class BrandModel {
  createdAt?:Date
  desc?:String
  isDeleted?:boolean
  name?:String
  picture?:PictureModel
  updatedAt?:Date
  _id?:String
}
