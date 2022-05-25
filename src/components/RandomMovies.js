export const RandomMovies = (movies) => {
  const getRandomArr = () => {
    const randomArr = [];
    const moviesNum = movies.length;

    for (let i = 0; i < moviesNum; i++) {
      const random = Math.floor(Math.random() * moviesNum);
      if (randomArr.length < 7) {
        if (randomArr.every((e) => e !== random)) {
          randomArr.push(random);
        }
      }
    }
    return randomArr;
  };

  const randomMovies = [];

  getRandomArr().forEach((num) => randomMovies.push(movies[num]));
  return randomMovies;
};
