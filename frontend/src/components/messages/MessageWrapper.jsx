import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Skeleton from "../skeleton/Skeleton";
import Conversation from "./Conversation";
import useListenMessages from "../../hooks/useListenMessages";

export const MessageWrapper = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();

  useListenMessages();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 py-4 overflow-auto h-[25rem] custom-scrollbar">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Conversation message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, index) => <Skeleton key={index} />)}

      {!loading && messages.length == 0 && (
        <p className="text-center text-sm">
          Send a message to start the conversation...
        </p>
      )}
    </div>
  );
};
