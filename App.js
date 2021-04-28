import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import BotScreen from './src/screens/BotScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';
import MethodologyScreen from './src/screens/MethodologyScreen';
import InsightsScreen from './src/screens/InsightsScreen';
import SaveEnergyScreen from './src/reduceCF/SaveEnergyScreen';
import EatLessMeatScreen from './src/reduceCF/EatLessMeatScreen';
import DriveLessScreen from './src/reduceCF/DriveLessScreen';
import RenewableAlternativesScreen from './src/reduceCF/RenewableAlternativesScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Bot: BotScreen,
    AboutUs: AboutUsScreen,
    Methodology: MethodologyScreen,
    Insights: InsightsScreen,
    SaveEnergy: SaveEnergyScreen,
    EatLessMeat: EatLessMeatScreen,
    DriveLess: DriveLessScreen,
    RenewableAlternatives: RenewableAlternativesScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      cardStyle: {backgroundColor: '#FFFFFF'},
    },
  },
);

export default createAppContainer(navigator);
