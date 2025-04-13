const robotOynanan = document.getElementById("robotOynanan");
const insanOynanan = document.getElementById("insanOynanan");
const skorrobot = document.getElementById("skorRobot");
const skorInsan = document.getElementById("skorOyuncu");
let random = null;
let sayiInsan = 0;
let sayiRobot = 0;
function clic(event){
    const secimOyuncu = event.target.id;

    random = Math.random();
    if (random < 0.36){
        robotOynanan.src = "./images/tas.jpg"
        if (secimOyuncu == "kagit"){
            sayiInsan ++;
            skorInsan.textContent = String(sayiInsan)
        }
        else if (secimOyuncu == "makas")
        {
            sayiRobot ++;
            skorrobot.textContent = String(sayiRobot)
        }
    }
    else if (random < 0.6){
        robotOynanan.src = "./images/makas.jpg"

        if (secimOyuncu == "tas"){
            sayiInsan ++;
            skorInsan.textContent = String(sayiInsan)
        }
        else if (secimOyuncu == "kagit"){
            sayiRobot ++;
            skorrobot.textContent = String(sayiRobot)
        }
    }
    else{
        robotOynanan.src = "./images/kagit.jpg"
        if (secimOyuncu == "makas"){
            sayiInsan ++;
            skorInsan.textContent = String(sayiInsan)
        }
        else if (secimOyuncu == "tas"){
            sayiRobot ++;
            skorrobot.textContent = String(sayiRobot)
        }
    }
    
    switch (secimOyuncu){
        case "kagit":
            insanOynanan.src = "./images/kagit.jpg"
        break;
        case "makas":
            insanOynanan.src = "./images/makas.jpg"
        break;
        case "tas":
            insanOynanan.src = "./images/tas.jpg"
        break;
    }

}


