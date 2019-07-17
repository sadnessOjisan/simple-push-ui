import yk1 from "../assets/yk1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
export interface IProfile {
  name: string;
  age: "20代" | "30代" | "40代" | "50代" | "60代" | "70代" | "その他";
  where: string;
  image: string;
}

type TData = IProfile[];

export const profData: TData = [
  {
    name: "ゆか",
    age: "20代",
    where: "東京都",
    image: yk1
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: s2
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: s3
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: s4
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: s5
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: yk1
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: yk1
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: yk1
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: yk1
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: yk1
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: yk1
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: yk1
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: yk1
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: yk1
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: yk1
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: yk1
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: yk1
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: yk1
  }
];
