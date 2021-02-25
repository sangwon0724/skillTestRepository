var indexCtrl = document.querySelector('.indexCtrl');
var prev = indexCtrl.querySelector('.prev');
var next = indexCtrl.querySelector('.next');
var indexResult = indexCtrl.querySelector('.index');
var index = 2;

var music = ["./audio/Fall.mp3", "./audio/Fix_Car.mp3", "./audio/Potato_Chips.mp3"];
var musicLength = [209, 85, 93];//음악 시간, 단위 : 초

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
    if(index===-1){ index=2; }
    indexResult.innerHTML=index;

    settingMusic();

    setIntervalTest = setInterval(autoIndexplay, musicLength[index]*1000);
    //setIntervalTest = setInterval(autoIndexplay, musicLength[index]);
}

//슬라이드 이동 (다음)
function nextindex(){
    console.log('nextIndex');
    clearInterval(setIntervalTest);
    index++;
    if(index===3){ index=0; }
    indexResult.innerHTML=index;

    settingMusic();

    setIntervalTest = setInterval(autoIndexplay, musicLength[index]*1000);
    //setIntervalTest = setInterval(autoIndexplay, 5000);
}

//슬라이드 자동 재생 - setInterval용
var autoIndexplay = function(){
    console.log('autoIndexplay');
    clearInterval(setIntervalTest);
    index++;
    if(index===3){ index=0; }
    indexResult.innerHTML=index;

    //settingMusic();
    setTimeout(settingMusic(), 50);
    setIntervalTest = setInterval(autoIndexplay, musicLength[index]*1000);
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
    index++;
    if(index===3){ index=0; }
    indexResult.innerHTML=index;
    
    //settingMusic(); - 문제 발생
};

//초기화 진행
init();
