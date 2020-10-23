import React from 'react'

export interface InputNumberData {
  value: number;
  minVal?: number;
  maxVal?: number;
}

export interface InputNumberProps {
  data: InputNumberData;
  onChange: any;
}

const InputNumber: React.FC<InputNumberProps> = ({
                                                   data: {
                                                     value,
                                                     minVal,
                                                     maxVal
                                                   },
                                                   onChange
                                                 }) => (
  <input
    type="number"
    value={value}
    min={minVal}
    max={maxVal}
    onChange={onChange}
  />
)

export default InputNumber