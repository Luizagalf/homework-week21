onSearch = () => {
    let getImg = document.getElementById("imgSearch").value;
    fetch("https://api.giphy.com/v1/gifs/search?api_key=NJKq4zZxfERGuaQGxf4ae2ICKIG6Wcg7&q=" + getImg + "&limit=5&offset=0&rating=g&lang=en/")
    .then(Response => Response.json())
    .then(img => {
        document.getElementById("gif").innerHTML = "";
            for (let i = 0; i < img.data.length; i++) {
            document.getElementById("gif").innerHTML += `<div align="center"><img src="${img.data[i].images.downsized.url}"></div><br>`;
        }
        document.getElementById("gif").innerHTML;
    })
    .catch(error => console.log(error));
}
