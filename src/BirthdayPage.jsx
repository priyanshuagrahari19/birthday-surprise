
import { useEffect, useState } from "react";
import "./BirthdayPage.css";

const balloonColors = [
  "#b22222",
  "#e8b8a0",
  "#800000",
  "#f2d4bd",
  "#c96b62",
  "#f5e6d5",
  "#9b4141",
  "#d8a17f",
  "#b22222",
  "#ead0b8",
  "#800000",
  "#c96b62",
];

export default function BirthdayPage({ name, audioRef, onNext }) {
  const [blown, setBlown] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef?.current;

    if (!audio) return;

    const updateMusicState = () => {
      setMusicPlaying(!audio.paused);
    };

    updateMusicState();

    audio.addEventListener("play", updateMusicState);
    audio.addEventListener("pause", updateMusicState);

    return () => {
      audio.removeEventListener("play", updateMusicState);
      audio.removeEventListener("pause", updateMusicState);
    };
  }, [audioRef]);

  async function toggleMusic() {
    const audio = audioRef?.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.error("Unable to play background music:", error);
      }
    } else {
      audio.pause();
    }
  }

  function blowCandles() {
    setBlown(true);
  }

  function goToMemories() {
    if (typeof onNext === "function") {
      onNext();
    } else {
      console.error(
        "Navigation error: onNext was not provided by App.jsx."
      );
    }
  }

  return (
    <main className="birthday-page">
      {/* Animated balloons */}
      <div className="balloon-field" aria-hidden="true">
        {balloonColors.map((color, index) => (
          <div
            className="balloon"
            key={index}
            style={{
              "--balloon-color": color,
              "--balloon-left": `${(index * 37 + 7) % 96}%`,
              "--balloon-duration": `${8 + (index % 5) * 1.5}s`,
              "--balloon-delay": `${(index % 8) * -1.2}s`,
              "--balloon-size": `${44 + (index % 3) * 10}px`,
            }}
          >
            <span className="balloon-string" />
          </div>
        ))}
      </div>

      {/* Background music control */}
      <button
        className="music-button"
        type="button"
        onClick={toggleMusic}
        aria-label={musicPlaying ? "Turn music off" : "Turn music on"}
      >
        {musicPlaying ? "♫ Music On" : "♫ Music Off"}
      </button>

      <section className="birthday-content">
        <p className="birthday-eyebrow">
          ✨ A SPECIAL DAY JUST FOR YOU ✨
        </p>

        <h1 className="birthday-title">
          Happy Birthday{name?.trim() ? `, ${name.trim()}` : ""}!
        </h1>

        <p className="birthday-message">
          Today is all about you. Make a wish and let the magic begin. 🤎
        </p>

        {/* Birthday cake */}
        <div className="cake-scene">
          <div className={`cake ${blown ? "cake-blown" : ""}`}>
            <div className="cake-top">
              <div className="icing-drip drip-one" />
              <div className="icing-drip drip-two" />
              <div className="icing-drip drip-three" />
            </div>

            <div className="cake-body">
              <span className="cake-dot dot-one">♥</span>
              <span className="cake-dot dot-two">♥</span>
              <span className="cake-dot dot-three">♥</span>
            </div>

            <div className="cake-plate" />

            <div className="candle candle-one">
              {!blown && <span className="flame" />}
            </div>

            <div className="candle candle-two">
              {!blown && <span className="flame" />}
            </div>

            <div className="candle candle-three">
              {!blown && <span className="flame" />}
            </div>

            {blown && (
              <div className="smoke-puffs" aria-hidden="true">
                <span>〰</span>
                <span>〰</span>
                <span>〰</span>
              </div>
            )}
          </div>
        </div>

        {/* Birthday wish interaction */}
        {!blown ? (
          <div className="candle-actions">
            <p className="wish-prompt">
              Close your eyes, make a wish… 💫
            </p>

            <button
              className="blow-button"
              type="button"
              onClick={blowCandles}
            >
              Blow the Candles 💨
            </button>
          </div>
        ) : (
          <div className="wish-reveal" role="status">
            <div className="wish-sparkles">✨ 🤎 ✨</div>

            <h2>Your wish is in the universe!</h2>

            <p>
              May your day be full of happiness, love, laughter, and
              beautiful memories.
            </p>

            <div className="wish-heart">♡</div>
          </div>
        )}

        {/* Always-visible button to open MemoriesPage */}
        <button
          className="birthday-continue-button"
          type="button"
          onClick={goToMemories}
        >
          Continue to Memories →
        </button>

        <p className="birthday-footer">
          Made with love, just for you ♡
        </p>
      </section>
    </main>
  );
}
