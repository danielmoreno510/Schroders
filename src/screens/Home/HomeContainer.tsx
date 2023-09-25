import Home from './Home';
import {StoreService} from '../../redux/StoreService';
import {fetchCommitList, putChart} from '../../redux/actions';
import {getHistogramData} from '../../redux/selectors/commitsSelectors';

export const mapStateToProps = (state: ICommitListStateProps) => ({
  isFetchingCommitList: state.commits.isFetchingCommitList,
  commitList: state.commits.commitList,
  year: state.commits.year,
  histogramData: getHistogramData(state),
  isLibrary: state.commits.isLibrary,
});

export const mapDispatchToProps = (dispatch: (T: ICommitReducer) => void) => ({
  getCommits: (year: string) => {
    dispatch(fetchCommitList(year));
  },
  changeChart: () => {
    dispatch(putChart());
  },
});

const HomeContainer = StoreService.connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
