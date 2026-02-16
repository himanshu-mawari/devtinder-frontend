import { useNavigate } from "react-router-dom";

const NotFoundCoolUI = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-base-100 rounded-2xl p-10 text-center space-y-6">
        <h1 className="text-6xl font-semibold tracking-wide">DAMN!!</h1>

        <p className="text-base-content/70 text-lg leading-relaxed">
          Seems like the page you were looking for cannot be found. The
          requested resource failed with status 404, So Don't worry⏬⏬
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary px-4 text-lg font-normal"
          >
            🚀 Take Me Home
          </button>

          <button onClick={() => navigate(-1)} className="btn btn-outline px-8">
            ⬅ Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundCoolUI;
