const loadMeal = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeal(data.meals));
};

const displayMeal = (meals) => {
  const maelContainer = document.getElementById("meal-container");
  maelContainer.innerText = "";
  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
    <div onclick="loadDetails(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="" />
        <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        </div>
    </div>
    `;
    maelContainer.appendChild(mealDiv);
  });
};

const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadMeal(searchText);
  searchField.value = "";
};

const loadDetails = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.meals[0]));
};

const displayDetails = (meal) => {
  const detaileContainer = document.getElementById("meal-details");
  detaileContainer.innerText = "";
  const mealDiv = document.createElement("div");
  mealDiv.classList.add("col");
  mealDiv.innerHTML = `
  <div class="card">
     <img src="${meal.strMealThumb}" class="card-img-top" alt="" />
     <div class="card-body">
     <h5 class="card-title">${meal.strMeal}</h5>
     <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
     </div>     
  </div>
  `;
  detaileContainer.appendChild(mealDiv);
};

loadMeal("a");
