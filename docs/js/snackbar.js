
// Snackbars
const leadingSnackbarBtn = document.getElementById("leading-snackbar-btn");
const baselineSnackbarBtn = document.getElementById("baseline-snackbar-btn");
const trailingSnackbarBtn = document.getElementById("trailing-snackbar-btn");
const snackCloseBtn = document.querySelectorAll(".snack-close");

const leadingSnackbar = document.getElementById("leading-snackbar");
const baselineSnackbar = document.getElementById("baseline-snackbar");
const trailingSnackbar = document.getElementById("trailing-snackbar");

baselineSnackbarBtn.addEventListener('click', () => showSnackbar(baselineSnackbar));
leadingSnackbarBtn.addEventListener('click', () => showSnackbar(leadingSnackbar));
trailingSnackbarBtn.addEventListener('click', () => showSnackbar(trailingSnackbar));

snackCloseBtn.forEach((closeBtn) => {
    closeBtn.addEventListener("click", (e) => {
        let parent = closeBtn.parentElement.parentElement.id;
        console.log(parent.split('-')[0]);
        switch (parent.split('-')[0]) {
            case "baseline":
                baselineSnackbar.style.display = "none";
                break;
            case "leading":
                leadingSnackbar.style.display = "none";
                break;
            case "trailing":
                trailingSnackbar.style.display = "none";
                break;
        }
    });
});


const showSnackbar = id => {
    id.style.display = 'flex';

    setTimeout(() => {
        id.style.display = 'none';
    }, 2000);
}
