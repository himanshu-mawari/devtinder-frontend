import { AlertCircle, RotateCcw } from "lucide-react";

const ErrorState = ({
  onRetry,
  message = "Failed to load data",
  showRetry = true,
  isRetrying = false,
}) => {
  return (
    <div className="flex w-full mt-5 md:mt-10 mx-auto flex-col items-center justify-center rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-10 transition-colors duration-200">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 text-destructive">
        <AlertCircle className="h-9 w-9 stroke-[1.75]" />
      </div>

      <h3 className="mb-2.5 text-xl font-heading font-bold tracking-tight text-text sm:text-2xl">
        Something went wrong
      </h3>

      <p className="mb-7 max-w-xs text-sm font-normal leading-relaxed text-muted sm:text-base">
        {message}
      </p>

      {onRetry && showRetry && (
        <button
          type="button"
          onClick={onRetry}
          disabled={isRetrying}
          className="flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          <RotateCcw
            className={`h-4 w-4 ${isRetrying ? "animate-spin" : ""}`}
          />
          <span>{isRetrying ? "Retrying..." : "Try again"}</span>
        </button>
      )}
    </div>
  );
};

export default ErrorState;
