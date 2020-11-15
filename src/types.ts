export type Film = {
  id: string
  url: string
  episode_id: string
  title: string,
  opening_crawl: string,
  director: string,
  producer: string,
  release_date: string,

  characters: string[],
  planets: string[],
  starships: string[],
  vehicles: string[],
  species: string[],
};

export type FilmsResponse = {
  count: number;
  previous: string | null;
  next: string | null;
  results: Film[];
};

export type Comment = {
  id: string
  filmId: string
  body: string
  nickname: string
};

export type CommentsByFilm = { [key: string]: Comment[] };
