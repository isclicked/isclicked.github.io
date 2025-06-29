kybrdLng = "en"; // اللغة الافتراضية للوحة المفاتيح
const characterPr = document.getElementById('characterPr');
let keysDwn =[];
let keysDwnKy =[];

let lngs = { 
  ar: [ "ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "د","\\", "ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ط", "ئ", "ء", "ؤ", "ر", "لا", "ى", "ة", "و", "ز", "ظ", "↓", "→", "↑", "مفتاح الأرقام", "/", "*", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "0", ".", "Enter",], 
  
  en: [ "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "ShiftRight", "Ctrl", "Win", "AltLeft", "Space", "AltRight", "Fn", "Ctrl", "←", "↓", "→", "↑", "NumLock", "/", "*", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "0", ".", "Enter","PageDown" ],
  
  fr: [ "A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P", "^", "$", "*", "Q", "S", "D", "F", "G", "H", "J", "K", "L", "M", "ù",  "W", "X", "C", "V", "B", "N", ",", ";", ":", "!", "Shift", "Ctrl", "Win", "AltLeft", "Space", "ControlLeft", "Fn", "Ctrl", "←", "↓", "→", "↑", "VerrNum", "/", "*", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "0", ",", "Enter","Pg suiv" ], };


document.addEventListener("keydown", function (event) {
  let namKy = event.code;
	// في لوحة QWERTY الإنجليزية: event.code 'KeyQ' → event.key 'q'
	// في لوحة AZERTY الفرنسية: event.code 'KeyQ' → event.key 'a'
  if (event.code.includes("Key") ) {
    namKy = namKy.slice(3) // الحصول على اسم المفتاح بدون "Key" 
	
  }
 
  console.log(namKy); 
  console.log(event.key);
  
	if ("Key" + event.key.toUpperCase() !== event.code && event.code.includes("Key") 
    || event.key != document.getElementById('k'+ namKy).textContent.toLowerCase()) {
		if (lngs.ar.indexOf(event.key) !== -1 && lngs.ar.indexOf(event.key) < 30) {
			kybrdLng = "ar";
		} else  {
			kybrdLng = "fr";
		}
    
    changeKeyboardLanguage()
	}
  
   if (keysDwn.indexOf(namKy) == -1) {
    keysDwn.push(namKy);
    keysDwnKy.push(event.key);
  }
   characterPr.innerHTML = keysDwnKy.join( " + ");
 
  document.getElementById('k'+ namKy).style.backgroundColor = '#17a2a9'; // استخدام classList.add بدلاً من className.add
  // console.log(event.key, event.code, event.keyCode, event.charCode); 
});

document.addEventListener('keyup', (e) => {

  setTimeout(() => {
    
    
   let namKy2 = e.code;
   
  if (e.code.includes("Key") ) {
    namKy2 = namKy2.slice(3) // الحصول على اسم المفتاح بدون "Key" وتحويله إلى أحرف صغيرة
  }
  document.getElementById('k'+ namKy2).style.backgroundColor = '#555'; 
  let indNmKy = keysDwn.indexOf(namKy2);
  let indNmKy2 = keysDwn.indexOf(e.key);
   keysDwn.splice(indNmKy, 1); // إزالة المفتاح من المصفوفة عند تحريره
  keysDwnKy.splice(indNmKy2, 1); // إزالة المفتاح من المصفوفة عند تحريره
   characterPr.innerHTML = keysDwnKy.join( " + ");
  }, timeout = 300);
  
});
document.addEventListener('keypress', (e) => {
        let namKy3 = e.code;
  if (e.code.includes("Key") ) {
    namKy3 = namKy3.slice(3) // الحصول على اسم المفتاح بدون "Key" وتحويله إلى أحرف صغيرة
  }
  document.getElementById('k'+ namKy3).style.backgroundColor = '#17a2a9'; // استخدام classList.add بدلاً من className.add
      
      });



function updateCommonProperties(e) {
        targetEl.textContent = e.target.tagName; // Ou e.target.id pour l'ID de l'élément
        // Pour `character`, e.key est moderne et plus précis pour la plupart des touches.
        // charCode est souvent utilisé pour keypress pour le caractère ASCII.
	let chAct = e.key || String.fromCharCode(e.code || e.key);
        characterEl.textContent =chAct;
        characterPr.textContent = chAct; // Affiche le caractère dans la div
	keyboardInput.value = chAct;
        shiftEl.textContent = e.shiftKey ? 'true' : 'false';
        ctrlEl.textContent = e.ctrlKey ? 'true' : 'false';
        altEl.textContent = e.altKey ? 'true' : 'false';
        metaEl.textContent = e.metaKey ? 'true' : 'false';
    }




















let menuSvg = '<svg height="20px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-15.36 -15.36 542.72 542.72" xml:space="preserve" fill="#555555" stroke="#555555" stroke-width="20" transform="matrix(1, 0, 0, -1, 0, 0)rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#ffffff;} </style> <g> <path class="st0" d="M0,0v512h512V0H0z M407.992,398.492h-304v-57h304V398.492z M407.992,284.484h-304v-56.976h304V284.484z M407.992,170.492h-304V113.5h304V170.492z"></path> </g> </g></svg>'




changeKeyboardLanguage()
function changeKeyboardLanguage() {
  
  
document.getElementById("keyboardId").innerHTML = `
<div  class="keyboard-desktop">
  <div class="main-keyboard">
    <div class="keyboard-row">
      <button class="key" id="kEscape">Esc</button>
      <button class="key function-key" id="kF1">F1</button>
      <button class="key function-key" id="kF2">F2</button>
      <button class="key function-key" id="kF3">F3</button>
      <button class="key function-key" id="kF4">F4</button>
      <span class="spacer"></span>
      <button class="key function-key" id="kF5">F5</button>
      <button class="key function-key" id="kF6">F6</button>
      <button class="key function-key" id="kF7">F7</button>
      <button class="key function-key" id="kF8">F8</button>
      <span class="spacer"></span>
      <button class="key function-key" id="kF9">F9</button>
      <button class="key function-key" id="kF10">F10</button>
      <button class="key function-key" id="kF11">F11</button>
      <button class="key function-key" id="kF12">F12</button>
      <span class="spacer "></span>
      <button class="key utility-key" id="kPrintScreen">PrtSc</button>
      <button class="key utility-key" id="kScrollLock">ScrlLck</button>
      <button class="key utility-key" id="kPauseBreak">Pause</button>
    </div>
    <div class="keyboard-row">
      <button class="key" id="kBackquote">\`</button>
      <button class="key" id="kDigit1">1</button>
      <button class="key" id="kDigit2">2</button>
      <button class="key" id="kDigit3">3</button>
      <button class="key" id="kDigit4">4</button>
      <button class="key" id="kDigit5">5</button>
      <button class="key" id="kDigit6">6</button>
      <button class="key" id="kDigit7">7</button>
      <button class="key" id="kDigit8">8</button>
      <button class="key" id="kDigit9">9</button>
      <button class="key" id="kDigit0">0</button>
      <button class="key" id="kMinus">-</button>
      <button class="key" id="kEqual">=</button>
      <button class="key backspace-key" id="kBackspace">Backspace ←</button>
      <span class="spacer large"></span>
      <button class="key nav-key" id="kInsert">Ins</button>
      <button class="key nav-key" id="kHome">Home</button>
      <button class="key nav-key" id="kPageUp">PgUp</button>
      </div>
       <div class="keyboard-row">
          <button class="key tab-key" id="kTab">Tab</button>
          <button class="key" id="k${lngs.en[0]}">${lngs[kybrdLng][0]}</button>
          <button class="key" id="k${lngs.en[1]}">${lngs[kybrdLng][1]}</button>
          <button class="key" id="k${lngs.en[2]}">${lngs[kybrdLng][2]}</button>
          <button class="key" id="k${lngs.en[3]}">${lngs[kybrdLng][3]}</button>
          <button class="key" id="k${lngs.en[4]}">${lngs[kybrdLng][4]}</button>
          <button class="key" id="k${lngs.en[5]}">${lngs[kybrdLng][5]}</button>
          <button class="key" id="k${lngs.en[6]}">${lngs[kybrdLng][6]}</button>
          <button class="key" id="k${lngs.en[7]}">${lngs[kybrdLng][7]}</button>
          <button class="key" id="k${lngs.en[8]}">${lngs[kybrdLng][8]}</button>
          <button class="key" id="k${lngs.en[9]}">${lngs[kybrdLng][9]}</button>
          <button class="key" id="kBracketLeft">${lngs[kybrdLng][10]}</button>
          <button class="key" id="kBracketRight">${lngs[kybrdLng][11]}</button>
          <button class="key backslash-key" id="kBackslash">${lngs[kybrdLng][12]}</button>
          <span class="spacer large"></span>  
          <button class="key nav-key" id="kDelete">Del</button>
          <button class="key nav-key" id="kEnd">End</button>
          <button class="key nav-key" id="kPageDown">PgDn</button>
        </div>

    <div class="keyboard-row">
      <button class="key caps-key" id="kCapsLock">Caps Lock</button>
      <button class="key" id="k${lngs.en[13]}">${lngs[kybrdLng][13]}</button>
      <button class="key" id="k${lngs.en[14]}">${lngs[kybrdLng][14]}</button>
      <button class="key" id="k${lngs.en[15]}">${lngs[kybrdLng][15]}</button>
      <button class="key" id="k${lngs.en[16]}">${lngs[kybrdLng][16]}</button>
      <button class="key" id="k${lngs.en[17]}">${lngs[kybrdLng][17]}</button>
      <button class="key" id="k${lngs.en[18]}">${lngs[kybrdLng][18]}</button>
      <button class="key" id="k${lngs.en[19]}">${lngs[kybrdLng][19]}</button>
      <button class="key" id="k${lngs.en[20]}">${lngs[kybrdLng][20]}</button>
      <button class="key" id="k${lngs.en[21]}">${lngs[kybrdLng][21]}</button>
      <button class="key" id="kSemicolon">${lngs[kybrdLng][22]}</button>
      <button class="key" id="kQuote">${lngs[kybrdLng][23]}</button>      
      <button class="key enter-key" id="kEnter">Enter</button>
    </div>  
    <div class="keyboard-row">
      <button class="key shift-key left" id="kShiftLeft">Shift</button>
      <button class="key" id="k${lngs.en[24]}">${lngs[kybrdLng][24]}</button>
      <button class="key" id="k${lngs.en[25]}">${lngs[kybrdLng][25]}</button>
      <button class="key" id="k${lngs.en[26]}">${lngs[kybrdLng][26]}</button>
      <button class="key" id="k${lngs.en[27]}">${lngs[kybrdLng][27]}</button>
      <button class="key" id="k${lngs.en[28]}">${lngs[kybrdLng][28]}</button>
      <button class="key" id="k${lngs.en[29]}">${lngs[kybrdLng][29]}</button>
      <button class="key" id="k${lngs.en[30]}">${lngs[kybrdLng][30]}</button>
      <button class="key" id="kComma">${lngs[kybrdLng][31]}</button>
      <button class="key" id="kPeriod">${lngs[kybrdLng][32]}</button>
      <button class="key" id="kSlash">${lngs[kybrdLng][33]}</button>
      <button class="key shift-key right" id="kShiftRight">Shift</button>
      <span class="spacer large"></span>
      <div class="arrow-keys-block">
        <button class="key arrow-key empty"></button><!-- 
        <button class="key arrow-key empty"></button> -->
        <button class="key arrow-key" id="kArrowUp">▲</button>
      </div>
    </div>
    <div class="keyboard-row">
      <button class="key ctrl-key" id="kControlLeft">Ctrl</button>
      <button class="key fn-key" id="kFn">Fn</button>
      <button class="key win-key" id="kMetaLeft">
      <svg xmlns="http://www.w3.org/2000/svg"     height= "17px" fill="#78f5e2" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/> </svg> 
       Win </button>
       
      <button class="key" id="k${lngs.en[37]}">alt</button>
      <button class="key space-key" id="kSpace">Space</button>
      <button class="key" id="k${lngs.en[39]}">alt</button>
      <button class="key fn-key" id="kContextMenu">${menuSvg}</button>
      <button class="key ctrl-key" id="kControlRight">Ctrl</button>
      <span class="spacer large"></span>
      <div class="arrow-keys-block">
        <button class="key arrow-key" id="kArrowLeft">◀</button>
        <button class="key arrow-key" id="kArrowDown">▼</button>  
        <button class="key arrow-key" id="kArrowRight">▶</button>
      </div>
    </div>
  </div>
  <div class="numpad">
    <div class="lftdv">
      <div class="keyboard-row">
        <button class="key numpad-key" id="kNumLock">Num Lock</button>
        <button class="key numpad-key" id="kNumpadDivide">/</button>
        <button class="key numpad-key" id="kNumpadMultiply">*</button>
      </div>
      <div class="keyboard-row">
        <button class="key numpad-key" id="kNumpad7">7</button>
        <button class="key numpad-key" id="kNumpad8">8</button>
        <button class="key numpad-key" id="kNumpad9">9</button>
      </div>
      <div class="keyboard-row">
        <button class="key numpad-key" id="kNumpad4">4</button>
        <button class="key numpad-key" id="kNumpad5">5</button>
        <button class="key numpad-key" id="kNumpad6">6</button>
      </div>
      <div class="keyboard-row">
        <button class="key numpad-key" id="kNumpad1">1</button>
        <button class="key numpad-key" id="kNumpad2">2</button>
        <button class="key numpad-key" id="kNumpad3">3</button>
      </div>
      <div class="keyboard-row">
        <button class="key numpad-key double-width" id="kNumpad0">0</button>
        <button class="key numpad-key" id="kNumpadDecimal">.</button>
      </div>
    </div>
    <div class="rghtDv">
      <button class="key numpad-key" id="kNumpadSubtract">-</button>
      <button class="key numpad-key tall" id="kNumpadAdd">+</button>
      <button class="key numpad-key tall" id="kNumpadEnter">Enter</button>
    </div>
  </div>
</div>
`;

if (keysDwn.length >  0) {
  keysDwn.forEach((key) => {
    document.getElementById('k'+ key).style.backgroundColor = '#17a2a9'; 
  });
}
}



/* ContextMenu
document.getElementById(
	"keyboardId"
).innerHTML = `<div  class="keyboard-desktop">
      <div class="main-keyboard">
        <div class="keyboard-row">
          <button class="key" id="kEscape">Esc</button>
          <button class="key function-key" id="kF1">F1</button>
          <button class="key function-key" id="kF2">F2</button>
          <button class="key function-key" id="kF3">F3</button>
          <button class="key function-key" id="kF4">F4</button>
          <span class="spacer"></span>
          <button class="key function-key" id="kF5">F5</button>
          <button class="key function-key" id="kF6">F6</button>
          <button class="key function-key" id="kF7">F7</button>
          <button class="key function-key" id="kF8">F8</button>
          <span class="spacer"></span>
          <button class="key function-key" id="kF9">F9</button>
          <button class="key function-key" id="kF10">F10</button>
          <button class="key function-key" id="kF11">F11</button>
          <button class="key function-key" id="kF12">F12</button>
          <span class="spacer "></span>
          <button class="key utility-key" id="kPrintScreen">PrtSc</button>
          <button class="key utility-key" id="kScrollLock">ScrlLck</button>
          <button class="key utility-key" id="kPauseBreak">Pause</button>
        </div>

        <div class="keyboard-row">
          <button class="key" id="kTilda">\`</button>
          <button class="key" id="k1">1</button>
          <button class="key" id="k2">2</button>
          <button class="key" id="k3">3</button>
          <button class="key" id="k4">4</button>
          <button class="key" id="k5">5</button>
          <button class="key" id="k6">6</button>
          <button class="key" id="k7">7</button>
          <button class="key" id="k8">8</button>
          <button class="key" id="k9">9</button>
          <button class="key" id="k0">0</button>
          <button class="key" id="kMinus">-</button>
          <button class="key" id="kEquals">=</button>
          <button class="key backspace-key" id="kBackspace">Backspace</button>
          <span class="spacer large"></span>
          <button class="key nav-key" id="kInsert">Ins</button>
          <button class="key nav-key" id="kHome">Home</button>
          <button class="key nav-key" id="kPageUp">PgUp</button>
        </div>

        <div class="keyboard-row">
          <button class="key tab-key" id="kTab">Tab</button>
          <button class="key" id="kQ">Q</button>
          <button class="key" id="kW">W</button>
          <button class="key" id="kE">E</button>
          <button class="key" id="kR">R</button>
          <button class="key" id="kT">T</button>
          <button class="key" id="kY">Y</button>
          <button class="key" id="kU">U</button>
          <button class="key" id="kI">I</button>
          <button class="key" id="kO">O</button>
          <button class="key" id="kP">P</button>
          <button class="key" id="kOpenBracket">[</button>
          <button class="key" id="kCloseBracket">]</button>
          <button class="key backslash-key" id="kBackslash">\</button>
          <span class="spacer large"></span>
          <button class="key nav-key" id="kDelete">Del</button>
          <button class="key nav-key" id="kEnd">End</button>
          <button class="key nav-key" id="kPageDown">PgDn</button>
        </div>

        <div class="keyboard-row">
          <button class="key caps-key" id="kCapsLock">Caps Lock</button>
          <button class="key" id="kA">A</button>
          <button class="key" id="kS">S</button>
          <button class="key" id="kD">D</button>
          <button class="key" id="kF">F</button>
          <button class="key" id="kG">G</button>
          <button class="key" id="kH">H</button>
          <button class="key" id="kJ">J</button>
          <button class="key" id="kK">K</button>
          <button class="key" id="kL">L</button>
          <button class="key" id="kSemicolon">;</button>
          <button class="key" id="kQuote">'</button>
          <button class="key enter-key" id="kEnter">Enter</button>
        </div>

        <div class="keyboard-row">
          <button class="key shift-key left" id="kLeftShift">Shift</button>
          <button class="key" id="kZ">Z</button>
          <button class="key" id="kX">X</button>
          <button class="key" id="kC">C</button>
          <button class="key" id="kV">V</button>
          <button class="key" id="kB">B</button>
          <button class="key" id="kN">N</button>
          <button class="key" id="kM">M</button>
          <button class="key" id="kComma">,</button>
          <button class="key" id="kPeriod">.</button>
          <button class="key" id="kSlash">/</button>
          <button class="key shift-key right" id="kRightShift">Shift</button>
          <span class="spacer large"></span>
          <div class="arrow-keys-block">
            <button class="key arrow-key empty"></button><!-- 
            <button class="key arrow-key empty"></button> -->
            <button class="key arrow-key" id="kArrowUp">▲</button>
          </div>
        </div>

        <div class="keyboard-row">
          <button class="key ctrl-key" id="kLeftCtrl">Ctrl</button>
          <button class="key win-key" id="kLeftWin">Win</button>
          <button class="key alt-key" id="kLeftAlt">Alt</button>
          <button class="key space-key" id="kSpace">Space</button>
          <button class="key alt-key" id="kRightAlt">Alt</button>
          <button class="key fn-key" id="kFn">Fn</button>
          <button class="key ctrl-key" id="kRightCtrl">Ctrl</button>
          <span class="spacer large"></span>
          <div class="arrow-keys-block">
            <button class="key arrow-key" id="kArrowLeft">◀</button>
            <button class="key arrow-key" id="kArrowDown">▼</button>
            <button class="key arrow-key" id="kArrowRight">▶</button>
          </div>
        </div>
      </div>

      <div class="numpad">
        <div class="lftdv">
          <div class="keyboard-row">
            <button class="key numpad-key" id="kNumLock">Num Lock</button>
            <button class="key numpad-key" id="kNumDivide">/</button>
            <button class="key numpad-key" id="kNumMultiply">*</button>
          </div>
          <div class="keyboard-row">
            <button class="key numpad-key" id="kNum7">7</button>
            <button class="key numpad-key" id="kNum8">8</button>
            <button class="key numpad-key" id="kNum9">9</button>
          </div>
          <div class="keyboard-row">
            <button class="key numpad-key" id="kNum4">4</button>
            <button class="key numpad-key" id="kNum5">5</button>
            <button class="key numpad-key" id="kNum6">6</button>
          </div>
          <div class="keyboard-row">
            <button class="key numpad-key" id="kNum1">1</button>
            <button class="key numpad-key" id="kNum2">2</button>
            <button class="key numpad-key" id="kNum3">3</button>
          </div>
          <div class="keyboard-row">
            <button class="key numpad-key double-width" id="kNum0">0</button>
            <button class="key numpad-key" id="kNumDecimal">.</button>
          </div>
        </div>
        <div class="rghtDv">
          <button class="key numpad-key" id="kNumMinus">-</button>
          <button class="key numpad-key tall" id="kNumPlus">+</button>
          <button class="key numpad-key tall" id="kNumEnter">Enter</button>
        </div>
      </div>
    </div>
`;
 */