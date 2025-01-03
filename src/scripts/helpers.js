export const sortPosts = (posts) => {
  posts.sort((a, b) => {
    if (a.data.pubDate < b.data.pubDate) return -1;
    else if (a.data.pubDate > b.data.pubDate) return 1;
    else return 0;
  });

  return posts;
};