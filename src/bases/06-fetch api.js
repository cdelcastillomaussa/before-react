const apiKey = "lD6RAnjfVNQnhrWgBQRrUUSvNixj8Wb6";

const Getgiphy = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);
Getgiphy.then((res) => res.json())
  .then(({ data }) => {
    const { url } = data?.images?.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch((error) => console.error(error));
