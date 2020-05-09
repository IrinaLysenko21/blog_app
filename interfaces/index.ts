export interface PostInterface {
  id: string;
  title: string;
  body: string;
}

export interface StoreInterface {
  posts: PostInterface[] | [];
  isLoading: boolean;
}
