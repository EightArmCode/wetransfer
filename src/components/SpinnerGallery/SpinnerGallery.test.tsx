import React from 'react'
import SpinnerGallery from './SpinnerGallery'
import { cleanup, render } from '@testing-library/react'

afterEach(cleanup)

describe('<SpinnerGallery />', () => {
    
    it('renders correctly', () => {

        const {
            getByRole,
            getAllByRole,
            container
        } = render(<SpinnerGallery />)
        
        expect(container).toMatchSnapshot()

        const spinners = getAllByRole('progressbar')
        expect(spinners.length).toEqual(3)

        const sliders = getAllByRole('slider')
        expect(sliders.length).toEqual(2)

        const buttonGroup = getByRole('group')
        expect(buttonGroup).toBeDefined()
        
        const buttons = buttonGroup.getElementsByTagName('button')
        expect(buttons.length).toEqual(3)
    })
})