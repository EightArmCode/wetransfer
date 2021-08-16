import { StyleSheetTestUtils } from 'aphrodite/no-important'
import '@testing-library/jest-dom'
import { aphroditeSerializer } from 'jest-aphrodite-react/no-important'

expect.addSnapshotSerializer(aphroditeSerializer)

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();

})
afterEach(() => {
    return new Promise(resolve => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
        return process.nextTick(resolve)
    })
})