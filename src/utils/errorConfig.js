export const getErrorConfig = (error, context = "data") => {
  const status = error?.status;

  if (status === 'FETCH_ERROR') {
    return { message: "Check your internet connection and try again", showRetry: true, redirect: null };
  }
  if (status === 401) {
    return { message: "Session expired", showRetry: false, redirect: '/login' };
  }
  if (status === 403) {
    return { message: "You don't have access to this", showRetry: false, redirect: null };
  }
  if (status === 404) {
    return { message: `This ${context} could not be found`, showRetry: false, redirect: null };
  }
  if (status === 409) {
    return { message: error?.data?.error?.message || "This action was already completed", showRetry: false, redirect: null };
  }
  if (status >= 500) {
    return { message: "Something broke on our end. Try again shortly.", showRetry: true, redirect: null };
  }
  return { message: `Couldn't load ${context}`, showRetry: true, redirect: null };
};