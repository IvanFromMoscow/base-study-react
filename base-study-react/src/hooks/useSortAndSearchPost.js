import { useMemo } from "react";

const useSortedPosts = (posts, sortMode) => {
    const sortedPosts = useMemo(() => {
        if (sortMode) {
            return [...posts].sort((a, b) => a[sortMode].localeCompare(b[sortMode]))
        } else {
            return posts;
        }
    }, [sortMode, posts]);
    return sortedPosts;
}

export const useSortAndSearchPost = (posts, sortMode, query) => {
    const sortedPosts = useSortedPosts(posts, sortMode);
    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPosts])
    return sortedAndSearchPosts;
}