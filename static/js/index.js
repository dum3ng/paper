(function(){
let $ = document.querySelector.bind(document);
let recentsTab = $("#recents-tab");
let updatesTab = $("#updates-tab");
let tab0 = $("#recents");
let tab1 = $("#updates");

let changeTab = (e) => {
    switch(e.target){
        case recentsTab: {
            recentsTab.classList.add('active');
            updatesTab.classList.remove('active');

            tab0.style.display = "block";
            tab1.style.display = "none";
            break;
        }
        case updatesTab: {
            recentsTab.classList.remove('active');
            updatesTab.classList.add('active');

            tab1.style.display = "block";
            tab0.style.display = "none";
            break;
        }
    }
}
recentsTab.onclick = changeTab;
updatesTab.onclick = changeTab;

})();