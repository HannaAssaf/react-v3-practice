import { BeatLoader } from "react-spinners";
import style from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={style.backdrop}>
      <BeatLoader />
    </div>
  );
}
