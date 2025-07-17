import Form from "../Form/Form";
import Section from "../Section/Section";
import Container from "../Container/Container";
import Loader from "../Loader/Loader";
import { toast } from "react-hot-toast";
import { useState } from "react";
import type { Photo } from "../../types/photo";
import Text from "../Text/Text";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import Modal from "../Modal/Modal";
import { getPhotos } from "../../services/photos";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handlePhotoSelect = (photo: Photo | null) => {
    setSelectedPhoto(photo);
  };

  const handleSubmit = async (query: string) => {
    try {
      setIsLoading(true);
      setError(false);
      setPhotos([]);

      const fetchedPhotos = await getPhotos(query);
      // const response = await import("../../services/photos");
      // const fetchedPhotos = await response.getPhotos(query);

      if (fetchedPhotos.length === 0) {
        toast.error("No photos found for this query");
      }

      setPhotos(fetchedPhotos);
    } catch (error) {
      setError(true);
      // console.error("Error fetching photos:", error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log("Photos:", photos);

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSubmit} />
          {isLoading && <Loader />}
          {error && <Text>Something went wrong</Text>}
          {photos.length > 0 && (
            <PhotosGallery photos={photos} onSelect={handlePhotoSelect} />
          )}
          {selectedPhoto && (
            <Modal onClose={() => setSelectedPhoto(null)}>
              <div
                style={{
                  backgroundColor: selectedPhoto.avg_color,
                  borderColor: selectedPhoto.avg_color,
                }}
              >
                <img src={selectedPhoto.src.large} alt={selectedPhoto.alt} />
              </div>
            </Modal>
          )}
        </Container>
      </Section>
    </>
  );
}
