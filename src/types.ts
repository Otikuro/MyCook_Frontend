export type ChannelType = {
  channel_id: number,
  name: string,
  is_public: boolean,
  open_posting: boolean
};
export type CommentType = {
  comment_id: number,
  date: string,
  body: string,
  user: UserType
}
export type ImageType = {
  image_id: string;
  url: string;
  alt: string;
};
export type PostType = {
  post_id?: number;
  title: string;
  body: string;
  votes?: number;
  voted?: 1|0|null; 
  user?: UserType;
  images?: ImageType[];
  comments?: CommentType[];
  recipe?: RecipeType
};
export type RecipeType = {
  duration: string|number;
  difficulty: string;
  quantity: number;
  steps: StepType[];
  recipe_ingredients: RecipeIngredientType[]
};
export type StepType = {
  title: string;
  description: string;
  time: number;
  images: ImageType[];
  method: MethodType;
};
export type IngredientType ={
  ingredient_id: number;
  name: string;
}
export type MeasurementType = {
  measurement_id: number;
  name: string;
}
export type UserType = {
  name: string;
  profilePic?: ImageType;
};
export type RecipeIngredientType = {
  quantity: number;
  ingredient: IngredientType;
  measurement: MeasurementType;
}
export type MethodType = {
  method_id: number;
  name: string;
}