/*band members information*/
var band_info_box=document.getElementById("about_mem");
function bm1_text(){
	band_info_box.innerHTML="George Daniel:    Plays the drums, keyboard. He also does backing vocals, production and synthesisers" ;
}
function bm2_text(){
	band_info_box.innerHTML="Ross MacDonald:   Plays the bass, keyboard. He also does backing vocals, samplers";
}
function bm3_text(){
	band_info_box.innerHTML="Matty Healy: Lead Vocals, rhythm guitar, piano, keyboards";
}
function bm4_text(){
	band_info_box.innerHTML="Adam Hann: He plays the lead guitar, keyboard as well as being backing vocals"
}

/* js script for changing the colour*/
function change_red(){
	console.log(red);
	var img=document.getElementById('base_shirt');
	img.src="asset/shop/shirt_red.png";
}
function change_white(){
	console.log(red);
	var img=document.getElementById('base_shirt');
	img.src="asset/shop/shirt_white.png";
}
function change_gray(){
	console.log(red);
	var img=document.getElementById('base_shirt');
	img.src="asset/shop/shirt_gray.png";
}
var brush_type=""
var div =document.getElementById("ts_maker");
var fill =document.getElementById("fill");
var thick_brush=document.getElementById("thick_brush");
var thin_brush=document.getElementById("thin_brush");
var text_box=document.getElementById("text_holder")
var paint="black";
var red="red";
var green="green";
var blue="blue";
var brown="brown";
var yellow="yellow";
var white="white";
var line_col;
function change_paint_red(){
	console.log("red");
	paint=red;
	fill.style.backgroundColor=paint;
	thin_brush.style.backgroundColor=paint;
	thick_brush.style.backgroundColor=paint;
	line_col=paint;
}
function change_paint_blue(){
	console.log("blue");
	paint=blue;
	fill.style.backgroundColor=paint;
	thin_brush.style.backgroundColor=paint;
	thick_brush.style.backgroundColor=paint;
	line_col=paint;
}
function change_paint_green(){
	console.log("green");
	paint=green;
	fill.style.backgroundColor=paint;
	thin_brush.style.backgroundColor=paint;
	thick_brush.style.backgroundColor=paint;
	line_col=paint;
}
function change_paint_brown(){
	console.log("brown");
	paint=brown;
	fill.style.backgroundColor=paint;
	thin_brush.style.backgroundColor=paint;
	thick_brush.style.backgroundColor=paint;
	line_col=paint;
}
function change_paint_yellow(){
	console.log("yellow");
	paint=yellow;
	thick_brush.style.backgroundColor=paint;
	fill.style.backgroundColor=paint;
	thin_brush.style.backgroundColor=paint;
	line_col=paint;
	
}
function change_paint_white(){
	console.log("white");
	paint=white;
	fill.style.backgroundColor=paint;
	thin_brush.style.backgroundColor=paint;
	thick_brush.style.backgroundColor=paint;
	line_col=paint;
	
}
function fill_div(){
	div.style.backgroundColor=paint;	
}
function thick_brush(){
	brush_type="thick"
}
function thin_brush(){
	brush_type="thin"
}
var audio
function play_song1(){
	audio=document.getElementById("audio_song1");
	audio.play();	
}
function play_song2(){
	audio=document.getElementById("audio_song2");
	audio.play();	
}
function play_song3(){
	audio=document.getElementById("audio_song3");
	audio.play();	
}
function pause(){
	audio.pause();
}
function update_text(){
	var user_text=document.getElementById("user_text").value;
	text_box.innerHTML=user_text;
}






/*my own drawing on canvas code*/


var canvas  = document.getElementById('ts_maker');;
var line  = canvas.getContext("2d");
var draw_bool = false;
var oldX = 0;
var x = 0;
var oldY = 0;
var y = 0;
var w=2;
function thin_brush_paint(){
	line.stokeWidth=2;
	w=2
}
function thick_brush_paint(){
	w=6
}
function init() {
    
    canvas.addEventListener("mousemove", function (e) {
		if (draw_bool) {
            oldX = x;
            oldY = y;
            x = e.clientX - canvas.getBoundingClientRect().left;
            y = e.clientY - canvas.getBoundingClientRect().top;
            line.beginPath();
			line.moveTo(oldX, oldY);
			line.lineTo(x, y);
			line.strokeStyle = line_col;
			line.lineWidth=w;
			line.stroke();
			line.closePath();
		}
    })
    canvas.addEventListener("mousedown", function (e) {
		draw_bool = true;
		oldX = x;
        oldY = y;
        x = e.clientX - canvas.getBoundingClientRect().left;
        y = e.clientY - canvas.getBoundingClientRect().top;
    
            
            
        line.beginPath();
        line.fillStyle = line_col;
        line.fillRect(x, y, w, w);
        line.closePath();
		text_box.style.display="none";
                
    })
    canvas.addEventListener("mouseup", function (e) {
		draw_bool = false;
		text_box.style.display="block";
    })
    canvas.addEventListener("mouseout", function (e) {
        draw_bool = false;
		text_box.style.display="block";
    })
}
function clear_can(){
	console.log("clearing");
	line.clearRect(0,0,canvas.width, canvas.height);
	

}
function save_draw(){
	window.localStorage.setItem("saved_ts", canvas.toDataURL());
}
function load_draw(){
	var dataURL = window.localStorage.getItem("saved_ts");
	var canvas_img= new Image;
	canvas_img.src=dataURL;
	canvas_img.onload=function(){
		line.drawImage(canvas_img,0,0);
	}
}
window.onload=function(){
	console.log("load");
	init();
}




