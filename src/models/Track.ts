import Category from "./Category";

export default interface Track {
  id?: string;
  title: string;
  artist: string;
  likes: number;
  categories: string[];
}
