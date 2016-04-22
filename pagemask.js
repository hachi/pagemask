void function ($) {
    var pagemask = function ($) {
        var dragMoveListener = function (event) {
            console.log("Drag Move Listener Event");
            var target = event.target,
                // keep the dragged position in the data-x/data-y attributes
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            // translate the element
            target.style.webkitTransform =
            target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';

            // update the posiion attributes
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        };

        var div = $("<div class='draggable' style='width:500px;height:400px; border:5px solid black;  background-color:black; position:absolute; top: 150px; left:150px; z-index:99999'></div>");
        var divi = interact('.draggable');

        divi.draggable({
            onmove: dragMoveListener
        });

        divi.resizable({
            edges: { left: true, right: true, bottom: true, top: true }
        });

        divi.on('resizemove', function (event) {
            console.log("Resize Move Event");
            var target = event.target;
                x = (parseFloat(target.getAttribute('data-x')) || 0),
                y = (parseFloat(target.getAttribute('data-y')) || 0);

            // update the element's style
            target.style.width  = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';

            // translate when resizing from top or left edges
            x += event.deltaRect.left;
            y += event.deltaRect.top;

            target.style.webkitTransform = target.style.transform =
                'translate(' + x + 'px,' + y + 'px)';

            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        });

        div.appendTo("body");
    };

    var loadinteract = function ($) {
        var s=document.createElement("script");
        s.src="//cdn.jsdelivr.net/interact.js/1.2.6/interact.min.js";
        s.onload=s.onreadystatechange=function () {
            var state=this.readyState;
            state && "loaded" !== state && "complete" !== state || pagemask($)
        }
        document.getElementsByTagName("head")[0].appendChild(s)
    };

    var loadjsquery = function ($) {
        var hasJQuery = $ && $.fn && parseFloat($.fn.jquery) >= 1.7;
        if (hasJQuery)
            loadinteract($);
        else {
            var s=document.createElement("script");
            s.src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.js";
            s.onload = s.onreadystatechange = function () {
                var state=this.readyState;
                state && "loaded" !== state && "complete" !== state || loadinteract(jQuery.noConflict())
            }
            document.getElementsByTagName("head")[0].appendChild(s)
        }
    };

    loadjsquery($);
}(window.jQuery);
