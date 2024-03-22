"use client";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  const { header, nav, logo } = classes;

  return (
    <>
      <MainHeaderBackground />
      <header className={header}>
        <Link className={logo} href="">
          <Image priority src={logoImg} alt="A plate with food" />
          NextLevel Food
        </Link>
        <nav className={nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community"> Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
