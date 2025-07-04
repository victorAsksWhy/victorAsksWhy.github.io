//import Chance from 'chance'
//const chance = new Chance()
var baseppc = 1;
var points = 0;
var bonusTotal = 0;
//stuff for leavves
var lpcBase = 1;
var leaves = 0;
var leafBonusTotal = 0


function update(){
    var pointsPerClick = baseppc +bonusTotal;
    document.getElementById("pointIndicator").innerHTML=pointsPerClick;
    document.getElementById("pointstext").innerHTML=points;
    document.getElementById('leafTextDisplay').innerHTML=leaves;
    pluralize();
}
function setpoints(n){ //🤫
    points=n;
    update();
}
function pluralize(){
    var pointsPerClick = baseppc +bonusTotal;
    if (pointsPerClick != 1){
        document.getElementById('pointsPluralize').innerHTML='points.';
    }
	if (points != 1) {
		document.getElementById('pointstextPluralize').innerHTML='points.';
	}
};
function calculateBonus(type, amount, baseOrBoost){
	const snd = new Audio('upgsound.mp3')
    if (baseOrBoost == 'base'){ //type: additive or multiplicative.
        if (type == 'add'){     //amount + or times by how much
            baseppc += amount;
			snd.play();//baseOrBoost: modify the base or add a boost
        }
        else if (type == 'multi'){
            baseppc = Math.ceil(baseppc * amount);
			snd.play();
        }
    }
    else if (baseOrBoost == 'boost'){
        if (type == 'add'){
            bonusTotal += amount;
			snd.play();
        }
        else if (type == 'multi'){
            bonusTotal = bonusTotal * amount;
			snd.play();
			//pls don't use this it will screw up progression
        }
    };
    //update();
};
function addPoint(){
    var pointsPerClick = baseppc+bonusTotal;    
    points += pointsPerClick;
	document.activeElement.blur()
	console.log("%d points and %d PPC",points,pointsPerClick);
    update();
}
var upgrade1cost = 10; //formula: 10*level^1.2 must be declared outside!
var upgrade1level = 1; //must be ou --- rest of comment missing, no idea what it was for
function upgrade1(){  
    var upgrade1maxlevel = 20;
    var type = 'add';
    var amount = 1;
    var boostType = 'boost';
    if (points >= upgrade1cost && upgrade1level < upgrade1maxlevel){
        points -= upgrade1cost;    
        upgrade1level += 1;
        upgrade1cost = Math.round(10 * upgrade1level ** 1.2);  
        console.log('point upg1 cost: %d. level: %d', upgrade1cost,upgrade1level)
        document.getElementById("upgrade1costindicator").innerHTML=upgrade1cost;
        document.getElementById("upg1level").innerHTML=upgrade1level;     
        calculateBonus(type, amount, boostType);
        update();
        
    };  
};
//upgrade 2 things

var upgrade2cost = 75; //formula: 75*2^level
var upgrade2level = 0;
function upgrade2(){  
    var upgrade2maxlevel = 5;
    var type = 'multi';
    var amount = 1.5;
    var boostType = 'base';
    if (points >= upgrade2cost && upgrade2level < upgrade2maxlevel){
        points -= upgrade2cost;    
        upgrade2level += 1;
        upgrade2cost = Math.round(75*2**upgrade2level);
        console.log("the cost of upg 2 is now %d and the level is %d",upgrade2cost, upgrade2level);
        document.getElementById("upgrade2costindicator").innerHTML=upgrade2cost;
        document.getElementById("upg2level").innerHTML=upgrade2level;     
        calculateBonus(type,amount,boostType);
        update();
    };
};

//upgrade 3 things

var upgrade3cost = 750;
var upgrade3level = 0;
function upgrade3(){
    var upgrade3maxlevel = 1;
    var type='add';
    var amount=25;
    var boostType='boost';
    if (points >= upgrade3cost && upgrade3level < upgrade3maxlevel){
        boughtUpgrade3 = 1;
        points -= upgrade3cost;
        upgrade3level += 1;
        upgrade3cost = Math.round(750*1.15**upgrade3level);
        console.log("the cost of upg 3 is now %d with level %d", upgrade3level, upgrade3cost);
        document.getElementById("upg3level").innerHTML=upgrade3level;
        document.getElementById("upgrade3costIndicator").innerHTML=upgrade3cost;
        calculateBonus(type,amount,boostType);
        update();
    };
};
var upgrade4cost = 3000;
var upgrade4level = 0;
var boughtupgrade4 = 0;
function upgrade4(){ // unlocks natyre will not use da system
    var maxlevel = 1;
        if (points >= upgrade4cost && upgrade4level < maxlevel && boughtupgrade4==0){
			const soundeffect = new Audio('tierupsound.mp3')
            points -= upgrade4cost;
			document.querySelectorAll('.leafstuff').forEach(el => {
				el.style.display='block';
			});
            update();
			soundeffect.play();
			console.log('played sound tierup.mp3');
            console.log('unlocked nature!');
			boughtupgrade4='ye';
			document.getElementById('leafunlocked').innerHTML='Unlocked!';
    }
}

// stuff for levaes
function displayLeafProgress(unlocked){
	const affectedElments = document.querySelectorAll('[name="affectedByLeaf"]');
	if (unlocked == false){
		affectedElments.forEach(elem => {elem.style.display = 'none';})
	} 
	else {
		affectedElments.forEach(elem => {elem.style.display = '';});
	};
};
function makeLeaf(){
    var leafsToMake = lpcBase+leafBonusTotal;
    leaves += leafsToMake;
    console.log('maked %d', leaves); // maked hahah
    update();
};