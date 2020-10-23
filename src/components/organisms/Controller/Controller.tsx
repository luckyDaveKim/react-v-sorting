import React from 'react'
import NumberController, {NumberControllerProps} from '../../molecules/NumberController/NumberController'

interface ControllerProps {
  speed: NumberControllerProps;
}

const Controller: React.FC<ControllerProps> = ({
                                                 speed: {
                                                   text: speedText,
                                                   data: {
                                                     value: speedValue,
                                                     minVal: speedMinVal,
                                                     maxVal: speedMaxVal
                                                   },
                                                   handleChange: speedHandleChange
                                                 }
                                               }) => {
  return (
    <div>
      <NumberController
        text={speedText}
        data={{
          value: speedValue,
          minVal: speedMinVal,
          maxVal: speedMaxVal
        }}
        handleChange={speedHandleChange}
      />
    </div>
  )
}

export default Controller