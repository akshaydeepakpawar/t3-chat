"use client";

import { useState } from "react";
import ChatWelcomeTabs from "@/modules/chat/components/chat-welcome-tabs"
import MessageForm from "@/modules/chat/components/message-form"

const ChatMessageView = ({ user }) => {
  const [selectedMessage, setselectedMessage] = useState("");

  const handleMessageSelect = (message) => {
    setselectedMessage(message);
  };

  const handleMessageChange = () => {
    setselectedMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-10">
      <ChatWelcomeTabs
        userName={user?.name}
        onMessageSelect={handleMessageSelect}
      />
      <MessageForm initialMessage={selectedMessage}
      onMessageSelect={handleMessageChange}/>
    </div>
  );
};

export default ChatMessageView;
