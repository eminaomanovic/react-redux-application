export const mockedVideo = {
  original_title: 'Mad Hot Ballroom',
  release_date: '2005-05-13',
  overview: 'Overview part',
  id: 14358,
  poster_path: '/cVnBICXmyqlusz1iYvjvIOHxo5U.jpg',
};
export const mockedVideoNoReleaseDate = {
  original_title: 'Mad Hot Ballroom',
  release_date: null,
  overview: 'Overview part',
  id: 14358,
  poster_path: '/cVnBICXmyqlusz1iYvjvIOHxo5U.jpg',
};
export const movie = {
  id: 475557,
  original_title: 'Joker',
  overview: 'overview',
  poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
  release_date: '2019-10-02',
  vote_average: '8.8',
};
export const movies = {
  popularMovies: [
    {
      id: 475557,
      original_title: 'Joker',
      overview: 'overview',
      poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
      release_date: '2019-10-02',
      vote_average: '8.8',
    },
  ],
  popularTvShows: [
    {
      id: 475557,
      original_title: 'Joker',
      overview: 'overview',
      poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
      release_date: '2019-10-02',
      vote_average: '8.8',
    },
  ],
};

export const homePageProps = {
  loading: false,
  error: false,
  popularMovies: null,
  popularTvShows: null,
  getMovies: jest.fn(),
};
