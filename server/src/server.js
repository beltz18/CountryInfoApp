import app    from './controllers/app.js'
import * as v from '../global/var.js'

const __init__ = () => {
  app().listen(v.PORT, async () => {
    try { 
      console.log(`Server listening on PORT: ${v.PORT}`)
    } catch (error) { console.log(error.cause) }
  })
}

__init__()