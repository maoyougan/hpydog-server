const db = require('../config/db');
const Sequelize = db.sequelize;

const UserInfo = Sequelize.import('../schema/userInfo');
UserInfo.sync({ force: false });

class UserInfoModel {
    /**
     * 创建用户信息模型
     * @static
     * @param {*} data
     * @returns
     * @memberof UserInfoModel
     */
    static async createUserInfo(data) {
        return await UserInfo.create({
            name: data.name, //用户名
            gender: data.gender, // 用户性别
            age: data.age, // 用户年龄
        })
    }

    /**
     *查询某个用户信息
     *
     * @static
     * @param {*} id
     * @returns
     * @memberof UserInfoModel
     */
    static async getUserInfo(id) {
        return await UserInfo.findOne({
            where: {
                id
            }
        })
    }
    /**
     *获取所有用户信息
     *
     * @static
     * @param {*} id
     * @returns
     * @memberof UserInfoModel
     */
    static async getAllUserInfo(id) {
      return await UserInfo.findAll({
        attributes: ['name', 'gender', 'age']
      })
  }
}


module.exports = UserInfoModel;
