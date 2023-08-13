import type { Dayjs } from "dayjs";

type PropsCatSitter = {
  name: string;
  id: number;
};

export type BookingCatSitterType = {
  listCatSitter: PropsCatSitter[];
  value: Dayjs;
};
