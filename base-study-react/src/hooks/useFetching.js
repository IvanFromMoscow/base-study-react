import React, { useState } from "react"

export const useFetching = (callback) => {
    const [postLoading, setPostLoading] = useState(false);
    const [postError, setPostError] = useState({});
    const fetching = async (...arg) => {
        try {
            setPostLoading(true);
            const response = await callback(...arg);
            return response
        } catch (error) {
            setPostError(error);
        } finally {
            setTimeout(() => {
                setPostLoading(false);
            }, 3000);
        }
    }
    return [fetching, postLoading, postError];
}