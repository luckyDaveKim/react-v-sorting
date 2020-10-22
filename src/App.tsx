import React, {useState} from 'react'
import styles from './App.module.css'
import Chart, {Data} from './components/molecules/Chart/Chart'

const App: React.FC = () => {
  const MAX_VALUE = 100
  const NUM_SIZE = 10
  const [num, setNum] = useState<Data>([])
  const [timeoutIds, setTimeoutIds] = useState<number[]>([])

  const run = () => {
    // clear running data, before run
    clearTimeouts()

    const nums = generateNums()
    const history = selectionSort(nums)
    runVisualize(history)
  }

  const generateNums = (): number[] => {
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

  const selectionSort = (nums: Data): Data[] => {
    const history: Data[] = [[...nums]]

    const dataSize = nums.length
    for (let i = 0; i < dataSize - 1; i++) {
      for (let pivot = i + 1; pivot < dataSize; pivot++) {
        if (nums[pivot] < nums[i]) {
          swap(nums, i, pivot)
          history.push([...nums])
        }
      }
    }

    return history
  }

  const swap = (nums: Data, leftIndex: number, rightIndex: number) => {
    const tempVal = nums[leftIndex]
    nums[leftIndex] = nums[rightIndex]
    nums[rightIndex] = tempVal
  }

  const runVisualize = (history: Data[]) => {
    const timeoutIds: number[] = []

    history.forEach((eachNums, i) => {
      const timeoutId = setTimeout((curData: Data) => {
          setNum(curData)
        },
        i * 500,
        eachNums)

      timeoutIds.push(timeoutId)
    })

    setTimeoutIds(timeoutIds)
  }

  const stop = () => {
    clearTimeouts()
  }

  const clearTimeouts = () => {
    timeoutIds.forEach(timeoutId =>
      clearTimeout(timeoutId)
    )
  }

  return (
    <div className="App">
      <Chart nums={num} />

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
