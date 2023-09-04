var bookmarkNameInput = document.querySelector("#bookmarkName");
var urlInput = document.querySelector("#URL");
var btnSubmit = document.querySelector("#btnSubmit");
var sitesContainer = document.querySelector(".sites-container");
var bookmarkNameAlert = document.querySelector("#bookmark-name-alert");
var urlAlert = document.querySelector("#url-alert");
var favoritesContainer = [];

function clearForm(){
    bookmarkNameInput.value = "";
    urlInput.value = "";
    bookmarkNameInput.classList.remove("is-valid");
    urlInput.classList.remove("is-valid");
};

function addSite(){
    if(validateSiteName() == true && validateSiteUrl() == true){
        var website = {
            name: bookmarkNameInput.value,
            url: urlInput.value
        };
        favoritesContainer.push(website);
        clearForm();
        displySites(favoritesContainer);
    };
};

function displySites(siteslist){
    var container = ``;
    for(var i = 0; i<siteslist.length; i++){
        container += `<div class="bg-secondary bg-opacity-25 px-3 my-2">
        <h3 class="my-5 me-5 d-inline">${siteslist[i].name}</h3>
        <a class="btn btn-info m-3" href="https://${siteslist[i].url}/" target="_blank">Visit</a>
        <button class="btn btn-danger my-3" onclick="deleteSite(${i})">Delete</button>
    </div>`
    };
    sitesContainer.innerHTML = container;
};

btnSubmit.addEventListener("click", function(){
    addSite();
});

function deleteSite(deletedSite){
    favoritesContainer.splice(deletedSite,1);
    displySites(favoritesContainer);
};

function validateSiteName(){
    var regex = /^[A-Z][a-z]{3,8}$/
    if(regex.test(bookmarkNameInput.value) == true){
        bookmarkNameAlert.classList.remove("d-block");
        bookmarkNameAlert.classList.add("d-none");
        bookmarkNameInput.classList.remove("is-invalid");
        bookmarkNameInput.classList.add("is-valid");
        return true;
    }else{
        bookmarkNameAlert.classList.remove("d-none");
        bookmarkNameAlert.classList.add("d-block");
        bookmarkNameInput.classList.remove("is-valid");
        bookmarkNameInput.classList.add("is-invalid");
        return false;
    };
};

function validateSiteUrl(){
    var regex = /^[a-z]{3,8}\.(com|net)$/
    if(regex.test(urlInput.value) != ""){
        urlAlert.classList.remove("d-block");
        urlAlert.classList.add("d-none");
        urlInput.classList.remove("is-invalid");
        urlInput.classList.add("is-valid");
        return true;
    }else{
        urlAlert.classList.remove("d-none");
        urlAlert.classList.add("d-block");
        urlInput.classList.remove("is-valid");
        urlInput.classList.add("is-invalid");
        return false;
    };
};
