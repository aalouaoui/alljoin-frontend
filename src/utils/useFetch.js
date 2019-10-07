import { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null
  });

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    fetch(url, { ...options, signal })
      .then(response => response.json())
      .then(data =>
        setState({
          loading: false,
          data,
          error: null
        })
      )
      .catch(error =>
        error.name === "AbortError" ? null : setState({ loading: false, data: null, error })
      );

    return () => abortController.abort();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [state.loading, state.data, state.error];
};

export default useFetch;
