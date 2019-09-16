const Router = require('koa-router')
const UserInfoController = require('../controller/userInfo')
const ShopInfoController = require('../controller/shopInfo')

const router = new Router({
    prefix: '/api/v1'
})

//测试接口
router.get('/test', UserInfoController.userInfo);

/**
 * 店铺相关接口
 */
// router.post('/ceateShop', ShopInfoController.create);
// 获取店铺信息
router.get('/getShopInfo', ShopInfoController.getShopInfo);

/**
 * 用户信息相关接口
*/

router.get('/getAllUserInfo', UserInfoController.getAllUserInfo)
module.exports = router
