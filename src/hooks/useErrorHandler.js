import { getErrorConfig } from "../utils/errorConfig";

const useErrorHandler = (error, context) => {
  return getErrorConfig(error, context);
};

export default useErrorHandler;