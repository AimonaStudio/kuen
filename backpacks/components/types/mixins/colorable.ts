export declare interface Colorable {
  color: String
  backgroundColor: String,

  isCssColor (color: String): boolean,

  setBackgroundColor (color: String | Number, data?: {}, styleField?: String, classField?: String): void,

  setTextColor (color: String | Number, data?: {}, styleField?: String, classField?: String): void
}
