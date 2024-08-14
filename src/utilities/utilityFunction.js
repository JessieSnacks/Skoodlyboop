export function filterBlogPost(items, id) {
  return items.filter((item) => {
    return item.titles.trim().toLowerCase() === id.trim().toLowerCase();
  });
}
