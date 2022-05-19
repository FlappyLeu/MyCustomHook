import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((e) => setError(e))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, loading, error };
}
