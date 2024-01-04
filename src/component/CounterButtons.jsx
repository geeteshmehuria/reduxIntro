import React from 'react'
import { useDispatch } from 'react-redux'

export default function CounterButtons() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch({ type: 'INCRESE' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECRESE' })}>-1</button>
    </div>
  )
}
