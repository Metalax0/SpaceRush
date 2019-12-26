//JS code here

var counter=45; //counter is in vw

document.onkeydown=example;
	function example(e)
	{
		if(e.keyCode==65) /* keyCode 65 represents key 'a' */
		{
			move_left();
		}

		if(e.keyCode==68) /* keyCode 68 represents key 'd' */
		{
			move_right();
		}

		if(e.keyCode==73) /* keyCode 73 represents key 'i' used here for displaying info(position) */
		{
			alert("Counter ="+counter);
		}

		if(e.keyCode==80) /* keyCode 80 represents key 'P' used here to pause game */
		{
			alert("Game is Paused");
		}
	}

function move_left()
{
	var move=document.getElementById('img_container_ship');
	counter=counter-1;
	move.style.left=counter+'vw';
	checkborder();
}

function move_right()
{
	var move=document.getElementById('img_container_ship');
	counter=counter+1;
	move.style.left=counter+'vw';
	checkborder();
}

function checkborder() /*makes sure player stays inside border (forces location withing range)*/
{
	var move=document.getElementById('img_ship');
	var blureffect=document.getElementById('container');
	var over=document.getElementById('gameover');

	if(counter<0 || counter>91)
	{
		over.style.display="block";
		blureffect.style.filter="blur(10px)";
	}
}





