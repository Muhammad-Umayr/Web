const card_section = document.getElementsByClassName('card_section')[0];

fetch("https://fakestoreapi.com/products")
.then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data);
    data.forEach((values) => {
        //   console.log(values);
        let abc = document.createElement("div");
        abc.innerHTML =  `<div id="cardImages">
        <img src="${values.image}" alt="Img" id="Img">
    </div>
    <div id="cardContent">
        <h3 id="heading1">${values.title}</h3>
        <p id="para1">${values.description}</p>
        <p id="para2">${values.price}</p>
    </div>`;
    card_section.appendChild(abc);
    })
})
.catch((err) => {
    console.log(err);
})