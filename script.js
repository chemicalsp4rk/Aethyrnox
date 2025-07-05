const clientId = "489e0479f85e42548d4dcaddcd0d3dfb";
const redirectUri = "https://chemicalsp4rk.github.io/Aethyrnox/";
const scopes = "user-top-read";

window.onload = () => {
  const hash = window.location.hash;
  let token = null;

  if (hash) {
    const params = new URLSearchParams(hash.substring(1));
    token = params.get("access_token");
    window.history.pushState("", document.title, window.location.pathname);
    if (token) {
      localStorage.setItem("spotify_token", token);
      window.location.href = "https://aethyrnox-backend.vercel.app/api/login"
    }
  }
};
