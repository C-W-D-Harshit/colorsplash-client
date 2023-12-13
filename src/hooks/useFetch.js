import { useEffect, useState } from "react";
import { makeReq } from "../makereq";

const useFeatch = (url) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await makeReq.get(url);
        setData(data.data);
        setPage(data.meta.pagination
          );
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchProducts();
  }, [url]);

  return { data, page, error, loading };
};

export default useFeatch;
