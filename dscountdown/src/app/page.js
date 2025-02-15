"use client";
import { useState, useEffect } from 'react';
import styles from './page.module.css';


export default function Home() {
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
    const targetDate = new Date('2025-02-11T14:00:00'); // Set your target date here

    const intervalId = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };
      return (
          <main className={styles.main}>
              <div className={styles.container}>
                  <h1 className={styles.title}>Time until the Info Theory exam:</h1>
                  <br/>
                  <div className={styles.countdown}>{countdown}</div>
                  {typeof window !== "undefined"  && !document.fullscreenElement && (
                      <button className={styles.button} onClick={toggleFullScreen}>
                          Full Screen
                      </button>
                  )}
              </div>
          </main>
      );
}