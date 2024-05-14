export type ImageType = {
  imageId: string;
  source: string;
  alt: string;
};
export type UserType = {
  username: string;
  profilePic: ImageType;
};
export type PostType = {
  title: string;
  body: string;
  votes?: number;
  user?: UserType;
  images: ImageType[];
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
