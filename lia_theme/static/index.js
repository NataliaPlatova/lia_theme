const onLoad = () => {
    const myDiv = document.createElement('div');
    const text = document.createTextNode("jjjjj");
    myDiv.appendChild(text);
    document.getElementById("navigation").appendChild(myDiv);
}

onLoad();