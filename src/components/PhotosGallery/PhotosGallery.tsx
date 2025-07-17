import Grid from "../Grid/Grid";
import type { Photo } from "../../types/photo";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

interface PhotosGalleryProps {
  photos: Photo[];
  onSelect: (photo: Photo | null) => void;
}

export default function PhotosGallery({
  photos,
  onSelect,
}: PhotosGalleryProps) {
  return (
    <Grid>
      {photos.map((photo) => (
        <PhotosGalleryItem key={photo.id} image={photo} onSelect={onSelect} />
      ))}
    </Grid>
  );
}
