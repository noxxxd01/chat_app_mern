import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";
import { Conversation } from "./Conversation";

export const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  return (
    <div className="flex flex-col gap-2 overflow-auto h-[20rem]">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji}
          lastIndex={index === conversation.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner loading-sm"></span>
      ) : null}
    </div>
  );
};
