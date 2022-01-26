import { Router } from 'express'

import UrlController from './controllers/UrlController'

const routes = Router()

routes.post('/api/url', UrlController.save)
routes.get('/api/url/:code', UrlController.get)

export default routes
