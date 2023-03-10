const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayData(data.results));
};
loadUser();
const displayData = (result) => {
  console.log(result);
  const userContainer = document.getElementById("user-container");
  for (const user of result) {
    const userDiv = document.createElement("div");
    userDiv.classList.add("users");
    userDiv.innerHTML = `
    <img src="${user.picture.large}" alt="">
    <h3>${user.name.first}</h3>
    <h4>Email:- ${user.email}</h4>
    <h4>Location:- ${user.location.city}-${user.location.postcode}, ${user.location.country}</h4>
    `;
    userContainer.appendChild(userDiv);
  }
};
