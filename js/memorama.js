const skills_container = document.getElementById("skills-cards");
const skills = skills_container.children;
const imgPairs = skills.length/2;
var countCards = 0;
var completeSet = new Array();
console.log(typeof skills_container, "#Skills:"+ skills.length , skills);//

var imgLoaded = new Array();
function loadImages(){
    // empty 
}
window.onload = loadImages;
function loadImages(){
    //setArray of images for the card-back
    for (let index = 0; index < imgPairs; index++) {
        imgLoaded[countCards] = new Image();
        imgLoaded[countCards].src = "./src/Memorama/images/"+countCards+".jpg";
        console.log( countCards, imgLoaded[countCards]);
        countCards++;
    }//for
    startGame();
    /*imgLoaded[countCards] = new Image();
    imgLoaded[countCards].src = "./src/Memorama/images/"+countCards+".jpg";
    console.log(imgLoaded[countCards]);
    countCards++;
    if(countCards<imgPairs){
        imgLoaded[countCards-1].onload = loadImages;
        //console.log(imgLoaded[countCards-1]);
    }else{
        imgLoaded[countCards-1].onload = startGame;
    } */
}//loadImages
function sortCards(){
    /*generar 10 números random y asignalos a los divs de las skill-card*/
    let randomPosition;
    let firstSet = new Array();
    let secondSet = new Array();
    for (let index = 0; index < imgPairs; index++) {
        do{
            randomPosition = Math.floor(Math.random()*imgPairs);
            console.log(randomPosition);//
        }while(firstSet.indexOf(randomPosition)!=-1)
        firstSet.push(randomPosition);
        do {
            randomPosition = Math.floor(Math.random()*imgPairs);
            console.log(randomPosition);//
        } while (secondSet.indexOf(randomPosition)!=-1);
        secondSet.push(randomPosition);
    }//for
    let sortedNumbers = secondSet.concat(firstSet);
    console.log(sortedNumbers);//
    for (let index = 0; index < skills.length; index++) {
        completeSet.push(index);
        console.log(completeSet);//
        completeSet[index].info = sortedNumbers[index];
    }
}

function choosing(){
    /** 
     * addEventListener onClick cartaUno
     * showBackCard con la imagen en el index del completeSet
     * addEvenListener onClick cartaDos
     * showBackCard con la imagen en el index del completeSet
     * compare cartaUno.info == cartaDos.info
     * -> show iconMyBrand y succeesses++ successes();
     * else showFrontCard(posiciones)
     * 
     * if successes == imgPairs -> show You WON!!
     * reset game (showFrontCards and startGame)
     * */
}
function showFrontCard(index){
    /**
     * Definir urlImg y Title por cada skill
     * Definir cardHTML código `entre backtiks` con index del url y title
     * innerHTML en la card correspondiente
     */
}
function showBackCard(){
    /**
     * Definir urlImg
     * Definir `código de la bakCard`
     * innerHTM en la posición correspondiente
     */
}
function successes(numHits){
    /**
     * show box contador with innerHTML
     */
}

function startGame(){
    /*start the game */
    skills_container.removeEventListener("click",startGame,false);
    skills_container.addEventListener("click",choosing,false);
    sortCards();
    choosing();
}
