import { Request, Response } from 'express'
import UrlDatabase from '../database/UrlDatabase'
import Url from '../models/Url'

class UrlController {
  save(req: Request, res: Response): Response {
    try {
      const url = new Url(req.body.url)
      UrlDatabase.getInstance().database.set(url)
      return res.status(201).json({ code: url.hash() })
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }

  get(req: Request, res: Response): Response {
    const url = UrlDatabase.getInstance().database.get(req.params.code)
    return url ? res.json(url) : res.status(404).json({ message: 'Not found' })
  }
}

export default new UrlController()
