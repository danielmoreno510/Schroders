/* eslint-disable */
interface ICommit {
  id: number;
  node_id: string;
  title: string;
  user: {
    login: string;
    id: string;
    avatar_url: string;
  };
  comments: number;
  created_at: string;
  body: string;
}

interface ICommitListProps {
  isFetchingCommitList: boolean;
  commitList: ICommit[];
  getCommits: () => void;
  setCurrentCommit(commit: ICommit): any;
  navigation: Navigate;
}

interface ICommitInitialState {
  isFetchingCommitList?: boolean;
  commitList?: ICommit[];
  isFetchingCommitDetails?: boolean;
  commit?: ICommit | null;
  year?: string;
}

interface ICommitReducer {
  type: string;
  commit?: ICommit;
  commitList?: ICommit[];
  year?: string;
}

interface ICommitListStateProps {
  commits: ICommitInitialState;
}

interface ICommitListResponse {
  data: ICommitListResponseData;
}

interface ICommitListResponseData {
  total_count: number;
  incomplete_results: boolean;
  items: ICommit[];
}

interface CommitProps {
  commit: ICommit;
  showCommit: (commit: ICommit) => void;
}
