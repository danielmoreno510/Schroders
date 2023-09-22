import {createSelector} from 'reselect';

const selectCommitList = (state: ICommitListStateProps) =>
  state.commits.commitList!;

export const getHistogramData = createSelector(
  [selectCommitList],
  (commitList: ICommit[]) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const histogramData = [
      {label: 'January', value: 0, size: 0},
      {label: 'Febrary', value: 0, size: 0},
      {label: 'March', value: 0, size: 0},
      {label: 'April', value: 0, size: 0},
      {label: 'May', value: 0, size: 0},
      {label: 'June', value: 0, size: 0},
      {label: 'July', value: 0, size: 0},
      {label: 'August', value: 0, size: 0},
      {label: 'September', value: 0, size: 0},
      {label: 'October', value: 0, size: 0},
      {label: 'November', value: 0, size: 0},
      {label: 'December', value: 0, size: 0},
    ];

    commitList.forEach(commit => {
      const month = months[new Date(commit.created_at).getMonth()];
      const currentData = histogramData.find(({label}) => label === month)!;
      currentData.value = currentData.value + 1;
    });

    const maxData = Math.max(...histogramData.map(data => data.value));
    histogramData.forEach(data => {
      data.size = data.value / (maxData / 100) - 10;
    });

    return histogramData;
  },
);
