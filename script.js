let incrementbtn = document.getElementById("count1")
let savebtn = document.getElementById("save-el")

let count10 = 0

function increment(){
    count10 =count10+ 1
    incrementbtn.textContent = count10
    console.log(count10)
}

function save(){
    let countstr = count10
    savebtn.textContent = countstr
    incrementbtn.textContent = 0
}