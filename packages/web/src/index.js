import { AppRegistry } from 'react-native'

import App from '@coorpacademy/components/src/app';

AppRegistry.registerComponent('web', () => App);
AppRegistry.runApplication('web', {
  rootTag: document.getElementById('root')
});
