var indexCtrl = document.querySelector('.indexCtrl');
var prev = indexCtrl.querySelector('.prev');
var next = indexCtrl.querySelector('.next');
var indexResult = indexCtrl.querySelector('.index');
var index = 0;

var music = ["audio/BOBBY_TENDE.mp3", "audio/BOBBY-RUNAWAY.mp3", "audio/BOBBY-U_MAD.mp3"];
var musicLength = [216000, 223000, 170000];//n초 * 1000

//setInterval()용 변수
var setIntervalTest;

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
    //setIntervalTest = setInterval(autoIndexplay, musicLength[index]);
    setIntervalTest = setInterval(autoIndexplay, 5000);

    settingMusic();
}

//슬라이드 이동 (다음)
function nextindex(){
    console.log('nextIndex');
    clearInterval(setIntervalTest);
    index++;
    if(index===10){ index=0; }
    indexResult.innerHTML=index;

    settingMusic();

    setIntervalTest = setInterval(autoIndexplay, musicLength[index]);
    //setIntervalTest = setInterval(autoIndexplay, 5000);
}

//슬라이드 자동 재생 - setInterval용
var autoIndexplay = function(){
    console.log('autoIndexplay');
    clearInterval(setIntervalTest);
    index++;
    if(index===10){ index=0; }
    indexResult.innerHTML=index;

    settingMusic();

    setIntervalTest = setInterval(autoIndexplay, musicLength[index]);
    //setIntervalTest = setInterval(autoIndexplay, 5000);
}

//음악 변경
var settingMusic = () => {
    document.querySelector('.audioTest').src=music[index];
    document.querySelector('.audioTest').load();
    document.querySelector('.audioTest').play();
};

//초기화
var init = () => {
    //setTimeout(setIntervalTest = setInterval(autoIndexplay, musicLength[index]),500);
    setIntervalTest = setInterval(autoIndexplay, musicLength[index]);
    //setIntervalTest = setInterval(autoIndexplay, 5000);
};

//초기화 진행
init();
