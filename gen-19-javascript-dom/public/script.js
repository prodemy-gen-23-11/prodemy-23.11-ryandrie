function changeImage(element) {
    document.querySelector(".image-preview-option-selected").className =
        "image-preview-option";
    element.className = "image-preview-option-selected";

    // console.log(element.childNodes);

    const image = document.querySelector("#imagePreview");
    image.src = element.querySelector("img").src;
}

function changeSelectedSize(evt) {
    document.querySelector(".btn-size-option-selected").className =
        "btn-size-option";

    // event.srcElement.className = "btn-size-option-selected";
    evt.currentTarget.className = "btn-size-option-selected";
}

document.querySelector("#removeQuantity").addEventListener("click", () => {
    const val = document.querySelector("#quantityValue");
    val.innerHTML == 1 ? (val.innerHTML = 1) : val.innerHTML--;
});
document.querySelector("#addQuantity").addEventListener("click", () => {
    const val = document.querySelector("#quantityValue");
    val.innerHTML++;
});
