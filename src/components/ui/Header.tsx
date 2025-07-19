// import React from "react";
// import styles from "./Header.module.css";

// type HeaderProps = {
//     title: string;
// };

// const Header = ({title} : HeaderProps) => {
//     return(
//         <h2 className={styles.header}>{title}</h2>
//     )
// }
// export default Header;

import React, { useRef, useEffect, useState } from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <h2
      ref={ref}
      className={`${styles.header} ${isVisible ? styles.visible : ""}`}
    >
      {title}
    </h2>
  );
};

export default Header;
