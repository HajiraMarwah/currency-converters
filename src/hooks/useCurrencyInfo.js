import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  //need to give variable here taking currency which returns some data
  //call api when this hook get called or load that time need to call api so calling in useEffect
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log("dataaaa", data);
  }, [currency]);
  console.log("data1", data);
  return data;
}
export default useCurrencyInfo;
