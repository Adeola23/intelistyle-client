import { useCallback, useEffect, useState } from "react";

import { httpGetSearched } from "./request";

function useSearched() {
    const [garments, saveGarments] = useState([]);

    const getGarments = useCallback(async () => {
        const fetchedGarments = await httpGetSearched();
        saveGarments(fetchedGarments);
    }, []);

    useEffect(() => {
        getGarments();
    }, [getGarments]);

    return garments;
}

export default useSearched;
