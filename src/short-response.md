# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Read the following code:

```js
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = playlist1;
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

Part A: What will be logged to the console? Why?

Part B: How would you modify the code so that reassigning `playlist2.songCount` does NOT affect `playlist1`.songCount? Write the corrected code below your response (we've provided the broken code again for you to fix).

### Response 1

It will log `15` because objects are reference types. `playlist2` is not a new object, it is pointing to the same object as `playlist1`, so changing `playlist2.songCount` also changes `playlist1.songCount`.

**Corrected Code:**

```js
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = { ...playlist1 };
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

---

## Prompt 2

```js
const students = [
  { name: "Maya", grade: 92, passed: true },
  { name: "Jamal", grade: 78, passed: true },
  { name: "Destiny", grade: 88, passed: true },
  { name: "Marcus", grade: 95, passed: true }
];
```

For each task below, identify which array method (forEach, filter, map, find, or reduce) you would use.

1. You need to get an array containing only students who scored above 85.
2. You need to find the student named "Destiny" and update their grade to 90.
3. You need to calculate the average grade of all students.
4. You need to create an array of strings in the format: "Maya: 92"

### Response 2

1. I would use `filter` to get students who scored above 85.
2. I would use `find` to get the student named "Destiny".
3. I would use `reduce` to calculate the average grade.
4. I would use `map` to create the array of strings.

---

## Prompt 3

We should expect that the code below prints the array `[ 'A', 'B', 'C', 'D' ]` but an error is thrown when the third line of code is executed.

Explain why this error occurs, how to fix it, and provide a suggestion for how to avoid this error in the future.

```js
const letters = ['a', 'b', 'c', 'd'];
const capitalize = (str) => str.toUpperCase();

const upperCaseLetters = letters.map(capitalize());
// Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')

console.log(upperCaseLetters);
```

### Response 3

The error happens because `capitalize()` is being called right away instead of being passed into `map`. Since no string is passed in, `str` is `undefined`, so `.toUpperCase()` does not work.

To fix it, pass the function name without parentheses:

```js
const letters = ['a', 'b', 'c', 'd'];
const capitalize = (str) => str.toUpperCase();

const upperCaseLetters = letters.map(capitalize);

console.log(upperCaseLetters);
```

To avoid this, remember that array methods like `map` need a callback function, not the result of calling the function.

---

## Prompt 4

Given this code:

```js
const orders = [
  { id: 1, total: 45 },
  { id: 2, total: 23 },
  { id: 3, total: 67 }
];

const grandTotal = orders.reduce((sum, order) => {
  return sum + order.total;
}, 0);
```

- Part A: What will `grandTotal` equal after this code runs?
- Part B: Explain what the `0` at the end of the reduce method does. Why is it important?
- Part C: Walk through what happens in the FIRST iteration of reduce:
    - What is the value of sum?
    - What is the value of order?
    - What gets returned?

### Response 4

Part A: `grandTotal` will equal `135`.

Part B: The `0` is the starting value for `sum`. It is important because it makes the total start at 0 before adding each order total.

Part C: In the first iteration, `sum` is `0` and `order` is `{ id: 1, total: 45 }`. The code returns `45`, so that becomes the new value of `sum`.
