var data = {
    images: ["HNI_0004", "HNI_0006", "HNI_0007", "HNI_0008", "HNI_0009", "HNI_0010", "HNI_0013", "HNI_0016", "HNI_0017", "HNI_0018", "HNI_0019", "HNI_0020", "HNI_0022", "HNI_0023", "HNI_0024", "HNI_0025", "HNI_0027", "HNI_0030", "HNI_0033", "HNI_0034", "HNI_0037", "HNI_0039", "HNI_0040", "HNI_0042", "HNI_0046", "HNI_0051", "HNI_0052", "HNI_0053", "HNI_0054", "HNI_0055", "HNI_0058", "HNI_0063", "HNI_0065", "HNI_0066", "HNI_0067", "HNI_0068", "HNI_0069", "HNI_0072", "HNI_0076", "HNI_0078", "HNI_0079", "HNI_0080", "HNI_0081", "HNI_0085", "HNI_0087", "HNI_0089", "HNI_0090", "HNI_0091"]
}

console.log(data);

var template = Handlebars.compile(document.getElementById('dataTemplate').innerHTML);

var content = document.getElementById("data-container");
content.innerHTML = template(data);