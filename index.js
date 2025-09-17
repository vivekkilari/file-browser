async function loadJson() {
    const res = await fetch("./index.json");
    const data = await res.json();
    console.log(data.greeting);
}

loadJson();
