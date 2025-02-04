"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import style from "@/styles/navbar.module.scss";
import { usePathname } from "next/navigation";
import { menuslide, Scale, slide } from "@/lib/anime";
import { LinkType } from "@/types/navbarTypes";
import Link from "next/link";
import Signatures from "./signature";

export const TAB = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: (position: {
    width: number;
    left: number;
    opacity: number;
  }) => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          left: ref.current.offsetLeft,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3  py-1.5 text-xs uppercase text-slate-200  mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};
export const Cursor = ({
  position,
}: {
  position: { width: number; left: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 md:h-12 bg-purple-950/40 rounded-full"
    />
  );
};

export const SLideTabs = () => {
  const navItems = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "skill",
      link: "skills",
    },
    {
      name: "Projects",
      link: "projects",
    },
    {
      name: "Services",
      link: "services",
    },
  ];
  const [position, setPosition] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  });
  return (
    <ul
      onMouseLeave={() =>
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }))
      }
      className="relative  flex w-fit rounded-full bg-transparent p-1"
    >
      {navItems.map((data, index) => {
        return (
          <TAB key={index} setPosition={setPosition}>
            <Link href={`#${data.link.toLowerCase()}`}>{data.name}</Link>
          </TAB>
        );
      })}

      <Cursor position={position} />
    </ul>
  );
};

// mobile navbar

export const Curvenav = () => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;

  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

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

export const Links = ({
  data,
  index,
  Active,
  setSelectIndicator,
}: LinkType) => {
  const { name, link } = data;
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
      link: "home",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "skill",
      link: "skills",
    },
    {
      name: "Projects",
      link: "projects",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];
  const pathname = usePathname();
  const [selectIndicator, setSelectIndicator] = useState(pathname);

  useEffect(() => {
    setSelectIndicator(pathname);
  }, [pathname]);
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

            {navItems.map(
              (
                data: {
                  name: string;
                  link: string;
                },
                index
              ) => {
                return (
                  <>
                    <Links
                      key={index}
                      data={data}
                      Active={selectIndicator === data.link}
                      setSelectIndicator={setSelectIndicator}
                      index={0}
                    ></Links>
                  </>
                );
              }
            )}
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

export const Navbar = () => {
  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50  items-center justify-around px-5 py-3 hidden sm:flex">
        <Signatures />
        <SLideTabs />
        <Button
          variant="solid"
          className="bg-[#8f61c8] text-slate-200 font-bold"
        >
          Download CV
        </Button>
      </nav>

      <div className="flex sm:hidden ">
        <MobileNavbar />
      </div>
    </>
  );
};
