import router from "@/router/index";

export const JumpLinkTo = (
  path: string,
  paramObj: { [key: string]: string },
) => {
  router.push({
    path,
    params: paramObj,
  });
};
