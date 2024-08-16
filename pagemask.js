function dragListener(event) {
    var target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

    event.stopPropagation();
    event.preventDefault();
}

function resizeListener (event) {
    var target = event.target;
    var x = (parseFloat(target.getAttribute('data-x')) || 0);
    var y = (parseFloat(target.getAttribute('data-y')) || 0);

    // update the element's style
    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

    event.stopPropagation();
    event.preventDefault();
}

function pagemask () {
    const div = document.createElement("div");
    div.setAttribute("style",
        "touch-action:none;" +
        "user-select:none;" +
        "box-sizing:border-box;" +
        "width:500px;" +
        "height:400px;" +
        "border:5px solid gray;" +
        "background-color:black;" +
        "position:absolute;" +
        "top:150px;" +
        "left:150px;" +
        "z-index:99999"
    );

    interact(div)
    .draggable({
        listeners: {
            move: dragListener
        }
    })
    .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        listeners: {
            move: resizeListener
        }
    });

    document.body.appendChild(div);
}

function loadinteract() {
    const s = document.createElement("script");

    s.src="//cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js";
    s.onload = s.onreadystatechange = function () {
        var state = this.readyState;
        state && "loaded" !== state && "complete" !== state || pagemask()
    }
    document.getElementsByTagName("head")[0].appendChild(s)
};

loadinteract();
