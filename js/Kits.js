let Kits={}
Kits.setDate=function(){
    
};
Kits.getDate=function(key){
    let json=localStorage.getItem(key);
    return JSON.parse(json);
}
