
window.onload = function () {
    loadData();
}


function loadData() {
    let url = "sorted.txt";
    fetch(url)
        .then(response => response.json())
        .then(data => extractData(data))
        .catch(err => console.log(err))
}

function extractData(data) {
    
    const submit = document.getElementById("submit");

    let word = document.getElementById("input-word");
    word.addEventListener("keyup", function () {
        let word = document.getElementById("input-word").value;
        document.getElementById("p").innerText = word;
        //console.log(data.l, data.m);
        if (word.length > 0) {
            document.getElementById("bn").innerText = "";
            document.getElementById("result").innerText = "";
            document.getElementById("syn").innerText = "";
            search(word, data);
        } else {
            document.getElementById("result").innerText = "Type a word";
        }
    })

    // this portion is working for the file words.json ---------->

    // submit.addEventListener("click", function () {
    //     let word = document.getElementById("input-word").value;
    //     console.log(word , data.length);
    //     for(let i=0; i<data.length; i++){
    //         if(word == data[i].bn){
    //             console.log(data[i].en);
    //         }
    //     }
    // })

}
function search(word, data) {
    if (word.charAt(0) == "a") {
        display(word, data.a);
    } else if (word.charAt(0) == "b") {
        display(word, data.b);
    } else if (word.charAt(0) == "c") {
        display(word, data.c);
    } else if (word.charAt(0) == "d") {
        display(word, data.d);
    } else if (word.charAt(0) == "e") {
        display(word, data.e);
    } else if (word.charAt(0) == "f") {
        display(word, data.f);
    } else if (word.charAt(0) == "g") {
        display(word, data.g);
    } else if (word.charAt(0) == "h") {
        display(word, data.h);
    } else if (word.charAt(0) == "i") {
        display(word, data.f);
    } else if (word.charAt(0) == "j") {
        display(word, data.j);
    } else if (word.charAt(0) == "k") {
        display(word, data.k);
    } else if (word.charAt(0) == "l") {
        display(word, data.l);
    } else if (word.charAt(0) == "m") {
        display(word, data.m);
    } else if (word.charAt(0) == "n") {
        display(word, data.n);
    } else if (word.charAt(0) == "o") {
        display(word, data.o);
    } else if (word.charAt(0) == "p") {
        display(word, data.p);
    } else if (word.charAt(0) == "q") {
        display(word, data.q);
    } else if (word.charAt(0) == "r") {
        display(word, data.r);
    } else if (word.charAt(0) == "s") {
        display(word, data.t); // exceptional
    } else if (word.charAt(0) == "t") {
        display(word, data.t);
    } else if (word.charAt(0) == "u") {
        display(word, data.u);
    } else if (word.charAt(0) == "v") {
        display(word, data.v);
    } else if (word.charAt(0) == "w") {
        display(word, data.w);
    } else if (word.charAt(0) == "x") {
        display(word, data.x);
    } else if (word.charAt(0) == "y") {
        display(word, data.y);
    } else if (word.charAt(0) == "z") {
        display(word, data.z);
    } else {
        ;
    }
}

function display(word, alpha) {
    for (let i = 0; i < alpha.length; i++) {
        let alphaWord = alpha[i].en;
        if (word == alphaWord) {
            console.log(word);
            let syn_en = alpha[i].en_syns;
            let syn_bn = alpha[i].bn_syns;
            let bn = alpha[i].bn;

            document.getElementById("bn").innerText = bn;
            document.getElementById("result").innerText = syn_bn+"\n\n"+syn_en;
            document.getElementById("syn").innerText = "Similar";
        }
    }
}
