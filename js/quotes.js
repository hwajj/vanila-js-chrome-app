const quotes = [
  {
    quote:
      "I'm tough, ambitious, and I know exactly what I want. If that makes me a bitch, okay.",
    author: "Madonna",
  },
  {
    quote:
      "The greatest success we’ll know is helping others succeed and grow.",
    author: "Gregory Scott Reid",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Fake it Till You Make it",
    author: "Amy Cuddy",
  },
  {
    quote:
      "Energy is the essence of life. Every day you decide how you're going to use it by knowing what you want and what it takes to reach that goal, and by maintaining focus.",
    author: "Oprah Winfrey",
  },
  {
    quote: "Difficulties happen and you get through them.",
    author: "Gloria Estefan",
  },
  {
    quote:
      "I'm not going to LIMIT myself just because people won't accept the fact that I can do something else.",
    author: "Dolly Parton",
  },
  {
    quote: "You can have it all. Just not all at once.",
    author: "Oprah Winfrey",
  },

  {
    quote:
      "Success is going from failure to failure without loss of enthusiasm.",
    author: "Winston Churchill",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
