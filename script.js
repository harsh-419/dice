var scores, round,active,game;
init();


document.querySelector('.btn--roll').addEventListener('click', function () {
	if(game)
{

	var dice = Math.floor(Math.random()*6 )+1;
	
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'Images/dice-' + dice + '.png';
	 if(dice !== 1)
	{
		round += dice;
		document.querySelector('#current--' + active).textContent = round;
		
	}
	else{

			active === 0 ? active = 1 : active = 0;
			round = 0; 

			document.getElementById('current--0').textContent = '0';
			document.getElementById('current--1').textContent = '0';

			document.querySelector('.player--0').classList.toggle('player--active');
			document.querySelector('.player--1').classList.toggle('player--active');



	} 
}   
	} );



document.querySelector('.btn--hold').addEventListener('click', function (){
 if(game)
 {
	scores[active] += round;
		
	document.querySelector('#score--' + active).textContent = scores[active];

	var x = document.querySelector('.win').value;
	var wins;
	if(x)
	{
		wins = x;
	}
	else {
		wins = 100;
	}

	if(scores[active] >= wins)
	{
		document.querySelector('#name--' + active).textContent = 'Winner';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player--'+ active).classList.add('player--winner');
		document.querySelector('.player--'+ active).classList.remove('player--active');

		game = false;
	}

	else{
		
	next();		
	}

}

});


function next()
{

			active === 0 ? active = 1 : active = 0;
			round = 0;

			document.getElementById('current--0').textContent = '0';
			document.getElementById('current--1').textContent = '0';

			document.querySelector('.player--0').classList.toggle('player--active');
			document.querySelector('.player--1').classList.toggle('player--active');


	document.querySelector('.dice').style.display = 'none';
}



document.querySelector('.btn--new').addEventListener('click', init);

function init(){
scores = [0,0];
round = 0;
active = 0;
game = true;

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.querySelector('#name--0').textContent = 'Player 1';
document.querySelector('#name--1').textContent = 'Player 2';
document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--winner');
document.querySelector('.player--0').classList.remove('player--active');
document.querySelector('.player--1').classList.remove('player--active');
document.querySelector('.player--0').classList.add('player--active');
document.querySelector('.win').value= '';






document.querySelector('.dice').style.display = 'none';
}
