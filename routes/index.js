// module.exports = (router) => {
//     router.get('/index', async function(ctx, next) {
//         ctx.state = {
//             title: 'koa2 title'
//         };

//         await ctx.render('index', { title: ctx.state });
//     })
// }

const Router = require('koa-router')
const ArticleController = require('../controller/article')
const UserController = require('../controller/user')

const router = new Router({
    prefix: '/api/v1'
})

/**
 * 文章接口
 */
// 创建文章接口（路由）
router.post('/article', ArticleController.create);
// 获取文章详情接口（路由）
router.get('/article/:id', ArticleController.detail);
//测试接口
router.get('/test', UserController.userInfo)

module.exports = router
