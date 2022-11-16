//SIDEBAR TOGGLE
// let name= window.prompt('enter your name');
// document.getElementById('name').innerHTML= name;
var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');

function openSidebar(){
    if(!sidebarOpen) {
        sidebar.classList.add('sidebar-responsive');
        sidebarOpen =true;
    }
}

function closedSidebar() {
    if(sidebar){
        sidebar/classList.remove('sidebar-responsive');
        sidebarOpen = false;
    }
}


