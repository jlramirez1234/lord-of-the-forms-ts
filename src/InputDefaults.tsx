import React from 'react'

interface dataInput {
    name: string;

}

export default function InputDefaults({name, onChange, value}) {
  return (
    <div className="input-wrap">
        <label>{"First Name"}:</label>
        <input placeholder="Bilbo" />
      </div>
  )
}
