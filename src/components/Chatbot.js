import React, { useRef, useState } from "react";
import { FaPaperclip, FaSmile } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";

const faqDatabase = [
  {
    keywords: ["hi", "hello", "hey"],
    response: "Hello 👋 Welcome! How can I assist you today?"
  },
  {
    keywords: ["services", "offer", "provide"],
    response:
      "We provide AI Automation, E-commerce Solutions, and Cloud Services."
  },
  {
    keywords: ["price", "cost", "pricing"],
    response:
      "Pricing depends on your requirements. Would you like to share more details?"
  },
  {
    keywords: ["contact", "email", "call"],
    response:
      "You can contact us via our contact form or email us at hello@yourdomain.com."
  }
];

function detectIntent(message) {
  const lowerMsg = message.toLowerCase();

  for (let item of faqDatabase) {
    for (let keyword of item.keywords) {
      if (lowerMsg.includes(keyword)) {
        return item.response;
      }
    }
  }

  return "I'm not sure I understand. Could you please rephrase?";
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 How can I help you today?"
    }
  ]);

  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  const fileInputRef = useRef();

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input
    };

    const botMessage = {
      sender: "bot",
      text: detectIntent(input)
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const fileURL = URL.createObjectURL(file);

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        file,
        fileURL
      }
    ]);
  };

  const onEmojiClick = (emojiData) => {
    setInput((prev) => prev + emojiData.emoji);
    setShowEmoji(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-9 right-6 w-14 h-14 flex items-center justify-center
        rounded-full bg-purple-600 text-white text-2xl cursor-pointer
        shadow-lg hover:scale-110 transition z-50"
      >
        <img src="/TQwhite.png" alt="tQwhite" className="w-32 h-32 pt-3 object-cover"/>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="
            fixed
            z-[998]
            bg-black/30
            backdrop-blur-xl
            border
            border-white/20
            rounded-2xl
            shadow-2xl
            flex
            flex-col
            overflow-hidden

            bottom-24
            right-2
            left-2
            h-[65vh]

            sm:left-auto
            sm:right-6
            sm:w-[380px]
            sm:h-[500px]

            lg:w-[420px]
            lg:h-[550px]
          "
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 bg-white/10 border-b border-white/20">
            <div className="flex items-center gap-2 min-w-0">
              <img
                src="/TQ_logo.png"
                alt="logo"
                className="w-8 h-8 rounded-full"
              />

              <span className="text-white font-semibold text-sm truncate">
                Hi I'm Quito - Your AI Assistant
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-lg"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((msg, index) => (
              <div key={index}>
                {msg.text && (
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm break-words ${
                      msg.sender === "user"
                        ? "ml-auto text-white bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500"
                        : "mr-auto bg-white text-black"
                    }`}
                  >
                    {msg.text}
                  </div>
                )}

                {msg.file && (
                  <div className="ml-auto bg-white p-2 rounded-xl max-w-[75%]">
                    {msg.file.type.startsWith("image") ? (
                      <img
                        src={msg.fileURL}
                        alt="upload"
                        className="rounded-lg max-h-40 w-full object-cover"
                      />
                    ) : (
                      <a
                        href={msg.fileURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline break-all"
                      >
                        📎 {msg.file.name}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Emoji Picker */}
          {showEmoji && (
            <div className="absolute bottom-20 right-2 z-50 scale-75 sm:scale-100 origin-bottom-right">
              <EmojiPicker
                onEmojiClick={onEmojiClick}
                theme="dark"
              />
            </div>
          )}

          {/* Input */}
          <div className="border-t border-white/20 p-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => fileInputRef.current.click()}
                className="text-white text-lg shrink-0"
              >
                <FaPaperclip />
              </button>

              <input
                ref={fileInputRef}
                type="file"
                hidden
                onChange={handleFileUpload}
              />

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSend()
                }
                placeholder="Type a message..."
                className="
                  flex-1
                  min-w-0
                  bg-white/20
                  text-white
                  placeholder-white/70
                  rounded-lg
                  px-3
                  py-2
                  outline-none
                  text-sm
                "
              />

              <button
                onClick={() => setShowEmoji(!showEmoji)}
                className="text-white text-lg shrink-0"
              >
                <FaSmile />
              </button>

              <button
                onClick={handleSend}
                className="
                  bg-gradient-to-r
                  from-pink-500
                  via-fuchsia-500
                  to-purple-500
                  text-white
                  p-3
                  rounded-lg
                  shrink-0
                "
              >
                <IoSendSharp />
              </button>
            </div>

            <p className="text-center text-white/70 text-xs mt-2">
              Powered by Techquitoes
            </p>
          </div>
        </div>
      )}
    </>
  );
}