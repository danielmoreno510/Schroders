import { InfoOutlineIcon, PlayIcon, ShareIcon } from "native-base";

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
export const COLORS = { axis: primaryColor,  bars: secondaryColor };