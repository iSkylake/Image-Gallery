var data = {
    data: [
        {
            name: "Llorch",
            age: 14
        },
        {
            name: "Hana",
            age: 15
        }
    ]
}
console.log(data);

var template = Handlebars.compile(document.getElementById('dataTemplate').innerHTML);

var content = document.getElementById("data-container");
content.innerHTML = template(data);