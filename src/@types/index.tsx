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
  commitList: ICommit[];
  histogramData: IHistogramData[];
  year: string;
  isLibrary: boolean;
  getCommits: (year: string) => void;
  changeChart: () => void;
  navigation: Navigate;
}
