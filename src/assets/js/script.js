
// highlight the clicked item of navigator bar
function activeNavMenu(itemID) {
    const navMenu = document.getElementById("navMenu");
    const navMenus = navMenu.getElementsByTagName("a");

    for (let i = 0; i < navMenus.length; i++) {
        navMenus[i].className = navMenus[i].className.replace(" active", "");
        if (navMenus[i].id == itemID) {
            navMenus[i].classList.add = " active";
        }
    }    
}

//used by newevent.pug to auto-set enddate value same with startdate
function setEndDate() {
    let startDate = document.getElementById('startdate')
    let endDate = document.getElementById('enddate')

    if (endDate.value === '') {
        endDate.value = startDate.value
    }
}