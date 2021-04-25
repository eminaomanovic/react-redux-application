export function filterByTerm(array, term) {
  if (!term || term === '') {
    return array;
  }
  const termLowerCase = term.toString().toLowerCase();
  return array.filter(item => {
    if (item.original_name) return item.original_name.includes(termLowerCase);
    if (item.title !== undefined) return item.title.includes(termLowerCase);
    if (item.original_title !== undefined)
      return item.original_title.includes(termLowerCase);
    return false;
  });
}
