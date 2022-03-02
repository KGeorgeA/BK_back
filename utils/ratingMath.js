exports.ratingMath = (arr) => {
  // как-то не очень работает
  const rating = Number(
    (
      arr.reduce((prev, curr) => ({
        rating: prev.rating + curr.rating,
      })).rating / arr.length
    ).toFixed(2)
  );
  return rating;
};
