const openModalHandler = (e) => {
  if (!dialogCanBeOpened) {
    return;
  }
  document.dispatchEvent(new Event("canPause"));
  document.querySelector("#" + e.detail).showModal();
  // resumeBtns.forEach(bton => btn.focus())
};

const resumeGame = () => {
  dialogCanBeOpened = false;
  dialogs.forEach((dialog) => dialog.close());
  const resumeEvent = new Event("resume");
  document.dispatchEvent(resumeEvent);
  setTimeout(() => {
    dialogCanBeOpened = true;
  }, 1000);
};

let dialogCanBeOpened = true;

const dialogs = document.querySelectorAll("dialog");
const resumeBtns = document.querySelectorAll(".resume-btn");

document.addEventListener("openModal", openModalHandler);
document.querySelector("#configurator").showModal();
resumeBtns.forEach((btn) => btn.addEventListener("click", resumeGame));