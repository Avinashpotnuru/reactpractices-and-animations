import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";

import { motion } from "framer-motion";
import TextAnimations from "@/components/TextAnimations";
import Buttons from "@/components/Buttons";
import Cards from "@/components/Cards";
import Card1 from "@/components/Cards/Card1";

import { useRouter } from "next/router";

import Cookies from "js-cookie";

// import { useState, useEffect } from "react";

const block1Variants = {
  hidden: {
    x: 0,
    opacity: 0,
    scale: 0,
    rotate: 360,
  },
  visible: {
    x: [-600, -400, -200, 0, 200, 400, 600],
    opacity: 1,
    scale: [1, 2, 3, 3, 2, 1],
    rotate: 0,

    borderRadius: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export default function Home() {
  const router = useRouter();
  const name = Cookies.get("userPhoneNum");
  const password = Cookies.get("userPassword");

  if (name !== undefined && password !== undefined) {
    router.push(`/login`);
  }
  return (
    <>
      <motion.div className="relative h-screen  flex flex-col ">
        <TextAnimations />
        <Buttons />
      </motion.div>
    </>
  );
}
