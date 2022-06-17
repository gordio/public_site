var Navigator=function(links_selector){var links_list=document.querySelectorAll(links_selector),links={},pages={};for(var i=links_list.length;--i>=0;){pages[links_list[i].hash]=document.querySelector(links_list[i].hash);links[links_list[i].hash]=links_list[i];}
var cur_active=-1;function updActive(page){if(cur_active!==page){if(cur_active!=-1&&links[cur_active].classList.contains('is-active')){links[cur_active].classList.remove("is-active");}
cur_active=page;links[cur_active].classList.add("is-active");}}
function calc_global_offset(el){var res=0
while(el.parentElement){console.log(el)
res+=el.offsetTop
el=el.parentElement}
return res}
function check_anchors(ev){var y=(window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;for(var page in pages){page_offset=calc_global_offset(pages[page])
if(y>=page_offset-window.innerHeight/2){updActive(page);break;}}}
document.addEventListener('scroll',check_anchors);check_anchors();}
Navigator(".slides-navigation-links a");