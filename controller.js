function getPilhanCom (){
    const pilihan = Math.random();
    if(pilihan<=0.33) return 'batu';
    if(pilihan>=0.34 && pilihan <=0.66) return "gunting";
    if(pilhan>=0.67) return "kertas";

}

function getHasil(pilihanPlayer,pilihanCom){
    if(pilihanPlayer==pilihanCom) return "Seri";
    if(pilihanPlayer=='batu') return (pilihanCom=='gunting')?'Player Menang':'Com Menang';
    if(pilihanPlayer=='gunting') return (pilihanCom=='kertas')?'Player Menang':'Com Menang';
    if(pilihanPlayer=='kertas') return (pilhanCom=='batu')?'Player Menang':'Com Menang'
}

const pBatu = document.querySelector('.batu')
const pGunting = document.querySelector('.gunting')
const pKertas = document.querySelector('.kertas')


// Listener Pilihan Batu
pBatu.addEventListener('click',function(){
    const pilihanCom = getPilhanCom();
    const pilihanPlayer = pBatu.className;
    const hasil = getHasil(pilihanCom,pilihanPlayer);

    const result = document.querySelector('.result');
    result.innerHTML = hasil;
})

// Listener Pilihan Gunting
pGunting.addEventListener('click',function(){
    const pilihanCom = getPilhanCom();
    const pilihanPlayer = pGunting.className;
    const hasil = getHasil(pilihanCom,pilihanPlayer);

    const result = document.querySelector('.result');
    result.innerHTML = hasil;
})

// Listener Pilihan Kertas
pKertas.addEventListener('click',function(){
    const pilihanCom = getPilhanCom();
    const pilihanPlayer = pKertas.className;
    const hasil = getHasil(pilihanCom,pilihanPlayer);

    const result = document.querySelector('.result');
    result.innerHTML = hasil;
})