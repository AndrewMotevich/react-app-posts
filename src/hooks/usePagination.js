import { useMemo, useState } from "react";

export default function usePagination() {
  const [totalPages, setTotalPages] = useState(0);
  const pagesArray = useMemo(() => {
    let pagesArray = [];
    for (let i = 0; i < totalPages; i += 1) {
      pagesArray.push(i + 1);
    }
    console.log("newArray");
    return pagesArray;
  }, [totalPages]);
  return [totalPages, pagesArray, setTotalPages];
}
