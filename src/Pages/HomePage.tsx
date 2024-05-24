import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

const HomePage = () => {
  const [fetchError, setFetchError] = useState("");
  const [data, setData] = useState<object>({});

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("users").select();

      if (error) {
        setFetchError("Couldnt Fetch Database");
        alert(fetchData);
        setData({});
      }
      if (data) {
        setData(data);
        console.log(data);
        setFetchError("");
        alert("Database Fetched");
      }
    };
    fetchData();
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
