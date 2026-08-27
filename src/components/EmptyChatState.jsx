import { MessageSquare } from "lucide-react";
const EmptyChatState = () => (
  <div className="flex flex-col items-center justify-center text-center p-4 mt-40 lg:mt-32">
    <div className="w-16 h-16  rounded-full flex items-center justify-center mb-4 bg-logo shadow-logo-glow border border-border shrink-0">
      <MessageSquare className="w-8 h-8  text-primary-foreground" />
    </div>
    <h3 className="font-heading text-lg sm:text-xl font-bold mb-1.5 text-text">
      Say Hello
    </h3>
    <p className="font-sans text-xs sm:text-sm max-w-[240px] md:max-w-[300px]    leading-relaxed text-muted">
      Looking to strike up a conversation? When you match with others, you can send them a direct message here.
    </p>
  </div>
);

export default EmptyChatState;
