import Track from "./Track";

export default interface Category {
  id: number;
  label: string;
  code: string;
  tracks: Array<Track>;
}
