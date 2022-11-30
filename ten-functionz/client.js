"use strict";

// projectName and projectEditLink
let projectName = location.host.substring(0, location.host.indexOf("."));
let editSolutionsUrl = "https://glitch.com/edit/#!/"+ projectName + "?path=solutions.js";
document.getElementById("solutions-edit-link").href = editSolutionsUrl;