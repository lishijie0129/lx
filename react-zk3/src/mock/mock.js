import Mock from 'mockjs'
import data from './data.json'
let mock=Mock.mock("/api/data",data)
export default mock