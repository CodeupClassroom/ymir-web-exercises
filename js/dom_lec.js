(function() {

    // explain importance of DOM manipulation
    // changing web content that does not need to redirect or refresh page
    //  e.g., SPAs

    // get a reference to box1 id using getElementById and log it
    const box1 = document.getElementById("box1");
    console.log(box1);
    box1.style.backgroundColor = "purple";
    box1.style.color = "yellow";
    console.log(box1.style);

    // play around with style

    // get a reference to both myBoxes using getElementsByClassName and log them
    const myBoxes = document.getElementsByClassName("myBox");
    console.log(myBoxes);
    for (let i = 0; i < myBoxes.length; i++) {
        myBoxes[i].style.color = "red";
    }
    // get a reference to both paragraphs using getElementsByTagName and log them
    // const myPs = document.getElementsByTagName("p");
    const myPs = document.querySelectorAll("p.kilroy-p");
    console.log(myPs);

    // SHOW document.querySelector and .querySelectorAll

    // get access to username by id and log it
    const userName = document.querySelector("#username");
    console.log(userName);
    console.log(userName.value);
    userName.value = "bobby";

    // get all the list items and log them
    const myLIs = document.querySelectorAll("#my-list li");
    console.log(myLIs);
    console.log(myLIs[1].innerText);
    console.log(myLIs[1].innerHTML);
    myLIs[1].innerHTML = "<b>Item 2</b>";

    // print out certain list item innerText or innerHTML
    // maybe change one of them

    // get access to the forms object and log it
    // log forms.login
    //  point out the 2 fields and the button that are children of it
    console.log(document.forms);
    console.log(document.forms.my_form[0]);

    // set the value property of the username field
    // explain difference between value and defaultValue

    // set the innerText property of box1
    //  try to bold the innerText

    // set the innerHTML property of box1
    // and try to bold it

    // has hasAttribute and getAttribute for value attribute for username and then submitButton
    console.log(userName.hasAttribute("value"));
    console.log(userName.getAttribute("value"));
    userName.defaultValue = "";
    console.log(userName.value);
    console.log(userName.defaultValue);

    // use setAttribute to set the value attribute for username
    userName.setAttribute("value", "hi there");
    console.log(userName.value);
    console.log(userName.defaultValue);

    // use getAttribute to get the classes for submitButton
    const btn = document.querySelector("#submitButton");
    console.log(btn.getAttribute("class"));

    // btn.setAttribute("class", "btn-danger");

    // use .classList instead
    console.log(btn.classList);
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-danger");

    // can use setAttribute to remove the classes for submitButton
    //  advise against using setAttribute to manipulate classes

    // element.classList.add("class-name");
    // https://ryfarlane.com/article/add-remove-class-vanilla-javascript#:~:text=Add%20class%20in%20vanilla%20JavaScript,on%20the%20element%20in%20JavaScript.

    // get the data-id attribute for username
    //  explain importance of data-id
    console.log(userName.getAttribute("data-id"));

    // get a ref to my-list
    const myList = document.querySelector("#my-list");

    // create a new list item Item 4
    const newLI = document.createElement("li");

    // set the classes of the new LI
    newLI.classList.add("list-group-item");

    // set the text of the new LI
    newLI.innerText = "Item 4";

    // append it to my-list
    myList.appendChild(newLI);

    // then get a ref to list-group-items
    // and remove the 2nd list group item from my-list

    const myListLIs = document.querySelectorAll("#my-list li");
    const li2 = myListLIs[1]; // 2nd li
    myList.removeChild(li2);

    // finally show the dom add over the top demo from venus
    // but don't dig into the code
    // just show them what cool stuff you can do without loading a different page

})();