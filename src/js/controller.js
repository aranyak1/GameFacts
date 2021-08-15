import * as config from './config';
import { fetchApi, getFetch } from './helper';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

let url = `${config.API_URL}${config.API_KEY}&page_size=${config.ITEM_PER_PAGE}`;
getFetch(url).then((data) => {
  console.log(data); 
  gameArray(data);
});  
         
function gameArray(data) {
  console.log(data); 
  createGridElement(data[0]);
}

function createGridElement(gameObject)  {
          
}
