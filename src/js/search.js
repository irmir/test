import createElement from './create-element';
import createList from './create-list';

export default function search(wrapper, ulEl, list) {
    const input = createElement('input',{'className':'input-search'});
    wrapper.appendChild(input);

    const search = debounce(function () {
        const newList = list.filter(function (item) {
            return item.title.startsWith(input.value);
        });
        const newUl = createList(newList);
        ulEl.innerText = '';
        ulEl.appendChild(newUl);
    }, 500);

    input.addEventListener('input', search);

    function debounce(func, wait, immediate) {
        let timeout;
        return function () {
            const context = this, args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    return 

}