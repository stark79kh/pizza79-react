import axios from "axios";
import Head from 'next/head';
import Image from 'next/image';
import Featured from '../components/Featured';
import PizzaList from '../components/Pizzalist';
import styles from '../styles/Home.module.css';

export default function Home({ pizzaList }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>pizza79 by Mr.Tiến</title>
        <meta name="description" content="my pizza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList  pizzaList={pizzaList} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data
    },
  };
};
