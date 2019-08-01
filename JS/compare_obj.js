var obj1 = {
    name : "Shubham",
    age : 22,
    height : "5'11 ft"
}

var obj2 = obj1;

if(obj1==obj2){
    console.log("objects having same reference are equal");
}
else{
    console.log("objects having same reference are not equal"); 
}

var obj2 = {
    name : "Shubham",
    age : 22,
    height : "5'11 ft"
}

if(obj1 == obj2){
    console.log("objects simply copied are equal");
}
else{
    console.log("objects simply copied are not equal"); 
}

var f=0;
for(var key in obj1){
    if(obj1[key] != obj2[key]){
        console.log("objects are not equal");
        f = 1;
        break;
    }
}
if(f == 0){
    console.log("objects are equal");
}