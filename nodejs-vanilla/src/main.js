import http from 'node:http'

export const server = http.createServer((request, response) => {
  response.writeHead(201).end()
})
