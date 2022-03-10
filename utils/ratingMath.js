const { Book } = require('../db/models');

exports.ratingMath = async (bookId) => {
  const book = await Book.findOne({
    include: ['ratings'],
    where: { id: bookId },
  });

  const rating = Number(
    (
      book.ratings.reduce((prev, curr) => ({
        rating: prev.rating + curr.rating,
      })).rating / book.ratings.length
    ).toFixed(2)
  );

  await Book.update(
    { rating },
    {
      where: { id: bookId },
    }
  );
};
