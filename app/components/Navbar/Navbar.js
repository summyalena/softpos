'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./navbar.module.css";
import Logo from '../../../public/icons/softpos_logo_new.png';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const HeaderLinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Benefits",
      link: "/",
    },
    {
      id: 3,
      name: "Pricing",
      link: "/",
    },
    {
      id: 4,
      name: "Blog",
      link: "/",
    },
  ];
  
  return (
    <nav
      className={` ${styles.navContainer} `}
    >
      <div className="flex">
        <Link className="mt-2" href="/">
          <Image src={Logo} width={80} height={80} />
          </Link>
          <div className={`flex items-center gap-3 ${styles.listContainer}`}>
        <ul
          className={`flex ${styles.navList} ${
            openMenu ? styles.mobile : styles.closemobile
          }`}
        >
          {HeaderLinks.map((links) => (
            <li key={links.id}>
              <Link href={links.link}>
                {links.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={`${styles.authButtons}`}>
          <li><Link href="/">Login</Link></li>
         <li><Link href="/">Get Started</Link></li>
          </ul>
          </div>
        <button
          type="button"
          onClick={handleMenu}
          className="flex flex-col items-center justify-center"
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>
      </div>
    </nav>
  );
}

export default Header;