/* ============================== typing animation ============================ */
var typed = new Typed(".typing", {
    strings: ["", "Web Designer","Data Analyst", "Software Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
/* ============================== Aside ============================ */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}


// skills dropdown js

document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll(".list-item");

    items.forEach(function (item) {
        item.addEventListener("click", function () {
            var sublist = this.nextElementSibling;
            var arrow = this.querySelector(".arrow");

            // Close all other sublists
            document.querySelectorAll(".sublist").forEach(function (otherSublist) {
                if (otherSublist !== sublist) {
                    otherSublist.style.maxHeight = null;
                    var otherArrow = otherSublist.previousElementSibling.querySelector(".arrow");
                    otherArrow.style.transform = "rotate(0deg)";
                }
            });

            // Toggle the clicked sublist
            if (sublist.style.maxHeight) {
                sublist.style.maxHeight = null;
                arrow.style.transform = "rotate(0deg)";
            } else {
                sublist.style.maxHeight = sublist.scrollHeight + "px";
                arrow.style.transform = "rotate(90deg)";
            }
        });
    });
});


function openPhoto(photoElement) {
    const imgSrc = photoElement.querySelector('img').src;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
}

function closePhoto() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function openPhotox(photoElement) {
    const imgSrc = photoElement.querySelector('img').src;
    const lightbox = document.getElementById('lightboxx');
    const lightboxImg = document.getElementById('lightbox-imgx');

    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
}

function closePhotox() {
    const lightbox = document.getElementById('lightboxx');
    lightbox.style.display = 'none';
}


$(".card-toggle").on("click", function () {

    // Card toggle state 	
    $(".card-toggle").removeClass("active");
    $(this).addClass("active");

    var isAnimating = false;

    if (!isAnimating) {
        isAnimating = true;

        $(".card").find(".card-content").css("z-index", 0);
        $(".card").removeClass("active");

        var that = $(this);

        $(this).siblings().css("z-index", 1);

        setTimeout(function () {
            that.parent().toggleClass("active").find(".card-content").on("transitionend", function () {
                isAnimating = false;
            });;

        }, 10);
    } else {
        return;
    }
});

$("input,textarea").blur(function () {
    if ($(this).val()) {
        $(this).parent().addClass("filled");
    } else {
        $(this).parent().removeClass("filled");
    }
});

$(".contact").on("click", function () {
    $(".contact-form").toggleClass("active");
});
$(".contact-form input[type=submit], .contact-form .close").on("click", function (e) {
    e.preventDefault();
    $(".contact-form").toggleClass("active")
});

// my added

// // Function to remove the 'removethis' div and all its contents
// function removeLightboxDiv() {
//     // Select the div with the class 'removethis'
//     var lightboxDiv = document.querySelector('.removethis');

//     // Check if the div exists
//     if (lightboxDiv) {
//         // Remove the div along with all its child elements from the DOM
//         lightboxDiv.remove();
//     }
// }

// // Add event listener to the link that navigates to the #portfolio page
// document.querySelector('a[href="#portfolio"]').addEventListener('click', function () {
//     removeLightboxDiv(); // Call the function to remove the div and its contents
// });


// function removeSection() {
//     var element = document.getElementById("remove-section");
//     if (element) {
//         element.remove(); // Removes the section from the DOM
//     }
// }


//  working start

// function removeSection() {
//     var element = document.getElementById("remove-section");
//     if (element) {
//         element.remove(); // Removes the section from the DOM
//     }
// }



// working end 



