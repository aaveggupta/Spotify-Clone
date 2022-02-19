// Endpoint -> a play where you send the user to perform all authentication stuff

export const authEndpoint = "https://accounts.spotify.com/authorize"; // Throw me to spotify
const redirectUri = "http://localhost:3000/"; // that we put in spotify dashboard, it bring back to our webpage

const clientID = "YOUR_CLIENT_ID";

// We have to know scopes to perform CRUD operation on spotify, these are the permissions to perform all of these
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// %20 = " " (space)
export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// Reduce is super powerful tool
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // #accessToken=adowieojadjsakfjskdljflks -> It splits this from =
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]); // decodeuri converts %20 to space and all such things
      return initial;
    }, {});
};
