const main = document.querySelector('main');

let excerciceArray = [
    {
        pic : 0,
        min : 1
    },
    {
        pic : 1,
        min : 1
    },
    {
        pic : 2,
        min : 1
    },
    {
        pic : 3,
        min : 1
    },
    {
        pic : 4,
        min : 1
    },
    {
        pic : 5,
        min : 1
    },
    {
        pic : 6,
        min : 1
    },
    {
        pic : 7,
        min : 1
    },
    {
        pic : 8,
        min : 1
    },
    {
        pic : 9,
        min : 1
    },
   
]

class Exercice {

}

const utils = {
    pageContent : function(title, content, btn){
        document.querySelector('h1').innerHTML = title;
        main.innerHTML = content;
        document.querySelector('.btn-container').innerHTML = btn;
    },
}

const page = {
    lobby : function () {
        utils.pageContent(
            "Paramétrage <i id='reboot' class='fas fa-undo'></i>",
            "Exercices",
            "<button id='start'> Commencer <i class='fas fa-play-circle'></i></button>s"
        )
    }
}

page.lobby();