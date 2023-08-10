/**
 * api 返回基本模版
 */
export interface getData<V> {
  msg: string;
  data: V;
}

/**
 * 文章列表页
 */
export interface getArticles {
  articleList: Array<articleInfo>;
}

/**
 * 查看文章
 */
export interface getArticle {
  article: articleInfo;
}

/**
 * 文章信息
 */
export interface articleInfo {
  id: number;
  articleName: string;
  author: string;
  lastUpdate: string;
  articleCon?: string;
  readers?: string;
}
