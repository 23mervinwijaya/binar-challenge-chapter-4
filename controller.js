function getPilihanCom(){
    const pilihan = Math.random();
    if(pilihan<=0.33) return "batu";
    if(pilihan>=0.34 && pilihan <=0.66) return "gunting";
    if(pilihan>=0.67) return "kertas";
}

function getHasil(pilihanPlayer,pilihanCom){
    if(pilihanPlayer==pilihanCom) return "seri";
    if(pilihanPlayer=="batu") return (pilihanCom=="gunting")?"Player WON" : "Com WON";
    if(pilihanPlayer=="gunting") return (pilihanCom=="kertas")?"player WON" : "Com WON";
    if(pilihanPlayer=="kertas") return (pilihanCom=="batu")?"Player WON" : "Com WON";
}

const pilihan = document.querySelectorAll('.player img');
pilihan.forEach(function(pil){
    pil.addEventListener('click',function(){
        pil.style.backgroundColor = 'rgba(173, 173, 173, 0.541)';
        pil.style.borderRadius = '25px';
        
        const pilihanPlayer = pil.className;
        const pilihanCom = getPilihanCom();
        const hasil = getHasil(pilihanPlayer,pilihanCom);
        
        const imgComp = document.querySelectorAll('.computer img');
        imgComp.forEach(function(img){
            const className = img.className;

            if(className == pilihanCom){
                img.style.backgroundColor = 'rgba(173, 173, 173, 0.541)';
                img.style.borderRadius = '25px';
            }
        })

        const result = document.querySelector('.result');
        result.innerHTML = hasil;

        function reset(){
            setTimeout(()=>{
                alert("Ingin main lagi?")
                window.location.href = "/game.html"
            },500)
        }
        reset()
    })
})
