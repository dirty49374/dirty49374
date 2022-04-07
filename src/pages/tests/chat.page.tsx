import graphql from "babel-plugin-relay/macro";
import Page from "components/Page";
import useChatMutation from "hooks/mutations/useChatMutation";
import { useInputState } from "hooks/useInputState";
import moment from "moment";
import { NextPage } from "next";
import React, { KeyboardEvent, useMemo, useState } from "react";
import { useSubscription } from "react-relay";
import { GraphQLSubscriptionConfig } from "relay-runtime";
import { chat_newChat_Subscription } from "./__generated__/chat_newChat_Subscription.graphql";

const subscription = graphql`
  subscription chat_newChat_Subscription {
    newChat
  }
`;

const ChatPage: NextPage = () => {
  const [msg, setMsg] = useInputState("");
  const [list, setList] = useState<string[]>([]);
  const config: GraphQLSubscriptionConfig<chat_newChat_Subscription> = useMemo(
    () => ({
      variables: {},
      subscription,
      onNext: (v) => {
        setList((list) => {
          const msg = `${moment(new Date()).format('MM-DD HH:mm:ss | ')} ${v?.newChat}`;
          const nextList = [...list, msg];
          if (nextList.length > 20) {
            nextList.splice(0, nextList.length - 20);
          }
          return nextList;
        });
      },
    }),
    []
  );

  const chat = useChatMutation();
  useSubscription(config);

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      chat.commit({
        variables: { message: msg.value },
      });
      setMsg("");
    }
  };

  return (
    <Page>
      <h1>Chat Test</h1>
      <div className="mt-5">
        {list.map((m, n) => (
          <p key={n}>{m}</p>
        ))}
      </div>
      <div className="mt-5">
        <input className="w-full" {...msg} onKeyDown={handleEnter} />
      </div>
    </Page>
  );
};

export default ChatPage;
