import Page from "components/Page";
import PostList, { PostListWithSuspense } from "components/post/PostList";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Page>
      <h1>여기는 dirty49374의 놀이터입니다.</h1>
      <p className="mt-5">
        dirty49374가 심심할때 만드는 공간입니다. 소스는 github에 공개되어 있으며
        누구나 마음대로 사용 가능합니다.
      </p>

      <p>49374 = 0xc0de / dirty49374 = dirtyc0de 입니다.</p>

      <PostListWithSuspense />
    </Page>
  );
};

export default Home;
