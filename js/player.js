class Player{
constructor(){

}
getCount(){
    var getCountREF=database.ref("playercount");
    getCountREF.on("value", function(data){
    playercount=data.val()
 })
}
updateCount(count){
    database.ref("/").update({
    playercount:count
})
}
update(name){
var playerIndex="player"+playercount
database.ref(playerIndex).set({
name:name
})

}
}