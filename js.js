	
		var teams = [ ];
        var nr = 0;
		var button = document.querySelector("button");
	 
			function add()
			{
               
                var team = document.getElementById("field").value;
                teams[nr] = team;
				nr++
				console.log(teams);
			if(nr>=8)
				{
					draw();
			//		field.value = "";
				}
				else{
					createElement(team);
					field.value = "";
				}
				
			}

			button.addEventListener("click", add);




			function createElement(team)
			{				
				let div = document.createElement("div");
				let list = document.getElementById("list");
				list.appendChild(div);
				div.setAttribute("id", team);
				div.classList.add("teamStyle");
				div.innerHTML = team + "<button onclick=\"removing("+team+")\">Remove</button>"
		//		div.innerHTML = team + "<button onclick=\"dele("+team+")\">Remove</button>"
			}
			
			function removing(team){
				document.getElementById(team);
				let list = document.getElementById("list");
				list.removeChild(team);
				console.log(teams);
				for( var i = 0; i < teams.length; i++){ 
					if ( teams[i] == team.id) {
					  teams.splice(i, 1); 
					  console.log(teams);
					}
				}
				nr--;
				console.log(nr);
			}

	/*		function dele(team){
				for( var i = 0; i < teams.length-1; i++){ 
					if ( teams[i] == team.id ) {
					  teams.splice(i, 1); 
					  console.log(team.id);
					}else{
						
						console.log(team.id);
					}
				}      
			}
	*/
			function draw()
			{
				document.getElementById("status").innerHTML = "Dodano wszystkie drużyny! ";
				document.getElementById("field").remove();
				document.getElementById("list").innerHTML = teams;
				document.getElementById("toDraw").innerHTML = "<input type=\"submit\" id=\"przycisklosuj\" value=\"Losuj\" onclick=\"wys()\"/>";
			}
   			

function wys() 
{
   var i = teams.length, j, temp;

	while ( i-- > 0) 
	{
     
        j = Math.floor(Math.random() * (i+1));

      temp = teams[j]
			teams[j] = teams[i]
			teams[i] = temp;
	
  	}
	
	  document.getElementById("a1").innerHTML = "1. " + teams[0];
	  document.getElementById("a2").innerHTML = "2. " + teams[1];
	  document.getElementById("a3").innerHTML = "3. " + teams[2];
	  document.getElementById("a4").innerHTML = "4. " + teams[3];

	  document.getElementById("b1").innerHTML = "1. " + teams[4];
	  document.getElementById("b2").innerHTML = "2. " + teams[5];
	  document.getElementById("b3").innerHTML = "3. " + teams[6];
	  document.getElementById("b4").innerHTML = "4. " + teams[7];

	  document.getElementById("c1").innerHTML = "1. " + teams[8];
	  document.getElementById("c2").innerHTML = "2. " + teams[9];
	  document.getElementById("c3").innerHTML = "3. " + teams[10];
	  document.getElementById("c4").innerHTML = "4. " + teams[11];

	  document.getElementById("d1").innerHTML = "1. " + teams[12];
	  document.getElementById("d2").innerHTML = "2. " + teams[13];
	  document.getElementById("d3").innerHTML = "3. " + teams[14];
	  document.getElementById("d4").innerHTML = "4. " + teams[15];

}

		