import React from 'react';
import Koa from 'koa'
import Router from 'koa-router'
import { renderToString } from 'react-dom/server';
import Demo from '../client/demo'

const server = new Koa()
const router = new Router()

async function render(Element) {
  // 获取组件初始props
  const props = await Element.getInitProps()

  const html = renderToString(<Element {...props} />)
  const __SSR_DATA__ = {
    props
  }

  return {
    html,
    __SSR_DATA__
  }
}

router.get('/demo', async ctx => {
  // 将生成的标记和属性都转为文本传给客户端
  const { html, __SSR_DATA__ } = await render(Demo)
  ctx.body = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ssr</title>
  </head>
  <body>
    <script>
      window.__SSR_DATA__ = ${JSON.stringify(__SSR_DATA__)}
    </script>
    <div id="root">${html}</div>
    <script src="http://localhost:9090/index.js"></script>
  </body>
  </html>`
})

server.use(router.routes())
server.listen(3000, () => {
  console.log('> Ready on http://localhost:3000')
})
