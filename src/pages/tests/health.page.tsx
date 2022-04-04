import React, { Suspense, useState } from "react";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { health_health_Query } from "./__generated__/health_health_Query.graphql";
import { NextPage } from "next";

type healthProps = {};

const Health: React.FC<healthProps> = ({}) => {
  const data = useLazyLoadQuery<health_health_Query>(
    graphql`
      query health_health_Query {
        health
      }
    `,
    {}
  );

  if (!data) return <div>not found</div>;

  return <div className="health">{data.health}</div>;
};

const PPP = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <Health />
    </Suspense>
  );
};

export default PPP;
