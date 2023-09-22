declare module '*.png';

/* eslint-disable */
type Navigation = {
  navigation: Navigate;
};

type Navigate = {
  navigate(screen: string): any;
};

interface IHomeProps {
  isFetchingCommitList: boolean;
  histogramData: IHistogramData[];
  year: string;
  getCommits: (year: string) => void;
  navigation: Navigate;
}
