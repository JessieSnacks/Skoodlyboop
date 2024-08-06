export function filterBlogPost(items, id) {
  console.log("items :>> ", items, id);
  return items.filter((item) => {
    return item.titles.trim().toLowerCase() === id.trim().toLowerCase();
  });
}
