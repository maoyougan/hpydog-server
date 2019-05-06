const ArticleModel = require('../models/article');

class articleController {
  static async create(ctx) {
    let req = ctx.request.body;
    if (req.title && req.content && req.category) {
      try {
        const ret = await ArticleModel.createArticle(req);
        const data = await ArticleModel.getArticleDetail(ret.id);

        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '创建文章成功',
          data
        }
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          msg: '创建文章失败',
          data: err
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 200,
        msg: '参数不齐全'
      }
    }
  }

  static async detail(ctx) {
    let id = ctx.params.id;
    if (id) {
      try {
        let data = await ArticleModel.getArticleDetail(id);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '查询成功',
          data
        }
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: '查询失败',
          data
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: '文章id必须传'
      }
    }
  }
}

module.exports = articleController;
