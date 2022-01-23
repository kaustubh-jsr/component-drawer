let drawerBasicNavLinks = document.querySelectorAll(".drawer-basic__nav-link");
let drawerPermanentNavLinks = document.querySelectorAll(".drawer-permanent__nav-link");
let drawerDismissibleNavLinks = document.querySelectorAll(".drawer-dismissible__nav-link");
let dismissBtn = document.getElementById('toggle-drawer');

drawerBasicNavLinks[0].focus()

function handleNavLinkClick(e){
    let link = e.target
    for(let link of document.querySelectorAll(".drawer__nav-link--activated")){
        link.classList.remove("drawer__nav-link--activated")
    }
    if(link.nodeName.toLowerCase() === "a"){
        // this activated class ensures that even when the 
        // nav link is out of focus due to clicking elsewhere onscreen
        // the selection styles/blue color etc. are still applied there
    link.classList.add("drawer__nav-link--activated")
    link.focus()
    }else{
    //     in case the inner span with icons or text are clicked, 
    //     activate the parent anchor
        link.parentElement.classList.add("drawer__nav-link--activated")
        link.focus()
    }
}

for(let link of drawerBasicNavLinks){
    link.addEventListener("click",handleNavLinkClick)
}
for(let link of drawerPermanentNavLinks){
    link.addEventListener("click",handleNavLinkClick)
}
for(let link of drawerDismissibleNavLinks){
    link.addEventListener("click",handleNavLinkClick)
}
dismissBtn.addEventListener("click",()=>{
    document.querySelector('.drawer-dismissible').classList.toggle('dismissed')
})