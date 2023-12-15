var randomQuotes =
  [
    {
      quote: `“Be yourself; everyone else is already taken.”`,
      author: `― Oscar Wilde`
    },
    {
      quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
      author: `― Marilyn Monroe`
    },
    {
      quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
      author: `― Albert Einstein`
    },
    {
      quote: `“So many books, so little time.”`,
      author: `― Frank Zappa`
    },
    {
      quote: `“A room without books is like a body without a soul.”`,
      author: `― Mae West`
    },
    {
      quote: `“You only live once, but if you do it right, once is enough.”`,
      author: `― Frank Zappa`
    },
    {
      quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
      author: `― Marilyn Monroe`
    },
  ]
var oldRandom;
function generateQuote() {
  var newRandom = Math.floor(Math.random() * randomQuotes.length)
  if (oldRandom == newRandom) {
    generateQuote();
  }
  else {
    document.getElementById("quote").innerHTML = randomQuotes[newRandom].quote;
    document.getElementById("author").innerHTML = randomQuotes[newRandom].author;
    oldRandom = newRandom;
  }
}


