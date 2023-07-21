const nonePasswordStrategy = {
  applyPasswordPolicy: function (password) {
    return true;
  },
};

export default nonePasswordStrategy;
