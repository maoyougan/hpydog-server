const db = require('../config/db');
const Sequelize = db.sequelize;

const ShopInfo = Sequelize.import('../schema/shopInfo');
ShopInfo.sync({ force: false });

class ShopInfoModel {
    /**
     * 创建店铺信息模型
     * @static
     * @param {*} data
     * @returns
     * @memberof ShopInfoModel
     */
    static async createShopInfo(data) {
        return await ShopInfo.create({
            shopName: data.shopName, //店铺名
            shopWellcome: data.shopWellcome, // 店铺欢迎词
            shopProfile: data.shopProfile, // 店铺简介
            shopLogo: data.shopLogo // 店铺logo
        })
    }

    /**
     *获取商铺信息
     *
     * @static
     * @param {*} id
     * @returns
     * @memberof ShopInfoModel
     */
    static async getShopInfo(id) {
        return await ShopInfo.findOne({
            where: {
                id
            }
        })
    }
}


module.exports = ShopInfoModel;
