import CommiDetails from './CommitDetails';
import {StoreService} from '../../redux/StoreService';

export const mapStateToProps = (state: ICommitListStateProps) => ({
  commit: state.commits.commit,
});

const CommitDetailsContainer =
  StoreService.connect(mapStateToProps)(CommiDetails);

export default CommitDetailsContainer;
