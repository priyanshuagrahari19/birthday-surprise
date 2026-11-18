
import { useEffect, useState } from "react";
import "./MemoriesPage.css";

export default function MemoriesPage({ name, onNext }) {
  const displayName = name?.trim() || "Khushi";

  const messages = [
    "May God bless you and bring you happiness,",
    "just saying... you're pretty awesome! 😊",
    "Sending good vibes your way ♥",
    "Hope you have a great day today! ✨",
  ];

  const [typedMessages, setTypedMessages] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeoutId;
    let messageIndex = 0;
    let characterIndex = 0;

    setTypedMessages([]);
    setFinished(false);

    function typeNextMessage() {
      if (cancelled) return;

      if (messageIndex >= messages.length) {
        setFinished(true);
        return;
      }

      characterIndex = 0;
      const currentIndex = messageIndex;
      const currentMessage = messages[currentIndex];

      function typeCharacter() {
        if (cancelled) return;

        characterIndex++;

        setTypedMessages((previous) => {
          const updated = [...previous];
          updated[currentIndex] = currentMessage.slice(
            0,
            characterIndex
          );
          return updated;
        });

        if (characterIndex < currentMessage.length) {
          timeoutId = setTimeout(typeCharacter, 38);
        } else {
          messageIndex++;
          timeoutId = setTimeout(typeNextMessage, 350);
        }
      }

      typeCharacter();
    }

    timeoutId = setTimeout(typeNextMessage, 800);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [name]);

  return (
    <main className="memories-page" style={{ backgroundImage: "url('./images/k6.jpg')" }}>
      {/* Handwritten notes on the background */}
      <div className="side-note side-note-left">
        <span>Keep</span>
        <span>Shining</span>
        <span>Always ♡</span>
        <i />
      </div>

      <div className="side-note side-note-right">
        <span>More</span>
        <span>Smiles</span>
        <span>More Dreams</span>
        <span>More You ♡</span>
        <i />
      </div>

      {/* Top heart decoration */}
      <div className="top-heart-doodle" aria-hidden="true">
        ♡
      </div>

      <section className="birthday-collage">
        {/* LEFT PHOTO: k6.jpg */}
        <div className="left-memory-photo">
          <img
            src="./images/k1.jpg"
            alt="A special memory"
          />
        </div>

        {/* Portrait behind the birthday paper */}
        <div className="background-photo">
          <img
            // src="/images/k4.jpg"
            alt="Birthday memory"
          />
        </div>

        {/* Central birthday paper */}
        <article className="birthday-paper">
          <p className="paper-greeting">
            Hey, {displayName}! <span>♡</span>
          </p>

          <h1 className="paper-title">
            Happy Birthday!
          </h1>

          <div className="title-ornament" aria-hidden="true">
            <span />
            <b>♥</b>
            <span />
          </div>

          <div className="birthday-messages" aria-live="polite">
            {messages.map((message, index) => (
              <p className="paper-message" key={index}>
                {typedMessages[index] || ""}
                {!finished &&
                  index === typedMessages.length - 1 &&
                  (typedMessages[index] || "").length <
                    message.length && (
                    <span className="typing-cursor">|</span>
                  )}
              </p>
            ))}
          </div>

          {finished && (
            <p className="paper-signature">
              Made with love, just for you ♥
            </p>
          )}

          {/* Flower decorations */}
          <img
            className="paper-flower paper-flower-left"
            src="./images/flowers.svg"
            alt=""
          />

          <img
            className="paper-flower paper-flower-right"
            src="./images/flowers.svg"
            alt=""
          />

          <span className="paper-heart paper-heart-left">♡</span>
          <span className="paper-heart paper-heart-right">✧</span>
        </article>

        {/* Small photo frame on the right */}
        <div className="small-photo-frame">
          <div className="photo-tape" />
          <img
            src="./images/k6.jpg"
            alt="A favorite photograph"
          />
          <span className="frame-heart">♡</span>
        </div>

        {/* Continue button */}
        {finished && (
          <button
            type="button"
            className="memory-continue"
            onClick={() => {
              if (typeof onNext === "function") {
                onNext();
              } else {
                console.error(
                  "onNext is missing. Check App.jsx."
                );
              }
            }}
          >
            Continue to the Next Page <span>→</span>
          </button>
        )}

        <div className="bottom-heart" aria-hidden="true">
          ♡
        </div>
      </section>
    </main>
  );
}
