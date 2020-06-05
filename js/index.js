

(async function(){



async function getData(API){
    const response = await fetch(API, {mode: 'cors'});
    const data = await response.json();
    console.log(data)
    return data
}

getData('https://randomuser.me/api/')




})()
