const getImagen = async () => {
  try {
    const apiKey = "lD6RAnjfVNQnhrWgBQRrUUSvNixj8Wb6";
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const {
      data: {
        images: {
          original: { url },
        },
      },
    } = await response.json();
    // console.log(data?.images?.original.url);
    console.log(url);
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};
getImagen();
