import React from 'react';
import {Svg, G, Line, Rect, Text} from 'react-native-svg';
import * as d3 from 'd3';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../utils/responsiveUtils';
import {GRAPH_BAR_WIDTH, GRAPH_MARGIN, COLORS} from '../../constants';

const SvgHistogram: React.FC<ISvgHistogramProps> = ({data, total}) => {
  const SVGHeight = heightPercentageToDP('30%');
  const SVGWidth = '100%';
  const graphHeight = SVGHeight - 2 * GRAPH_MARGIN;
  const graphWidth = widthPercentageToDP('90%');

  const xDomain = data.map(item => item.label);
  const xRange = [0, graphWidth];
  const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);

  const maxValue = d3.max(data, (d: IHistogramData) => d.value)!;
  const topValue = Math.ceil(maxValue / data.length) * data.length;
  const yDomain = [0, topValue];
  const yRange = [0, graphHeight];
  const y = d3.scaleLinear().domain(yDomain).range(yRange);

  const middleValue = topValue / 2;

  return (
    <Svg width={SVGWidth} height={SVGHeight}>
      <G y={graphHeight + GRAPH_MARGIN}>
        <Text
          x={graphWidth - 4}
          textAnchor="end"
          y={y(topValue) * -1 - 10}
          fontSize={14}
          fill="black"
          fillOpacity={0.4}>
          {' '}
          {total}{' '}
        </Text>

        <Line
          x1="0"
          y1={y(topValue) * -1}
          x2={graphWidth}
          y2={y(topValue) * -1}
          stroke={COLORS.axis}
          strokeDasharray={[3, 3]}
          strokeWidth="0.5"
        />
        <Line
          x1="0"
          y1={y(middleValue) * -1}
          x2={graphWidth}
          y2={y(middleValue) * -1}
          stroke={COLORS.axis}
          strokeDasharray={[3, 3]}
          strokeWidth="0.5"
        />
        <Line
          x1="0"
          y1="2"
          x2={graphWidth}
          y2="2"
          stroke={COLORS.axis}
          strokeWidth="0.5"
        />

        {data.map(item => (
          <Rect
            key={item.label}
            x={x(item.label)! - GRAPH_BAR_WIDTH / 2}
            y={y(item.value) * -1}
            rx={2.5}
            width={GRAPH_BAR_WIDTH}
            height={y(item.value)}
            fill={COLORS.bars}
          />
        ))}

        {data.map(item => (
          <Svg key={item.label}>
            <Text fontSize="9" x={x(item.label)} y="12" textAnchor="middle">
              {' '}
              {item.label}{' '}
            </Text>
            <Text fontSize="7" x={x(item.label)} y="21" textAnchor="middle">
              {' '}
              {item.value}{' '}
            </Text>
          </Svg>
        ))}
      </G>
    </Svg>
  );
};

export default SvgHistogram;
