export function filterBlogPost(items, id) {
  return items.filter((item) => {
    return item.titles.trim().toLowerCase() === id.trim().toLowerCase();
  });
}

export function linksObject(linksArray) {
  const result = {};
  for (const link of linksArray) {
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

// Example usage:
// const blogPost = "This is a sample blog post. The post is about coding and algorithms. It also discusses data structures.";
// const patternObject = {
//     title: "sample blog post",
//     content1: "coding and algorithms",
//     content2: "data structures"
// };

// Expected output:
// [
//   { key: 'title', start: 10, end: 25 },
//   { key: 'content1', start: 41, end: 61 },
//   { key: 'content2', start: 80, end: 94 }
// ]
