import dayjs from "dayjs";

export const formatDayDate = (date: string) => {
  return dayjs(date).format("YYYY-MM-DD");
};
