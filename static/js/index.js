(function() {

    let drawer = document.querySelector(".drawer");
    let navArea = document.querySelector('.nav-area');
    let toggle = document.querySelector('.toggle-menu');
    let menu = document.querySelector('.menu-icon');
    const closeDrawer = () => {
      // drawer.open = false;
      drawer.classList.remove('show');
      drawer.classList.add('hide');
      menu.classList.remove('close-menu');
      navArea.style.pointerEvents = "none";
    };
    const openDrawer = () => {
      // drawer.open = true;
      drawer.classList.add('show');
      drawer.classList.remove('hide');
      menu.classList.add('close-menu');
      navArea.style.pointerEvents = "all";
    };
    const toggleDrawer = () => {
      if (drawer.classList.contains("show")) {
        closeDrawer();
      } else {
        openDrawer();
      }
    };

    toggle.addEventListener('click', () => {
      toggleDrawer();
    });

    navArea.addEventListener('click', (e) => {
      if (e.target === navArea) {
        e.preventDefault();
        if (drawer.classList.contains("show")) {
          closeDrawer();
        }
      }
    });

    let dismiss = document.querySelector('.dismiss');
    if (dismiss) {
      let article = document.querySelector('.dismissable');
      let uuid = dismiss.dataset["uuid"];
      let hasExist = window.localStorage.getItem(uuid);
      if (hasExist) {
        article.style.display = "none";
      }
      dismiss.onclick = (e) => {
        window.localStorage.setItem(uuid, true);
        article.style.display = "none";
      };

    }

  })();
