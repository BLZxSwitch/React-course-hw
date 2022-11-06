import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    globals: {
        "IS_REACT_ACT_ENVIRONMENT": true
    },
    verbose: true,
    resetMocks: true,
    moduleNameMapper: {
        "\\.(css|sass)$": "identity-obj-proxy",
    },
}

export default config;