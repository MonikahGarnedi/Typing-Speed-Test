let div_con = document.getElementById("speedTypingTest");
let t = document.getElementById("timer");
let quote_dis = document.getElementById("quoteDisplay");
let res = document.getElementById("result");
let text = document.getElementById("quoteInput");
let sub_btn = document.getElementById("submitBtn");
let res_btn = document.getElementById("resetBtn");
let load = document.getElementById("spinner");

let info = {
    method: "GET",
}
fetch("https://apis.ccbp.in/random-quote", info)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        quote_dis.textContent = data.content;
    })
let c = 0;
let count_x = function() {
    c = c + 1;
    t.textContent = c;
};
let x = setInterval(count_x, 1000);


sub_btn.onclick = function() {
    let text_val = text.value;
    let quote_dis_val = quote_dis.value;
    if (text_val === quote_dis_val) {
        clearInterval(x);
        res.textContent = "you got it correct";
    } else {
        res.textContent = "the contents does not match";
    }
}
res_btn.onclick = function() {
    load.classList.remove("d-none");
    let info = {
        method: "GET",
    }
    fetch("https://apis.ccbp.in/random-quote", info)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            quote_dis.textContent = data.content;
            load.classList.add("d-none");
        })
    clearInterval(x);
    let cy = 0;
    let count_y = function() {
        cy = cy + 1;
        t.textContent = cy;
    };
    let y = setInterval(count_y, 1000);
    text.value = "";
    res.value = "";
}