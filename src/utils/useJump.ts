import router from "@/router/index";

export const JumpLinkTo = (
  path: string,
  params: { [key: string]: string | number },
) => {
  router.push({
    path,
    query: params,
  });
  console.log(`---path:${path},params:${params}----`);
};
