import React from 'react'

export default function InputDefaults({labelData, inputProps}) {
  return (
    <div className="input-wrap">
        <label>{labelData}:</label>
        <input {...inputProps}/>
      </div>
  )
}
