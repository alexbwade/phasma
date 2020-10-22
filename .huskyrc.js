const tasks = arr => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': tasks([
      "eslint './**/*.[tj]s?(x)' --fix",
      'jest -c jest.config.js',
    ]),
  },
};
