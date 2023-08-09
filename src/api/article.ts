import service from ".";

type articleList = {
  [key: string]: string;
};

type returnData = {
  msg: string;
  data: Array<articleList>;
};

export const frontCheck = async (): Promise<returnData> => {
  const response = await service.get("/api/article/frontCheck");
  return response.data;
};
