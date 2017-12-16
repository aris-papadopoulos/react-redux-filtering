export const filterChange = (filterName, e) => {
    return {
        type: 'FILTER_CHANGE',
        payload: {
            filterName: filterName,
            checked: e.target.checked
        }
    }
}