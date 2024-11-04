import style from "@/styles/navbar.module.scss";
import { usePathname } from "next/navigation";
import { menuslide, Scale, slide } from "@/lib/anime";
import { LinkType } from "@/types/navbarTypes";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const Curvenav = () => {
  const initialPath =
    typeof window !== "undefined"
      ? `M100 0 L100 ${window.innerHeight} Q-100 ${
          window.innerHeight / 2
        } 100 0`
      : "";

  const targetPath =
    typeof window !== "undefined"
      ? `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`
      : "";

  const curve = {
    initial: {
      d: initialPath,
    },

    enter: {
      d: targetPath,

      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },

    exit: {
      d: initialPath,

      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={style.svgCurve}>
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
};

export const Links = ({ data, Active, setSelectIndicator }: LinkType) => {
  const { name, link, index } = data;
  return (
    <motion.div
      className={style.link}
      onMouseEnter={() => setSelectIndicator(link)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        className={style.indicator}
        variants={Scale}
        animate={Active ? "open" : "closed"}
      ></motion.div>
      <Link href={link}>{name}</Link>
    </motion.div>
  );
};

export const MobileTabs = () => {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  const pathname = usePathname();
  const [selectIndicator, setSelectIndicator] = useState(pathname);

  return (
    <>
      <motion.div
        variants={menuslide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={style.menu}
      >
        <div className={style.body}>
          <div
            onMouseLeave={() => setSelectIndicator(pathname)}
            className={style.nav}
          >
            <div className={style.header}>
              <p>Navigation</p>
            </div>

            {navItems.map((data, index) => {
              return (
                <>
                  <Links
                    key={index}
                    data={data}
                    Active={selectIndicator === data.link}
                    setSelectIndicator={setSelectIndicator}
                  ></Links>
                </>
              );
            })}
          </div>
          <div className={style.footer}>
            <a>Awwwards</a>

            <a>Instagram</a>

            <a>Dribble</a>

            <a>LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export const MobileNavbar = () => {
  const [Active, setActive] = useState(false);

  return (
    <>
      <div onClick={() => setActive(!Active)} className={style.button}>
        <div
          className={`${style.burger} ${Active ? style.burgerActive : ""} `}
        ></div>
      </div>

      <AnimatePresence mode="wait">{Active && <MobileTabs />}</AnimatePresence>
    </>
  );
};
