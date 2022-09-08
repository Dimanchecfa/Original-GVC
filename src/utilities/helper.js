export const getNumberPage = (tables = [], perPage = 10) => {
    const numberPage = tables.length / perPage;
    return Number(Math.ceil(numberPage).toFixed(0));
};