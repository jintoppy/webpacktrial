import lodash from 'lodash';
import Util from './util';

const res = lodash.concat([1,2], [3,4]);
const util = new Util();
const sum = util.add(1,2);
console.log(sum);

console.log(res);