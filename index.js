import './src/styles/style.css'
import getList from './src/js/get-list'
import createElement from './src/js/create-element'
import search from './src/js/search'
import {createButtonAdd, createListOnPage, } from './src/js/create-html'
import showMenu from './src/js/show-menu'
import {showModalWindow} from './src/js/modal-window-operations'

(async function () {

    const wrapper = createElement('div', {'className':'wrapper'});

    const buttonAdd = createButtonAdd();
    buttonAdd.addEventListener('click', showModalWindow);

    const list = await getList();

    const ulEl = createListOnPage(list);
    
    ulEl.addEventListener('click', showMenu);

    search(wrapper,ulEl, list);

    wrapper.appendChild(buttonAdd);
    wrapper.appendChild(ulEl);

    document.body.appendChild(wrapper);
}
)();
