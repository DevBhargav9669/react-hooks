import React, {useState} from 'react'

function HookCounter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <h1>Hello</h1>
    </div>
  )
}

export default HookCounter