const Router = require('koa-router')
const UserController = require('../controller/user')
const ShopInfoController = require('../controller/shopInfo')

const router = new Router({
    prefix: '/api/v1'
})

//测试接口
router.get('/test', UserController.userInfo)

/**
 * 店铺相关接口
 */
// router.post('/ceateShop', ShopInfoController.create);
// 获取店铺信息
router.get('/getShopInfo', ShopInfoController.getShopInfo);
module.exports = router
