import { once } from 'node:events'
import http from 'node:http'

export const server = http.createServer(async (request, response) => {
  if (request.headers['content-length'] !== '0') {
    const body = await once(request, 'data')
    console.log({ body })
  }
  response.writeHead(401)
  response.end()
})
  .listen(3000)
