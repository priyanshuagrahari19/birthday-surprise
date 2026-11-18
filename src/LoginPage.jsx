
import { useState } from "react";
import "./LoginPage.css";

export default function LoginPage({ onUnlock }) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) return;

    onUnlock?.(name.trim());
  };

  return (
    <main className="login-page">
      {/* PHOTO SECTION */}
      <section className="login-photo-panel">
        <div className="photo-frame">
          <img
            src="./images/k4.jpg"
            alt="A special memory"
            className="login-photo"
          />

          <div className="photo-caption">
            <span className="caption-heart">♡</span>
            <p>A memory worth keeping</p>
            <span className="caption-small">
              YOU &amp; ME · ALWAYS
            </span>
          </div>
        </div>
      </section>

      {/* LOGIN SECTION */}
      <section className="login-content">
        <div className="login-card">
          <div className="login-gift">🎁</div>

          <p className="login-eyebrow">
            A LITTLE SURPRISE FOR YOU
          </p>

          <h1>Psst... it's for you!</h1>

          <p className="login-subtitle">
            A little surprise, made with love. ♡
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="birthday-name">
                What should I call you?
              </label>

              <input
                id="birthday-name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                required
              />
            </div>

            <button className="unlock-button" type="submit">
              Unlock My Surprise ♡ <span>→</span>
            </button>
          </form>

          <p className="login-footer">
            Something special is waiting for you ✨
          </p>
        </div>

        <p className="login-bottom-note">
          MADE WITH LOVE, JUST FOR YOU
        </p>
      </section>
    </main>
  );
}
