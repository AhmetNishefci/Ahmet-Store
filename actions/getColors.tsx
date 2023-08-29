import { ColorType } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getColors = async (): Promise<ColorType[]> => {
  const res = await fetch(URL);

  return res.json();
};