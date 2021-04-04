import React from 'react';
import { PageHeader } from 'antd';
import { useSelector } from 'react-redux';
import { useMeasure } from 'react-use';
import { ConcentricChart } from '../components/custom/chart';
import RadarChart from '../components/charts/RadarChart';
import NoData from '../components/ui/NoData';
import { getEmptyData, getChartType, getSubtitle } from '../store/selectors';

import { RADAR, CONCENTRIC } from '../resources/constants';

const charts = {
  [RADAR]: RadarChart,
  [CONCENTRIC]: ConcentricChart,
};

export default function Chart() {
  const [ref, { width, height }] = useMeasure();
  const enteredData = useSelector(getEmptyData);
  const chart = useSelector(getChartType);
  const subtitle = useSelector(getSubtitle);
  const ChartComponent = charts[chart];

  return (
    <>
      <div className="pageHeader">
        <PageHeader title="Physio Map" subTitle={subtitle} />
      </div>

      <div ref={ref} className="single-chart-wrapper">
        <div className="chart-wrapper">
          {enteredData
            ? <NoData />
            : (
              <div className="chart">
                <ChartComponent width={width} height={height} className="single-chart-chart" />
              </div>
            )}
        </div>
      </div>
    </>
  );
}
