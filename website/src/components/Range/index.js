import React, { useState } from 'react'

const Range = ({ val }) => {
  const [range, setRange] = useState(val)

  const handleChange = (e) => {
    setRange(e.target.value)
  }

  return (
    <div className="c-form__range">
      <input
        className="c-form__range-input"
        type="range"
        id="r"
        defaultValue={val}
        min="0"
        max="10"
        step="1"
        onChange={handleChange}
      />
      <output className="c-form__range-result" name="result" htmlFor="r">
        {range}
      </output>
    </div>
  )
}

Range.defaultProps = {
  val: 0,
}

export default Range
