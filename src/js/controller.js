import * as config from './config';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

let data;
fetch(`${config.API_URL}${config.API_KEY}`)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log('error'));
