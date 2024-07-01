import React from 'react'
import { useRouter } from "next/router";
import Head from 'next/head';
const Product = () => {
  const router = useRouter();
  return (
    <>
    <Head>
      <title>{router.asPath == "/product" ? "Product" : "Gigatorb" }</title>
        <meta name="description" content="Information About Gigatorb" />
        <meta name="keywords" content="Gigatorb, Curam, Merative, Cúram, Social Program
            Management, SPM ,Implementation Services"/>
    </Head>

    <div>Product</div>
    </>
  )
}

export default Product