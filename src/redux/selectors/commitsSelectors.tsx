import {createSelector} from 'reselect';
import {histogramData as data} from '../../constants';
import {cloneDeep} from 'lodash';

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

    const histogramData = cloneDeep(data);

    commitList.forEach(commit => {
      const month = months[new Date(commit.created_at).getMonth()];
      const currentData = histogramData.find(({name}) => name === month)!;
      currentData.value = currentData.value + 1;
    });

    const maxData = Math.max(...histogramData.map(data => data.value));
    histogramData.forEach(data => {
      if (data.value > 0) {
        data.size = data.value / (maxData / 100) - 10;
      }
    });

    return histogramData;
  },
);
