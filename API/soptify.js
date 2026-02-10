async function getdata(albumId, token) {
  const response = await fetch(
    `https://api.spotify.com/v1/albums/${albumId}`,
    {
      headers: {
        Authorization: "Bearer " + token
      }
    }
  );

  const data = await response.json();

  return {
    album: data.name,
    artist: data.artists[0].name,
    image: data.images[0].url,
    release: data.release_date
  };
}

// Usage
getdata("0tGPJ0bkWOUmH7MEOR77qc", "YOUR_ACCESS_TOKEN")
  .then(result => console.log(result));
