const Toast = ({ message, type = "success" }) => {
  return (
    <div className="toast toast-top toast-center z-[100] mt-16">
      <div className={`alert ${type === "success" ? "alert-success" : "alert-error"} shadow-lg border-none text-white`}>
        <div className="flex items-center gap-2 font-medium">
          {type === "success" ? "✅" : "⚠️"}
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Toast