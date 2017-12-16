export const filterChange = (filterName) => {
    return {
        type: 'FILTER_CHANGE',
        payload: filterName
    }
}