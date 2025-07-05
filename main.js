window.onload = () => {
  const token = localStorage.getItem("spotify_token");
  if (!token) {
    window.location.href = "index.html";
    return;
  }

  fetch("https://api.spotify.com/v1/me/top/tracks?limit=10", {
    headers: { Authorization: "Bearer " + token },
  })
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("track-list");
      data.items.forEach((track, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${track.name} - ${track.artists.map(a => a.name).join(", ")}`;
        list.appendChild(li);
      });
    });

  document.getElementById("logout-btn").onclick = () => {
    localStorage.removeItem("spotify_token");
    window.location.href = "index.html";
  };

  document.getElementById("download-btn").onclick = () => {
    window.print();
  };
};
