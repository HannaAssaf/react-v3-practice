export interface Photo {
  id: string;
  avg_color: string;
  alt: string;
  src: {
    original: string;
    large: string;
  };
}
