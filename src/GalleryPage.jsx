
import { useState } from "react";
import "./GalleryPage.css";

const photos = [
  "./images/k20.jpg",
  "./images/k2.jpg",
  "./images/k3.png",
  "./images/k4.jpg",
  "./images/k5.jpg",
  "./images/k6.jpg",
  "./images/k1.jpg",
  "./images/k8.jpg",
  "./images/k9.jpg",
  "./images/k10.jpg",
  "./images/k11.jpg",
  "./images/k12.jpg",
  "./images/k13.jpg",
  "./images/k14.jpg",
  "./images/k15.jpg",
  "./images/k16.jpg",
  "./images/k17.jpg",
  "./images/k18.jpg",
];

const clipColors = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "purple",
];

export default function GalleryPage({ name, onBack, onNext }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const rows = Array.from({ length: 6 }, (_, index) =>
    photos.slice(index * 3, index * 3 + 3)
  );

  return (
    <main className="polaroid-gallery-page">
      <header className="gallery-heading">
        <p className="gallery-eyebrow">
          A LITTLE COLLECTION OF LOVE
        </p>

        <h1>
          {name ? `${name}'s Memories` : "Our Little Memories"}
          <span className="gallery-heart"> ♡</span>
        </h1>

        <p className="gallery-subtitle">
          Every picture holds a little piece of happiness.
        </p>
      </header>

      <section
        className="clothesline-gallery"
        aria-label="Photo gallery"
      >
        {rows.map((row, rowIndex) => (
          <div
            className={`photo-string-row row-${rowIndex + 1}`}
            key={rowIndex}
          >
            <div className="clothesline" />

            <div className="hanging-photos">
              {row.map((photo, photoIndex) => {
                const photoNumber = rowIndex * 3 + photoIndex;
                const clipColor =
                  clipColors[photoNumber % clipColors.length];

                return (
                  <button
                    type="button"
                    className="hanging-photo"
                    key={photo}
                    style={{
                      "--photo-tilt": [
                        "-3deg",
                        "2deg",
                        "-1deg",
                      ][photoIndex],
                      "--photo-delay": `${photoIndex * 0.12}s`,
                    }}
                    onClick={() => setSelectedPhoto(photo)}
                    aria-label={`Enlarge photo ${photoNumber + 1}`}
                  >
                    <span
                      className={`photo-clip clip-${clipColor}`}
                    >
                      <span className="clip-hole" />
                    </span>

                    <span className="polaroid-frame">
                      <img
                        src={photo}
                        alt={`Birthday memory ${photoNumber + 1}`}
                        loading={photoNumber < 3 ? "eager" : "lazy"}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <div className="gallery-navigation">
        {onBack && (
          <button
            type="button"
            className="gallery-back-button"
            onClick={onBack}
          >
            ← Back to Memories
          </button>
        )}

        <button
          type="button"
          className="gallery-next-button"
          onClick={() => onNext?.()}
        >
          Continue to the Next Page →
        </button>
      </div>

      {selectedPhoto && (
        <div
          className="photo-lightbox"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close enlarged photo"
          >
            ×
          </button>

          <div
            className="lightbox-polaroid"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged birthday photo"
          >
            <img
              src={selectedPhoto}
              alt="Enlarged birthday memory"
            />
          </div>
        </div>
      )}
    </main>
  );
}
