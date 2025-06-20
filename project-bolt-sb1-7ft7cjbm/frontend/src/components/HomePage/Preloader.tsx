import React, { useState, useEffect } from "react";
import "../css/Preloader.css";
import logo1 from "../../assets/images/preloader/1.svg";
import logo2 from "../../assets/images/preloader/2.svg";
import logo3 from "../../assets/images/preloader/3.svg";
import logo4 from "../../assets/images/preloader/4.svg";
import logo5 from "../../assets/images/preloader/5.svg";
import logo6 from "../../assets/images/preloader/6.svg";
import logo7 from "../../assets/images/preloader/7.svg";

const logos: string[] = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
];

interface Props {
  isFadingOut: boolean;
}

const Preloader: React.FC<Props> = ({ isFadingOut }) => {
  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="preloader"
      className={`preloader ${isFadingOut ? "fade-out" : ""}`}
    >
      <div className="loader-brand-logos">
        <img
          key={currentLogo}
          src={logos[currentLogo]}
          alt={`Loading logo ${currentLogo + 1}`}
          className="loader-logo"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    </div>
  );
};

export default Preloader;
