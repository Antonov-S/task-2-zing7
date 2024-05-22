export type BlogProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
  tag?: string | "ANY";
  date?: string;
};
