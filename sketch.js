var database, gamestate=0, playercount 
var form, player, game
var canvas, backgroundImage

function preload(){

}

function setup(){
canvas=createCanvas(400,400);
database=firebase.database();
game=new Game()
game.getState()
game.start()

}

function draw(){

}

