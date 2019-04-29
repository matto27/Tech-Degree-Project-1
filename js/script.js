/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Quotes topics are arranged randomly and tagged with the subject matter.

var quotes = [
  {
    quote: "Art is the imposing of a pattern on experience, and our aesthetic enjoyment is recognition of the pattern.",
    source: "Alfred North Whitehead",
    citation: "Dialogues",
    year: 1954,
    tags: "Art"
  },
  {
    quote: "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
    source: "Carl Jung",
    citation: "Modern Man in Search of a Soul",
    year: 1933,
    tags: "Personality"
  },
  {
    quote: "To cease from evil, to do good, and to purify the mind yourself, this is the teaching of all the Buddhas.",
    source: "Buddha",
    citation: "The Dhammapada",
    year: "4th century, BCE",
    tags: "Religion"
  },
  {
    quote: "A man cannot be too careful in the choice of his enemies.",
    source: "Oscar Wilde",
    citation: "The Picture of Dorian Gray",
    year: 1891,
    tags: "Life"
  },
  {
    quote: "Men are not prisoners of fate, but only prisoners of their own minds.",
    source: "Franklin D. Roosevelt",
    citation: "Pan American Day address",
    year: "April 15, 1939",
    tags: "Courage"
  },
  {
    quote: "Democracy is the recurrent suspicion that more than half of the people are right more than half the time.",
    source: "E. B. White",
    citation: "New Yorker, July 3",
    year: 1944,
    tags: "Politics"
  },
  {
    quote: "Those who cannot remember the past are condemned to repeat it.",
    source: "George Santayana",
    citation: "The Life of Reason, Volume 1",
    year: 1905,
    tags: "History"
  },
  {
    quote: "All you need in this life is ignorance and confidence; then success is sure.",
    source: "Mark Twain",
    citation: "Letter to Mrs Foote, Dec. 2",
    year: 1887,
    tags: "Life"
  },
  {
    quote: "The test of a first-rate intelligence is the ability to hold two opposed ideas in the mind at the same time, and still retain the ability to function.",
    source: "F. Scott Fitzgerald",
    citation: "The Crack-Up",
    year: 1936,
    tags: "Intelligence"
  },
  {
    quote: "I would rather be exposed to the inconveniencies attending too much liberty than those attending too small a degree of it.",
    source: "Thomas Jefferson",
    citation: "Letter to Archibald Stuart, December 23",
    year: 1791,
    tags: "Politics"
  },
  {
    quote: "Want of foresight, unwillingness to act when action would be simple and effective, lack of clear thinking, confusion of counsel until the emergency comes, until self-preservation strikes its jarring gong-these are the features which constitute the endless repetition of history.",
    source: "Sir Winston Churchill",
    citation: "Speech, House of Commons, May 2",
    year: 1935,
    tags: "History"
  },
  {
    quote: "Men are wise in proportion, not to their experience, but to their capacity for experience.",
    source: "James Boswell ",
    citation: "Life of Samuel Johnson",
    year: 1791,
    tags: "Wisdom"
  },
  {
    quote: "Better be ignorant of a matter than half know it",
    source: "Publilius Syrus",
    citation: "Maxims",
    year: "~100 BC",
    tags: "Wisdom"
  },
  {
    quote: "I have always found that mercy bears richer fruits than strict justice.",
    source: "Abraham Lincoln",
    citation: "Speech in Washington D.C.",
    year: 1865,
    tags: "Justice"
  },
  {
    quote: "Any sufficiently advanced technology is indistinguishable from magic.",
    source: "Arthur C. Clarke",
    citation: "Profiles of The Future",
    year: 1961,
    tags: "Technology"
  },
  {
    quote: "God invented whiskey to keep the Irish from ruling the world.",
    source: "Ed McMahon",
    citation: false,
    year: false,
    tags: "Humor"

  },
  {
    quote: "We cannot really love anybody with whom we never laugh.",
    source: "Agnes Repplier",
    citation: "Americans and Others",
    year: 1912,
    tags: "Life"
  },
  {
    quote: "The true traveler is he who goes on foot, and even then, he sits down a lot of the time.",
    source: "Colette",
    citation: "Paris From My Window",
    year: 1944,
    tags: "Life"
  },
  {
    quote: "Youth would be an ideal state if it came a little later in life.",
    source: "Herbert Henry Asquith",
    citation: false,
    year: false,
    tags: "Life"
  },
  {
    quote: "Giving money and power to government is like giving whiskey and car keys to teenage boys.",
    source: "P.J. O\'Rourke",
    citation: false,
    year: false,
    tags: "Humor"
  },
];

// The function below generates a random number and assigns it to the array 'quotes' above.

function getRandomQuote(quotes) {
  let total = Math.floor(Math.random() * quotes.length);
  for (let i = 0; i < quotes.length; i += total) {
    return quotes[total];
  }
}

console.log(getRandomQuote(quotes));

// The function below combines the parts of the  objects in the 'quotes' array.

function printQuote() {
  let total = getRandomQuote(quotes);
  let html = '';
  html += '<p class="quote">' + total.quote + '</p>';
  html += '<p class="source">' + total.source;

// The 'if' condition will only print citation and year if they are present.

    if (total.citation) {
      html += '<span class="citation">' + total.citation + '</span>';
    }
    if (total.year) {
      html += '<span class="year">' + total.year + '</span>';
    }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
