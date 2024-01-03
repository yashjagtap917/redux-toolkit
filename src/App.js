import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, reset, sub } from './store/slice/counterSlice'

const App = () => {

  const count = useSelector((state) => state.counter)
  let dispatch = useDispatch()

  return (
    <div>

      <h1>{count}</h1>
      <button onClick={() => dispatch(add())}>add</button>
      <button onClick={() => dispatch(sub())}>add</button>
      <button onClick={() => dispatch(reset())}>add</button>
    </div>
  )
}

export default App