import { useState, useEffect } from 'react';
import './ImageSlideshow.css';

interface ImageSlideshowProps {
  images: string[];
  interval?: number;
}

export function ImageSlideshow({ images, interval = 4000 }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (images.length === 0) {
    return <div className="slideshow-container">No images available</div>;
  }

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={`slideshow-slide ${index === currentIndex ? 'active' : ''}`}
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          aria-hidden={index !== currentIndex}
        />
      ))}
      <div className="slideshow-overlay" />
      {images.length > 1 && (
        <div className="slideshow-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
