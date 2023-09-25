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
      {name: 'January', label: 'Jan', value: 0, size: 0},
      {name: 'February', label: 'Feb', value: 0, size: 0},
      {name: 'March', label: 'Mar', value: 0, size: 0},
      {name: 'April', label: 'Apr', value: 0, size: 0},
      {name: 'May', label: 'May', value: 0, size: 0},
      {name: 'June', label: 'Jun', value: 0, size: 0},
      {name: 'July', label: 'Jul', value: 0, size: 0},
      {name: 'August', label: 'Aug', value: 0, size: 0},
      {name: 'September',label: 'Sep', value: 0, size: 0},
      {name: 'October', label: 'Oct', value: 0, size: 0},
      {name: 'November', label: 'Nov', value: 0, size: 0},
      {name: 'December', label: 'Dec', value: 0, size: 0},
    ];

    commitList.forEach(commit => {
      const month = months[new Date(commit.created_at).getMonth()];
      const currentData = histogramData.find(({name}) => name === month)!;
      currentData.value = currentData.value + 1;
    });

    const maxData = Math.max(...histogramData.map(data => data.value));
    histogramData.forEach(data => {
      data.size = data.value / (maxData / 100) - 10;
    });

    return histogramData;
  },
);
