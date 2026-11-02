// Variables

const jokeContainer = document.getElementById("jokeContainer");
const quoteContainer = document.getElementById("quoteContainer");

// Fetches random joke

        export const getJoke = async () => {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            const data = await response.json();
            return data;
        }

// Displays joke

        export const displayJoke = async () => {
            try {
                jokeContainer.innerHTML = "Loading joke...";
                const joke = await getJoke();
                jokeContainer.innerHTML = 
                    `<p>${joke.setup}</p> 
                    <p>${joke.punchline}</p>`;
            }
            catch (error) {
                jokeContainer.innerHTML = `Unable to load joke.`;
            }
        }

// Gets the quote

        export const getQuote = async () => {
            const response = await fetch("https://dummyjson.com/quotes/random");
            const data = await response.json();
            return data;
        }

// Displays the quote

        export const displayQuote = async () => {
            try {
                quoteContainer.innerHTML = "Loading Quote...";
                const quote = await getQuote();
                quoteContainer.innerHTML = 
                    `<p>${quote.quote}</p>
                    <p>${quote.author}</p>`
            }
            catch (error) {
                quoteContainer.innerHTML = `Unable to load quote.`;
            }
        }