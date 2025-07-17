import type { Photo } from "../../types/photo";
import GridItem from "../GridItem/GridItem";
import styles from "./PhotosGalleryItem.module.css";

interface PhotosGalleryItemProps {
  image: Photo;
  onSelect: (photo: Photo | null) => void;
}

export default function PhotosGalleryItem({
  image,
  onSelect,
}: PhotosGalleryItemProps) {
  return (
    <GridItem>
      <div
        onClick={() => onSelect(image)}
        className={styles.thumb}
        style={{
          backgroundColor: image.avg_color,
          borderColor: image.avg_color,
        }}
      >
        <img src={image.src.large} alt={image.alt} />
      </div>
    </GridItem>
  );
}
