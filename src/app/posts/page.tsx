"use client";
import { APIRes } from "@/lib/types";
import Card from "./components/card";
import { useEffect, useState } from "react";

// const getData = async () => {
//   const resp = await fetch(
//     "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json"
//   );
//   if (!resp.ok) throw new Error("Failed to fetch data");
//   return resp.json();
// };
const PostPage = () => {
  const [data, setData] = useState<null | APIRes>(null);

  useEffect(() => {
    fetch("posts/api").then((res) => {
      res.json().then((resp) => setData(resp as unknown as APIRes));
    });
  }, []);

  console.log("data", data);

  //   const data = (await getData()) as APIRes;

  return (
    <div className="flex w-screen h-screen justify-center items-center bg-slate-800">
      <div></div>
      <div className="h-full overflow-auto p-4 flex flex-wrap">
        {data?.Results?.map((company, index) => (
          <Card key={index}>
            <ul>
              <li>{company.Mfr_CommonName}</li>
              <li>{company.Country}</li>
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
