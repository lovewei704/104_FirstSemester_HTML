/*------------------------------------------------------------------------------------------------------------*/
/*全域變數&事件*/

/*------------------------------------------------------------------------------*/
/*全域變數*/

//宣告 for 物件
/*Story*/
var story0;
var story0_1;
var story1;
var story2;
var story3;
var story4;
var story5;
var story5_1;
var story5_2;
var story6;
/*Battle*/
var battleRole;
var battleRoleHp;
var battleRoleNowHp; 
var battleRoleAllHp; 
var battleCat;
var battleCatName;
var battleCatHp;
var battleCatNowHp; 
var battleCatAllHp; 
var battleDrug;
var battleDrugAmount;
var battleResult;
var battleCloseButton;
var battleWinResult;
var battleLoseResult;
var battleGainMoney;
var battleWinCat;
var battleLoseMsg;
/*GameHub*/
var hubRole;
var hubBattleStartButton;
var hubMoney;
var hubDrug;
/*ShopMenu*/
var shopMoney;
/*Roles*/
var rolesBuyButton0;
var roleChooseButton0;
var rolesBuyButton1;
var roleChooseButton1;
var rolesBuyButton2;
var roleChooseButton2;
var rolesBuyButton3;
var roleChooseButton3;
var rolesBuyButton4;
var roleChooseButton4;
var rolesMoneyImg;
var rolesPrice0;
var rolesPrice1;
var rolesPrice2;
var rolesPrice3;
var rolesPrice4;
/*Arms*/
var armsNowDiv;
var armsNextDiv;
var armsNowArms1;
var armsNowArms2;
var armsNowArms3;
var armsNowArms4;
var armsNowArms5;
var armsNowArms6;
var armsNowArms7;
var armsNowArms8;
var armsNowArms9;
var armsNowArms10;
var armsATK;
var armsPrice;
var armsEvolotionButton;
var armsNextArms;
/*Drug*/
var drugDrugAmount;
var drugPrice;
/*Atlas*/
var atlasCat1;
var atlasCat2;
var atlasCat3;
var atlasCat4;
var atlasCat5;
var atlasCat6;
var atlasCat7;
var atlasCat8;
var atlasCat9;
var atlasCat10;
var atlasCat11;
var atlasCat12;
var atlasCat13;
var atlasCat14;
var atlasCat15;
var atlasCat16;
var atlasCat17;
var atlasCat18;
var atlasCat19;
var atlasCat20;
var atlasCat21;
var atlasCat;
var atlasDivBack;
var atlasDiv;

/*------------------------------------------------------------------------------*/
/*事件*/

//禁止拉圖片
document.ondragstart = function () { "use strict";	return false; }; 

//取得元素ID
function GetAllElementID() 
{
	/*------------------------------------------------------*/
	/*Story*/
		story0 = document.getElementById("story0");
		story0_1 = document.getElementById("story0_1");
 		story1 = document.getElementById("story1");
 		story2 = document.getElementById("story2");
 		story3 = document.getElementById("story3");
 		story4 = document.getElementById("story4");
 		story5 = document.getElementById("story5");
		story5_1 = document.getElementById("story5_1");
		story5_2 = document.getElementById("story5_2");
 		story6 = document.getElementById("story6");
	/*------------------------------------------------------*/
	/*Battle*/
		battleRole = document.getElementById("battleRole");
		battleRoleHp = document.getElementById("battleRoleHp");
		battleRoleNowHp = document.getElementById("battleRoleNowHp");
		battleRoleAllHp = document.getElementById("battleRoleAllHp");
		
		battleCat = document.getElementById("battleCat");
		battleCatName = document.getElementById("battleCatName");
		battleCatHp = document.getElementById("battleCatHp");
		battleCatNowHp = document.getElementById("battleCatNowHp");
		battleCatAllHp = document.getElementById("battleCatAllHp");
		
		battleDrug = document.getElementById("battleDrug");
		battleDrugAmount = document.getElementById("battleDrugAmount");
		battleResult = document.getElementById("battleResult");
		battleCloseButton = document.getElementById("battleCloseButton");
		battleWinResult = document.getElementById("battleWinResult");
		battleLoseResult = document.getElementById("battleLoseResult");
		battleGainMoney = document.getElementById("battleGainMoney");
		battleWinCat = document.getElementById("battleWinCat");
		battleLoseMsg = document.getElementById("battleLoseMsg");
	/*------------------------------------------------------*/
	/*GameHub*/
		hubRole = document.getElementById("hubRole");
		hubBattleStartButton = document.getElementById("hubBattleStartButton");
		hubMoney = document.getElementById("hubMoney");
		hubDrug = document.getElementById("hubDrug");
	/*Shop*/
		shopMoney = document.getElementsByClassName("shopMoney");
	/*Roles*/
		rolesBuyButton0 = document.getElementById("rolesBuyButton0");
 		roleChooseButton0 = document.getElementById("roleChooseButton0");
 		rolesBuyButton1 = document.getElementById("rolesBuyButton1");
 		roleChooseButton1 = document.getElementById("roleChooseButton1");
 		rolesBuyButton2 = document.getElementById("rolesBuyButton2");
 		roleChooseButton2 = document.getElementById("roleChooseButton2");
 		rolesBuyButton3 = document.getElementById("rolesBuyButton3");
 		roleChooseButton3 = document.getElementById("roleChooseButton3");
 		rolesBuyButton4 = document.getElementById("rolesBuyButton4");
 		roleChooseButton4 = document.getElementById("roleChooseButton4");
		rolesMoneyImg = document.getElementsByClassName("rolesMoneyImg");	
		rolesPrice0 = document.getElementById("rolesPrice0");
	 	rolesPrice1 = document.getElementById("rolesPrice1");
 		rolesPrice2 = document.getElementById("rolesPrice2");
 		rolesPrice3 = document.getElementById("rolesPrice3");
	 	rolesPrice4 = document.getElementById("rolesPrice4");
	/*Arms*/
		armsNowDiv = document.getElementById("armsNowDiv");
		armsNextDiv = document.getElementById("armsNextDiv");
		armsNowArms1 = document.getElementById("armsNowArms1");
		armsNowArms2 = document.getElementById("armsNowArms2");
		armsNowArms3 = document.getElementById("armsNowArms3");
		armsNowArms4 = document.getElementById("armsNowArms4");
		armsNowArms5 = document.getElementById("armsNowArms5");
		armsNowArms6 = document.getElementById("armsNowArms6");
		armsNowArms7 = document.getElementById("armsNowArms7");
		armsNowArms8 = document.getElementById("armsNowArms8");
		armsNowArms9 = document.getElementById("armsNowArms9");
		armsNowArms10 = document.getElementById("armsNowArms10");
		armsATK = document.getElementById("armsATK");
		armsPrice = document.getElementById("armsPrice");
		armsEvolotionButton = document.getElementById("armsEvolotionButton");
		armsNextArms = document.getElementById("armsNextArms");
	/*Drug*/
		drugDrugAmount = document.getElementById("drugDrugAmount");
		drugPrice = document.getElementById("drugPrice");
	/*Atlas*/
		atlasCat1 = document.getElementById("atlasCat1");
		atlasCat2 = document.getElementById("atlasCat2");
		atlasCat3 = document.getElementById("atlasCat3");
		atlasCat4 = document.getElementById("atlasCat4");
		atlasCat5 = document.getElementById("atlasCat5");
		atlasCat6 = document.getElementById("atlasCat6");
		atlasCat7 = document.getElementById("atlasCat7");
		atlasCat8 = document.getElementById("atlasCat8");
		atlasCat9 = document.getElementById("atlasCat9");
		atlasCat10 = document.getElementById("atlasCat10");
		atlasCat11 = document.getElementById("atlasCat11");
		atlasCat12 = document.getElementById("atlasCat12");
		atlasCat13 = document.getElementById("atlasCat13");
		atlasCat14 = document.getElementById("atlasCat14");
		atlasCat15 = document.getElementById("atlasCat15");
		atlasCat16 = document.getElementById("atlasCat16");
		atlasCat17 = document.getElementById("atlasCat17");
		atlasCat18 = document.getElementById("atlasCat18");
		atlasCat19 = document.getElementById("atlasCat19");
		atlasCat20 = document.getElementById("atlasCat20");
		atlasCat21 = document.getElementById("atlasCat21");
		atlasCat = document.getElementsByClassName("atlasCat");
		atlasDivBack = document.getElementById("atlasDivBack");
		atlasDiv = document.getElementsByClassName("atlasDiv");
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*index*/

// 初始化資料 (LocalStorage)
function InitializeFile()
{
	alert("為了確保能有最完美的遊戲體驗，\r建議您使用 1920 * 1080 之解析度遊玩！");
	if(!localStorage.nowRole) {localStorage.nowRole = 0; }
	if(!localStorage.nowRoleImgSrc) { localStorage.nowRoleImgSrc = "img/role/role0.png"; }
	if(!localStorage.nowRoleBattleImgSrc) { localStorage.nowRoleBattleImgSrc = "img/role/role0.png";}
	if(!localStorage.nowRoleHpValue) { localStorage.nowRoleHpValue = 10; }
	
	if(!localStorage.nowArms) { localStorage.nowArms = 0; }
	if(!localStorage.attackDamage) { localStorage.attackDamage = 1; }
	
	if(!localStorage.moneyAmount) { localStorage.moneyAmount = 0; }
	if(!localStorage.drugAmount) { localStorage.drugAmount = 5; }
	if(!localStorage.nowStage) { localStorage.nowStage = 0; }
	if(!localStorage.nextStage) { localStorage.nextStage = false; }
	if(!localStorage.lastStage) { localStorage.lastStage = false; }
	
	if(!localStorage.buyRole0) { localStorage.buyRole0 = true; }
	if(!localStorage.buyRole1) { localStorage.buyRole1 = false; }
	if(!localStorage.buyRole2) { localStorage.buyRole2 = false; }
	if(!localStorage.buyRole3) { localStorage.buyRole3 = false; }								  
	if(!localStorage.buyRole4) { localStorage.buyRole4 = false; }
}
// 重置資料
function Reset()
{
	var check = confirm("確定要重置嘛？");
	if(check)
	{ 
	  alert("重置成功！"); 
	  localStorage.nowRole = 0 ;
	  localStorage.nowRoleImgSrc = "img/role/role0.png";
	  localStorage.nowRoleBattleImgSrc = "img/role/role0.png";
	  localStorage.nowRoleHpValue = 10;
	  
	  localStorage.nowArms = 0;
	  localStorage.attackDamage = 1;
	  
	  localStorage.moneyAmount = 0;
	  localStorage.drugAmount = 5;
	  localStorage.nowStage = 0;
	  localStorage.nextStage = false;
	  localStorage.lastStage = false;
	  
	  localStorage.buyRole0 = true;
	  localStorage.buyRole1 = false;
	  localStorage.buyRole2 = false;
	  localStorage.buyRole3 = false;									  
	  localStorage.buyRole4 = false;
	}
	else
	{
		alert("取消");
	}
}
//連結到序章故事視窗
function OpenStory()
{
	if(localStorage.nowStage == 21) { window.location.href = "GameHub.html"; }
	else if(localStorage.nowStage == 0 ||
	localStorage.nowStage == 1 ||
	localStorage.nowStage == 5 ||
	localStorage.nowStage == 10 ||
	localStorage.nowStage == 15 ||
	localStorage.nowStage == 20) {window.location.href = "Story.html"; }
	else { window.location.href = "GameHub.html"; }
}
//打開玩法介紹的小視窗
function OpenHowToPlayWindow()
{
	var winvar = window.open("HowToPlay.html","HowToPlay","width=830 height=380 left=540 top=430 menubar");
}
//連結到作者簡介視窗
function OpenDevelopers()
{
	window.location.href = "Developers.html";
}

/*------------------------------------------------------------------------------------------------------------*/
/*Developers*/

//返回標題視窗
function BackToTitle()
{
	window.location.href="index.html";
}

/*------------------------------------------------------------------------------------------------------------*/
/*Story*/

var page = 0;

//Story.html OnLoad事件
function StoryOnLoadEvent()
{
	GetAllElementID();
	ShowStory();
}
//顯示故事
function ShowStory()
{
	if(localStorage.nowStage == 0) { story0.style.display = "inline"; }
	else if(localStorage.nowStage == 1) { story1.style.display = "inline"; }
	else if(localStorage.nowStage == 5) { story2.style.display = "inline"; }
	else if(localStorage.nowStage == 10) { story3.style.display = "inline"; }
	else if(localStorage.nowStage == 15) { story4.style.display = "inline"; }
	else if(localStorage.nowStage == 20) { story5.style.display = "inline"; }
	else if(localStorage.nowStage == 21) { story6.style.display = "inline"; }
}
//下一頁按鈕為顯示故事
function Story_Visible()
{
	if(localStorage.nowStage == 0)
	{
		story0.style.display="none";
		story0_1.style.display="inline";
	}
	else if(localStorage.nowStage == 20 && page == 0)
	{
		page = 1;
		story5.style.display="none";
		story5_1.style.display="inline";
	}
	else if(localStorage.nowStage == 20 && page == 1)
	{
		story5_1.style.display="none";
		story5_2.style.display="inline";
	}
}

//下一頁按鈕
function NextPageButton()
{
	if(localStorage.nowStage == 0)
	{
		window.location.href="Battle.html";
	}
	else
	{
		window.location.href="GameHub.html";
	}
}


/*------------------------------------------------------------------------------------------------------------*/
/*Battle*/

var battleCatImgSrc="img/cat/cat1.png";
var battleCatFightImgSrc="img/cat/cat1_F.png";
var catName = ('鄰居喵');
var	 battleCatHpValue = 30;
var	 battleCatDanage = 2;
var	 battleCatAttackDelay = 4;
var battleGainMoneyMax = 500;
var battleGainMoneyMin = 500;

var catAttackAnimation;
var attackTimer;
var x = 900;
var y = 0;
var count = 0; //控制動作用
var win = false;
var lose = false;
var gainMoney;

// Battle.html OnLoad事件
function BattleOnloadEvent()
{
	GetAllElementID();
	RoleSetting();
	ArmsSetting();
	StageSetting();
	SettingBattleElement();
	AttackTimer();
}
//設定所有數值
function SettingBattleElement()
{
	battleRole.src = localStorage.nowRoleBattleImgSrc;
	battleRoleHp.max = localStorage.nowRoleHpValue;
	battleRoleHp.value = localStorage.nowRoleHpValue;
	battleRoleNowHp.innerHTML = localStorage.nowRoleHpValue;
	battleRoleAllHp.innerHTML = localStorage.nowRoleHpValue;
	
	battleCat.src = battleCatImgSrc;
	battleCatHp.max = battleCatHpValue;
	battleCatHp.value = battleCatHpValue;
	battleCatNowHp.innerHTML = battleCatHpValue;
	battleCatAllHp.innerHTML = battleCatHpValue;
	battleCatName.innerText = catName;
	
	battleDrugAmount.innerText = localStorage.drugAmount;
}

//玩家攻擊
function PlayerAttack()
{
	battleCatHp.value -= localStorage.attackDamage;
	battleCatNowHp.innerHTML = battleCatHp.value;
	
	if(battleCatHp.value <= 0 && !win)
	{
		clearInterval(attackTimer);
		clearInterval(catAttackAnimation);
		win = true;
		battleWinCat.innerText = catName;
		gainMoney = Math.floor(Math.random() * (battleGainMoneyMax - battleGainMoneyMin + 1)) + battleGainMoneyMin;	
		battleGainMoney.innerText = gainMoney;
		localStorage.moneyAmount = parseInt(localStorage.moneyAmount) + gainMoney;
		battleResult.style.visibility = "visible";
		battleWinResult.style.visibility = "visible";
		battleCloseButton.style.visibility = "visible";
		if(localStorage.nowStage == 0) { localStorage.nowArms = 1; }
		if(JSON.parse(localStorage.nextStage) == true || localStorage.nowStage == 0) { localStorage.nowStage++; }
		if( localStorage.nowStage >= 21 ) { localStorage.nowStage = 21; }
	}
}
//喝藥水補血
function DrinkDrug()
{
	if(win || lose || battleRoleNowHp.innerHTML == battleRoleHp.max) {}
	else if(localStorage.drugAmount>0)
	{
		localStorage.drugAmount = parseInt(localStorage.drugAmount) - 1;
		battleDrugAmount.innerText = localStorage.drugAmount;
	
		battleRoleHp.value += 20;
		battleRoleNowHp.innerHTML = battleRoleHp.value;
	}
	else
	{
		battleDrugAmount.style.color = "red";
	}
}
//依 battleCatAttackDelay 決定貓咪攻擊一次秒數
function AttackTimer()
{
	attackTimer = setInterval(BattleCatAttack,battleCatAttackDelay*1000);
}
//貓咪攻擊
function BattleCatAttack()
{
	catAttackAnimation = setInterval(BattleCatAttckAnimation,5);
}
//貓咪攻擊動畫
function BattleCatAttckAnimation()
{	
	battleCat.style.marginLeft = x + "px";
	battleCat.style.marginTop = y + "px";
	
	if(x <= 500)
	{
		battleRoleHp.value -= battleCatDanage;
		battleRoleNowHp.innerHTML = battleRoleHp.value;

		battleCat.src = battleCatImgSrc;
		
		if(battleRoleHp.value <= 0)
		{	
			clearInterval(attackTimer);
			clearInterval(catAttackAnimation);
			lose = true;
			RandomLoseMessage();
			battleResult.style.visibility = "visible";
			battleLoseResult.style.visibility = "visible";
			battleCloseButton.style.visibility = "visible";
		}
	}
	
	if(x<1300 && count===0) 
	{
		x=x+2;
	}
	else
	{
		if(x===1300)
		{
			battleCat.src = battleCatFightImgSrc;
		}
		
		if(count===0) {count = 1;}
		if(x>500 && count===1) 
		{	
			x=x-10;
			if(x>=900) { y=y-5;}
			else { y=y+5;}
		}
		else 
		{
			count = 2;
			if(x===900)
			{
				count=0;
				clearInterval(catAttackAnimation);
			}
			else
			{
				if(x<700)
				{
					x=x+2;
					if(x<=600) { y=y-3; }
					else { y=y+3; }
				}
				else
				{
					x=x+2;
					if(x<=800) { y=y-3; }
					else { y=y+3; }
				}
			}
		}
	}
}
// 隨機失敗訊息
function RandomLoseMessage()
{
	switch(Math.floor(Math.random() * 3) + 1)
	{
		case 1:
			battleLoseMsg.innerText = "來強化你的武器";
			break;
		case 2:
			battleLoseMsg.innerText = "購買更強力的角色";
			break;
		case 3:
			battleLoseMsg.innerText = "購買更多的藥水";
			break;
	}
}
// 關閉結束報表
function CloseResult()
{
	if(localStorage.nowStage == 0 && lose) { window.location.href="index.html"; }
	else if(localStorage.nowStage == 1 && win && JSON.parse(localStorage.lastStage) == false) { window.location.href="Story.html"; }
	else if(localStorage.nowStage == 5 && win && JSON.parse(localStorage.nextStage) == true) { window.location.href="Story.html"; }
	else if(localStorage.nowStage == 10 && win && JSON.parse(localStorage.nextStage) == true) { window.location.href="Story.html"; }
	else if(localStorage.nowStage == 15 && win && JSON.parse(localStorage.nextStage) == true) { window.location.href="Story.html"; }
	else if(localStorage.nowStage == 20 && win && JSON.parse(localStorage.nextStage) == true) { window.location.href="Story.html"; }
	else if(localStorage.nowStage == 21 && win && JSON.parse(localStorage.nextStage) == true) { window.location.href="Story.html"; }
	else { window.location.href="GameHub.html"; }
}


/*------------------------------------------------------------------------------------------------------------*/
/*GameHub*/

//GameHub.html OnLoad事件
function GameHubOnLoadEvent()
{
	GetAllElementID();
	RoleSetting();
	SettingHubElement();
	localStorage.nextStage = false;
	localStorage.lastStage = false;
}
//設定大廳元素
function SettingHubElement()
{
	hubRole.src = localStorage.nowRoleImgSrc;
	hubMoney.innerText = localStorage.moneyAmount;
	hubDrug.innerText = localStorage.drugAmount;
}
//點擊戰鬥開始事件
function OpenStartBattle()
{
	hubBattleStartButton.style.visibility="hidden";
}
//連結到戰鬥視窗 （上一關）
function LastStage()
{
	localStorage.lastStage = true;
	hubBattleStartButton.style.visibility="visible";
	window.location.href = "Battle.html";
}
//連結到戰鬥視窗 （下一關）
function NextStage()
{
	localStorage.nextStage = true;
	hubBattleStartButton.style.visibility = "visible";
	window.location.href = "Battle.html";
}
//連結到商店視窗
function OpenShop()
{
	window.location.href="Shop.html";
	hubBattleStartButton.style.visibility="visible";
}
//連結到圖鑑視窗
function OpenAtlas()
{
	window.location.href="Atlas.html";
	hubBattleStartButton.style.visibility="visible";
}

/*------------------------------------------------------------------------------------------------------------*/
/*Roles*/

//Roles.html onLoad事件
function RolesOnLoadEvent()
{
	GetAllElementID();
	SettingRolse();
	shopMoney[0].innerText = localStorage.moneyAmount;
}

//角色商店設定
function SettingRolse()
{
	if(JSON.parse(localStorage.buyRole1) == true)
	{
		rolesBuyButton1.style.visibility = "hidden";
		roleChooseButton1.style.visibility = "visible";
		rolesMoneyImg[1].style.visibility = "hidden";
		rolesPrice1.style.visibility = "hidden";
	}
	if(JSON.parse(localStorage.buyRole2) == true)
	{
		rolesBuyButton2.style.visibility = "hidden";
		roleChooseButton2.style.visibility = "visible";
		rolesMoneyImg[2].style.visibility = "hidden";
		rolesPrice2.style.visibility = "hidden";
	}
	if(JSON.parse(localStorage.buyRole3) == true)
	{
		rolesBuyButton3.style.visibility = "hidden";
		roleChooseButton3.style.visibility = "visible";
		rolesMoneyImg[3].style.visibility = "hidden";
		rolesPrice3.style.visibility = "hidden";
	}
	if(JSON.parse(localStorage.buyRole4) == true)
	{
		rolesBuyButton4.style.visibility = "hidden";
		roleChooseButton4.style.visibility = "visible";
		rolesMoneyImg[4].style.visibility = "hidden";
		rolesPrice4.style.visibility = "hidden";
	}
}

//購買按鈕1
function BuyButton1()
{
	if(parseInt(localStorage.moneyAmount) >= parseInt(rolesPrice1.innerText))
	{
		localStorage.moneyAmount = parseInt(localStorage.moneyAmount) - parseInt(rolesPrice1.innerText);
		shopMoney[0].innerText = localStorage.moneyAmount;
		
		rolesBuyButton1.style.visibility = "hidden";
		roleChooseButton1.style.visibility = "visible";
		rolesMoneyImg[1].style.visibility = "hidden";
		rolesPrice1.style.visibility = "hidden";
		
		localStorage.buyRole1 = true;
	}
	else
	{
		rolesPrice1.style.color = "red";
	}
}
//購買按鈕2
function BuyButton2()
{
	if(parseInt(localStorage.moneyAmount) >= parseInt(rolesPrice2.innerText))
	{
		localStorage.moneyAmount = parseInt(localStorage.moneyAmount) - parseInt(rolesPrice2.innerText);
		shopMoney[0].innerText = localStorage.moneyAmount;
		
		rolesBuyButton2.style.visibility = "hidden";
		roleChooseButton2.style.visibility = "visible";
		rolesMoneyImg[2].style.visibility = "hidden";
		rolesPrice2.style.visibility = "hidden";
		
		localStorage.buyRole2 = true;
	}
	else
	{
		rolesPrice2.style.color = "red";
	}
}
//購買按鈕3
function BuyButton3()
{
	if(parseInt(localStorage.moneyAmount) >= parseInt(rolesPrice3.innerText))
	{
		localStorage.moneyAmount = parseInt(localStorage.moneyAmount) - parseInt(rolesPrice3.innerText);
		shopMoney[0].innerText = localStorage.moneyAmount;
		
		rolesBuyButton3.style.visibility = "hidden";
		roleChooseButton3.style.visibility = "visible";
		rolesMoneyImg[3].style.visibility = "hidden";
		rolesPrice3.style.visibility = "hidden";
		
		localStorage.buyRole3 = true;
	}
	else
	{
		rolesPrice3.style.color = "red";
	}
}
//購買按鈕4
function BuyButton4()
{
	if(parseInt(localStorage.moneyAmount) >= parseInt(rolesPrice4.innerText))
	{
		localStorage.moneyAmount = parseInt(localStorage.moneyAmount) - parseInt(rolesPrice4.innerText);
		shopMoney[0].innerText = localStorage.moneyAmount;
		
		rolesBuyButton4.style.visibility = "hidden";
		roleChooseButton4.style.visibility = "visible";
		rolesMoneyImg[4].style.visibility = "hidden";
		rolesPrice4.style.visibility = "hidden";
		
		localStorage.buyRole4 = true;
	}
	else
	{
		rolesPrice4.style.color = "red";
	}
}
//選擇按鈕0
function ChooseButton0()
{
	if(JSON.parse(localStorage.buyRole0) == true)
	{
		localStorage.nowRole = 0;
	}
}
//選擇按鈕1
function ChooseButton1()
{
	if(JSON.parse(localStorage.buyRole1) == true)
	{
		localStorage.nowRole = 1;
	}
}
//選擇按鈕2
function ChooseButton2()
{
	if(JSON.parse(localStorage.buyRole2) == true)
	{
		localStorage.nowRole = 2;
	}
}
//選擇按鈕3
function ChooseButton3()
{
	if(JSON.parse(localStorage.buyRole3) == true)
	{
		localStorage.nowRole = 3;
	}
}
//選擇按鈕4
function ChooseButton4()
{
	if(JSON.parse(localStorage.buyRole4) == true)
	{
		localStorage.nowRole = 4;
	}
}

/*------------------------------------------------------------------------------------------------------------*/
/*Arms*/

var evolutionAnimation;
var evolutionAnimation2;
var animationControler;
var nowArms;
var nextArms;
var armsNowDiv_x = 200;
var armsNextDiv_x = 950;

//Arms.html onLoad事件
function ArmsOnLoadEvent()
{
	GetAllElementID();
	SettingArms();
	nowArms.style.visibility = "visible";
	shopMoney[0].innerText = localStorage.moneyAmount;
}
//武器設置
function SettingArms()
{
	if(localStorage.nowArms == 1) 
	{
		 nowArms = armsNowArms1; 
		 nextArms = armsNowArms2;
		 armsATK.innerText = 3;
		 armsPrice.innerText = 1200;
	}
	else if(localStorage.nowArms == 2) 
	{ 
		nowArms = armsNowArms2; 
		nextArms = armsNowArms3;
		 armsATK.innerText = 7;
		 armsPrice.innerText = 3600;
	}
	else if(localStorage.nowArms == 3) 
	{ 
		nowArms = armsNowArms3; 
		nextArms = armsNowArms4;
		 armsATK.innerText = 20;
		 armsPrice.innerText = 7200;
	}
	else if(localStorage.nowArms == 4) 
	{
		 nowArms = armsNowArms4; 
		 nextArms = armsNowArms5;
		 armsATK.innerText = 54;
		 armsPrice.innerText = 10800;
	}
	else if(localStorage.nowArms == 5) 
	{
		 nowArms = armsNowArms5; 
		 nextArms = armsNowArms6;
		 armsATK.innerText = 148;
		 armsPrice.innerText = 14400;
	}
	else if(localStorage.nowArms == 6) 
	{
		 nowArms = armsNowArms6; 
		 nextArms = armsNowArms7;
		 armsATK.innerText = 404;
		 armsPrice.innerText = 18000;
	}
	else if(localStorage.nowArms == 7) 
	{
		 nowArms = armsNowArms7; 
		 nextArms = armsNowArms8;
		 armsATK.innerText = 1104;
		 armsPrice.innerText = 21600;
	}
	else if(localStorage.nowArms == 8) 
	{
		 nowArms = armsNowArms8; 
		 nextArms = armsNowArms9;
		 armsATK.innerText = 3016;
		 armsPrice.innerText = 25200;
	}
	else if(localStorage.nowArms == 9) 
	{
		 nowArms = armsNowArms9;
		 nextArms = armsNowArms10;
		 armsATK.innerText = 8240;
		 armsPrice.innerText = 30000;
	}
	else if(localStorage.nowArms == 10) 
	{
		 nowArms = armsNowArms10; 
		 armsATK.innerText = 999999;
		 armsPrice.innerText = "";
		 armsNextArms.style.visibility = "hidden";
		 armsEvolotionButton.style.visibility = "hidden";
	}
}
//進化按扭
function Evolution()
{
	if(parseInt(localStorage.moneyAmount) >= parseInt(armsPrice.innerText))
	{
		armsEvolotionButton.style.visibility = "hidden";
		localStorage.moneyAmount = parseInt(localStorage.moneyAmount) - parseInt(armsPrice.innerText);
		shopMoney[0].innerText = localStorage.moneyAmount;
		evolutionAnimation = setInterval(EvolutionAnimation,5);
	}
	else
	{
		armsPrice.style.color = "red";
	}
}
//進化動畫
function EvolutionAnimation()
{
	armsNowDiv.style.marginLeft = armsNowDiv_x + "px";
	armsNextDiv.style.marginLeft = armsNextDiv_x + "px";
	
	if(armsNextDiv_x <= 575 && armsNowDiv_x >= 575)
	{
		nowArms.style.visibility = "hidden";
		nextArms.style.visibility = "visible";
		
		armsNextDiv.style.visibility = "hidden";
		localStorage.nowArms++;
		clearInterval(evolutionAnimation);
		setInterval(function() {evolutionAnimation2 = setInterval(EvolutionAnimation2,5);},1000);
	}
	else
	{
		armsNowDiv_x += 1;
		armsNextDiv_x -= 1;
	}
}
//進化動畫2
function EvolutionAnimation2()
{
	armsNowDiv.style.marginLeft = armsNowDiv_x + "px";
	
	if(armsNowDiv_x == 200)
	{
		clearInterval(evolutionAnimation2);
		armsNextDiv.style.visibility = "visible";
		window.location.reload("Arms.html");
	}
	else
	{
		armsNowDiv_x -= 1;
	}
}

/*------------------------------------------------------------------------------------------------------------*/
/*Drug*/

//Drug.html onLoad事件
function DrugOnLoadEvent()
{
	GetAllElementID();
	shopMoney[0].innerText = localStorage.moneyAmount;
	drugDrugAmount.innerText = localStorage.drugAmount;
}
//購買藥水
function BuyDrug()
{
	if(parseInt(localStorage.moneyAmount) >= drugPrice.innerText)
	{	
		localStorage.moneyAmount = parseInt(localStorage.moneyAmount) - parseInt(drugPrice.innerText);		
		localStorage.drugAmount = parseInt(localStorage.drugAmount) + 1;
		
		shopMoney[0].innerText = localStorage.moneyAmount;
		drugDrugAmount.innerText = localStorage.drugAmount;
	}
	else
	{
		drugPrice.style.color = "red";
	}
}

/*------------------------------------------------------------------------------------------------------------*/
/*Atlas*/

var atlasClick = 0;

//Atlas.html onLoad事件
function AtlasOnLoadEvent()
{
	GetAllElementID();
	ShowAtlas();
}
//顯示圖鑑.0
function ShowAtlas()
{
	for(var i=1; i<=localStorage.nowStage ;i++)
	{
		if(i == 1) { atlasCat1.style.visibility = "visible"; }
		else if(i == 2) { atlasCat2.style.visibility = "visible"; }
		else if(i == 3) { atlasCat3.style.visibility = "visible"; }
		else if(i == 4) { atlasCat4.style.visibility = "visible"; }
		else if(i == 5) { atlasCat5.style.visibility = "visible"; }
		else if(i == 6) { atlasCat6.style.visibility = "visible"; }
		else if(i == 7) { atlasCat7.style.visibility = "visible"; }
		else if(i == 8) { atlasCat8.style.visibility = "visible"; }
		else if(i == 9) { atlasCat9.style.visibility = "visible"; }
		else if(i == 10) { atlasCat10.style.visibility = "visible"; }
		else if(i == 11) { atlasCat11.style.visibility = "visible"; }
		else if(i == 12) { atlasCat12.style.visibility = "visible"; }
		else if(i == 13) { atlasCat13.style.visibility = "visible"; }
		else if(i == 14) { atlasCat14.style.visibility = "visible"; }
		else if(i == 15) { atlasCat15.style.visibility = "visible"; }
		else if(i == 16) { atlasCat16.style.visibility = "visible"; }
		else if(i == 17) { atlasCat17.style.visibility = "visible"; }
		else if(i == 18) { atlasCat18.style.visibility = "visible"; }
		else if(i == 19) { atlasCat19.style.visibility = "visible"; }
		else if(i == 20) { atlasCat20.style.visibility = "visible"; }
		else if(i == 21) { atlasCat21.style.visibility = "visible"; }
	}
}
//圖鑑滑鼠移上
function onAtlasMouseOver(i)
{
	if(i == 1) { atlasCat[0].src = "img/cat/cat1_F.png"; }
	else if(i == 2) { atlasCat[1].src = "img/cat/cat2_F.png"; }
	else if(i == 3) { atlasCat[2].src = "img/cat/cat3_F.png"; }
	else if(i == 4) { atlasCat[3].src = "img/cat/cat4_F.png"; }
	else if(i == 5) { atlasCat[4].src = "img/cat/cat5_F.png"; }
	else if(i == 6) { atlasCat[5].src = "img/cat/cat6_F.png"; }
	else if(i == 7) { atlasCat[6].src = "img/cat/cat7_F.png"; }
	else if(i == 8) { atlasCat[7].src = "img/cat/cat8_F.png"; }
	else if(i == 9) { atlasCat[8].src = "img/cat/cat9_F.png"; }
	else if(i == 10) { atlasCat[9].src = "img/cat/cat10_F.png"; }
	else if(i == 11) { atlasCat[10].src = "img/cat/cat11_F.png"; }
	else if(i == 12) { atlasCat[11].src = "img/cat/cat12_F.png"; }
	else if(i == 13) { atlasCat[12].src = "img/cat/cat13_F.png"; }
	else if(i == 14) { atlasCat[13].src = "img/cat/cat14_F.png"; }
	else if(i == 15) { atlasCat[14].src = "img/cat/cat15_F.png"; }
	else if(i == 16) { atlasCat[15].src = "img/cat/cat16_F.png"; }
	else if(i == 17) { atlasCat[16].src = "img/cat/cat17_F.png"; }
	else if(i == 18) { atlasCat[17].src = "img/cat/cat18_F.png"; }
	else if(i == 19) { atlasCat[18].src = "img/cat/cat19_F.png"; }
	else if(i == 20) { atlasCat[19].src = "img/cat/cat20_F.png"; }
	else if(i == 21) { atlasCat[20].src = "img/cat/cat21_F.png"; }
}
//圖鑑滑鼠移上
function onAtlasMouseOut(i)
{
	if(i == 1) { atlasCat[0].src = "img/cat/cat1.png"; }
	else if(i == 2) { atlasCat[1].src = "img/cat/cat2.png"; }
	else if(i == 3) { atlasCat[2].src = "img/cat/cat3.png"; }
	else if(i == 4) { atlasCat[3].src = "img/cat/cat4.png"; }
	else if(i == 5) { atlasCat[4].src = "img/cat/cat5.png"; }
	else if(i == 6) { atlasCat[5].src = "img/cat/cat6.png"; }
	else if(i == 7) { atlasCat[6].src = "img/cat/cat7.png"; }
	else if(i == 8) { atlasCat[7].src = "img/cat/cat8.png"; }
	else if(i == 9) { atlasCat[8].src = "img/cat/cat9.png"; }
	else if(i == 10) { atlasCat[9].src = "img/cat/cat10.png"; }
	else if(i == 11) { atlasCat[10].src = "img/cat/cat11.png"; }
	else if(i == 12) { atlasCat[11].src = "img/cat/cat12.png"; }
	else if(i == 13) { atlasCat[12].src = "img/cat/cat13.png"; }
	else if(i == 14) { atlasCat[13].src = "img/cat/cat14.png"; }
	else if(i == 15) { atlasCat[14].src = "img/cat/cat15.png"; }
	else if(i == 16) { atlasCat[15].src = "img/cat/cat16.png"; }
	else if(i == 17) { atlasCat[16].src = "img/cat/cat17.png"; }
	else if(i == 18) { atlasCat[17].src = "img/cat/cat18.png"; }
	else if(i == 19) { atlasCat[18].src = "img/cat/cat19.png"; }
	else if(i == 20) { atlasCat[19].src = "img/cat/cat20.png"; }
	else if(i == 21) { atlasCat[20].src = "img/cat/cat21.png"; }
}
//顯示貓咪故事
function ShowCatStory(atlas)
{
	atlasClick = atlas;
	atlasDivBack.style.visibility = "visible";
	atlasDiv[atlasClick].style.visibility = "visible";
}
//關閉故事視窗
function AtlasClose()
{
	atlasDivBack.style.visibility = "hidden";
	atlasDiv[atlasClick].style.visibility = "hidden";
}
//返回大廳視窗
function BackToHub()
{
	window.location.href="GameHub.html";
}

/*------------------------------------------------------------------------------------------------------------*/
/*關卡設定*/

var tempStage;

//關卡敵人資料設定
function StageSetting()
{
	if(JSON.parse(localStorage.nextStage) == true || localStorage.nowStage === 0)
	{
		if( localStorage.nowStage >= 21)
		{
			 tempStage = 21;
		}
		else
		{
			tempStage = localStorage.nowStage;
		}
	}
	else if (JSON.parse(localStorage.lastStage) == true)
	{
		tempStage = parseInt(localStorage.nowStage) - 1;
	}
	
	if(tempStage == 0)
	{
		 battleCatImgSrc="img/cat/cat1.png";
		 battleCatFightImgSrc="img/cat/cat1_F.png";
		 catName = ('鄰居喵');
		 battleCatHpValue = 30;
		 battleCatDanage = 2;
		 battleCatAttackDelay = 4;
		 battleGainMoneyMax = 500;
		 battleGainMoneyMin = 500;
	}
	else if(tempStage == 1)
	{
		 battleCatImgSrc = "img/cat/cat2.png";
		 battleCatFightImgSrc="img/cat/cat2_F.png";
		 catName = ('武士喵');
		 battleCatHpValue = 113;
		 battleCatDanage = 7;
		 battleCatAttackDelay = 3;
		 battleGainMoneyMax = 450;
		 battleGainMoneyMin = 950;
	}
	else if(tempStage == 2)
	{
		 battleCatImgSrc = "img/cat/cat3.png";
		 battleCatFightImgSrc="img/cat/cat3_F.png";
		 catName = ('歌星喵');
		 battleCatHpValue = 270;
		 battleCatDanage = 13;
		 battleCatAttackDelay = 3;
		 battleGainMoneyMax = 600;
		 battleGainMoneyMin = 1100;
	}	
	else if(tempStage == 3)
	{
		 battleCatImgSrc = "img/cat/cat4.png";
		 battleCatFightImgSrc="img/cat/cat4_F.png";
		 catName = ('漁父喵');
		 battleCatHpValue = 332;
		 battleCatDanage = 16;
		 battleCatAttackDelay = 3;
		 battleGainMoneyMax = 750;
		 battleGainMoneyMin = 1250;
	}	
	else if(tempStage == 4)
	{
		 battleCatImgSrc = "img/cat/cat5.png";
		 battleCatFightImgSrc="img/cat/cat5_F.png";
		 catName = ('天使喵');
		 battleCatHpValue = 685;
		 battleCatDanage = 17;
		 battleCatAttackDelay = 3;
		 battleGainMoneyMax = 900;
		 battleGainMoneyMin = 1400;
	}	
	else if(tempStage == 5)
	{
		 battleCatImgSrc = "img/cat/cat6.png";
		 battleCatFightImgSrc="img/cat/cat6_F.png";
		 catName = ('太空喵');
		 battleCatHpValue = 967;
		 battleCatDanage = 19;
		 battleCatAttackDelay = 3;
		 battleGainMoneyMax = 1050;
		 battleGainMoneyMin = 1550;
	}	
	else if(tempStage == 6)
	{
		 battleCatImgSrc = "img/cat/cat7.png";
		 battleCatFightImgSrc="img/cat/cat7_F.png";
		 catName = ('特務喵');
		 battleCatHpValue = 2100;
		 battleCatDanage = 21;
		 battleCatAttackDelay = 3;
		 battleGainMoneyMax = 1200;
		 battleGainMoneyMin = 1700;
	}	
	else if(tempStage == 7)
	{
		 battleCatImgSrc = "img/cat/cat8.png";
		 battleCatFightImgSrc="img/cat/cat8_F.png";
		 catName = ('宅宅喵');
		 battleCatHpValue = 2739;
		 battleCatDanage = 24;
		 battleCatAttackDelay = 3;
		 battleGainMoneyMax = 1350;
		 battleGainMoneyMin = 1850;
	}	
	else if(tempStage == 8)
	{
		 battleCatImgSrc = "img/cat/cat9.png";
		 battleCatFightImgSrc="img/cat/cat9_F.png";
		 catName = ('獅子喵');
		 battleCatHpValue = 5140;
		 battleCatDanage = 26;
		 battleCatAttackDelay = 3;
		 battleGainMoneyMax = 1500;
		 battleGainMoneyMin = 2000;
	}	
	else if(tempStage == 9)
	{
		 battleCatImgSrc = "img/cat/cat10.png";
		 battleCatFightImgSrc="img/cat/cat10_F.png";
		 catName = ('埃及喵');
		 battleCatHpValue = 7227;
		 battleCatDanage = 27;
		 battleCatAttackDelay = 3;
		 battleGainMoneyMax = 1650;
		 battleGainMoneyMin = 2150;
	}	
	else if(tempStage == 10)
	{
		 battleCatImgSrc = "img/cat/cat11.png";
		 battleCatFightImgSrc="img/cat/cat11_F.png";
		 catName = ('觸手喵');
		 battleCatHpValue = 13597;
		 battleCatDanage = 28;
		 battleCatAttackDelay = 3;
		 battleGainMoneyMax = 1800;
		 battleGainMoneyMin = 2300;
	}	
	else if(tempStage == 11)
	{
		 battleCatImgSrc = "img/cat/cat12.png";
		 battleCatFightImgSrc="img/cat/cat12_F.png";
		 catName = ('咖哩喵');
		 battleCatHpValue = 21724;
		 battleCatDanage = 31;
		 battleCatAttackDelay = 3;
		 battleGainMoneyMax = 1950;
		 battleGainMoneyMin = 2450;
	}	
	else if(tempStage == 12)
	{
		 battleCatImgSrc = "img/cat/cat13.png";
		 battleCatFightImgSrc="img/cat/cat13_F.png";
		 catName = ('忍者喵');
		 battleCatHpValue = 34686;
		 battleCatDanage = 32;
		 battleCatAttackDelay = 2.5;
		 battleGainMoneyMax = 2100;
		 battleGainMoneyMin = 2600;
	}	
	else if(tempStage == 13)
	{
		 battleCatImgSrc = "img/cat/cat14.png";
		 battleCatFightImgSrc="img/cat/cat14_F.png";
		 catName = ('隱形喵');
		 battleCatHpValue = 53374;
		 battleCatDanage = 35;
		 battleCatAttackDelay = 3;
		 battleGainMoneyMax = 2250;
		 battleGainMoneyMin = 2750;
	}	
	else if(tempStage == 14)
	{
		 battleCatImgSrc = "img/cat/cat15.png";
		 battleCatFightImgSrc="img/cat/cat15_F.png";
		 catName = ('科學喵');
		 battleCatHpValue = 77777;
		 battleCatDanage = 37;
		 battleCatAttackDelay = 3;
		 battleGainMoneyMax = 2400;
		 battleGainMoneyMin = 2900;
	}	
	else if(tempStage == 15)
	{
		 battleCatImgSrc = "img/cat/cat16.png";
		 battleCatFightImgSrc="img/cat/cat16_F.png";
		 catName = ('吸血喵');
		 battleCatHpValue = 104276;
		 battleCatDanage = 39;
		 battleCatAttackDelay = 3;
		 battleGainMoneyMax = 2550;
		 battleGainMoneyMin = 3550;
	}	
	else if(tempStage == 16)
	{
		 battleCatImgSrc = "img/cat/cat17.png";
		 battleCatFightImgSrc="img/cat/cat17_F.png";
		 catName = ('魯道喵');
		 battleCatHpValue = 139422;
		 battleCatDanage = 44;
		 battleCatAttackDelay = 3;
		 battleGainMoneyMax = 2700;
		 battleGainMoneyMin = 3200;
	}	
	else if(tempStage == 17)
	{
		 battleCatImgSrc = "img/cat/cat18.png";
		 battleCatFightImgSrc="img/cat/cat18_F.png";
		 catName = ('孫悟喵');
		 battleCatHpValue = 372459;
		 battleCatDanage = 48;
		 battleCatAttackDelay = 2.5;
		 battleGainMoneyMax = 2850;
		 battleGainMoneyMin = 3350;
	}	
	else if(tempStage == 18)
	{
		 battleCatImgSrc = "img/cat/cat19.png";
		 battleCatFightImgSrc="img/cat/cat19_F.png";
		 catName = ('閃光喵');
		 battleCatHpValue = 200000;
		 battleCatDanage = 30;
		 battleCatAttackDelay = 1;
		 battleGainMoneyMax = 3000;
		 battleGainMoneyMin = 3500;
	}	
	else if(tempStage == 19)
	{
		 battleCatImgSrc = "img/cat/cat20.png";
		 battleCatFightImgSrc="img/cat/cat20_F.png";
		 catName = ('老誕喵');
		 battleCatHpValue = 555555;
		 battleCatDanage = 67;
		 battleCatAttackDelay = 3.5;
		 battleGainMoneyMax = 2000;
		 battleGainMoneyMin = 20000;
	}	
	else if(tempStage >= 20)
	{
		 battleCatImgSrc = "img/cat/cat21.png";
		 battleCatFightImgSrc="img/cat/cat21_F.png";
		 catName = ('喵');
		 battleCatHpValue = 99999999;
		 battleCatDanage = 199;
		 battleCatAttackDelay = 6;
		 battleGainMoneyMax = 99999;
		 battleGainMoneyMin = 99999;
	}	
	
}

//戰鬥角色資料設定
function RoleSetting()
{
	if(localStorage.nowRole == 0) //主人公
	{
		localStorage.nowRoleImgSrc = "img/role/role0.png";
		localStorage.nowRoleHpValue = 40;
	}
	else if(localStorage.nowRole == 1)
	{
		localStorage.nowRoleImgSrc = "img/role/role1.png";
	   	localStorage.nowRoleHpValue = 80;
	}
	else if(localStorage.nowRole == 2)
	{
		localStorage.nowRoleImgSrc = "img/role/role2.png";
	   	localStorage.nowRoleHpValue = 120;
	}
	else if(localStorage.nowRole == 3)
	{
		localStorage.nowRoleImgSrc = "img/role/role3.png";
	   	localStorage.nowRoleHpValue = 160;
	}
	else if(localStorage.nowRole == 4)
	{
		localStorage.nowRoleImgSrc = "img/role/role4.png";
	   	localStorage.nowRoleHpValue = 200;
	}
	
}

//戰鬥武器設定
function ArmsSetting()
{
	if(localStorage.nowArms == 0)
	{
		if(localStorage.nowRole == 0)	   {localStorage.nowRoleBattleImgSrc = "img/role/role0.png";}
		else if(localStorage.nowRole == 1){localStorage.nowRoleBattleImgSrc = "img/role/role1.png";}
		else if(localStorage.nowRole == 2){localStorage.nowRoleBattleImgSrc = "img/role/role2.png";}
		else if(localStorage.nowRole == 3){localStorage.nowRoleBattleImgSrc = "img/role/role3.png";}
		else if(localStorage.nowRole == 4){localStorage.nowRoleBattleImgSrc = "img/role/role4.png";}
		
 		localStorage.attackDamage = 1;
	}
	else if(localStorage.nowArms == 1)
	{
		if(localStorage.nowRole == 0)	   {localStorage.nowRoleBattleImgSrc = "img/role/role0_arm1.png";}
		else if(localStorage.nowRole == 1){localStorage.nowRoleBattleImgSrc = "img/role/role1_arm1.png";}
		else if(localStorage.nowRole == 2){localStorage.nowRoleBattleImgSrc = "img/role/role2_arm1.png";}
		else if(localStorage.nowRole == 3){localStorage.nowRoleBattleImgSrc = "img/role/role3_arm1.png";}
		else if(localStorage.nowRole == 4){localStorage.nowRoleBattleImgSrc = "img/role/role4_arm1.png";}
		
		localStorage.attackDamage = 3;
	}
	else if(localStorage.nowArms == 2)
	{
		if(localStorage.nowRole == 0)	   {localStorage.nowRoleBattleImgSrc = "img/role/role0_arm2.png";}
		else if(localStorage.nowRole == 1){localStorage.nowRoleBattleImgSrc = "img/role/role1_arm2.png";}
		else if(localStorage.nowRole == 2){localStorage.nowRoleBattleImgSrc = "img/role/role2_arm2.png";}
		else if(localStorage.nowRole == 3){localStorage.nowRoleBattleImgSrc = "img/role/role3_arm2.png";}
		else if(localStorage.nowRole == 4){localStorage.nowRoleBattleImgSrc = "img/role/role4_arm2.png";}
		
		localStorage.attackDamage = 7;
	}
	else if(localStorage.nowArms == 3)
	{
		if(localStorage.nowRole == 0)	   {localStorage.nowRoleBattleImgSrc = "img/role/role0_arm3.png";}
		else if(localStorage.nowRole == 1){localStorage.nowRoleBattleImgSrc = "img/role/role1_arm3.png";}
		else if(localStorage.nowRole == 2){localStorage.nowRoleBattleImgSrc = "img/role/role2_arm3.png";}
		else if(localStorage.nowRole == 3){localStorage.nowRoleBattleImgSrc = "img/role/role3_arm3.png";}
		else if(localStorage.nowRole == 4){localStorage.nowRoleBattleImgSrc = "img/role/role4_arm3.png";}
		
		localStorage.attackDamage = 20;
	}
	else if(localStorage.nowArms == 4)
	{
		if(localStorage.nowRole == 0)	   {localStorage.nowRoleBattleImgSrc = "img/role/role0_arm4.png";}
		else if(localStorage.nowRole == 1){localStorage.nowRoleBattleImgSrc = "img/role/role1_arm4.png";}
		else if(localStorage.nowRole == 2){localStorage.nowRoleBattleImgSrc = "img/role/role2_arm4.png";}
		else if(localStorage.nowRole == 3){localStorage.nowRoleBattleImgSrc = "img/role/role3_arm4.png";}
		else if(localStorage.nowRole == 4){localStorage.nowRoleBattleImgSrc = "img/role/role4_arm4.png";}
		
		localStorage.attackDamage = 54;
	}
	else if(localStorage.nowArms == 5)
	{
		if(localStorage.nowRole == 0)	   {localStorage.nowRoleBattleImgSrc = "img/role/role0_arm5.png";}
		else if(localStorage.nowRole == 1){localStorage.nowRoleBattleImgSrc = "img/role/role1_arm5.png";}
		else if(localStorage.nowRole == 2){localStorage.nowRoleBattleImgSrc = "img/role/role2_arm5.png";}
		else if(localStorage.nowRole == 3){localStorage.nowRoleBattleImgSrc = "img/role/role3_arm5.png";}
		else if(localStorage.nowRole == 4){localStorage.nowRoleBattleImgSrc = "img/role/role4_arm5.png";}
		
		localStorage.attackDamage = 148;
	}
	else if(localStorage.nowArms == 6)
	{
		if(localStorage.nowRole == 0)	   {localStorage.nowRoleBattleImgSrc = "img/role/role0_arm6.png";}
		else if(localStorage.nowRole == 1){localStorage.nowRoleBattleImgSrc = "img/role/role1_arm6.png";}
		else if(localStorage.nowRole == 2){localStorage.nowRoleBattleImgSrc = "img/role/role2_arm6.png";}
		else if(localStorage.nowRole == 3){localStorage.nowRoleBattleImgSrc = "img/role/role3_arm6.png";}
		else if(localStorage.nowRole == 4){localStorage.nowRoleBattleImgSrc = "img/role/role4_arm6.png";}
		
		localStorage.attackDamage = 404;
	}
	else if(localStorage.nowArms == 7)
	{
		if(localStorage.nowRole == 0)	   {localStorage.nowRoleBattleImgSrc = "img/role/role0_arm7.png";}
		else if(localStorage.nowRole == 1){localStorage.nowRoleBattleImgSrc = "img/role/role1_arm7.png";}
		else if(localStorage.nowRole == 2){localStorage.nowRoleBattleImgSrc = "img/role/role2_arm7.png";}
		else if(localStorage.nowRole == 3){localStorage.nowRoleBattleImgSrc = "img/role/role3_arm7.png";}
		else if(localStorage.nowRole == 4){localStorage.nowRoleBattleImgSrc = "img/role/role4_arm7.png";}
		
		localStorage.attackDamage = 1104;
	}
	else if(localStorage.nowArms == 8)
	{
		if(localStorage.nowRole == 0)	   {localStorage.nowRoleBattleImgSrc = "img/role/role0_arm8.png";}
		else if(localStorage.nowRole == 1){localStorage.nowRoleBattleImgSrc = "img/role/role1_arm8.png";}
		else if(localStorage.nowRole == 2){localStorage.nowRoleBattleImgSrc = "img/role/role2_arm8.png";}
		else if(localStorage.nowRole == 3){localStorage.nowRoleBattleImgSrc = "img/role/role3_arm8.png";}
		else if(localStorage.nowRole == 4){localStorage.nowRoleBattleImgSrc = "img/role/role4_arm8.png";}
		
		localStorage.attackDamage = 3016;
	}
	else if(localStorage.nowArms == 9)
	{
		if(localStorage.nowRole == 0)	   {localStorage.nowRoleBattleImgSrc = "img/role/role0_arm9.png";}
		else if(localStorage.nowRole == 1){localStorage.nowRoleBattleImgSrc = "img/role/role1_arm9.png";}
		else if(localStorage.nowRole == 2){localStorage.nowRoleBattleImgSrc = "img/role/role2_arm9.png";}
		else if(localStorage.nowRole == 3){localStorage.nowRoleBattleImgSrc = "img/role/role3_arm9.png";}
		else if(localStorage.nowRole == 4){localStorage.nowRoleBattleImgSrc = "img/role/role4_arm9.png";}
		
		localStorage.attackDamage = 8240;
	}
	
	else if(localStorage.nowArms == 10)
	{
		if(localStorage.nowRole == 0)	   {localStorage.nowRoleBattleImgSrc = "img/role/role0_arm10.png";}
		else if(localStorage.nowRole == 1){localStorage.nowRoleBattleImgSrc = "img/role/role1_arm10.png";}
		else if(localStorage.nowRole == 2){localStorage.nowRoleBattleImgSrc = "img/role/role2_arm10.png";}
		else if(localStorage.nowRole == 3){localStorage.nowRoleBattleImgSrc = "img/role/role3_arm10.png";}
		else if(localStorage.nowRole == 4){localStorage.nowRoleBattleImgSrc = "img/role/role4_arm10.png";}
		
		localStorage.attackDamage = 999999;
	}
}

/*------------------------------------------------------------------------------------------------------------*/
/*右鍵選單*/

//顯示右鍵選單
function ShowMenu() 
{
    var menuWidth = 125;
    var menuHeight = 335;
	
    if (screen.availHeight >= (event.clientY + menuHeight) && screen.availWidth >= (event.clientX + menuWidth)) 
	{
    	contextMenu.style.left = event.clientX + 'px';
    	contextMenu.style.top = event.clientY + 'px';
	}
    else if (screen.availHeight < (event.clientY + menuHeight) && screen.availWidth >= (event.clientX + menuWidth)) 
	{
    	contextMenu.style.left = event.clientX + 'px';
    	contextMenu.style.top = event.clientY - 183 + 'px';
    }
    else if (screen.availHeight >= (event.clientY + menuHeight) && screen.availWidth < (event.clientX + menuWidth)) 
	{
    	contextMenu.style.left = screen.availWidth - 125 + 'px';
    	contextMenu.style.top = event.clientY + 'px';
    }
    else 
	{
    	contextMenu.style.left = screen.availWidth - 125 + 'px';
    	contextMenu.style.top = event.clientY - 183 + 'px';
    }
    contextMenu.style.visibility = "visible";
    return false;
}
	
//隱藏選單
function HideMenu() 
{
    contextMenu.style.visibility = "hidden";
}
//滑鼠移上
function MouseOver() 
{
    if (event.srcElement.className == "menuItems") 
	{
    	event.srcElement.style.backgroundColor ="#81D1FD"; //當顯示選單，並將滑鼠移到項目上將背景顏色改變
    	event.srcElement.style.color = "black";//當顯示選單，並將滑鼠移到項目上將字體顏色改變
		event.srcElement.style.borderRadius = '20px';
    }
}
//滑鼠移開
function MouseOut() 
{
    if (event.srcElement.className == "menuItems") 
	{
    	event.srcElement.style.backgroundColor = "#F0B2F4"; //當滑鼠移至別的項目或是移出選單時背景顏色恢復
    	event.srcElement.style.color = "white";	//當滑鼠移至別的項目或是移出選單時字體顏色恢復
		event.srcElement.style.borderRadius = '20px';

    }
}
	
    document.oncontextmenu = ShowMenu;
    document.onclick = HideMenu;
/*選單事件*/
function MoneyPlus()
{
	localStorage.moneyAmount = parseInt(localStorage.moneyAmount) + 1000;
	hubMoney.innerText = localStorage.moneyAmount;
}
function ArmsPlus()
{
	if(localStorage.nowArms<10) localStorage.nowArms++;
}
function ArmsMinus()
{
	if(localStorage.nowArms>1) localStorage.nowArms--;
}
