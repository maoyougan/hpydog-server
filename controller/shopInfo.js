const ShopInfoModel = require('../models/shopInfo');

class ShopInfoController {
    /**
     *创建店铺
     *
     * @static
     * @param {*} ctx
     * @memberof ShopInfoController
     */
    // static async create(ctx) {
    //     let req = ctx.request.body;
    //     if (req.shopName && req.shopWellcome && req.shopProfile && req.shopLogo) {
    //         try {
    //             const ret = await ShopInfoModel.createShopInfo(req);

    //             const data = await ShopInfoModel.getShopInfo(ret.id);

    //             ctx.response.status = 200;
    //             ctx.body = {
    //                 code: 200,
    //                 msg: '创建店铺成功',
    //                 data
    //             }
    //         } catch (err) {
    //             ctx.response.status = 412;
    //             ctx.body = {
    //                 code: 200,
    //                 msg: '创建店铺失败',
    //                 data: err
    //             }
    //         }
    //     } else {
    //         ctx.response.status = 416;
    //         ctx.body = {
    //             code: 200,
    //             msg: '参数不齐'
    //         }
    //     }
    // }

    static async getShopInfo(ctx) {
        let id = ctx.params.id || 1;
        if (id) {
            try {
                let data = await ShopInfoModel.getShopInfo(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查询店铺信息成功',
                    data
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '查询店铺信息失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '商铺id必传'
            }
        }
    }
}


module.exports = ShopInfoController;
