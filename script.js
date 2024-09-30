let ham = document.querySelector("#ham");
let sidebar = document.querySelector(".sidebar");
let toggle = 1;

ham.addEventListener('click', () => {
    if (toggle === 1) {
        ham.classList.add('ham-prop');
        sidebar.classList.add('sideprop');
        toggle = 0;
    } else {
        ham.classList.remove('ham-prop');
        sidebar.classList.remove('sideprop'); // Add this to remove the sidebar properties
        toggle = 1;
    }
});


let smallIndex = 0;
showsmalls();

function showsmalls() {
    let i;
    let smalls = document.getElementsByClassName("small");
    for (i = 0; i < smalls.length; i++) {
        smalls[i].style.display = "none";
    }
    smallIndex++;
    if (smallIndex > smalls.length) { smallIndex = 1 }
    smalls[smallIndex - 1].style.display = "block";
    setTimeout(showsmalls, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
    const ham = document.getElementById('ham');
    const sidebar = document.querySelector('.sidebar');
    let toggle = 1;

    // Function to handle menu state toggle
    function toggleMenu() {
        if (toggle === 1) {
            ham.classList.add('ham-prop');
            sidebar.classList.add('sideprop');
            toggle = 0;
        } else {
            ham.classList.remove('ham-prop');
            sidebar.classList.remove('sideprop');
            toggle = 1;
        }
    }


    ham.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMenu();
    });

    // Handle hover events
    ham.addEventListener('mouseover', () => {
        if (toggle === 1) { // Only open on hover if the menu is closed
            toggleMenu();
        }
    });


    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !ham.contains(event.target)) {
            // Close the sidebar if the click was outside
            if (toggle === 0) {
                toggleMenu();
            }
        }
    });
});
