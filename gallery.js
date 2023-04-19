function showModal(imgContainer) {
  let modal = document.getElementById("modal");
  let modalImg = document.getElementById("modalImg");
  let img = imgContainer.getElementsByTagName("img")[0];
  modal.style.display = "flex";
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
  modal.style.transition = "all 0.5s ease-in-out";
  modal.style.height = "100%";
  modal.style.width = "100%";
  modalImg.src = img.src;
}

function hideModal() {
  let modal = document.getElementById("modal");
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
  modal.style.height = "0%";
  modal.style.width = "0%";
  modal.style.transition = "all 0.5s ease-in-out";
}

function HandleClick() {
  let imgContainers = document.getElementsByClassName("child");
  for (let i = 0; i < imgContainers.length; i++) {
    imgContainers[i].addEventListener("click", function () {
      showModal(this);
    });
  }
  let modal = document.getElementById("modal");
  modal.addEventListener("click", function () {
    hideModal();
  });

  let modalContent = modal.getElementsByClassName("modal-content")[0];
  modalContent.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}
// function stopPropagation(e) {
//     e.stopPropagation();
// }

window.onload = HandleClick;
