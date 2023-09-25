/* eslint-disable */
interface IHistogramProps {
  histogram: IHistogramData[];
  total: number;
}

interface IHistogramData {
  name: string;
  label: string;
  value: number;
  size: number;
}

interface ISvgHistogramProps {
  data: IHistogramData[];
  total: number;
}
