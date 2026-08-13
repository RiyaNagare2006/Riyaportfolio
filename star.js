<script>

    const tabs = [
        "home",
        "about",
        "projects",
        "skills",
        "contact"
    ];

    let currentIndex = 0;

    // GET ELEMENTS

    const orbit =
        document.getElementById("orbit");

    const selectedCircle =
        document.getElementById("selectedCircle");

    const pages =
        document.querySelectorAll(".page");


    // MAIN FUNCTION

    function updateUI() {

        // UPDATE TEXT

        selectedCircle.innerText =
            tabs[currentIndex].toUpperCase();

        // HIDE ALL PAGES

        pages.forEach(page => {
            page.classList.remove("active");
        });

        // SHOW CURRENT PAGE

        document.getElementById(
            tabs[currentIndex]
        ).classList.add("active");

        // ROTATE ORBIT

        let angle = currentIndex * 72;

        orbit.style.transform =
            `rotate(${angle}deg)`;
    }


    // RIGHT ROTATION

    function rotateRight() {

        currentIndex++;

        if (currentIndex >= tabs.length) {
            currentIndex = 0;
        }

        updateUI();
    }


    // LEFT ROTATION

    function rotateLeft() {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = tabs.length - 1;
        }

        updateUI();
    }


    // INITIAL START

    updateUI();

</script>
