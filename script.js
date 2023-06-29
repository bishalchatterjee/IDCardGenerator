function generateCard() {
    const nameElement = document.getElementById("name");
    const nameValue = nameElement.value;
    const cardNameElement = document.getElementById("cardName");
    cardNameElement.textContent = nameValue;

    const collegeNameValue = document.getElementById("collegeName").value;
    document.getElementById("cardCollegeName").textContent = collegeNameValue;

    const locationValue = document.getElementById("location").value;
    document.getElementById("cardLocation").textContent = locationValue;

    const photoUpload = document.getElementById("photoUpload");
    const photoFile = photoUpload.files[0];

    if (photoFile) {
        const photoReader = new FileReader();
        photoReader.onload = function(e) {
            const userPhoto = document.getElementById("userPhoto");
            userPhoto.style.backgroundImage = `url('${e.target.result}')`;
        };
        photoReader.readAsDataURL(photoFile);
    } else {
        const userPhoto = document.getElementById("userPhoto");
        userPhoto.style.backgroundImage = "none";
    }

    document.getElementById("collegeCard").style.display = "block";
}


function previewPhoto(event) {
    const photoUpload = event.target;
    const photoPreview = document.getElementById("photoPreview");

    if (photoUpload.files && photoUpload.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            photoPreview.src = e.target.result;
        };
        reader.readAsDataURL(photoUpload.files[0]);
        photoPreview.style.display = "block";
    } else {
        photoPreview.src = "#";
        photoPreview.style.display = "none";
    }
}

