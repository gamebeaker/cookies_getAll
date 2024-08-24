async function Search_Custom_Cookie(){
    let input_search_partitionKey = document.getElementById("input_search_partitionKey").value;
    let quesrry = "{";
    if(input_search_partitionKey != ""){
        quesrry += "\"partitionKey\":{\"topLevelSite\":\""+input_search_partitionKey+"\"}";
    }
    quesrry += "}";

    let cookiejson = JSON.parse(quesrry);
    
    let cookie = await chrome.cookies.getAll(cookiejson);
    console.log(cookie);
    document.getElementById("result").innerHTML = JSON.stringify(cookie);
}

function addEventHandlers() {
    document.getElementById("Search_Custom_Cookie").onclick = Search_Custom_Cookie;
}