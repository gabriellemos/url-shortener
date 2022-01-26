import IHashable from '../models/IHashable'

class LocalDatabase<T extends IHashable> {
  private database: Map<String, T>

  constructor() {
    this.database = new Map()
  }

  set(value: T): void {
    this.database.set(value.hash(), value)
  }

  get(key: String): T {
    return this.database.get(key)
  }
}

export default LocalDatabase
