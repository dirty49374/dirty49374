import useMe from "hooks/useMe";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React, { Key } from "react";
import Avatar from "./Avatar";
import styles from "./HomeNav.module.css";

type HomeNavProps = {
  className?: string;
};

type MenuProps = {
  title: string;
  url?: string;
  key?: Key | null | undefined;
};

const HomeNav: React.FC<HomeNavProps> = ({ className }) => {
  const { me, serviceConfig } = useMe();

  const menuLv1 = ({ title, url, key }: MenuProps) => (
    <div key={key} className={styles.menu1}>
      {url ? <Link href={url}>{title}</Link> : <>{title}</>}
    </div>
  );

  const menuLv2 = ({ title, url, key }: MenuProps) => (
    <div key={key} className={styles.menu2}>
      {url ? <Link href={url}>{title}</Link> : <>{title}</>}
    </div>
  );

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

      <div className="ml-2">{menuLv1({ title: "Home", url: "/" })}</div>

      <div className="ml-2">
        {menuLv1({ title: "글타래" })}
        {serviceConfig?.categories.map((c, n) =>
          menuLv2({ title: c.name, url: `/category/${c.id}`, key: c.id })
        )}
        {menuLv2({ title: "글쓰기", url: "/post" })}
      </div>

      <div className="ml-2">{menuLv1({ title: "관리", url: "/admin" })}</div>

      <div className="ml-2">
        <div className={styles.menu1}>Test</div>
        {menuLv2({ title: "Health", url: "/tests/health" })}
        {menuLv2({ title: "Chat", url: "/tests/chat" })}
        {menuLv2({ title: "Design", url: "/tests/design" })}
      </div>

      {/* <div className="mt-20">{JSON.stringify(me, null, 4)}</div> */}
    </div>
  );
};

export default HomeNav;
