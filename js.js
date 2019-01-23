	
		var teams = [ ];
		var nr = 0;
		var counter = document.getElementById("counter");
		var button = document.querySelector("button");
	 
			function add()
			{
                var team = document.getElementById("field").value;
				nr++
				counter.innerHTML = nr + "/32";
				if(nr>=32)
				{
					createElement(team);
					draw();
				}
				else{
					createElement(team);
				}
			}

			button.addEventListener("click", add);

			function createElement(team)
			{		
				var exist = false;
				var valid = document.getElementById("valid");
				for( var i = 0; i < teams.length; i++){ 
					if (teams[i] == field.value) {
					exist = true;
					nr--;
					counter.innerHTML = nr + "/32";
					}
				}

				if(!field.value.trim()) {
						valid.innerHTML = "Wprowadzona nazwa nie zawiera znakow!<br/>";
						nr--;
						counter.innerHTML = nr + "/32";
						field.value = "";
				}else if(!isNaN(field.value)){
						valid.innerHTML = "Wprowadzona nazwa nie może być liczbą<br/>";
						nr--;
						counter.innerHTML = nr + "/32";
						field.value = "";
				}else{
						if(exist==true){
							valid.innerHTML = "Wprowadzona nazwa już istnieje<br/>";
						}else{
							teams.push(team);
							let div = document.createElement("div");
							let list = document.getElementById("list");
							list.appendChild(div);
							div.setAttribute("id", team);
							div.classList.add("teamStyle");
							div.innerHTML = team + "<button onclick=\"removing("+team+")\">Remove</button>"
							field.value = "";
							valid.innerHTML = "<br/>";
						}
				}		
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
				counter.innerHTML = nr + "/32";
				console.log(nr);
			}

			function draw()
			{
				document.getElementById("status").innerHTML = "Dodano wszystkie drużyny! ";
				document.getElementById("data").remove();
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

				document.getElementById("e1").innerHTML = "1. " + teams[16];
				document.getElementById("e2").innerHTML = "2. " + teams[17];
				document.getElementById("e3").innerHTML = "3. " + teams[18];
				document.getElementById("e4").innerHTML = "4. " + teams[19];

				document.getElementById("f1").innerHTML = "1. " + teams[20];
				document.getElementById("f2").innerHTML = "2. " + teams[21];
				document.getElementById("f3").innerHTML = "3. " + teams[22];
				document.getElementById("f4").innerHTML = "4. " + teams[23];

				document.getElementById("g1").innerHTML = "1. " + teams[24];
				document.getElementById("g2").innerHTML = "2. " + teams[25];
				document.getElementById("g3").innerHTML = "3. " + teams[26];
				document.getElementById("g4").innerHTML = "4. " + teams[27];

				document.getElementById("h1").innerHTML = "1. " + teams[28];
				document.getElementById("h2").innerHTML = "2. " + teams[29];
				document.getElementById("h3").innerHTML = "3. " + teams[30];
				document.getElementById("h4").innerHTML = "4. " + teams[31];

			}
