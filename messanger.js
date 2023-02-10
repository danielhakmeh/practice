const inspirationalQuote = {
message: ['believe', 'future', 'success', 'perseverence', 'limits', 'courage', 'extraodinary'],
quote: ["Believe you can and you're halfway there. Theodore Roosevelt",
"The future belongs to those who believe in the beauty of their dreams.  Eleanor Roosevelt",
"Success is not final, failure is not fatal: it is the courage to continue that counts. Winston Churchill", "It does not matter how slowly you go as long as you do not stop. Confucius", "The only limit to our realization of tomorrow will be our doubts of today. Franklin D. Roosevelt",
"Don't watch the clock; do what it does. Keep going. Sam Levenson",
"The difference between ordinary and extraordinary is that little extra. Jimmy Johnson." ],

author: [ 'Theodore Roosevelt', 'Eleanor Roosevelt', 'Winston Churchill', 'Confucius', ' Franklin D. Roosevelt', 'Sam Levenson', 'Jimmy Johnson']
}
const todayQuote = object =>
{
  const values = inspirationalQuote['quote'];
  const randomIndex = Math.floor(Math.random() * values.length);
  const theQuote = inspirationalQuote['quote'][randomIndex];
  const  NoAuthorQuote = theQuote.split('.')[0];
  const authorName = inspirationalQuote['author'][randomIndex];
 const todayMessage = inspirationalQuote['message'][randomIndex];
  return ("Today message is about " + todayMessage.toUpperCase()
   +": The quote of the Day is: " +NoAuthorQuote + ". BY: " + authorName.toUpperCase() +"!");  
}
console.log(todayQuote(inspirationalQuote));

