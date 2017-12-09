export const filterChange = (filterName) => {
    console.log('You clicked on filter', filterName);
    return {
        type: 'FILTER_CHANGE',
        payload: filterName
    }
}