const moment = require('moment');
const now = moment().format("YYYY-MM-DD HH:mm:ss");
console.log(now);

const code = 'KienLongBank';
const time = '2020-02-25 22:59:01';


const bcrypt = require('bcryptjs');
const c = code + time;
const hash = bcrypt.hashSync(c, 8);
console.log(hash);