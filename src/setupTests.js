import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';

configure({adapter: new Adapter()});

/* eslint-disable */
jest.mock('native-base', () => jest.fn());
jest.mock('react-native-gesture-handler', () => jest.fn());
jest.mock('d3', () => jest.fn());
