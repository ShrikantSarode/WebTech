const API_key = "oJV6f+7HZ8CtLrZmo2tv/w==RcxZvbCpPgAFqhh9";
// https://api.api-ninjas.com/v1/quotes?category=happiness

const heading = document.querySelector(".heading");
const searchBtn = document.querySelector("#btn");
const loader = document.querySelector("#loader");

async function nextQuote() {
    loader.style.display = "block";
  // Fetch the quote from the 'happiness' category
  const url = `https://api.api-ninjas.com/v1/quotes?category=happiness`;

  const response = await fetch(url, {
    method: "GET", // Use GET request method
    headers: {
      "X-Api-Key": API_key, // Include your API key in the request header
    },
  });

  const data = await response.json();

    loader.style.display = "none";
    
    console.log(data);

  heading.innerHTML = data[0].quote;
}

searchBtn.addEventListener("click", () => {
  nextQuote();
});
