import IHashable from './IHashable'
import { cyrb53, validURL } from '../utils'

class Url implements IHashable {
  uri: string

  constructor(uri: string) {
    if (!validURL(uri)) {
      throw new Error('Invalid URL')
    }
    this.uri = uri
  }

  hash(): string {
    return `${cyrb53(this.uri)}`
  }
}

export default Url
