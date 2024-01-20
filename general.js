
function Offlineminimum(starr){
    var len = starr.length;
    var holdarr = [];
    var count = 0 ;
    var finalarr = [];
    for(var i=0 ; i< len ; i++){
        if(starr[count] === "E"){
            var heldarr = starr.splice(0 , count);
            starr.shift();
           holdarr = holdarr.concat(heldarr);
            holdarr.sort(function(a , b){
                return a-b;
            });
            finalarr.push(holdarr.shift());
            count=0;
        }else{
            count++;
        }
       
    }
    return finalarr.join(',');

}

const ans = Offlineminimum(["5","4","6","E","1","7","E","E","3","2"]);
console.log(ans);