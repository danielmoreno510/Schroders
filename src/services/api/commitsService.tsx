import { API_TOKEN } from '../../constants';
import { mockCommits } from '../../utils/mockUtils';
import http from '../http';

export const getCommits = async (
  year: string,
): Promise<ICommitListResponseData> => {
  let concatData: ICommitListResponseData = {
    total_count: 0,
    incomplete_results: false,
    items: [],
  };

  /* eslint-disable */
  /* Code to get all the data for the year */
  // for (let page = 0; page < 10; page++) {
  //   const {data} = await http.get(`/issues?page=${page}&per_page=100&q=is:merged%20merged:%3C${year}-03-28%20repo:apple/swift`);
  //   concatData = {...concatData, items: [...concatData.items, ...data.items]};
  // }

  // for (let page = 0; page < 10; page++) {
  //   const {data} = await http.get(`/issues?page=${page}&per_page=100&q=is:merged%20merged:%3C${year}-06-30%20repo:apple/swift`);
  //   concatData = {...concatData, items: [...concatData.items, ...data.items]};
  // }

  // for (let page = 0; page < 10; page++) {
  //   const {data} = await http.get(`/issues?page=${page}&per_page=100&q=is:merged%20merged:%3C${year}-09-30%20repo:apple/swift`);
  //   concatData = {...concatData, items: [...concatData.items, ...data.items]};
  // }

  let pages = API_TOKEN ? 10 : 1

  for (let i = 0; i < pages; i++) {
    const {data} = await http.get(
      `/issues?page=${i}&per_page=100&q=is:merged%20merged:%3C${year}-12-30%20repo:apple/swift`,
    );
    concatData = {...concatData, items: [...concatData.items, ...data.items]};
  }
  
  // return {...concatData, items: mockCommits()} // With mock data

  return concatData;
};
