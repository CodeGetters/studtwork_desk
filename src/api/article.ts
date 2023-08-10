import service from ".";

import type { getArticle, getArticles, getData } from "@/types/service";

/**
 * @description 文章列表
 */
export const frontCheck = async (): Promise<getData<getArticles>> => {
  const response = await service.get<getData<getArticles>>(
    "/api/article/frontCheck",
  );
  return response.data;
};

/**
 * @description 文章阅读
 * @param id
 */
export const frontCheckId = async (
  id: number,
): Promise<getData<getArticle>> => {
  const response = await service.get<getData<getArticle>>(
    "/api/article/frontCheckId",
    {
      params: { id },
    },
  );
  return response.data;
};
