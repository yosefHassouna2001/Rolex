
let headerTop = document.querySelector("header");
let navbarToggler = document.querySelector(".navbar-toggler");
let navbarCollapse = document.querySelector(".navbar-collapse");
let navlinks = document.querySelectorAll(".nav-link");
let addCartBag = document.querySelectorAll("#addCartBag");//
let listProduct = document.querySelector(".offcanvas-body");//
let moonModeBtn = document.querySelector(".bi-moon")
let nav = document.querySelector("nav")
let navbarBrandImgAll = document.querySelectorAll(".navbar-brand img")
let numProduct = document.querySelector(".numProduct ");//

if (numProduct.innerHTML == 0) {
    numProduct.style.setProperty("display","none" );
  }

onscroll = _=>{
    if (scrollY > 0 ) {
        headerTop.style.backgroundColor = "var(--gray-light)";
        headerTop.style.boxShadow = "0 0 5px var(--gray)";
        
    } else {
        headerTop.style.backgroundColor = ""
        headerTop.style.boxShadow = "";
    }
}
navbarToggler.onclick = _=>{
    headerTop.style.backgroundColor = "var(--white)";
    navbarCollapse.classList.toggle("ms-5");
    // navlinks.forEach(link => {
    //     // link.classList.toggle("w-50");
    //     // link.classList.toggle("text-center");
    //     // link.classList.toggle("mx-auto");
    // });
}

addCartBag.forEach(addBtn => {
    addBtn.onclick = _=>{
        let ProductName = addBtn.parentElement.children[0].innerText
        let ProductPrice = addBtn.parentElement.children[1].children[0].innerText
        let ProductImgSrc = addBtn.parentElement.parentElement.children[1].src
        numProduct.style.setProperty("display","block" );
        let toastLiveExample = document.getElementById('liveToast')

        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
        numProduct.innerHTML++;
        listProduct.innerHTML  += 
        `
        <div class="row align-items-center border-bottom p-3 g-1">
            <div class="col-3 ">
                <img src="${ProductImgSrc}" alt="" class="img-fluid w-75">
            </div>
            <div class="col-5 ">
                <h5 class="card-title">${ProductName} </h5>
            </div>
            <div class="col-2 ">
                <h5 class="card-subtitle text-dark text-opacity-75">
                    $<span class="price">${ProductPrice}</span>
                </h5>
            </div>
            <div class="col-1 ps-3 ">
                <button type="button" class="removePro btn  btn-outline-danger "><i class="bi bi-dash-lg"></i></button>
            </div>
        </div>
        `
        let removePro = document.querySelectorAll(".removePro ");

        removePro.forEach(element => {
        element.onclick = _=>{
        element.parentElement.parentElement.outerHTML = "";
        numProduct.innerHTML--
        if (numProduct.innerHTML == 0) {
        numProduct.style.setProperty("display","none" );
        }
        }
        });
  
      
    }
    
});

// console.log(document.styleSheets[2].cssRules[1].style.cssText);
moonModeBtn.onclick = _=>{
    document.body.classList.toggle("dark")
    nav.classList.toggle("navbar-dark");
    navbarBrandImgAll[0].classList.toggle("d-none")
    navbarBrandImgAll[1].classList.toggle("d-none")
    moonModeBtn.classList.toggle("text-white");
    moonModeBtn.nextElementSibling.classList.toggle("text-white");
}

let up = document.querySelector(".up");
up.onclick=_=>{
    top:0
}
