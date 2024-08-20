export function filterBlogPost(items, id) {
  return items.filter((item) => {
    return item.titles.trim().toLowerCase() === id.trim().toLowerCase();
  });
}

export function linksObject(linksArray) {
  const result = {};
  for (const link of linksArray) {
    if (!link) {
      continue;
    }
    let [key, value] = link.split(/:(.*)/);

    result[key] = value;
  }
  return result;
}
// Matching algo for links
export function searchAlgo(text, patternObject) {
  const results = [];
  let startIndex = 0;

  for (const [key, value] of Object.entries(patternObject)) {
    const matchIndex = text.indexOf(key, startIndex);

    if (matchIndex !== -1) {
      results.push({ key, value });
    }
  }

  return results;
}
