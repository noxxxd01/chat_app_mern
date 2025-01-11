/* eslint-disable react/prop-types */
const MessageHeader = ({ selectedConversation }) => {
  return (
    <div>
      <div className="w-full px-4 py-3 bg-slate-300 rounded-t-lg space-x-4">
        <span>To:</span>
        <span className="font-bold bg-slate-400 rounded-lg px-4 py-1 text-sm">
          {selectedConversation.fullName}
        </span>
      </div>
    </div>
  );
};

export default MessageHeader;
