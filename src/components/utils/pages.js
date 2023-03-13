const getPageCount = (totalPages, limit) => {
  return Math.ceil(totalPages / limit);
};

export default getPageCount;
