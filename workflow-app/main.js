const nav = `<header class="navHeader">
      <a class="navTitle" href="/index.html">Work Flow</a>
      <nav>
        <div class="dropdown" hidden>
          <img src="/images/navbar-1.1s-200px.png" class="dropbtn" onclick="dropdown()" />
          <div class="dropdown-content" id="myDropdown">
            <a class="navAnchor" href="/forms/Create/createForm.html"
              >Create Order<span class="navPic"><img src="/images/create.png" /></span
            ></a>
            <a class="navAnchor" href="/forms/Admin/admin.html"
              >Admin Input<span class="navPic"><img src="/images/admin.png" /></span
            ></a>
            <a class="navAnchor" href="/forms/Service/service.html"
              >Service<span class="navPic"><img src="/images/service.png" /></span
            ></a>
            <a class="navAnchor" href="/forms/History/history.html"
              >History<span class="navPic"><img src="/images/history.png" /></span
            ></a>
          </div>
        </div>
        <ul class="navLinks">
          <li class="navList">
            <a class="navAnchor" href="/forms/History/history.html"
              >History<span class="navPic"><img src="/images/history.png" /></span
            ></a>
          </li>
          <li class="navList">
            <a class="navAnchor" href="/forms/Service/service.html"
              >Service<span class="navPic"><img src="/images/service.png" /></span
            ></a>
          </li>
          <li class="navList">
            <a class="navAnchor" href="/forms/Admin/admin.html"
              >Admin Input<span class="navPic"><img src="/images/admin.png" /></span
            ></a>
          </li>
          <li class="navList">
            <a class="navAnchor" href="/forms/Create/createForm.html"
              >Create Order<span class="navPic"><img src="/images/create.png" /></span
            ></a>
          </li>
        </ul>
      </nav>
    </header>`;

document.body.insertAdjacentHTML("afterbegin", nav);

const overlay = document.getElementById("overlay");

function openModal() {
  if (!sessionStorage.getItem("modalShown")) {
    modal.classList.add("active");
    overlay.classList.add("active");

    overlay.addEventListener("click", () => {
      const modals = document.querySelectorAll(".modal.active");
      modals.forEach((modal) => {
        closeModal(modal);
      });
    });

    sessionStorage.setItem("modalShown", "true");
  }
}

openModal();
