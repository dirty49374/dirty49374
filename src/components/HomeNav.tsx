import useMe from "hooks/useMe";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";
import styles from "./HomeNav.module.css";

type HomeNavProps = {
  className?: string;
};

const HomeNav: React.FC<HomeNavProps> = ({ className }) => {
  const { me, serviceConfig } = useMe();

  return (
    <div className="flex flex-col w-48 bg-zinc-900 min-h-screen">
      <div className="h-16 w-full bg-zinc-800">
        <div className="m-2 m text-center text-green-400 font-mono text-2xl py-2 rounded-full border-2 border-green-500">
          DIRTYC0DE
        </div>
      </div>
      <div className="pt-1 pb-3 w-full bg-zinc-800 text-center text">
        {me?.loggedIn === false && (
          <a
            href={`/api/auth/signin`}
            className="text-sm"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign in
          </a>
        )}
        {me?.loggedIn == true && (
          <>
            <div className="flex flex-row items-center justify-center">
              <Avatar size="small" uri={me.avatar} />
              <span className="ml-2">{me.name}</span>
            </div>
            <a
              href={`/api/auth/signout`}
              className="text-sm"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </a>
          </>
        )}
      </div>

      <div className="ml-2">
        <div className={styles.menu1}>
          <Link href="/">Home</Link>
        </div>
      </div>

      <div className="ml-2">
        <div className={styles.menu1}>글타래</div>
        {serviceConfig?.categories.map((c, n) => (
          <div className={styles.menu2} key={c.id}>
            <Link href={`/category/${c.id}`}>{c.name}</Link>
          </div>
        ))}
        <div className={styles.menu2}>
          <Link href="/post">글쓰기</Link>
        </div>
      </div>

      <div className="ml-2">
        <Link href="/admin">관리</Link>
      </div>

      <div className="ml-2">
        <div className={styles.menu1}>Test</div>
        <div className={styles.menu2}>
          <Link href="/tests/health">Health</Link>
        </div>
        <div className={styles.menu2}>
          <Link href="/tests/design">Design Guide</Link>
        </div>
      </div>

      {/* <div className="mt-20">{JSON.stringify(me, null, 4)}</div> */}
    </div>
  );
};

export default HomeNav;
