import React, {useEffect, useState} from 'react'
import SortChart, {SortChartData} from './components/organisms/Chart/SortChart'

const App: React.FC = () => {
  const MAX_VALUE = 100
  const NUM_SIZE = 10
  const NORMALIZE_SPEED_VALUE = 100
  const [speed, setSpeed] = useState<number>(5)
  const [trace, setTrace] = useState<SortChartData[]>([])
  const [traceStep, setTraceStep] = useState<number>(0)
  const [capture, setCapture] = useState<SortChartData>({
    data: [],
    comparingIndices: [],
    comparedIndices: [],
    sortedIndices: []
  })
  const [timeoutIds, setTimeoutIds] = useState<NodeJS.Timeout[]>([])

  useEffect(() => {
    _initDate()
  }, [])

  const handlePlay = () => {
    (trace.length - 1 === traceStep)
      ? _run(trace, 0)
      : _run(trace, traceStep)
  }

  const handlePause = () => {
    _stop()
  }

  const handleRepeat = () => {
    _stop()
    _run(trace, 0)
  }

  const handleShuffle = () => {
    _stop()
    _clearData()
    _initDate()
  }

  const _run = (trace: SortChartData[], until: number) => {
    const timeoutIds: NodeJS.Timeout[] = []

    const remainingTrace = trace.slice(until)
    remainingTrace.forEach((capture, i) => {
      const timeout = i * (0.5 / speed) * 1000

      const timeoutId = setTimeout((capture, i) => {
          setCapture(capture)
          setTraceStep(until + i)
        },
        timeout,
        capture,
        i)

      timeoutIds.push(timeoutId)
    })

    setTimeoutIds(timeoutIds)
  }

  const _stop = () => {
    timeoutIds.forEach(timeoutId =>
      clearTimeout(timeoutId)
    )
    setTimeoutIds([])
  }

  const _clearData = () => {
    setTraceStep(0)
  }

  const _initDate = () => {
    const data = _generateRandomData()
    const trace = _selectionSort(data)
    setTrace(trace)
    setCapture(trace[0])
  }

  const _generateRandomData = (): number[] => {
    const nums: number[] = []
    for (let i = 0; i < NUM_SIZE; i++) {
      const randomNum = _generateRandomNum(MAX_VALUE)
      nums.push(randomNum)
    }
    return nums
  }

  const _generateRandomNum = (maxValue: number): number => {
    return Math.round(Math.random() * maxValue)
  }

  const _selectionSort = (data: number[]): SortChartData[] => {
    const trace: SortChartData[] = []

    const addToTrace = ({
                          data,
                          comparingIndices,
                          comparedIndices,
                          sortedIndices
                        }: SortChartData) => {
      trace.push({
        data: [...data],
        comparingIndices: [...comparingIndices],
        comparedIndices: [...comparedIndices],
        sortedIndices: [...sortedIndices]
      })
    }

    // add init trace
    addToTrace({
      data,
      comparingIndices: [],
      comparedIndices: [],
      sortedIndices: []
    })

    const dataSize = data.length
    for (let i = 0; i < dataSize - 1; i++) {
      for (let pivot = i + 1; pivot < dataSize; pivot++) {
        // add comparing trace
        addToTrace({
          data,
          comparingIndices: [i, pivot],
          comparedIndices: [],
          sortedIndices: [...trace[trace.length - 1].sortedIndices]
        })

        if (data[pivot] < data[i]) {
          _swap(data, i, pivot)

          // add compared trace
          addToTrace({
            data,
            comparingIndices: [i, pivot],
            comparedIndices: [i, pivot],
            sortedIndices: [...trace[trace.length - 1].sortedIndices]
          })
        }
      }

      // add partial sorted trace
      addToTrace({
        data,
        comparingIndices: [],
        comparedIndices: [],
        sortedIndices: [...trace[trace.length - 1].sortedIndices, i]
      })
    }

    // add finish sorted trace
    addToTrace({
      data,
      comparingIndices: [],
      comparedIndices: [],
      sortedIndices: [...trace[trace.length - 1].sortedIndices, dataSize - 1]
    })

    return trace
  }

  const _swap = (nums: number[], leftIndex: number, rightIndex: number) => {
    const tempVal = nums[leftIndex]
    nums[leftIndex] = nums[rightIndex]
    nums[rightIndex] = tempVal
  }

  return (
    <div className="App">
      <SortChart sortChartData={capture}/>
      traceStep {traceStep}
      traceLength {trace.length}
      timeoutIds {timeoutIds.length}
      <button
        onClick={
          (timeoutIds.length === 0 || trace.length - 1 === traceStep)
            ? handlePlay
            : handlePause
        }
      >
        {
          (timeoutIds.length === 0 || trace.length - 1 === traceStep)
            ? 'Play'
            : 'Pause'
        }
      </button>

      <button
        onClick={handleRepeat}
      >
        Repeat
      </button>

      <button
        onClick={handleShuffle}
      >
        Shuffle
      </button>

      {/*<Controller*/}
      {/*  speed={{*/}
      {/*    text: '속도 조절',*/}
      {/*    data: {*/}
      {/*      value: speed,*/}
      {/*      minVal: 1,*/}
      {/*      maxVal: 10*/}
      {/*    },*/}
      {/*    handleChange: handleSpeedChange*/}
      {/*  }}*/}
      {/*/>*/}
    </div>
  )
}

export default App
