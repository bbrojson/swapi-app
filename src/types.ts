export type Film = {
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
