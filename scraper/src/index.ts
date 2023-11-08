import { Cheerio, load } from 'cheerio'
import { Hono } from 'hono'


const app = new Hono()

app.get('/', async (c) => {
  const res = await fetch('https://gamepress.gg/arknights/operator/saga#profile')
  const html = await  res.text()
  const $ = load(html)
  const operator = $("#page-title h1")
  console.log("name", operator.text());
  return c.text(operator.text())
})

export default app
