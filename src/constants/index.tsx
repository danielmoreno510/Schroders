// Service
export const API_URL = 'https://api.github.com/search';
export const API_TOKEN = ''; // <-- Github token Here

// Colors
export const primaryColor = '#f1b30a';
export const secondaryColor = '#f1b34f';

// Menu
export const menuOptions = [
  {
    name: 'Home',
    icon: 'home',
  },
  {
    name: 'Commit List',
    icon: 'git-commit',
  },
  {
    name: 'About',
    icon: 'ios-information-circle',
  },
];

export const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const mockCommits: ICommit[] = [
  {
    id: 1,
    node_id: '1',
    title: 'Mock 1',
    user: {login: 'User 1', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-09-21T17:47:29Z',
    body: 'Mock 1',
  },
  {
    id: 2,
    node_id: '2',
    title: 'Mock 2',
    user: {login: 'User 2', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-09-21T17:47:29Z',
    body: 'Mock 3',
  },
  {
    id: 3,
    node_id: '3',
    title: 'Mock 3',
    user: {login: 'User 3', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-09-21T17:47:29Z',
    body: 'Mock 3',
  },
  {
    id: 4,
    node_id: '4',
    title: 'Mock 4',
    user: {login: 'User 1', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-01-21T17:47:29Z',
    body: 'Mock 4',
  },
  {
    id: 5,
    node_id: '5',
    title: 'Mock 5',
    user: {login: 'User 2', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-01-21T17:47:29Z',
    body: 'Mock 5',
  },
  {
    id: 7,
    node_id: '7',
    title: 'Mock 7',
    user: {login: 'User 2', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-03-21T17:47:29Z',
    body: 'Mock 7',
  },
  {
    id: 8,
    node_id: '8',
    title: 'Mock 8',
    user: {login: 'User 3', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-03-21T17:47:29Z',
    body: 'Mock 8',
  },
  {
    id: 9,
    node_id: '9',
    title: 'Mock 9',
    user: {login: 'User 3', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-04-21T17:47:29Z',
    body: 'Mock 9',
  },
  {
    id: 10,
    node_id: '10',
    title: 'Mock 10',
    user: {login: 'User 2', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-04-21T17:47:29Z',
    body: 'Mock 10',
  },
  {
    id: 11,
    node_id: '11',
    title: 'Mock 11',
    user: {login: 'User 3', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-05-21T17:47:29Z',
    body: 'Mock 11',
  },
  {
    id: 12,
    node_id: '12',
    title: 'Mock 12',
    user: {login: 'User 2', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-06-21T17:47:29Z',
    body: 'Mock 12',
  },
  {
    id: 13,
    node_id: '13',
    title: 'Mock 13',
    user: {login: 'User 2', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-06-21T17:47:29Z',
    body: 'Mock 13',
  },
  {
    id: 14,
    node_id: '14',
    title: 'Mock 14',
    user: {login: 'User 3', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-06-21T17:47:29Z',
    body: 'Mock 14',
  },
  {
    id: 15,
    node_id: '15',
    title: 'Mock 15',
    user: {login: 'User 3', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-06-21T17:47:29Z',
    body: 'Mock 15',
  },
  {
    id: 16,
    node_id: '16',
    title: 'Mock 16',
    user: {login: 'User 3', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-06-21T17:47:29Z',
    body: 'Mock 16',
  },
  {
    id: 17,
    node_id: '17',
    title: 'Mock 17',
    user: {login: 'User 3', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-06-21T17:47:29Z',
    body: 'Mock 17',
  },
  {
    id: 18,
    node_id: '18',
    title: 'Mock 18',
    user: {login: 'User 3', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-07-21T17:47:29Z',
    body: 'Mock 18',
  },
  {
    id: 19,
    node_id: '19',
    title: 'Mock 19',
    user: {login: 'User 3', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-08-21T17:47:29Z',
    body: 'Mock 19',
  },
  {
    id: 20,
    node_id: '20',
    title: 'Mock 20',
    user: {login: 'User 3', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-08-21T17:47:29Z',
    body: 'Mock 20',
  },
  {
    id: 21,
    node_id: '21',
    title: 'Mock 21',
    user: {login: 'User 3', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-09-21T17:47:29Z',
    body: 'Mock 21',
  },
  {
    id: 22,
    node_id: '22',
    title: 'Mock 22',
    user: {login: 'User 3', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-10-21T17:47:29Z',
    body: 'Mock 22',
  },
  {
    id: 23,
    node_id: '23',
    title: 'Mock 23',
    user: {login: 'User 3', id: '1', avatar_url: ''},
    comments: 3,
    created_at: '2023-11-21T17:47:29Z',
    body: 'Mock 23',
  },
];
