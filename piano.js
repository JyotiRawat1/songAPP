Synth instanceof AudioSynth; // true

var testInstance = new AudioSynth;
testInstance instanceof AudioSynth;


//piano.js
window.onload=function(){
var instrument=0;}
$('#piano').on('click', function(){
instrument=0;
})
$('#organ').on('click', function(){
instrument=1;
})


$('#guitar').on('click', function(){
instrument=2;
})

$('#edm').on('click', function(){
instrument=3;
})

//PIANO
$('#KEY_C').on('click', function() {
  Synth.play(instrument, 'C', 3, 2)

}
);


$('#KEY_Cb').on('click', function() {
  Synth.play(instrument, 'C#', 3, 2)
}
);

$('#KEY_D').on('click', function() {
  Synth.play(instrument, 'D', 3, 2)
}
);

$('#KEY_Db').on('click', function() {
  Synth.play(instrument, 'D#', 3, 2)
}
);

$('#KEY_E').on('click', function() {
  Synth.play(instrument, 'E', 3, 2)
}
);

$('#KEY_R').on('click', function() {
  Synth.play(instrument, 'F', 3, 2)
}
);

$('#KEY_Fb').on('click', function() {
  Synth.play(instrument, 'F#', 3, 2)
}
);


$('#KEY_G').on('click', function() {
  Synth.play(instrument, 'G', 3, 2)
}
);

$('#KEY_Gb').on('click', function() {
  Synth.play(instrument, 'G#', 3, 2)
}
);

$('#KEY_A').on('click', function() {
  Synth.play(instrument, 'A', 3, 2)
}
);

$('#KEY_Ab').on('click', function() {
  Synth.play(instrument, 'A#', 3, 2)
}
);

$('#KEY_B').on('click', function() {
  Synth.play(instrument,'B', 3, 2)
}
);

$('#KEY_C1').on('click', function() {
  Synth.play(instrument, 'C', 4, 2)
}
);

$('#KEY_C1b').on('click', function() {
  Synth.play(instrument, 'C#', 4, 2)
}
);
// not working
$('#KEY_D1').on('click', function() {
  Synth.play(instrument,
 'D', 4, 2)
}
);

$('#KEY_D1b').on('click', function() {
  Synth.play(instrument, 'D#', 4, 2)
}
);

$('#KEY_E1').on('click', function() {
  Synth.play(instrument,'E', 4, 2)
}
);

$('#KEY_F1').on('click', function() {
  Synth.play(instrument, 'F', 4, 2)
}
);

$('#KEY_F1b').on('click', function() {
  Synth.play(instrument, 'F#', 4, 2)
}
);


$('#KEY_G1').on('click', function() {
  Synth.play(instrument, 'G', 4, 2)
}
);

$('#KEY_G1b').on('click', function() {
  Synth.play(instrument, 'G#', 4, 2)
}
);

$('#KEY_A1').on('click', function() {
  Synth.play(instrument, 'A', 4, 2)
}
);

$('#KEY_A1b').on('click', function() {
  Synth.play(instrument, 'A#', 4, 2)
});

$('#KEY_B2').on('click', function() {
  Synth.play(instrument, 'B', 4, 2)
}
);

$('#KEY_C2').on('click', function() {
  Synth.play(instrument, 'C', 5, 2)
}
);

$('#KEY_C2b').on('click', function() {
  Synth.play(instrument, 'C#', 5, 2)
});

$('#KEY_D2').on('click', function() {
  Synth.play(instrument, 'D', 5, 2)
}
);

$('#KEY_D3b').on('click', function() {
  Synth.play(instrument, 'D#', 5, 2)
});

$('#KEY_E3').on('click', function() {
  Synth.play(instrument, 'E', 5, 2)
}
);

$('#KEY_F3').on('click', function() {
  Synth.play(instrument, 'F', 5, 2)
}
);

$('#KEY_F3b').on('click', function() {
  Synth.play(instrument, 'F#', 5, 2)
});

$('#KEY_G3').on('click', function() {
  Synth.play(instrument, 'G', 5, 2)
}
);

$('#KEY_G3b').on('click', function() {
  Synth.play(instrument,  'G#', 5, 2)
});

$('#KEY_A4').on('click', function() {
  Synth.play(instrument, 'A', 5, 2)
}
);

$('#KEY_A5b').on('click', function() {
  Synth.play(instrument,'A#', 5, 2)
});


$('#KEY_B4').on('click', function() {
  Synth.play(instrument, 'B', 5, 2)
}
);

//keypress
$('body').on('keypress', function(event) {
	if (event.key=='q'){
  Synth.play(instrument, 'C', 3, 2)
}
}
);


$('body').on('keypress', function() {
	if (event.key=='w'){
  Synth.play(instrument, 'D', 3, 2)
}
}
);

$('body').on('keypress', function() {
	if (event.key=='3'){
  Synth.play(instrument, 'D#', 3, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='e'){
  Synth.play(instrument, 'E', 3, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='r'){
  Synth.play(instrument, 'F', 3, 2)}
}
);

$('body').on('keypress', function() {
if (event.key=='5'){
  Synth.play(instrument, 'F#', 3, 2)}
}
);


$('body').on('keypress', function() {
	if (event.key=='t'){
  Synth.play(instrument, 'G', 3, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='6'){
  Synth.play(instrument, 'G#', 3, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='y'){
  Synth.play(instrument, 'A', 3, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='7'){
  Synth.play(instrument, 'A#', 3, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='u'){
  Synth.play(instrument,'B', 3, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='i'){
  Synth.play(instrument, 'C', 4, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='9'){
  Synth.play(instrument, 'C#', 4, 2)}
}
);
// not working
$('body').on('keypress', function() {
	if (event.key=='o'){
  Synth.play(instrument,'D', 4, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='0'){
  Synth.play(instrument, 'D#', 4, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='p'){
  Synth.play(instrument,'E', 4, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='['){
  Synth.play(instrument, 'F', 4, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='='){
  Synth.play(instrument, 'F#', 4, 2)}
}
);


$('body').on('keypress', function() {
	if (event.key==']'){
  Synth.play(instrument, 'G', 4, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='a'){
  Synth.play(instrument, 'G#', 4, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='z'){
  Synth.play(instrument, 'A', 4, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='s'){
  Synth.play(instrument, 'A#', 4, 2)}
});

$('body').on('keypress', function() {
	if (event.key=='x'){
  Synth.play(instrument, 'B', 4, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='c'){
  Synth.play(instrument, 'C', 5, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='f'){
  Synth.play(instrument, 'C#', 5, 2)}
});

$('body').on('keypress', function() {
	if (event.key=='v'){
  Synth.play(instrument, 'D', 5, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='g'){
  Synth.play(instrument, 'D#', 5, 2)}
});

$('body').on('keypress', function() {
	if (event.key=='b'){
  Synth.play(instrument, 'E', 5, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='n'){
  Synth.play(instrument, 'F', 5, 2)}

}
);

$('body').on('keypress', function() {
	if (event.key=='j'){
  Synth.play(instrument, 'F#', 5, 2)}
});

$('body').on('keypress', function() {
	if (event.key=='m'){
  Synth.play(instrument, 'G', 5, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='k'){
  Synth.play(instrument,  'G#', 5, 2)}
});

$('body').on('keypress', function() {
	if (event.key==','){
  Synth.play(instrument, 'A', 5, 2)}
}
);

$('body').on('keypress', function() {
	if (event.key=='l'){
  Synth.play(instrument,'A#', 5, 2)}
});


$('body').on('keypress', function() {
	if (event.key=='.'){
  Synth.play(instrument, 'B', 5, 2)}
}
);
