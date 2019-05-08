class UserController {
    async userInfo(ctx, next) {
        let data = {
            name: '张三',
            age: 25
        }
        ctx.body = {
            status: true,
            data
        }
    }
}

module.exports = new UserController();
