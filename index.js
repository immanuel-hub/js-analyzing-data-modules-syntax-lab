require('datejs');

const combineUsers = (...arrays) => {
  const mergedUsers = arrays.flat();

  const mergeDate = Date.today().toString("M/d/yyyy");

  return {
    users: mergedUsers,
    merge_date: mergeDate
  };
};

module.exports = { combineUsers };
