import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./motupatlu.module.css";
import text from "../assets/motupatlutext.png";

const MotuPatlu = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleWatchNow = () => {
    const movieId = "67b577ee252a7539a59d9b1a"; // Unique Movie ID
    const driveFileId = "14CIXvU9niiBPBmPQP59rfY-1Ql60M33l"; // Replace with actual Google Drive File ID
    const videoUrl = `https://drive.google.com/file/d/${driveFileId}/preview`; // Google Drive Embed Link

    navigate(`/play`, { state: { movieId, videoUrl } });
  };

  return (
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        {!isPlaying ? (
          <>
            <img className={styles.image} src={text} alt="Motu Patlu" />
            <div className={styles.tags}>
              <span className={styles.tag}>2024</span>
              <span className={styles.tag}>U/A 7+</span>
              <span className={styles.tag}>Movie</span>
              <span className={styles.tag}>Thrillers</span>
              <span className={styles.tag}>Dramas</span>
            </div>
            <p className={styles.description}>
              Motu Patlu is an Indian animated series that follows the misadventures
              of two friends, Motu and Patlu, who always try to outsmart villains in their town of
              Furfuri Nagar.
            </p>
            {/* Watch Now Button */}
            <button className={styles.button} onClick={handleWatchNow}>
              Watch Now <span className={styles.arrow}>▶</span>
            </button>
          </>
        ) : (
          <div className={styles.videoContainer}>
            <iframe
              className={styles.video}
              src={videoUrl}
              title="Motu Patlu Movie"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default MotuPatlu;
