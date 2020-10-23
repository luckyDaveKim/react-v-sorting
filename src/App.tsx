import React, {useState} from 'react'
import styles from './App.module.css'
import SortChart, {SortChartData} from './components/molecules/Chart/SortChart'

const App: React.FC = () => {
  const MAX_VALUE = 100
  const NUM_SIZE = 10
  const [capture, setCapture] = useState<SortChartData>({
    data: [],
    comparingIndices: [],
    comparedIndices: [],
    sortedIndices: []
  })
  const [timeoutIds, setTimeoutIds] = useState<NodeJS.Timeout[]>([])

  const run = () => {
    // clear running data, before run
    clearTimeouts()

    const data = generateRamdomData()
    const trace = selectionSort(data)
    runVisualize(trace)
  }

  const clearTimeouts = () => {
    timeoutIds.forEach(timeoutId =>
      clearTimeout(timeoutId)
    )
  }

  const generateRamdomData = (): number[] => {
    const nums: number[] = []
    for (let i = 0; i < NUM_SIZE; i++) {
      const randomNum = generateRandomNum(MAX_VALUE)
      nums.push(randomNum)
    }
    return nums
  }

  const generateRandomNum = (maxValue: number): number => {
    return Math.round(Math.random() * maxValue)
  }

  const selectionSort = (data: number[]): SortChartData[] => {
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
          swap(data, i, pivot)

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

  const swap = (nums: number[], leftIndex: number, rightIndex: number) => {
    const tempVal = nums[leftIndex]
    nums[leftIndex] = nums[rightIndex]
    nums[rightIndex] = tempVal
  }

  const runVisualize = (trace: SortChartData[]) => {
    const timeoutIds: NodeJS.Timeout[] = []

    trace.forEach((capture, i) => {
      const timeoutId = setTimeout((capture) => {
          setCapture(capture)
        },
        i * (30 / trace.length) * 1000,
        capture)

      timeoutIds.push(timeoutId)
    })

    setTimeoutIds(timeoutIds)
  }

  const stop = () => {
    clearTimeouts()
  }

  return (
    <div className="App">
      <SortChart sortChartData={capture} />

      <button
        className={styles.RunButton}
        onClick={run}
      >
        Run
      </button>

      <button
        className={styles.StopButton}
        onClick={stop}
      >
        Stop
      </button>
    </div>
  )
}

export default App
