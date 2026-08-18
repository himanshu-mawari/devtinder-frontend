import { MessageCircle } from 'lucide-react';

const ChatViewPlaceholder = () => {
  return (
    <div className="hidden md:flex flex-col items-center justify-center h-full text-center px-4">
      <MessageCircle className="w-12 h-12 text-slate-300 dark:text-slate-700 mb-3" />
      <p className="text-slate-600 dark:text-slate-300 font-medium">
        Select a conversation
      </p>
      <p className="text-slate-400 text-sm mt-1">
        Choose a chat from the list to start messaging
      </p>
    </div>
  );
};

export default ChatViewPlaceholder;