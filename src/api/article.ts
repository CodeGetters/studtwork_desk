import service from ".";

export const articleList = async () => {
  const response = await service.get("/");
  return response.data;
};
