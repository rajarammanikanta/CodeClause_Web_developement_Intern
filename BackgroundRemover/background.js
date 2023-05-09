const removeBtn = document.querySelector("#remove-background");
const previewImg = document.querySelector("#image-preview");
const outputImg = document.querySelector("#output-image");

const apiKey = "zL2bEwE7Busq91sn5AM1qYWu"; // Replace with your own API key

removeBtn.addEventListener("click", function() {
  // Get the image data from the input
  const fileInput = document.querySelector("#image-file");
  const file = fileInput.files[0];
  if (!file) {
    alert("Please choose an image file.");
    return;
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function() {
    previewImg.src = reader.result;
    // Send image data to remove.bg API to remove the background
    const apiUrl = "https://api.remove.bg/v1.0/removebg";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", apiUrl, true);
    xhr.setRequestHeader("X-API-Key", apiKey);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Update the output image with the new image data
        const url = URL.createObjectURL(xhr.response);
        outputImg.src = url;
      }
    };
    xhr.onerror = function() {
      console.log("Error processing request.");
    };
    xhr.responseType = "blob";
    const formData = new FormData();
    formData.append("image_file", file);
    xhr.send(formData);
  };
});
