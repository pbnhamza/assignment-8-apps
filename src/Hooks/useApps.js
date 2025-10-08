import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [allApps, setAllApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/apps.json")
      .then((data) => setAllApps(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { allApps, loading, error };
};

export default useApps;
