
//使用commonjs的模块化规范
const{add} = require('./js/mathUtil.js')

console.log(add(12,31))

//使用ES6的模块化贵方
export {name} from "./js/demo";

console.log("name")

//依赖CSS
require('./css/demo.css')

//依赖Less
require('./css/super.less')