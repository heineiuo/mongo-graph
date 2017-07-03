import Joi from 'joi'
import defaults from 'lodash/defaults'
import Vertex from './Vertex'
import Triple from './Triple'

class MongoGraph {
  construnctor(db, options) {
    options = defaults(options, {
      prefix: 'graph_'
    })
    this.db = db
    this.collections = {
      vertex: new Vertex(db.collection(`${options.prefix}vertex`)),
      triple: new Triple(db.collection(`${options.prefix}triple`))
    }
  }

  vertex = (id) => {
    const { vertex, triple } = this.collections;
    return Vertex(id)
  }

  triple = (query) => {
    const { vertex, triple } = this.collections;
    return triple(query)
  }


}

export default MongoGraph