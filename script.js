
const cloudName = "dl98llin0";
const uploadPreset = "webupload";

function uploadImages() {
  const files = document.getElementById("fileInput").files;
  for (let i=0; i<files.length; i++) {
    let formData = new FormData();
    formData.append("file", files[i]);
    formData.append("upload_preset", uploadPreset);

    fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData
    })
    .then(r => r.json())
    .then(d => {
        let img = document.createElement("img");
        img.src = d.secure_url;
        document.getElementById("gallery").appendChild(img);
    });
  }
}
