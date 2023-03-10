const handleButton = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayData(data));
};

const displayData = (quote) => {
  const quoteData = document.getElementById("quote-container");
  quoteData.classList.add("quote");
  quoteData.innerText = quote.quote;
};
