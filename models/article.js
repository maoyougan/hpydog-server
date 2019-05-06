const db = require('../config/db');
const Sequelize = db.sequelize;
const Article = Sequelize.import('../schema/article');
Article.sync({force: false});

class AticleModel {

  // 写入数据
  static async createArticle(data) {
    return await Article.create({
      title: data.title,
      author: data.author,
      content: data.content,
      category: data.category
    })
  }

  // 通过id获取文字内容等
  static async getArticleDetail(id) {
    return await Article.findeOne({
      where: {
        id,
      }
    })
  }
}

module.exports = AticleModel;
