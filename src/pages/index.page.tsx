import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-x-4 w-full px:4 md:px-12">
      <div className="flex flex-col">
        <h1 className="text-6xl mb-5">
          Hi, I&apos;m <span>Irving Caamal</span>
        </h1>
        <h2 className="text-3xl mb-5">
          Systems Engineer / Full Stack Web Developer - Focused on FrontEnd
          Development
        </h2>
      </div>
      <div className="w-3/3 md:w-2/3 flex flex-col flex-start break-words text-justify text-lg">
        <p className="py-2">
          Systems Engineer, with more than +6 years of experience, developing
          software products and solutions in B2B and B2C industries, working
          with backend and frontend.
        </p>
        <p className="py-2">
          My work is based on promoting high-quality, well-tested, and resilient
          software products, which satisfy business and/or customer needs.
        </p>
        <p className="py-2">
          I’m currently working mostly with MERN and MEVN stacks.
        </p>
        <p className="py-2">
          Solid JS/TS skills with React.JS and Vue.JS and its full-stack
          frameworks: Nuxt.js and Next.js respectively.
        </p>
        <p>
          Highly experienced with relational databases such as PostgreSQL,
          MySQL, and MSSQL, and also with non-relational databases like MongoDB.
        </p>
        <p>Always looking for personal and professional growth.</p>
      </div>
      <div className="flex flex-col my-5">
        <Link href="/stack" passHref>
          <a className="text-3xl mb-5">
            - Technologies I&apos;m currently working with
          </a>
        </Link>
        <Link href="/experience" passHref>
          <a
            className="text-3xl mb-5 text-gray-600"
            onClick={(e) => {
              e.preventDefault();
              return false;
            }}
          >
            - Experience (Coming Soon)
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
