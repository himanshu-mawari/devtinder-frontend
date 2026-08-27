const ICEBREAKERS = [
  { label: "Say hi 👋", text: "Say hi 👋" },
  { label: "Chai code > Coffee code? ☕", text: "Chai code > Coffee code? ☕" },
  { label: "What are you building? 🚀", text: "What are you building? 🚀" },
];

const EmptyChatMessage = ({ recipient, sendMessage }) => {
  const fullName =
    `${recipient?.firstName ?? ""} ${recipient?.lastName ?? ""}`.trim() ||
    recipient?.username;

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-6 text-center my-auto">
      <div className="mb-4">
        <img
          src={recipient?.profilePicture}
          alt={fullName}
          className="w-24 h-24 rounded-full object-cover object-top border-2 border-border shadow-logo-glow"
        />
      </div>

      <h2 className="font-heading text-xl font-bold text-text mb-1">
        {fullName}
      </h2>
      <p className=" text-xs text-muted mb-6">
        @{recipient?.username || "user"}
      </p>

      <p className="text-xs text-muted max-w-xs mb-4 leading-relaxed">
        Break the ice! Pick a quick starter below to begin the conversation with{" "}
        <span className="text-text font-medium">
          {recipient?.firstName || "them"}
        </span>
        :
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 max-w-xs sm:max-w-sm">
        {ICEBREAKERS.map((item, index) => (
          <button
            key={index}
            onClick={() => sendMessage(item.text)}
            className="px-3.5 py-2 rounded-full bg-sidebar-accent hover:bg-sidebar-accent-hover text-text border border-border text-xs font-medium transition-all active:scale-95 shadow-sm"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmptyChatMessage;
