function solve() {
    return function(selector) {
        var root,
            elements,
            targetButton,
            content,
            next, len, i;

        if (typeof selector !== 'string' && !(selector instanceof HTMLElement)) {
            throw Error();
        }
        root = document.getElementById(selector);

        if (root === null) {
            throw Error();
        }
        elements = root.childNodes;
        len = elements.length;

        for (i = 0; i < len; i += 1) {

            if (elements[i].className === 'button') {
                elements[i].innerHTML = 'hide';
            }
        }

        root.addEventListener('click', function(ev) {
            targetButton = ev.target;
            next = targetButton.nextElementSibling;
            // If something different from a button is clicked
            if (targetButton.className !== 'button') {
                return;
            }
            if (next.className === 'content') {
                content = next;
                // Cycle until next content is with class button
                while (next) {
                    if (next.className === 'button') {

                        if (content.style.display === 'none') {
                            content.style.display = '';
                            targetButton.innerHTML = 'hide';
                        } else {
                            content.style.display = 'none';
                            targetButton.innerHTML = 'show';
                        }
                        break;
                    }
                    next = next.nextElementSibling;
                }
            }
        }, false);
    };
};
//                             OR
function solve() {
    return function (selector) {
        var element;
        if (selector instanceof HTMLElement) {
            element = document.getElementsByTagName(selector)[0];
        }
        else if (typeof selector == 'string') {
            element = document.getElementById(selector);
        }

        if (element) {
            var elementsClassBtn = document.getElementsByClassName('button');
            for (var i = 0, len = elementsClassBtn.length; i < len; i+=1) {
                elementsClassBtn[i].innerHTML = 'hide';
            }

            element.addEventListener('click', function (e) {
                if (e.target.className == 'button') {
                    var clickedBtn = e.target;
                    var next = clickedBtn.nextElementSibling;

                    if (next.className == 'content'
                     && next.nextElementSibling.className == 'button') {
                        if (next.style.display != 'none') {
                            next.style.display = 'none';
                            clickedBtn.innerHTML = 'show';
                        }
                        else {
                            next.style.display = '';
                            clickedBtn.innerHTML = 'hide';
                        }
                    }
                }
            }, false);
            return;
        }

        throw new Error('The id is neither a string nor an existing DOM element!');
    };
};
