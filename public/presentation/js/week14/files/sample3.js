const displayAuthors = (authors) => {
  let authorsList = document.querySelector("ol.authors");
  authorsList.innerHTML = "";

  let authorsSelect = document.querySelector("select.authors");
  authorsSelect.innerHTML = "";

  authors.forEach((author) => {
    let authorsList = document.querySelector("ol.authors");
    let el = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click", () => {
      fetch(author.url, { method: "DELETE" })
        .then(checkStatus)
        .then(getAuthors);
    });

    el.innerText = `${author.first_name} ${author.last_name}`;
    el.append(button);
    authorsList.append(el);
  });

  authors.forEach((author) => {
    let authorsList = document.querySelector("select.authors");
    let el = document.createElement("option");
    el.innerText = author.first_name;
    el.setAttribute("value", author.url);
    authorsList.append(el);
  });
};

const checkStatus = (response) => {
  const error = document.querySelector("#error");
  if (!response.ok) {
    error.innerHTML = "Something went wrong!";
  } else {
    error.innerHTML = "Successfully done!";
  }
  return response;
};

const deleteSelectedAuthor = () => {
  let authorsList = document.querySelector("select.authors");
  const url = authorsList.value;
  fetch(url, { method: "DELETE" })
    .then(checkStatus)
    .then((r) => r.json())
    .then(getAuthors);
};

const getAuthors = () => {
  fetch("http://195.248.240.46/author/")
    .then((r) => r.json())
    .then(displayAuthors);
};

getAuthors();
