module.exports = {
  rootDir: '..',
  testEnvironment: 'jsdom',
  coverageDirectory: '<rootDir>__coverage__/',
  roots: ['<rootDir>/src/', '<rootDir>/tests/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/mocks/fileMock.js',
    '\\.(css|scss|less)$': '<rootDir>/tests/mocks/styleMock.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transformIgnorePatterns: ['/node_modules/'],
  testRegex: '.spec.*\\.(ts|tsx)$',
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['./configs/jest-setup.ts'],
};
