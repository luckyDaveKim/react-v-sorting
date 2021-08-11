import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';

const ChartPerformance: React.FC = () => {
  const sortChart = useSelector(
    (state: RootState) => state.chartData.sortChart
  );
  const performance = sortChart.getPerformance();

  return (
    <>
      <h5>Performance</h5>
      <table>
        <tbody>
          <tr>
            <td>Worst-case time complexity</td>
            <td>
              <code>{performance.time.worstCase}</code>
            </td>
          </tr>
          <tr>
            <td>Best-case time complexity</td>
            <td>
              <code>{performance.time.bestCase}</code>
            </td>
          </tr>
          <tr>
            <td>Average-case time complexity</td>
            <td>
              <code>{performance.time.averageCase}</code>
            </td>
          </tr>
          <tr>
            <td>Worst-case space complexity</td>
            <td>
              <code>{performance.space.worstCase}</code>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ChartPerformance;
