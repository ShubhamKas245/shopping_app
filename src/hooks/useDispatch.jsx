import { useCallback } from "react";
import { useLoading } from "../context/LoadingContext";
import { useError } from "../context/ErrorContext";

const useDispatch = (dispatch) => {
  const { loadingDispatch } = useLoading();
  const { errorDispatch } = useError();

  const loadDispatch = useCallback(({ type, payload }) => {
    loadingDispatch({
      type,
      payload,
    });
    errorDispatch({ type });
  }, []);

  const successDispatch = useCallback(({ type, payload }) => {
    dispatch({ type, payload });
    loadingDispatch({ type });
  }, []);

  const errDispatch = useCallback(({ type, payload }) => {
    loadingDispatch({ type });
    errorDispatch({
      type,
      payload,
    });
  }, []);

  return { loadDispatch, successDispatch, errDispatch };
};

export default useDispatch;
