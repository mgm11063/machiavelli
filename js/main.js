particlesJS("particles-js",
{"particles":{"number":{"value":205,"density":{"enable":true,"value_area":600}},
"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},
"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":100,"height":100}},
"opacity":{"value":1,"random":false,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},
"size":{"value":0.7,"random":false,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},
"line_linked":{"enable":false,"distance":268.3101981549727,"color":"#ffffff","opacity":0.11048066982851817,"width":1},
"move":{"enable":true,"speed":1,"direction":"none","random":true,
"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},
"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},
"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":203.7962037962038,
"line_linked":{"opacity":0.18618808234370327}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},
"repulse":{"distance":87.91208791208791,"duration":0.4},"push":{"particles_nb":4},
"remove":{"particles_nb":2}}},"retina_detect":true});

var count_particles, stats, update; stats = new Stats; stats.setMode(0);
update = function() { stats.begin(); stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array)
    { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; }
requestAnimationFrame(update); }; requestAnimationFrame(update);;