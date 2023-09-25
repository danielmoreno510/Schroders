/* eslint-disable */
interface IHistogramProps {
  histogram: IHistogramData[];
}

interface IHistogramData {
    name: string;
  label: string;
  value: number;
  size: number;
}

interface ISvgHistogramProps {
    data: IHistogramData[];
  }