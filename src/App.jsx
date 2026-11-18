
import { useRef, useState } from "react";
import "./App.css";

import LoginPage from "./LoginPage.jsx";
import BirthdayPage from "./BirthdayPage.jsx";
import MemoriesPage from "./MemoriesPage.jsx";
import GalleryPage from "./GalleryPage.jsx";
import LetterPage from "./LetterPage.jsx";
import FinalPage from "./FinalPage.jsx";

export default function App() {
  const [page, setPage] = useState("login");
  const [personName, setPersonName] = useState("");
  const audioRef = useRef(null);

  async function unlockSurprise(name) {
    setPersonName(name);
    setPage("birthday");

    if (audioRef.current) {
      try {
        await audioRef.current.play();
      } catch {
        console.log("Use the music button to start playback.");
      }
    }
  }

  return (
    <>
      {/* Background Birthday Music */}
      <audio
        ref={audioRef}
        src="./audio/birthday-song.mp3"
        loop
        preload="auto"
      />

      {/* Login Page */}
      {page === "login" && (
        <LoginPage onUnlock={unlockSurprise} />
      )}

      {/* Birthday Page */}
      {page === "birthday" && (
        <BirthdayPage
          name={personName}
          audioRef={audioRef}
          onNext={() => setPage("memories")}
        />
      )}

      {/* Memories Page */}
      {page === "memories" && (
        <MemoriesPage
          name={personName}
          onNext={() => setPage("gallery")}
        />
      )}

      {/* Gallery Page */}
      {page === "gallery" && (
        <GalleryPage
          name={personName}
          onBack={() => setPage("memories")}
          onNext={() => setPage("letter")}
        />
      )}

      {/* Letter Page */}
      {page === "letter" && (
        <LetterPage
          name={personName}
          onBack={() => setPage("gallery")}
          onNext={() => setPage("final")}
        />
      )}

      {/* Final Birthday Page */}
      {page === "final" && <FinalPage />}
    </>
  );
}
