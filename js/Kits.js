var Kits={}
Kits.setDate=function(key,data){
    let json=JSON.stringify(data);
    localStorage.setItem(key,json)
};
Kits.getDate=function(key){
    let json=localStorage.getItem(key);
    return JSON.parse(json) || [];
}
