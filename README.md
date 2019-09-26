# @mtliendo/react-use-dad-jokes

> A custom react hook for getting the best dad jokes!

[![NPM](https://img.shields.io/npm/v/@mtliendo/react-use-dad-joke.svg)](https://www.npmjs.com/package/@mtliendo/react-use-dad-joke) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @mtliendo/react-use-dad-joke
```

## Usage

```jsx
import React, { Component } from 'react'

import { useDadJoke } from '@mtliendo/react-use-dad-joke'

const App = () => {
  const { isLoading, error, dadJoke } = useDadJoke();

  if (isLoading) return "Loading...";

  if (error) return "uh oh...something went wrong";

  return <main>{dadJoke.joke}</main>;
};
```

## License

MIT © [mtliendo](https://github.com/mtliendo)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
