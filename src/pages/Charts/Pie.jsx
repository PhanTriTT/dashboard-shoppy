import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { pieChartData } from '../../data/dummy';
const Pie = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category={'Pie'} title='Project Cost Breakdown' />
      <div className='w-full'>
        <AccumulationChartComponent
          id='pie-chart'
          legendSettings={{ background: '#fff' }}
        >
          <Inject
            services={[
              AccumulationLegend,
              PieSeries,
              AccumulationTooltip,
              AccumulationDataLabel,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={pieChartData}
              name='Browser'
              xName='x'
              yName='y'
              explode={true}
              explodeOffset='10%'
              explodeIndex={0}
              startAngle={30}
              dataLabel={{
                visible: true,
                position: 'Outside',
                name: 'text',
                font: {
                  fontWeight: '600',
                },
              }}
              radius='70%'
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};
export default Pie;
