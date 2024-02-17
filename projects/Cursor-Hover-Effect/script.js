document.body.style.cursor = "none";

let cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

let follow = document.createElement("div");
follow.classList.add("follow");
document.body.appendChild(follow);

function move(obj, event) {
    obj.style = "";
    obj.style.top = event.clientY + "px";
    obj.style.left = event.clientX + "px";
}

if (cursor) {
    window.addEventListener("mousemove", function(event) {
        if (event.target.tagName === "A") { 
            cursor.style.backgroundColor = "transparent";

            follow.style.top = event.target.offsetTop + "px";
            follow.style.left = event.target.offsetLeft + "px";
            follow.style.width = event.target.clientWidth + "px";
            follow.style.height = event.target.clientHeight + "px";
            follow.dataset.hoverText = event.target.dataset.hoverText;

            follow.classList.add("on-focus");
        } else {
            move(cursor, event);
            move(follow, event);
            follow.classList.remove("on-focus");
        }
    })
}
