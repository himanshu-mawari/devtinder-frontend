import React from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

const ErrorState = ({ onRetry, message = "Failed to load data" , showRetry, isRetrying }) => {
  return (
    <div className="flex w-full mt-5 md:mt-10 mx-auto flex-col items-center justify-center rounded-[2rem] border border-red-100 bg-white p-8 text-center shadow-sm sm:p-10">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500">
        <AlertCircle className="h-9 w-9 stroke-[1.75]" />
      </div>

      <h3 className="mb-2.5 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
        Something went wrong
      </h3>

      <p className="mb-7 max-w-xs text-sm font-normal leading-relaxed text-slate-500 sm:text-base">
        {message}
      </p>
      {onRetry && showRetry && (
        <button
          type="button"
          onClick={onRetry}
          disabled={isRetrying}
          className="flex items-center gap-2 rounded-xl bg-[#0b132b] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1c2541] active:scale-95 shadow-sm"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Try again</span>
        </button>
      )}
    </div>
  );
};

export default ErrorState;
