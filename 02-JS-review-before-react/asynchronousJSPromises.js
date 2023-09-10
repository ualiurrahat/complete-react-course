// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => res.json())
//     .then(data => console.log(data));

// console.log("react");
// the console.log("react") is diplayed first
// as fetch takes time and its a asynchronous process


async function getTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    console.log(data);
    return data;
}

const todos = getTodos();
console.log(todos);
console.log("react");