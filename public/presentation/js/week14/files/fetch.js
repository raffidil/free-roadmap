let username = "arvin";
let password = "WebUser1400!";

export const createAuthor = async () => {
  let first_name = document.querySelector("#first_name").value;
  let last_name = document.querySelector("#last_name").value;
  let body = { first_name, last_name };

  const res = await fetch("http://195.248.240.46/author/", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(username + ":" + password),
    },
  });

  if (!res.ok) {
    return;
  }

  const listElement = document.querySelector("#list");
  listElement.innerHTML = "";
  getAuthors();
  first_name = document.querySelector("#first_name").value = "";
  last_name = document.querySelector("#last_name").value = "";
};

const deleteAuthor = async (author) => {
  const res = await fetch(author.url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(username + ":" + password),
    },
  });
  getAuthors();
};

export const getAuthors = async () => {
  const res = await fetch("http://195.248.240.46/author/");
  const authors = await res.json();
  const listElement = document.querySelector("#list");
  const select = document.querySelector("#authors");

  listElement.innerHTML = "";
  select.innerHTML = "";
  authors.forEach((author) => {
    const option = document.createElement("option");
    option.value = author.url;
    option.innerText = author.first_name;
    select.appendChild(option);

    const el = document.createElement("li");
    el.innerHTML = `${author.first_name} ${author.last_name}`;
    listElement.appendChild(el);
    const span = document.createElement("button");
    span.innerText = "Delete";
    el.appendChild(span);
    span.addEventListener("click", () => {
      deleteAuthor(author);
    });
  });
};
