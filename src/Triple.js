import uuid from 'uuid'
import {ObjectId} from 'mongodb'

const schema = {
  subject: {type: String, default: uuid.v1},
  object: {type: String, default: uuid.v1}, // 可以是dbref (当描述树的关系的时候)
  predicate: {type: String}, 
  createTime: {type: Date, default: Date.now},
}


class Triple {

}

export default Triple