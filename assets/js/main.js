document.querySelector("form").addEventListener("submit", function (e) {
  const number = document.querySelector("#numberOfJokes").value;
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;

  const xmr = new XMLHttpRequest();

  xmr.open(
    "GET",
    `https://api.icndb.com/jokes/random/${number}/limitTo=explicit?firstName=${firstName}&lastName=${lastName}`,
    true
  );

  xmr.onload = function () {
    let output = "";
    let data = JSON.parse(this.responseText);
    data.value.forEach(function (joke) {
      output += `
        <ul>
            <li><h6 style="font-weight:bolder">${joke.joke}<h6></li>
        </ul>
        `;
    });
    document.querySelector("#space").innerHTML = output;
  };

  xmr.send();

  e.preventDefault();
});
