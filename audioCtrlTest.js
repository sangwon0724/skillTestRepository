var indexCtrl = document.querySelector('.indexCtrl');
var prev = indexCtrl.querySelector('.prev');
var next = indexCtrl.querySelector('.next');
var indexResult = indexCtrl.querySelector('.index');
var index = 0;

var music = ["BOBBY_TENDE.mp3", "BOBBY-RUNAWAY.mp3", "BOBBY-U_MAD.mp3"];
var musicLength = [216000, 223000, 170000];//n초 * 1000

indexResult.innerHTML = index;
prev.addEventListener('click',previndex);
next.addEventListener('click',nextindex);

//슬라이드 이동 (이전)
function previndex(){
    console.log('prevIndex');
    clearInterval(setIntervalTest);
    index--;
    if(index===-1){ index=9; }
    indexResult.innerHTML=index;
    setIntervalTest = setInterval(autoIndexplay, musicLength[index]);

    settingMusic();
}

//슬라이드 이동 (다음)
function nextindex(){
    console.log('nextIndex');
    clearInterval(setIntervalTest);
    index++;
    if(index===10){ index=0; }
    indexResult.innerHTML=index;
    setIntervalTest = setInterval(autoIndexplay, musicLength[index]);

    settingMusic();
}

//슬라이드 자동 재생 - setInterval용
var autoIndexplay = function(){
    index++;
    if(index===10){ index=0; }
    indexResult.innerHTML=index;

    settingMusic();
}

//음악 변경
var settingMusic = () => {
    document.querySelector('.audioTest').src=music[index];
    document.querySelector('.audioTest').load();
    document.querySelector('.audioTest').play();
};

//초기화
var init = () => {
    var setIntervalTest;
    setTimeout(setIntervalTest = setInterval(autoIndexplay, musicLength[index]),500);
};

//초기화 진행
init();
