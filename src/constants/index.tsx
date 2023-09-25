import {InfoOutlineIcon, PlayIcon, ShareIcon} from 'native-base';

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
    icon: PlayIcon,
  },
  {
    name: 'Commit List',
    icon: ShareIcon,
  },
  {
    name: 'About',
    icon: InfoOutlineIcon,
  },
];

export const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const GRAPH_MARGIN = 26;
export const GRAPH_BAR_WIDTH = 5;
export const COLORS = {axis: primaryColor, bars: secondaryColor};

export const INSET = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

export const histogramData = [
  {name: 'January', label: 'Jan', value: 0, size: 0},
  {name: 'February', label: 'Feb', value: 0, size: 0},
  {name: 'March', label: 'Mar', value: 0, size: 0},
  {name: 'April', label: 'Apr', value: 0, size: 0},
  {name: 'May', label: 'May', value: 0, size: 0},
  {name: 'June', label: 'Jun', value: 0, size: 0},
  {name: 'July', label: 'Jul', value: 0, size: 0},
  {name: 'August', label: 'Aug', value: 0, size: 0},
  {name: 'September', label: 'Sep', value: 0, size: 0},
  {name: 'October', label: 'Oct', value: 0, size: 0},
  {name: 'November', label: 'Nov', value: 0, size: 0},
  {name: 'December', label: 'Dec', value: 0, size: 0},
];
