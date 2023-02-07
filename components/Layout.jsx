import Head from "next/head";
import Link from "next/link";
import React from "react";

function Layout({ children, title }) {
  return (
    <div className="">
      <Head>
        <title>{title ? title : "amazona"}</title>
        <meta name="description" content="Ecommerce webiste" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen justify-between">
        <header >
          <nav className="flex justify-between px-3 text-xl font-bold shadow-lg h-14 items-center ">
            <Link href='/'>Amazona</Link>
            <div className="flex justify-around font-medium gap-4">
              <Link className="outline outline-offset-0 outline-pink-500 md:rounded-lg px-4 " href='/cart'>cart</Link>
              <Link className="outline outline-offset-0 outline-pink-500 md:rounded-lg px-3 hover:shadow-pink-700" href="/login">login</Link>
            </div>
            </nav>
            </header>
        <main  className="container m-auto px-4 mt-4">{children}</main>
        <footer className="flex justify-center items-center shadow-inner h-10  "> <p>Copyright 2023 amazon</p></footer>
      </div>
    </div>
  );
}

export default Layout;
