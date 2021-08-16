# WeTransfer Spinner
## by: EightArmCode

## Description
When activated, the spinners will update themselves until completion, with the percentage displayed in the center. Faster velocity is represented by completing a greater percentage in a single cycle of 2s duration. Three sizes are available, and other sizes could be accomodated.

## What's inside?

#### Stack
Seemed like an obvious choice to use SVG for this. It is animated with SMIL (Synchronized Multimedia Integration Language). It mixes quite nicely with react, since the state variables used for the animatino are available right in the markup. It makes it very flexible.

This is mainly written in Typescript + React, using newer ES syntax wherever possible. Jest for tests. Webpack as bundler. Yarn as package manager.

## Install & run
```
    yarn
    yarn start
```

## Run tests
```
    yarn test
```

Access the page locally at https://localhost:1917