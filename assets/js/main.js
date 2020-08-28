document.querySelector("form").addEventListener("submit", function (e) {
  const number = document.querySelector("#numberOfJokes").value;
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;

  fetch(
    `https://api.icndb.com/jokes/random/${number}/limitTo=explicit?firstName=${firstName}&lastName=${lastName}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let output = "";
      data.value.forEach(function (joke) {
        output += `
            <ul>
                <li><h6 style="font-weight:bolder">${joke.joke}<h6></li>
            </ul>
            `;
      });
      document.querySelector("#space").innerHTML = output;
    })
    .catch(function (err) {
      let errHTML = `<h5 style="color:red">${err}<h5>`;
      document.querySelector("#space").innerHTML = errHTML;
    });

  e.preventDefault();
});
