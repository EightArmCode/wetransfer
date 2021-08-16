import React from 'react'
import ReactDom from 'react-dom'
import SpinnerGallery from './components/SpinnerGallery/SpinnerGallery'

if (typeof window !== 'undefined' ) {
    ReactDom.render(
        <SpinnerGallery />,
        document.getElementById('root')
    )
}
