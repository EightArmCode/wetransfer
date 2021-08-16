# WeTransfer Spinner
## by: EightArmCode

## Description
When activated, the spinners will update themselves until completion, with the percentage displayed in the center. Faster velocity is represented by completing a greater percentage in a single cycle of 2s duration. Three sizes are available, and other sizes could be accomodated.

## What's inside?

### Stack
Seemed like an obvious choice to use SVG for this. It is animated with SMIL (Synchronized Multimedia Integration Language). It mixes quite nicely with react, since the state variables used for the animatino are available right in the markup. It makes it very flexible.

This is mainly written in Typescript + React, using newer ES syntax wherever possible. Jest & @testing-library/react for tests. Webpack as bundler. Yarn as package manager. MaterialUI components and Aphrodite for styled components.

### What I didn't get to finish
With the trend toward styled components, I really miss SASS' math functions on color. You can increase or decrease things like brightness, hue, and saturation with one line of code. I originally planned to make a color picker on the page which would allow the user to add a hexadecimal code and then propogate the theme throughout.

I also used MaterialUI components for React which proved a little too time consuming to style. (Typescript issues) I ran out of time trying to override the default theme. Thus I did my best to make the controls on the page blend with the background image - which seems to be how the WeTransfer page looks; it blends everything *except* the upload frame with the artwork/ad in the background.

## Install & run

    yarn
    yarn start

*Access the page locally at https://localhost:1917*

## Run tests

    yarn test


## Build

    yarn build
