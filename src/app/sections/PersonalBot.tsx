'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function PersonalBot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hey 👋, I'm Shivam’s AI assistant! Ask me anything about him." },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage = { from: 'user', text: input };
    setMessages((prev) => [...prev, newUserMessage]);

    // Simulated bot response (you can replace this later with a real AI API)
    setTimeout(() => {
      const reply = getBotReply(input);
      setMessages((prev) => [...prev, { from: 'bot', text: reply }]);
    }, 800);

    setInput('');
  };

  const getBotReply = (userInput: string) => {
    const text = userInput.toLowerCase();

    if (text.includes('name')) return "I'm Shivam Yadav’s personal assistant 🤖";
    if (text.includes('skills')) return 'He’s skilled in Next.js, React, Golang, and Product Management.';
    if (text.includes('project') || text.includes('work')) return 'He’s built AI tools, dashboards, and portfolio sites. You can explore them below!';
    if (text.includes('contact')) return 'You can reach Shivam via LinkedIn or email 📬';
    return "Hmm… I'm not sure, but Shivam probably knows! 😄";
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 h-fit bg-gray-900 text-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-white/10">
      {/* Header */}
      <div className="bg-green-500/10 text-green-400 px-4 py-3 font-semibold">
        Shivam’s Personal Bot 🤖
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-80 hide-scrollbar">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`px-3 py-2 rounded-lg max-w-[75%] text-sm ${
                msg.from === 'user'
                  ? 'bg-green-500/20 text-green-300'
                  : 'bg-white/10 text-gray-100'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex items-center border-t border-white/10 p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Ask about Shivam..."
          className="flex-1 bg-transparent outline-none text-sm px-2 text-gray-200 placeholder-gray-500"
        />
        <button
          onClick={handleSend}
          className="p-2 text-green-400 hover:text-green-300 transition"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
