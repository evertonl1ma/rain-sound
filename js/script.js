
   		 audio= document.getElementById("audio");
         volume= document.getElementById("volume");

			function aumentar_volume(){
				if( audio.volume < 1)  audio.volume += 0.1;
			}

			function diminuir_volume(){
				if( audio.volume > 0)  audio.volume -= 0.1;
			}
			
			function mute(){
				if(audio.muted){
					volume.src= "img/volume-3.png";
					audio.muted = false;
				} else{
					audio.muted = true;
					volume.src= "img/volume-1.png";
				}
			}