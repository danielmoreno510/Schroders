import Navigation from './Navigation';
import {StoreService} from '../../redux/StoreService';

const NavigationContainer = StoreService.connect()(Navigation);

export default NavigationContainer;
