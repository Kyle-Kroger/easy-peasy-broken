import Head from "next/head";
import Image from "next/image";
import Body from "../components/body";
import Title from "../components/title";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Title></Title>
      <Body></Body>
    </div>
  );
}
