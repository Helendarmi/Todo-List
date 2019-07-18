function markDone(){
    var todoUl = document.getElementById("myUL");
    var deetUl = document.getElementById("deetId");

    todoUl.addEventListener('click', function(e) {
        if (e.target.tagName == "LI") {
            var currentLiId = e.target.id;
            var element = document.getElementById(currentLiId);

            var doneLi = (document.createElement("li"));
            doneLi.appendChild(document.createTextNode(element.innerText));
            deetUl.appendChild(doneLi);
        }
    });
}