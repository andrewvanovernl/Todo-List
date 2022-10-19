const BASE_URL = "http://localhost:3000/";
const RemoveID = async function (elem) {
    try {
        const res = await fetch(BASE_URL + elem, {
            method: "DELETE",
        });
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}
async function addDOM() {
    try {
        const web = await fetch(BASE_URL, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
        console.log("Fetched Async in api-client:", web)
        return web;
    } catch (err) {
        console.log(err)
    }
}
async function resultDom(task) {
    const data = { description: task, done: false };
    try {
        const res = await fetch(BASE_URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })

    } catch (err) {
        console.log(err)
    }
}
const Taskremover = async function (content) {
    try {
        const GrabEl = await fetch(BASE_URL, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(data => {
                selectedTask = data.filter((taskName) => {
                    return taskName.description === content
                })
                id = '';
                selectedTask.forEach((task) => {
                    id = task._id
                })
                RemoveID(id);
            });
    } catch (err) {
        console.log(err)
    }
}