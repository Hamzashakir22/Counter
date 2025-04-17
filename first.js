let count = 0;

document.getElementById("incrementBtn").onclick = function() {
    count+=1;
    document.getElementById("countLabel").innerText = count;
}

document.getElementById("restartBtn").onclick = function() {
    count=0;
    document.getElementById("countLabel").innerText = count;
}

document.getElementById("decrementBtn").onclick = function() {
    count-=1;
    document.getElementById("countLabel").innerText = count;
}