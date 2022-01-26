import LocalDatabase from './LocalDatabase'
import Url from '../models/Url'

class UrlDatabase {
  private static instance: UrlDatabase

  database: LocalDatabase<Url>

  private constructor() {
    this.database = new LocalDatabase()
  }

  public static getInstance(): UrlDatabase {
    if (!UrlDatabase.instance) {
      UrlDatabase.instance = new UrlDatabase()
    }
    return UrlDatabase.instance
  }
}

export default UrlDatabase
