import { Send } from "lucide-react";
import MessageHeader from "./MessageHeader";
import { MessageWrapper } from "./MessageWrapper";
import useConversation from "../../stores/useConversation";
import { useEffect, useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
import { useAuthContext } from "../../context/AuthContext";

export const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <div className="bg-slate-200 rounded-lg h-full w-full flex flex-col justify-between">
      {!selectedConversation ? (
        <Welcome selectedConversation={selectedConversation} />
      ) : (
        <>
          <div>
            <MessageHeader selectedConversation={selectedConversation} />
          </div>
          <div className="w-full">
            <MessageWrapper />
          </div>
          <form
            className="flex flex-row items-center gap-2 px-4 w-full pb-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <Send />
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export const Welcome = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="text-center space-y-2">
        <h1 className="text-2xl">Welcome {authUser.fullName} 👋</h1>
        <p className="text-neutral-500">Select a chat to start messaging</p>
      </div>
    </div>
  );
};
