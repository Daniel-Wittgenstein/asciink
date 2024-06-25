
const fs = require('fs')

let data = fs.readFileSync('./index.html', { encoding: 'utf8', flag: 'r' })
const inkData = fs.readFileSync('./ink/ink-full.js', { encoding: 'utf8', flag: 'r' })
const easyStarData = fs.readFileSync('./easystar/easystar-0.4.4.min.js', { encoding: 'utf8', flag: 'r' })
let inkjs = `<script>${inkData}</script>`
let easyStarJs = `<script>${easyStarData}</script>`
data = data.replace(/\<\!\-\-DEV\-\-\>[\s\S]*?\<\!\-\-END_DEV\-\-\>/g, "")
data = data.replace(/\<\!\-\-INJECT\-\-\>[\s\S]/, inkjs + "\n\n" + easyStarJs)
const obj = {data}
let text = "window.$exportedHtmlData = " + JSON.stringify(obj)
fs.writeFileSync('./auto-generated/exportHtmlData.js', text, { encoding: 'utf8'})
