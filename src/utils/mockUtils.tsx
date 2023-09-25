export const mockCommits = (): ICommit[] => {
  const commits: ICommit[] = [];
  for (let id = 1; id < 1000; id++) {
    const month = Math.floor(Math.random() * 12) + 1;

    commits.push({
      id: id + 10,
      node_id: `${id}`,
      title: `Title ${id}`,
      user: {login: `User ${id}`, id: `${id}`, avatar_url: ''},
      comments: 3,
      created_at: `2023-${month < 10 ? '0' : ''}${month}-01T17:47:29Z`,
      body: `Content ${id}`,
    });
  }

  return commits;
};
