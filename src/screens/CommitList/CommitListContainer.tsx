import CommitList from './CommitList';
import {StoreService} from '../../redux/StoreService';
import {putCurrentCommit} from '../../redux/actions';

export const mapStateToProps = (state: ICommitListStateProps) => ({
  commitList: state.commits.commitList,
});

export const mapDispatchToProps = (dispatch: (T: ICommitReducer) => void) => ({
  setCurrentCommit: (commit: ICommit) => {
    dispatch(putCurrentCommit(commit));
  },
});

const CommitListContainer = StoreService.connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommitList);

export default CommitListContainer;
