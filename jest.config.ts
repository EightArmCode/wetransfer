import type { Config } from '@jest/types'

const config:Config.InitialOptions = {
	verbose: true,
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	moduleFileExtensions: [
		"ts",
		"tsx",
		"js",
		"jsx",
		"json",
		"node"
	],
	snapshotSerializers: ['jest-aphrodite-react/no-important'],
	rootDir: '.',
	testEnvironment: 'jsdom',
	coverageDirectory: './coverage',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif)$': '<rootDir>/fileMock.ts',
	}
}
export default config