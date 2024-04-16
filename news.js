let inputSearch = document.getElementById("search");
let paras = document.querySelectorAll("p");
let searchbtn = document.getElementById("btnS");

searchbtn.addEventListener("click", () => {
  Swal.fire({
    title: "Search completed! Matching results are highlighted in green.",
    showClass: {
      popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
    },
    hideClass: {
      popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
    },
  });
  const searchText = inputSearch.value.toLowerCase();
  paras.forEach((para) => {
    const paraText = para.textContent.toLowerCase();
    if (paraText.includes(searchText)) {
      para.style.color = "green";
    } else {
      para.style.color = "red";
    }
  });
});
