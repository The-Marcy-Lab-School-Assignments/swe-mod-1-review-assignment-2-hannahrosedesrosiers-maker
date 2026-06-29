const bookInventory = {
  "The Bluest Eye": 3,
  "Beloved": 5,
  "Homegoing": 2,
  "The Vanishing Half": 4,
  "Between the World and Me": 1
};

// Part A: Use Object.keys() and a for loop to print each book and its availability in this format:
// "The Bluest Eye: 3 copies available"
// "Beloved: 5 copies available"
// etc...
const bookTitles = Object.keys(bookInventory);

let totalBooks = 0;

for (let i = 0; i < bookTitles.length; i++) {
  const title = bookTitles[i];
  const copies = bookInventory[title];

  console.log(`${title}: ${copies} copies available`);
  totalBooks += copies;
}

// Part B: Calculate and log the total number of books across all titles (should be 15)
// Hint: You'll need a variable to keep track of the running total as you loop through the keys
console.log(totalBooks);
