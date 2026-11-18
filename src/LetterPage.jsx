
import { useState } from "react";
import "./LetterPage.css";

export default function LetterPage({ name, onBack, onNext }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="letter-page">
      <div className="letter-container">
        {!isOpen ? (
          <section className="letter-cover">
            <div className="cover-sparkle sparkle-one">✦</div>
            <div className="cover-sparkle sparkle-two">♡</div>
            <div className="cover-sparkle sparkle-three">✧</div>

            <p className="cover-eyebrow">
              A LITTLE SOMETHING FOR YOU 💌
            </p>

            <h1 className="cover-title">
              A Letter From
              <span> My Heart ❤️</span>
            </h1>

            <p className="cover-subtitle">
              For someone who means the world to me.
            </p>

            <div
              className="envelope"
              onClick={() => setIsOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="Open your birthday letter"
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setIsOpen(true);
                }
              }}
            >
              <div className="envelope-back" />
              <div className="envelope-letter">
                <span>Made with</span>
                <strong>LOVE</strong>
                <span>just for you ♡</span>
              </div>
              <div className="envelope-left" />
              <div className="envelope-right" />
              <div className="envelope-bottom" />
              <div className="envelope-flap" />
              <div className="envelope-seal">♥</div>
            </div>

            <button
              className="letter-button open-button"
              onClick={() => setIsOpen(true)}
            >
              Open Your Letter <span>♡</span>
            </button>

            <p className="cover-footer">
              A little letter, a lot of love. ∞
            </p>
          </section>
        ) : (
          <article className="letter-paper">
            <div className="paper-top-decoration">
              <span>♡</span> &nbsp; A LETTER FOR YOU &nbsp; <span>♡</span>
            </div>

            <h1 className="letter-greeting">
              Dear {name?.trim() || "vubv"},
              <span>💗</span>
            </h1>

            <p>
              Happy Birthday to someone who deserves all the beautiful
              things this world has to offer.
            </p>

            <p>
              I hope this new chapter of your life brings you countless
              reasons to smile, dreams that come true, peaceful days,
              and memories that make your heart happy.
            </p>

            <p>
              May you always find warmth in the little things, courage
              when life feels difficult, and people who remind you how
              special you truly are.
            </p>

            <p>
              No matter how quickly time passes, I hope you never lose
              the beautiful things that make you who you are. Keep
              smiling, keep dreaming, and keep being your wonderful self.
            </p>

            <p>
              Today is your day, and I hope it feels as special as you
              make the world feel to the people around you.
            </p>

            <div className="letter-divider">
              <span>♡</span> ───────── ✧ ───────── <span>♡</span>
            </div>

            <p>
              You've always been there for me, like ALWAYS. ❤️ Through
              everything, the good times, the bad days, the messy
              moments, and everything in between. Even though we're miles
              apart, you've never made me feel like I'm alone. I don't
              think I say it enough, but having you in my life means more
              to me than words could ever explain. 🫂💗
            </p>

            <p>
              Every single memory with you is special to me. Not because
              we were always doing something exciting, but simply because
              it was with YOU. 🥹❤️ Even though we can't always be
              together, the little conversations, random texts, late-night
              talks, silly jokes, and even the smallest moments mean the
              world to me. Somehow, you manage to make my life better
              just by being a part of it, even from miles away. 🌍💌
            </p>

            <p>
              You're not just my best friend; you're my safe place, my
              favourite person to talk to, my biggest comfort, and one
              of the best things that has ever happened to me. No amount
              of distance could ever make our friendship less special.
              And if there's one thing I'm always going to be grateful
              for, it's having YOU in my life. 🫶🏻💗
            </p>

            <p>
              No matter where life takes us, how busy we get, or how many
              miles stand between us, I hope you always remember that
              you'll forever have me. Because some friendships aren't
              about being together every day; they're about knowing that
              even from far away, someone will always be there for you.
            </p>

            <p>
              And for me, that someone is you. Always and forever.
              ♾️❤️🫂
            </p>

            <div className="letter-signature">
              <p>With all my love,</p>
              <h2>Your Priyanshu</h2>
              <p>Always in your corner, no matter the distance. ♾️</p>
            </div>

            <div className="letter-actions">
              <button
                className="letter-button secondary-button"
                onClick={() => setIsOpen(false)}
              >
                ↶ Fold Letter
              </button>

              <button
                className="letter-button final-button"
                onClick={onNext}
              >
                One Last Surprise <span>→</span>
              </button>
            </div>
          </article>
        )}

        <button className="gallery-back-button" onClick={onBack}>
          ← Back to Gallery
        </button>
      </div>
    </main>
  );
}
