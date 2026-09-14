const Skeleton = ({ className = "" }) => (
  <div className={`relative overflow-hidden bg-skeleton ${className}`}>
    <div className="absolute inset-0 -translate-x-full animate-shimmer">
      <div className="h-full w-full bg-gradient-to-r from-transparent via-white/10 light:via-white/60 to-transparent skew-x-[-20deg]" />
    </div>
  </div>
);

export default Skeleton;
