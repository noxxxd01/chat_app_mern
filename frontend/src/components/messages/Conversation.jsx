/* eslint-disable react/prop-types */
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../stores/useConversation";
import { extractTime } from "../../utils/extractTime";

function Conversation({ message }) {
  const { authUser } = useAuthContext();

  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-400" : "";
  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profilePic} />
          </div>
        </div>
        <div className="chat-header">{message.fullName}</div>
        <div
          className={`chat-bubble text-white ${shakeClass} ${bubbleBgColor}`}
        >
          {message.message}
        </div>
        <time className="text-xs opacity-50 chat-footer flex items-center">
          {formattedTime}
        </time>
      </div>
    </div>
  );
}

export default Conversation;
