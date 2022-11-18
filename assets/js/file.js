'use strict';

function js_style() {
    const text = document.querySelector('#text')
    text.style.fontSize = '12px';
    text.style.fontFamily = 'Roboto';
    text.style.color = 'red';
    text.style.backgroundColor = 'black';
    text.style.border = '2px soild black';
    text.style.width = '100px';
    text.style.height = '25px';

    text.textContent = `Ширина - ${window.innerWidth} Высота - ${window.innerHeight}`


}

function getFormvalue() {
    const form = document.querySelector('#form1')
    let name = form.fname.value;
    let surname = form.lname.value;
    form.insertAdjacentHTML('afterend', `<p>${name} ${surname}</p>`)
}


function getAttributes() {
    const a = document.querySelector('#w3r')
    let href  = a.href, hreflang = a.hreflang, rel = a.rel, target = a.target, type = a.type;
    for (let i of [href, hreflang, rel, target, type]) {
       a.insertAdjacentHTML('afterend', `<p class='text_3'>${i}</p>`);
    }
}

let chet_table_td = 3

function insert_Row() {
    const table = document.querySelector('#sampleTable');
    table.border = '4';
    table.insertAdjacentHTML('beforeend', `<tr><td>Row${chet_table_td} cell1</td><td>Row${chet_table_td} cell2</td></tr>`)
    chet_table_td++;
}

// function changeContent() {
//     const table = document.querySelector('myTable')
//     let tr = prompt('Введите номер строки', '1');
//     let td = prompt('Введите номер столбца', '1');
//     let info = prompt('Введите значение ячейки', 'text');

//     let list_tr = document.querySelectorAll('.table_tr')
//     for (let i = 0; i != list_tr.length - 1; i++) {
//         if (i == tr - 1) {
//             list_tr[i].querySelectorAll('.table_td')[td-1].textContent = info;
//         }
//     }
    
// }

function createTable() {
    let tr = prompt('Введите количество строк', '1');
    let td = prompt('Введите количество столбцов', '1');

    for (let i = 0; i < tr; i++) {
        let tr_table = document.createElement('tr')
        tr_table.class =  'table_tr'
        document.querySelector('#myTable').append(tr_table);
        for (let j = 0; j < td; j++) {
            tr_table.insertAdjacentHTML('beforeend', `<td>Cell${j+1} Row ${i+1}</td>`)
        }
    }
}

function removecolor() {
    const select = document.querySelector('#colorSelect') 
    let value  = select.firstElementChild.textContent
    select.firstElementChild.remove()
    select.insertAdjacentHTML('afterend', `<p>Элемент ${value} был удален</p>`);
}

function getOptions() {
    let count_elements = document.querySelector('#mySelect').children.length;
    let list_options = document.querySelector('#mySelect').children;
    let text = '';
    for (let i of list_options) {
        text += ' ' + i.innerHTML
    }
    alert(`${text} ${count_elements}`);
}


document.querySelector('#myTable11').addEventListener('click', event => {
    if (event.target.className == 'myTable11_block') {
        event.target.textContent = prompt('Значение ячекйки', 'Cell');
    }
})

function send_form_table() {
    let table = document.querySelector('#form_11')
    let name = table.name.value
    let suname = table.suname.value
    document.querySelector('#myTable11').insertAdjacentHTML('beforeend', `<tr> <td class="myTable11_td"><div class="myTable11_block">${name}</div></td>  <td class="myTable11_td"><div class="myTable11_block">${suname}</div></td></tr>`)
}

function slide_12() {
    let reg = document.querySelector('#contaner_registr')
    
    if (reg.style.display == 'none') {
        reg.style.display = 'block';
        return;
    }

    reg.style.display = 'none';
}