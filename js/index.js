const githubForm = document.getElementById("github-form");
githubForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const search = document.querySelector("#search");
  const userName = search.value;

  fetch(`https://api.github.com/search/users?q=${userName}`)
    .then((response) => response.json())
    .then((data) => {
      const users = data.items;

      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const username = user.login;
        const avatarUrl = user.avatar_url;
        const profileUrl = user.html_url;

        const userList = document.querySelector("#user-list");
        const name = document.createElement("li");
        name.textContent = username;
        userList.appendChild(name);

        const image = document.createElement("img");
        image.src = avatarUrl;
        userList.appendChild(image);

        const profileURL = document.createElement("a");
        profileURL.textContent = profileUrl;
        userList.appendChild(profileURL);
      }
    });
});
