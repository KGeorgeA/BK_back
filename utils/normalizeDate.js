// boolean 0 - for DB, 1 for user
exports.normalizeDate = (date, boolean) => {
  if (boolean) {
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();
    return `${d}.${m}.${y}`;
  }

  const d = date.split('.')[0];
  const m = date.split('.')[1];
  const y = date.split('.')[2];
  const newDate = new Date(`${m} ${d} ${y}`);
  return newDate;
};
