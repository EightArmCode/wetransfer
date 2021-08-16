import React from 'react'
import SpinnerControls from './SpinnerControls'
import {cleanup, render, fireEvent} from '@testing-library/react'
import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

let mockFn: () => void
beforeEach(() => {
    mockFn = jest.fn()
})

afterEach(cleanup)

describe('<SpinnerControls />', () => {
    it('renders correctly', () => {
        const { getByRole, getAllByRole, getByTestId } = render(
            <SpinnerControls
                active={false}
                progress={0}
                setActive={mockFn}
                setProgress={mockFn}
                setVelocity={mockFn}
                velocity={5}
                resetIntervalRefs={mockFn}
            />
        )

        const buttonGroup = getByRole('group')
        expect(buttonGroup).toBeDefined()
        expect(buttonGroup.children.length).toEqual(3)

        // There is an element assigned the slider role by the material UI team,
        // and one added in our code
        const sliders = getAllByRole('slider')
        expect(sliders.length).toEqual(2)

        const internalSlider = getByTestId('internal-slider')
        expect(internalSlider).toBeDefined()
    })

    it('responds correctly to button clicks', async () => {
        const mockFn = jest.fn()
        const { getByRole, container, rerender, findByRole } = render(
            <SpinnerControls
                active={false}
                progress={0}
                setActive={mockFn}
                setProgress={mockFn}
                setVelocity={mockFn}
                velocity={5}
                resetIntervalRefs={mockFn}
            />
        )
    
        expect(container).toMatchSnapshot()
    
        rerender(
            <SpinnerControls
                active={true}
                progress={0}
                setActive={mockFn}
                setProgress={mockFn}
                setVelocity={mockFn}
                velocity={5}
                resetIntervalRefs={mockFn}
            />
        )
    
        fireEvent.click(getByRole('button', { name: 'Start'}))

        const reset = await findByRole('button', { name: 'Reset' })
        expect(reset).toBeDisabled()
    
        rerender(
            <SpinnerControls
                active={false}
                progress={1}
                setActive={mockFn}
                setProgress={mockFn}
                setVelocity={mockFn}
                velocity={5}
                resetIntervalRefs={mockFn}
            />
        )

        expect(getByRole('button', { name: 'Start' })).toBeDisabled()
    
        fireEvent.click(getByRole('button', { name: 'Reset' }))

        rerender(
            <SpinnerControls
                active={false}
                progress={0}
                setActive={mockFn}
                setProgress={mockFn}
                setVelocity={mockFn}
                velocity={5}
                resetIntervalRefs={mockFn}
            />
        )

        expect(getByRole('button', { name: 'Start' })).not.toBeDisabled()
    
        expect(container).toMatchSnapshot()
    })
})