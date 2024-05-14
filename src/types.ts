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
  votes: number;
  user: UserType;
  images: ImageType[];
};
