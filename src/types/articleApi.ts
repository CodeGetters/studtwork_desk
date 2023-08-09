// api返回数据类型
export type returnData = {
  msg: string;
  data: Array<articleList> | void;
};

export type articleList = {
  [key: string]: string;
};

// interface
