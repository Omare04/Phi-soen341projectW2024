module.exports = {
    testEnvironment: 'node',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
    moduleFileExtensions: ['js', 'json'],
    coverageDirectory: './coverage',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js'],
  };
  