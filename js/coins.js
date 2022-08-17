var savedCoins = localStorage.getItem("savedCoins")
var oneOwned = localStorage.getItem("oneOwned")
var twoOwned = localStorage.getItem("twoOwned")
var threeOwned = localStorage.getItem("threeOwned")

for (var n = 0; n < document.getElementsByClassName("adsbygoogle").length; n++) {
    document.getElementsByClassName("adsbygoogle")[n].addEventListener('click', addCoins(5), false);
}


if(savedCoins == ""){
    savedCoins = 0
}

function addCoins(c){
    var newVal = parseInt(localStorage.getItem("savedCoins")) + c;
    localStorage.setItem("savedCoins", newVal.toString());
    document.getElementById("coins").innerHTML = savedCoins + " COINS";
    document.getElementById("coinShop").innerHTML = savedCoins + " COINS";
}

function purchase(c, i){
    if(parseInt(localStorage.getItem("savedCoins")) > c){
        if(i == "1"){
            if(localStorage.getItem("oneOwned") == "false"){
                var newVal = parseInt(localStorage.getItem("savedCoins")) - c;
                localStorage.setItem("savedCoins", newVal.toString());
                document.getElementById("coins").innerHTML = savedCoins + " COINS";
                document.getElementById("coinShop").innerHTML = savedCoins + " COINS";
                $.magnificPopup.open({
                    items: {
                        src: 'https://forms.gle/3vzSh3446PuQcyDJ9'
                    },
                    type: 'iframe'
                });
            }
            else{
                $.magnificPopup.open({
                    items: {
                        src: 'https://forms.gle/3vzSh3446PuQcyDJ9'
                    },
                    type: 'iframe'
                });
            }
        }
        if(i == "2"){
            if(localStorage.getItem("twoOwned") == "false"){
                var newVal = parseInt(localStorage.getItem("savedCoins")) - c;
                localStorage.setItem("savedCoins", newVal.toString());
                document.getElementById("coins").innerHTML = savedCoins + " COINS";
                document.getElementById("coinShop").innerHTML = savedCoins + " COINS";
                //window.location.href = "https://forms.gle/3vzSh3446PuQcyDJ9";
                localStorage.setItem("twoOwned", "true");
            }
            else{
                //window.location.href = "https://forms.gle/3vzSh3446PuQcyDJ9";
            }
        }
        if(i == "3"){
            if(localStorage.getItem("threeOwned") == "false"){
                var newVal = parseInt(localStorage.getItem("savedCoins")) - c;
                localStorage.setItem("savedCoins", newVal.toString());
                document.getElementById("coins").innerHTML = savedCoins + " COINS";
                document.getElementById("coinShop").innerHTML = savedCoins + " COINS";
                //window.location.href = "https://forms.gle/3vzSh3446PuQcyDJ9";
                localStorage.setItem("threeOwned", "true");
            }
            else{
                //window.location.href = "https://forms.gle/3vzSh3446PuQcyDJ9";
            }
        }
    }
    else{
        return null;
    }
}

function get(){
    savedCoins = localStorage.getItem("savedCoins")
    oneOwned = localStorage.getItem("oneOwned")
    twoOwned = localStorage.getItem("twoOwned")
    threeOwned = localStorage.getItem("threeOwned")

    if(parseInt(savedCoins) > 00){
        
    }    
    else{
        localStorage.setItem("savedCoins", "00")
    }

    if(oneOwned == null){
        oneOwned = "false";
    } 
    if(twoOwned == null){
        twoOwned = "false";
    } 
    if(threeOwned == null){
        threeOwned = "false";
    } 

    if(localStorage.getItem("oneOwned") == "true"){
        //document.getElementById("specialForm").addEventListener('click', function() {window.location.href = "https://forms.gle/3vzSh3446PuQcyDJ9";});
        document.getElementById("specialTxt").textContent = "Open Form";
    }
    if(localStorage.getItem("twoOwned") == "true"){
        //document.getElementById("wordleGames").addEventListener('click', function() {window.location.href = "https://forms.gle/3vzSh3446PuQcyDJ9";});
        document.getElementById("wordleTxt").textContent = "Open Wordle Game Menu";
    }

    document.getElementById("coins").innerHTML = savedCoins + " COINS";
    document.getElementById("coinShop").innerHTML = savedCoins + " COINS";
}

