import React from 'react'

function result({serie}) {
  return (
    serie.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
    )
  )
}

export default result