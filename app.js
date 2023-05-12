const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//使用靜態檔案
app.use(express.static('public'))

//設定各個分頁 
//各分頁帶入一個專屬object並設定此物件值為true，並用handlebars的條件式用法{{#if object}}className{{/if}}，當object回傳true給條件式時，則此className可以顯示
app.get('/', (req, res) => {
  res.render('index')
})

//動態路由
app.get('/:page', (req, res) => {
  let page = req.params.page;
  // console.log('page:', page)

  res.render(page, { activeClass : `${page}-active` })
})

// ||--------- 靜態路由 -------||
// app.get('/about', (req, res) => {
//     res.render('about', { aboutIsActive: true })
// })

// app.get('/portfolio', (req, res) => {
//   res.render('portfolio', { portfolioIsActive: true } )
// })

// app.get('/contact', (req, res) => {
//   res.render('contact', {contactIsActive: true})
// })

app.listen(port, () => {
  console.log(`Good`)
})
