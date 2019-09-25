import React from 'react'
import { useMyHook } from '@mtliendo/react-use-dad-jokes'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App