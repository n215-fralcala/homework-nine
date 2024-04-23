import {loadPage, mixWords} from "../model/model.js";

function changeRoute () {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    console.log(hashTag + " " + pageID);
    loadPage(pageID);
}


function initURLListeners() {
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function () {
    initURLListeners();
});
