const ArticleController = require('../controller/article');

module.exports =  (router) => {
  router.get('/index', async function (ctx, next) {
    ctx.state = {
      title: 'koa2 title'
    };

  router.post('/article', ArticleController.create);

  router.get('/article/:id', ArticleController.detail);

    await ctx.render('index', {title: ctx.state});
  })
}
