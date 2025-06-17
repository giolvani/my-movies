export interface Video {
  id: string;
  key: string;
  name: string;
  url: string;
}

export interface Movie {
  id: number;
  title: string;
  image: string;
  description: string;
  votes: number;
  year: string;
  videos?: Video[];
}
