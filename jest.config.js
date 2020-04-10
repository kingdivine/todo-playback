module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "\\.(js|jsx)?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss|less)$": "identity-obj-proxy",
  },
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/public/", "/dist/"],
  // setupFilesAfterEnv: [
  //   "@testing-library/jest-dom/extend-expect",
  //   "@testing-library/react/cleanup-after-each",
  // ],
};
