var select = document.getElementById("axa");

for(var i = 0; i < biomeTemplates.length; i++) {
    var opt = biomeTemplates[i].name;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = biomeTemplates[i].id;
    select.appendChild(el);
}

$(document).ready(function() {
    $("#axa").change(function(){
        alert($(this).val());
    });
});

/*var select = document.getElementById("axa");
alert(select);
for(index in biomeTemplates) {
    select.options[select.options.length] = new Option(biomeTemplates[index], index);
}*/