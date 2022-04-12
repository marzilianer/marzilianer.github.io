const circleSymbol = 'O';
const crossSymbol = 'X';

let field = ["e","e","e","e","e","e","e","e","e"];
let isGameRunning = true;
let winCount = 0;


function handleclick( fieldId )
{
    if(isGameRunning)
    {
        if( field[parseInt(fieldId)] == "e" )
        {
            field[parseInt(fieldId)] = "x";
            document.getElementById(fieldId).innerHTML = crossSymbol;

            
            if( checkForWinner() )
            {
                return;
            }
            setCircle();
        }   
        
    }

}

function setCircle()
{
    let fieldId = Math.round( Math.random() * 8 );

    if( field[parseInt(fieldId)] == "e" )
    {
        field[parseInt(fieldId)] = "o";
        document.getElementById(fieldId).innerHTML = circleSymbol;

        if( checkForWinner() )
        {
            return;
        } 
    }
    else
    {
        setCircle();
    }

}

function checkForWinner()
 {
    if( field[0] == "x" && field[1] == "x" && field[2] == "x" )
    {
        setWinner( "x" , [0,1,2]);
        return true;
    }
    else  if( field[3] == "x" && field[4] == "x" && field[5] == "x" )
    {
        setWinner( "x" , [3,4,5]);
        return true;
    }
    else  if( field[6] == "x" && field[7] == "x" && field[8] == "x" )
    {   
        setWinner( "x" , [6,7,8]);
        return true;
    }
     else  if( field[0] == "x" && field[3] == "x" && field[6] == "x" )
    {
        setWinner( "x" , [0,3,6]);
        return true;
    }
    else  if( field[1] == "x" && field[4] == "x" && field[7] == "x" )
    {
       setWinner( "x" , [1,4,7]);
       return true;
    }
    else  if( field[2] == "x" && field[5] == "x" && field[8] == "x" )
    {
       setWinner( "x" , [2,5,8]);
       return true;
    }
    else  if( field[0] == "x" && field[4] == "x" && field[8] == "x" )
    {
       setWinner( "x" , [0,4,8]);
       return true;
    }
    else  if( field[2] == "x" && field[4] == "x" && field[6] == "x" )
    {
       setWinner( "x" , [2,4,6]);
       return true;
    }
    else if( field[0] == "o" && field[1] == "o" && field[2] == "o" )
    {
        setWinner( "o" , [0,1,2]);
        return true;
    }
    else  if( field[3] == "o" && field[4] == "o" && field[5] == "o" )
    {
        setWinner( "o" , [3,4,5]);
        return true;
    }
    else  if( field[6] == "o" && field[7] == "o" && field[8] == "o" )
    {   
        setWinner( "o" , [6,7,8]);
        return true;
    }
     else  if( field[0] == "o" && field[3] == "o" && field[6] == "o" )
    {
        setWinner( "o" , [0,3,6]);
        return true;
    }
    else  if( field[1] == "o" && field[4] == "o" && field[7] == "o" )
    {
       setWinner( "o" , [1,4,7]);
       return true;
    }
    else  if( field[2] == "o" && field[5] == "o" && field[8] == "o" )
    {
       setWinner( "o" , [2,5,8]);
       return true;
    }
    else  if( field[0] == "o" && field[4] == "o" && field[8] == "o" )
    {
       setWinner( "o" , [0,4,8]);
       return true;
    }
    else  if( field[2] == "o" && field[4] == "o" && field[6] == "o" )
    {
       setWinner( "o" , [2,4,6]);
       return true;
    }
    else if(field[0] != "e" && 
            field[1] != "e" && 
            field[2] != "e" && 
            field[3] != "e" && 
            field[4] != "e" &&
            field[5] != "e" && 
            field[6] != "e" && 
            field[7] != "e" && 
            field[8] != "e" )
    {

    }
}

function setWinner( winner, winningline )
{
    isGameRunning = false;
    if( winner == "x")  
    {
        winCount += 1

        document.getElementById("status").innerHTML = 'Du hast gewonnen';
    }
    else if( winner == "o")  
    {
        winCount += 1

        document.getElementById("status").innerHTML = 'Du hast verloren';
    }
}