import React from 'react'
import InputNumber, {InputNumberData} from '../../atoms/InputNumber/InputNumber'

export interface NumberControllerProps {
  text: string;
  data: InputNumberData;
  handleChange: any;
}

const NumberController: React.FC<NumberControllerProps> = ({
                                                             text,
                                                             data: {
                                                               value,
                                                               minVal,
                                                               maxVal
                                                             },
                                                             handleChange
                                                           }) => (
  <span>
    <label>{text}</label>
    <InputNumber
      data={{
        value: value,
        minVal: minVal,
        maxVal: maxVal
      }}
      onChange={handleChange}
    />
  </span>
)

export default NumberController