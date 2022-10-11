export const getBooks = async () => {
  const res = await fetch("http://195.248.240.46/book/");
  const books = await res.json();
  const listElement = document.querySelector("#list");

  books.forEach((book) => {
    const p = document.createElement("div");
    p.innerHTML = book.title;
    listElement.appendChild(p);
  });
};

export const createAuthor = async () => {
  let username = "arvin";
  let password = "WebUser1400!";

  let body = { first_name: "Sama", last_name: "Pez" };

  const res = await fetch("http://195.248.240.46/author/", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(username + ":" + password),
    },
  });

  if (res.ok) {
  }

  const listElement = document.querySelector("#list");
  listElement.innerHTML = "";
  getAuthors();
};

export const getAuthors = async () => {
  const res = await fetch("http://195.248.240.46/author/");
  const books = await res.json();
  const listElement = document.querySelector("#list");

  books.forEach((book) => {
    const p = document.createElement("div");
    p.innerHTML = book.first_name;
    listElement.appendChild(p);
  });
};
