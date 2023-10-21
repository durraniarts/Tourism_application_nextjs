"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const NavLinks = (props: { variant: string }) => {
  return NAV_LINKS.map((link) => (
    <Link
      href={`${link.href}${link.key}`}
      key={link.key}
      className={` regular-16 text-${props.variant} flexCenter cursor-pointer  transition-all hover:font-bold`}
    >
      {link.label}
    </Link>
  ));
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className=" hidden h-full gap-12 lg:flex">
        <NavLinks variant="gray-50" />
      </ul>
      <div className="lg:block hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green shadow-lg shadow-gray-50 border-0"
          href="/"
        />
      </div>
      {!toggle && (
        <Image
          src="/menu.svg"
          alt="hamburger"
          width={32}
          height={32}
          className=" inline-block cursor-pointer lg:hidden"
          onClick={() => setToggle(!toggle)}
        />
      )}
      {toggle && (
        <div className=" fixed">
          <div className=" fixed blur-2xl right-0 bottom-0 h-[100%] bg-black w-[290px]" />
          <div className=" fixed w-[290px] bg-transparent h-[100%] right-0 bottom-0 flex flex-col justify-center   ">
            <Image
              src="/close.svg"
              alt="close"
              width={24}
              height={24}
              className="cursor-pointer right-5 top-5 absolute"
              onClick={() => {
                setToggle((prevValue) => !prevValue);
              }}
            />
            <ul className="flex flex-col m-auto gap-5 ">
              <NavLinks variant="white" />
              <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green  border-0  "
                href="/login"
              />
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
