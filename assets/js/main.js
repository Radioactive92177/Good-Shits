// Calling API with Async and await
async function getShits(number, firstName, lastName) {
  const response = await fetch(
    `https://api.icndb.com/jokes/random/${number}/limitTo=explicit?firstName=${firstName}&lastName=${lastName}`
  );
  const resposeData = await response.json();
  return resposeData;
}

document.querySelector("form").addEventListener("submit", function (e) {
  const number = document.querySelector("#numberOfJokes").value;
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;

  // API call
  const shits = getShits(number, firstName, lastName);

  // Showing the data
  shits.then((data) => {
    let output = "";
    data.value.forEach((shit) => {
      output += `
        <ul>
          <li><h6 style="font-weight:bolder">${shit.joke}</h6></li>
        </ul>
      `;
    });
    document.querySelector("#space").innerHTML = output;
  });

  // Catching the error
  shits.catch((err) => {
    let errHTML = `<h5 style="color:red">${err}<h5>`;
    document.querySelector("#space").innerHTML = errHTML;
  });

  // Stopping from flashing the data
  e.preventDefault();
});
