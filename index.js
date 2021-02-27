

const Koa = require('koa');
const Router = require('koa-router');
const Pug = require('koa-pug');

let app = new Koa();
let router = new Router();

let  pug = new Pug({
    viewPath: './views',
    app:app
})


router.get('/hello', async (ctx) => {
    await ctx.render('hello',  {'name' : 'test', fruits: ['banana', 'apple']})
})

app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000);