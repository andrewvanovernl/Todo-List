const addList = document.querySelector('#add-task');
const GrabBtn = addList.querySelector('button');
const GrabToDo = document.querySelector('#new-task ul');
GrabBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const value = addList.querySelector('input[type="text"]').value;
    resultDom(value);
    Input(value);
});
const GramDOM = addDOM();
const resultAPI = (items) => {
    console.log("logging async", items)
    items.then(data => {
        console.log("logging async", data)
        data.forEach((Looping) => {
            output = Looping.description;
            console.log("Looping/Grabbing", output);
            const li = document.createElement('li');
            const task = document.createElement('span');
            const deleteBtn = document.createElement('button');
            task.textContent = output;
            deleteBtn.innerHTML = '';
            task.classList.add('task');
            deleteBtn.classList.add('delete');
            li.appendChild(task);
            li.appendChild(deleteBtn);
            GrabToDo.appendChild(li);
        });
    })
}
GrabToDo.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.className === 'delete') {
        const text = e.target.previousElementSibling.textContent;
        Taskremover(text);
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});
const Input = (elem) => {
    const li = document.createElement('li');
    const task = document.createElement('span');
    const deleteBtn = document.createElement('button');
    task.textContent = elem;
    deleteBtn.innerHTML = '';
    task.classList.add('task');
    deleteBtn.classList.add('delete');
    li.appendChild(task);
    li.appendChild(deleteBtn);
    GrabToDo.appendChild(li);
}
resultAPI(GramDOM);