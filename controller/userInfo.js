// class UserController {
//     async userInfo(ctx, next) {
//         let data = {
//             name: '张三',
//             age: 25
//         }
//         ctx.body = {
//             status: true,
//             data
//         }
//     }
// }

// module.exports = new UserController();

const UserInfoModel = require('../models/userInfo');

class UserInfoController {
    /**
     *创建店铺
     *
     * @static
     * @param {*} ctx
     * @memberof UserInfoController
     */
    static async getUserInfo(ctx) {
        let id = ctx.params.id || 1;
        if (id) {
            try {
                let data = await UserInfoModel.getUserInfo(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查询用户信息成功',
                    data
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '查询用户信息失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '用户id必传'
            }
        }
    }
    /*
    用户信息test
    */
    static async userInfo(ctx, _next) {
    let data = {
        name: '张三',
        age: 25
    }
    ctx.body = {
        status: true,
        data
    }

  }

  /**
     *创建店铺
     *
     * @static
     * @param {*} ctx
     * @memberof UserInfoController
     */
    static async getAllUserInfo(ctx) {
      try {
          let data = await UserInfoModel.getAllUserInfo();
          console.log(data);
          ctx.response.status = 200;
          ctx.body = {
              code: 200,
              msg: '查询用户信息成功',
              data
          }
      } catch (err) {
          ctx.response.status = 412;
          ctx.body = {
              code: 200,
              msg: '查询用户信息失败',
              data: err
          }
      }
  }
}


module.exports = UserInfoController;

