import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterValue() {
  let counter = useSelector((state) => state.counter)
  return (
    <div>
      <h1>value:{counter}</h1>
    </div>
  )
}
