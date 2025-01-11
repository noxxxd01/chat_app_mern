/* eslint-disable react/prop-types */

import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../stores/useConversation";

export const Conversation = ({ conversation, emoji, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex justify-between items-center py-2 px-2 hover:bg-blue-400 cursor-pointer ${
          isSelected ? "bg-blue-400" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="flex items-center gap-3">
          <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className="w-12 rounded-full">
              <img src={conversation.profilePic} />
            </div>
          </div>
          <p className="text-lg font-semibold">{conversation.fullName}</p>
        </div>
        <div>{emoji}</div>
      </div>

      {!lastIndex && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
