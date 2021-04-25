export function filterByTerm(array, term) {
  if (!term || term === '') {
    return array;
  }
  const termLowerCase = term.toString().toLowerCase();
  return array.filter(item => {
    if (item.original_name !== undefined)
      return item.original_name.toLowerCase().includes(termLowerCase);
    if (item.title !== undefined)
      return item.title.toLowerCase().includes(termLowerCase);
    if (item.original_title !== undefined)
      return item.original_title.toLowerCase().includes(termLowerCase);
    return false;
  });
}
