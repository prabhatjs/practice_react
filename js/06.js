
// localStorage.setItem('foo','bar',1000);
// console.log(localStorage.getItem('foo'));

//the localstorage read-only property of the window interface allow you to access a storage object for the documents the stored data is saved across browser session
//the loacalstorage is simillar to sessionstorage expect that whilke localstorage data has not expiration time...

//Create a localstorage with expiry time 
//set 'bar' on 'foo' that will expiry after 1000 miliseconds mylocalStorage.setItem('foo','bar',1000);
//after 2 second console.log(mylocalstorage.getItem("foo"))//null

//custome object,WITH METHOD LOCALSTORAGE HAS---very Important
window.mylocalStorage={
    setItem:function(key,value,time){
            //create expirey logic,create result object
            let result={
                value,
                time:Date.now()+time//future date when expiry value
            };
            localStorage.setItem(key,JSON.stringify(result));//store in localstorege  we will store our value with expiry time
    },
    getItem:function(key){
        //check key in local storeg if getitme call
            let data=localStorage.getItem(key);//data agr milta hai to parse krenge 
            data=JSON.parse(data);
            //check krnge expiry time chota to nhi hai abhi k time se chota hai time to itme local stogre se hata denge
            if(data.time<=Date.now()){
                localStorage.removeItem(key);
                return null;
            }
            return data.value;
    },
    removeItem:function(key){
            localStorage.removeItem(key);
    },
    clear:function(){
            localStorage.clear()
    }
}
mylocalStorage.setItem('foo','bar',100);//get in onnly 1 sec
setTimeout(()=>{
  console.log(mylocalStorage.getItem('foo'));
},500);//after 5 sec yoou can not access


