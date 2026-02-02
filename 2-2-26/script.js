// texts Handeling in Javascript

const quotes = [
  {
    id: 1,
    text: "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
    author: "Rumi",
    likes: 0,
    year: 1957,
    tags: ["happiness", "action", "mindset"],
  },
  {
    id: 2,
    text: "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
    author: "Abdul Kalam",
    likes: 10,
    year: 1908,
    tags: ["begginning", "action"],
  },
  {
    id: 3,
    text: "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
    author: "Abdul Kalam",
    likes: 0,
    year: 1968,
    tags: ["success", "value", "purpose"],
  },
  {
    id: 4,
    text: "If You Can'T Make It Good, At Least Make It Look Good.",
    author: "Bill Gates",
    likes: 89,
    year: 1989,
    tags: ["time", "productivity", "action"],
  },
  {
    id: 5,
    text: "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
    author: "Rumi",
    likes: 101,
    year: 1947,
    tags: ["future", "dreams", "belief"],
  },
  {
    id: 6,
    text: "It is bad for a young man to sin; but it is worse for an old man to sin.",
    author: "Abu Bakr (R.A)",
    likes: 877,
    year: 1905,
    tags: ["happiness", "action", "life"],
  },
  {
    id: 7,
    text: "If You Are Out To Describe The Truth, Leave Elegance To The Tailor.",
    author: "Albert Einstein",
    likes: 5,
    year: 1858,
    tags: ["wisdom", "action", "humor"],
  },
  {
    id: 8,
    text: "O man you are busy working for the world, and the world is busy trying to turn you out.",
    author: "Abu Bakr (R.A)",
    likes: 89,
    year: 1948,
    tags: ["life", "passion", "success"],
  },
  {
    id: 9,
    text: "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.",
    author: "Abdul Kalam",
    likes: 45,
    year: 2000,
    tags: ["action", "mindset"],
  },
  {
    id: 10,
    text: "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.",
    author: "Abraham Lincoln",
    likes: 1,
    year: 1789,
    tags: ["happiness", "action"],
  },
];

// 1
// let result = quotes
//   .filter((quote) => quote.author == "Abdul Kalam")
//   .forEach((q) => console.log(q.tags));

// 2
// let result = quotes
//   .forEach((q) => console.log(q.tags) == "success");

// 3
// for (let i = 0; i < quotes.length; i++) {
//   console.log(`"${quotes.tegs}"`);
// }

// 4
// for (let i = 0; i < quotes.length; i++) {
//   if (quotes[i].tags == "success") {
//     console.log(quotes[i].tags);
//   }
// }

// 5
// let result = quotes.filter((q) => console.log(q.tags.success) == "success");
// console.log(result);

// 6

let a = quotes.filter((h) => h.tags.includes("success"));

console.log(a);
