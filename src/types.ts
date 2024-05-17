export type ImageType = {
  image_id: string;
  url: string;
  alt: string;
};
export type UserType = {
  name: string;
  profilePic?: ImageType;
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
};
export type StepType = {
  title: string;
  description: string;
  time: number;
  images: ImageType[];
  method: string;
};
export type RecipeType = PostType & {
  steps: StepType[];
};
export type CommentType = {
  comment_id: number,
  date: string,
  body: string,
  user: UserType
}