const jsonServer = require('json-server')
const BSServer = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')
const PORT = process.env.PORT || 3000

BSServer.use(middleware)
BSServer.use(router)

BSServer.listen(PORT,()=>{
    console.log(`Book shop server started at port ${PORT}`);
})