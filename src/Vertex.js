import uuid from 'uuid'
import {ObjectId} from 'mongodb'

const getDefaultSubjectProps = () => {
  return {

  }
}

const schema = {
  type: {type: String, default: 'people'},
  props: {type: Object, default: getDefaultSubjectProps},
  createTime: {type: Date, default: Date.now},
  updateTime: {type: Date, default: Date.now},
}

class Vertex {


  constructor(db){
    this.db = db
  }

  
}

export default Vertex