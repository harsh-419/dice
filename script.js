var scores, round,active,game;
init();


document.querySelector('.btn--roll').addEventListener('click', function () {
	if(game)
{

	var dice = Math.floor(Math.random()*6 )+1;
	
	
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



			document.getElementById('current--0').textContent = '0';
			document.getElementById('current--1').textContent = '0';

			document.querySelector('.player--0').classList.toggle('player--active');
			document.querySelector('.player--1').classList.toggle('player--active');



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
		
		game = false;
	}

	else{
		
	next();		
	}

}

});

document.querySelector('#name--' + active).textContent = 'Winner';
		document.querySelector('.dice').style.display = 'none';

document.getElementById('current--1').textContent = '0';

			document.querySelector('.player--0').classList.toggle('player--active');
			document.querySelector('.player--1').classList.toggle('player--active');


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
