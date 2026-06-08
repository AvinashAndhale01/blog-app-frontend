export interface Post {
  id: number;
  title: string;
  description: string;
  author: string;
  created_at: string;
}

export interface PostCreate {
  title: string;
  content: string;
}
