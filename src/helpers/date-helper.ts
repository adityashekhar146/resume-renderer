import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(RelativeTime);

export const getRelativeTime = (refDate: Date, withoutSuffix?: boolean) => (
  dayjs(refDate).fromNow(withoutSuffix)
);

export const getMonthYear = (refDate: Date) => (
  dayjs(refDate).format("MMMM YYYY")
);
