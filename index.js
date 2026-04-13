function combineUsers(...arrays) {
  // Merge all arrays into one
  const mergedUsers = arrays.flat();

  // Get today's date
  const mergeDate = new Date();

  // Return the required object
  return {
    users: mergedUsers,
    merge_date: mergeDate
  };
}

// Export the function (important for tests)
module.exports = combineUsers;

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
