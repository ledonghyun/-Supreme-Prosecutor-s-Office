/* 언어 변경 */
let langAct=0;


function langList(){
    if (langAct==0){
        document.getElementById('lang-list').className='active';
        document.getElementById('lang-label').className='active';
        langAct=1;
    }else{
        document.getElementById('lang-list').className='';
        document.getElementById('lang-label').className='';
        langAct=0;
    }
}
