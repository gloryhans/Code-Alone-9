// Use this function to get an image source out of the the image upload box.
function getImageFromUpload(){
    let image = document.querySelector("#imageUpload").files[0];
    return URL.createObjectURL(image);
}

// Username live preview
document.querySelector("#username").addEventListener("input", function () {
  const username = this.value;
  const previewUsername = document.querySelector(".profile-name");

  previewUsername.textContent = username || "User Name";
});


// Post text live preview
document.querySelector("#postText").addEventListener("input", function () {
  const text = this.value;
  const previewText = document.querySelector(".post-text");

  if (text.trim() === "") {
    previewText.textContent = "Your post will show here...";
  } else {
    previewText.textContent = text;
  }
});


// Image upload preview
document.querySelector("#imageUpload").addEventListener("change", function () {
  const previewImage = document.querySelector("#previewImage");

  if (this.files.length > 0) {
    previewImage.src = getImageFromUpload();
  }
});


// Image style selection
document.querySelector("#imageStyle").addEventListener("change", function () {
  const previewImage = document.querySelector("#previewImage");

  const style = this.value;

  // Always keep base class + selected style
  previewImage.className = `post-image ${style}`;
});