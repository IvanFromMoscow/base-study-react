const getTotalPages = (totalCount, limit=10) => {
    return Math.ceil(totalCount/limit);
}

export const getArrayPages = (totalCount, limit=10) => {
    const result = [];
    const totalPages = getTotalPages(totalCount, limit);
    for(let i = 0; i < totalPages; i++) {
        result.push(i+1);
    }
    return result;
}