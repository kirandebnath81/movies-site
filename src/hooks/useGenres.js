const useGenres = (selectedGenres) => {
  if (selectedGenres < 1) return;

  const genresId = selectedGenres.map((genre) => genre.id);
  return genresId.reduce((acc, curr) => (acc += "," + curr));
};

export default useGenres;
