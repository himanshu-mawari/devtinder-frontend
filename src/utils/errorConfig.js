export const getErrorConfig = (error, context = "data", options = {}) => {
  const status = error?.status;
  const { ownsRedirect = false } = options;

  console.error('[API Error]', { status, context, code: error?.data?.error?.code });

  if (status === 'FETCH_ERROR') {
    return { message: "Check your internet connection and try again", showRetry: true, redirect: null };
  }
  if (status === 401) {
    return {
      message: "Session expired",
      showRetry: false,
      redirect: ownsRedirect ? '/login' : null, 
    };
  }
  if (status === 403) {
    return { message: "You don't have access to this", showRetry: false, redirect: null };
  }
  if (status === 404) {
    return { message: `This ${context} could not be found`, showRetry: false, redirect: null };
  }
  if (status === 409) {
    return { message: "This action has already been completed", showRetry: false, redirect: null };
  }
  if (status >= 500) {
    return { message: "Something broke on our end. Try again shortly.", showRetry: true, redirect: null };
  }
  return { message: `Couldn't load ${context}`, showRetry: true, redirect: null };
};