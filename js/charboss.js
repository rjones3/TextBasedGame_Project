var player = "";

var warrior = {
    health : 200,
    atk : 100
};
var mage = {
    health : 50,
    atk : 200
};
var ranger = {
    health : 100,
    atk : 100
};
var KingSlime = {
    health : 300,
    atk : 10
};
var EyeofCthulu = {
    health : 400,
    atk : 15
};
var EaterofWorlds = {
    health : 425,
    atk : 17
};
var WallofFlesh = {
    health : 450,
    atk : 20
};
var SkeletronPrime = {
    health : 475,
    atk : 25
};
var TheTwins = {
    health : 475,
    atk: 30
};
var MoonLord = {
    health : 1000,
    atk : 50
};
var bossmusic = new Object();
bossmusic.kingslime = new Audio("audio/kingslime.mp3");
bossmusic.eye = new Audio("audio/eye.mp3");


function RandomNum() {
    return Math.round(Math.random() * 2);
};
function BossAttack() {
    return Math.round(Math.random() * 10);
};
function chooseclass(char) {
    if (char == 'mage') {
        player = mage
        console.log(player)
        
    };
    if (char == 'ranger') {
        player = ranger;
        
    };
    if (char == 'warrior') {
        player = warrior;
        
    };
    
    bossmusic.kingslime.play();

    document.getElementById('mystage').style.display = "none";
    document.getElementById('boss1').style.display = "block";
};
function bossfight(monster, player) {
    
    while (monster.health > 0 && player.health > 0) {
        var action = prompt("Attack?, Block?, Dodge?");
        if (action.toLowerCase() == "attack") {
            if (BossAttack() >= 3) {
               monster.health -= player.atk; 
               alert('You did ' + player.atk + ' Damage!')
            } else {
                alert('Your Attack Missed!')
            };
            
            if (BossAttack() >= 3) {
                alert("Boss Attacked!");
                player.health -= monster.atk;
                alert('You took ' + monster.atk + ' Damage. You have ' + player.health + ' Health remaining')
            } else {
                alert("The Boss Missed");  
            };
            console.log(player.health, monster.health);
        };
        if (action.toLowerCase() == "block") {
            if (BossAttack() >= 3) {
                alert("Boss Attacked!");
                player.health -= (monster.atk * .5);
                alert('You took ' + monster.atk * 5 + ' Damage. You have ' + player.health + ' Health remaining')
            } else {
                alert("The Boss Missed");
            };
        };
        if (action.toLowerCase() == "dodge") {
            if (BossAttack() >= 3) {
                alert("Boss Attacked!");

                if (BossAttack() <= 3) {
                    alert('Failed to Dodge You took Extra Damage!')
                    player.health -= monster.atk * 2;
                    alert('You took ' + monster.atk * 2 + ' Damage. You have ' + player.health + ' Health remaining')
                };

                if (BossAttack() >= 4) {
                    alert('Dodged and Counter Attacked')
                    alert('You did ' + player.atk * .5 + ' Damage!')
                    monster.health -= player.atk * .5;
                };
            } else {
                alert('The Boss Laughs, you missed your chance to Attack!');
            };
        };
    };

    if (monster.health <= 0) {
        alert('The Monster has been Slain')
        console.log('Monster Died');
    }

    if (player.health <= 0) {
        alert('You Died')
        console.log('Player Died');
    }
};
function begin() {
    alert('Shortly in on your journey you have your first encounter. A King Slime famous for slaying and consuming the legendary ninja of the East whose remained in the slime for 30 years. Good Luck!');
    bossfight(KingSlime, player);
};





