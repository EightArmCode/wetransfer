import React, { ReactElement } from 'react'
import Spinner from './Spinner'
import {cleanup, render, within} from '@testing-library/react'

export const smallSpinner:ReactElement = <Spinner progress={0} size={180} />
export const mediumSpinner:ReactElement = <Spinner progress={0} size={360} />
export const largeSpinner:ReactElement = <Spinner progress={0} size={540} />

afterEach(cleanup)

describe('<Spinner />', () => {
	it('renders the correct tags', () => {

		const { getByRole, container } = render(smallSpinner)
		const spinner = getByRole('progressbar')
		expect(spinner.children.length).toEqual(7)
		expect(getByRole('progressbar')).toHaveAccessibleName()

		const circleChildren = within(container).getAllByTestId('circle')
		expect(circleChildren).toHaveLength(2)
		
		const animationChildren = within(container).getAllByTestId('animation element')
		expect(animationChildren).toHaveLength(3)
	})
	it('renders the viewbox correctly', () => {
		
		const { getByRole, rerender } = render(smallSpinner)
		expect(getByRole('progressbar')).toHaveAttribute('viewBox', '0 0 180 180')

		rerender(mediumSpinner)
		expect(getByRole('progressbar')).toHaveAttribute('viewBox', '0 0 360 360')

		rerender(largeSpinner)
		expect(getByRole('progressbar')).toHaveAttribute('viewBox', '0 0 540 540')
	})

	it('renders the different spinner sizes', () => {
		
		let { container, rerender } = render(smallSpinner)
		expect(container).toMatchSnapshot()
	
		rerender(mediumSpinner)
		expect(container).toMatchSnapshot()
	
		rerender(largeSpinner)
		expect(container).toMatchSnapshot()
	})
})
