/***************************************************/
/* Insert Navbar */
/**************************************************/
function loadNavbar() {
    let navbar = document.createElement("div");
    document.body.insertBefore(navbar, document.body.firstChild);

    let xHR_nav = new XMLHttpRequest();
    xHR_nav.open("GET", "./navbar.xml");
    xHR_nav.onreadystatechange = function () {
        navbar.innerHTML = xHR_nav.responseText;
    };
    xHR_nav.send();
}
document.body.onload = loadNavbar;

/***************************************************/
/* Dropdown Menu */
/**************************************************/
waitForElementToDisplay(
    "#dropbtn",
    function () {
        var modal = document.getElementById("dropdown-content");
        var btn = document.getElementById("dropbtn");
        var span = document.getElementsByClassName("close")[0];

        // Open the modal
        btn.onclick = function () {
            modal.style.display = "block";
        };

        // Close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };

        // When users click anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    },
    1000,
    10000
);

// Function founded on Stack Overflow
function waitForElementToDisplay(
    selector,
    callback,
    checkFrequencyInMs,
    timeoutInMs
) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
        if (document.querySelector(selector) != null) {
            callback();
            return;
        } else {
            setTimeout(function () {
                if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
                    return;
                loopSearch();
            }, checkFrequencyInMs);
        }
    })();
}

/***************************************************/
/* Navigate to Project page */
/**************************************************/
function sendSlideInfo(index) {
    if (window.screen.width <= 500) {
        localStorage.setItem("slideIndex", 3);

        return;
    }
    localStorage.setItem("slideIndex", index);
}
