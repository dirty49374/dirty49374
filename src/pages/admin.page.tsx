import graphql from "babel-plugin-relay/macro";
import CategoryAdmin from "components/admin/CategoryAdmin";
import Dialog from "components/Dialog";
import useMe from "hooks/useMe";
import { NextPage } from "next";
import Router from "next/router";
import React, { Suspense } from "react";
import { useLazyLoadQuery } from "react-relay";
import { admin_admin_Query } from "./__generated__/admin_admin_Query.graphql";

const AdminPage: NextPage = () => {
  const { me } = useMe({ redirectTo: "/api/auth/signin" });
  if (me && me.role !== "Admin") {
    Router.push("/");
  }

  const data = useLazyLoadQuery<admin_admin_Query>(
    graphql`
      query admin_admin_Query {
        health
        ...CategoryAdmin_Query_Fragment
      }
    `,
    {}
  );

  if (!me) return <>loading...</>;

  return (
    <div>
      <Suspense fallback="loading">
        <CategoryAdmin qref={data} />
      </Suspense>
      <Dialog className="mt-5" title="xx 설정">
        ...
      </Dialog>
    </div>
  );
};

export default AdminPage;
