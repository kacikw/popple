$(document).ready(function(){var e=$("#burger"),t=$("#nav-container"),o=!1,n="#E59381",i="#E5C88D";function r(){console.log(o+" this is from the showMenu Function"),o=!1===o?(TweenMax.to(t,.25,{x:-t.width()}),TweenMax.set(c,{y:9}),TweenMax.set(l,{y:-9}),console.log("NO! I can't see the navigation"),TweenMax.to(c,.25,{rotation:45,stroke:n}),TweenMax.to(l,.25,{rotation:-45,stroke:n}),TweenMax.set([a],{alpha:1,stroke:n,drawSVG:"100%",strokeWidth:3}),TweenMax.from(a,.75,{drawSVG:"50% 50%"}),!0):(TweenMax.to(t,.25,{x:0}),console.log("YES! I can see the navigation"),TweenMax.to(c,.25,{rotation:0,stroke:d,y:0}),TweenMax.to(l,.25,{rotation:0,stroke:d,y:0}),TweenMax.to(s,.25,{alpha:1,stroke:d}),TweenMax.to(a,.75,{drawSVG:"50% 50%",strokeWidth:1}),!1)}e.on("click",r),t.on("click",r);var a=$("#ring"),c=$("#topLine"),s=$("#middleLine"),l=$("#bottomLine"),d=i;function g(){!0===o?(TweenMax.to(c,.25,{rotation:0}),TweenMax.to(l,.25,{rotation:0})):(TweenMax.to(c,.25,{y:9,stroke:d}),TweenMax.to(l,.25,{y:-9}),TweenMax.to(s,.25,{alpha:0}))}function f(){!0===o?(TweenMax.to(c,.25,{rotation:45}),TweenMax.to(l,.25,{rotation:-45})):(TweenMax.to(c,.25,{y:0,stroke:i}),TweenMax.to(l,.25,{y:0,stroke:i}),TweenMax.to(s,.25,{alpha:1}))}function u(){TweenMax.to($("header"),.25,{opacity:0})}function h(){TweenMax.to($("header"),.25,{opacity:1})}TweenMax.set([c,l],{transformOrigin:"50% 50%"}),e.on("mouseenter",g),e.on("mouseleave",f);var p=new Waypoint.Inview({element:$("#hero-container")[0],enter:function(e){$.notify("Enter triggered with direction "+e,{globalPosition:"top center",className:"success"}),"up"===e?h():u()},entered:function(e){$.notify("Entered triggered with direction "+e,{globalPosition:"top center",className:"success"}),"up"===e?h():u()},exit:function(e){$.notify("Exit triggered with direction "+e,{globalPosition:"top center"}),"up"===e?h():u()},exited:function(e){$.notify("Exited triggered with direction "+e,{globalPosition:"top center"}),"up"===e?h():u()},offset:{top:$("header").height()}}),p=new Waypoint.Inview({element:$("#our-story-container")[0],enter:function(e){$.notify("Enter triggered with direction "+e,{globalPosition:"top center",className:"success"}),"up"===e?h():u()},entered:function(e){$.notify("Entered triggered with direction "+e,{globalPosition:"top center",className:"success"}),"up"===e?h():u()},exit:function(e){$.notify("Exit triggered with direction "+e,{globalPosition:"top center"}),"up"===e?h():u()},exited:function(e){$.notify("Exited triggered with direction "+e,{globalPosition:"top center"}),"up"===e?h():u()},offset:{top:$("header").height()}}),p=new Waypoint.Inview({element:$("#process-container")[0],enter:function(e){$.notify("Enter triggered with direction "+e,{globalPosition:"top center",className:"success"}),"up"===e?h():u()},entered:function(e){$.notify("Entered triggered with direction "+e,{globalPosition:"top center",className:"success"}),"up"===e?h():u()},exit:function(e){$.notify("Exit triggered with direction "+e,{globalPosition:"top center"}),"up"===e?h():u()},exited:function(e){$.notify("Exited triggered with direction "+e,{globalPosition:"top center"}),"up"===e?h():u()},offset:{top:$("header").height()}}),p=new Waypoint.Inview({element:$("#flavors-container")[0],enter:function(e){$.notify("Enter triggered with direction "+e,{globalPosition:"top center",className:"success"}),"up"===e?h():u()},entered:function(e){$.notify("Entered triggered with direction "+e,{globalPosition:"top center",className:"success"}),"up"===e?h():u()},exit:function(e){$.notify("Exit triggered with direction "+e,{globalPosition:"top center"}),"up"===e?h():u()},exited:function(e){$.notify("Exited triggered with direction "+e,{globalPosition:"top center"}),"up"===e?h():u()},offset:{top:$("header").height()}}),p=new Waypoint.Inview({element:$("#gallery-container")[0],enter:function(e){$.notify("Enter triggered with direction "+e,{globalPosition:"top center",className:"success"}),"up"===e?h():u()},entered:function(e){$.notify("Entered triggered with direction "+e,{globalPosition:"top center",className:"success"}),"up"===e?h():u()},exit:function(e){$.notify("Exit triggered with direction "+e,{globalPosition:"top center"}),"up"===e?h():u()},exited:function(e){$.notify("Exited triggered with direction "+e,{globalPosition:"top center"}),"up"===e?h():u()},offset:{top:$("header").height()}}),p=new Waypoint.Inview({element:$("#flavors-container")[0],enter:function(e){$.notify("Enter triggered with direction "+e,{globalPosition:"top center",className:"success"}),"up"===e?h():u()},entered:function(e){$.notify("Entered triggered with direction "+e,{globalPosition:"top center",className:"success"}),"up"===e?h():u()},exit:function(e){$.notify("Exit triggered with direction "+e,{globalPosition:"top center"}),"up"===e?h():u()},exited:function(e){$.notify("Exited triggered with direction "+e,{globalPosition:"top center"}),"up"===e?h():u()},offset:{top:$("header").height()}}),p=new Waypoint.Inview({element:$("footer")[0],exited:function(e){$.notify("Exited triggered with direction "+e,{globalPosition:"top center"}),"up"===e?h():u()},offset:{top:$("header").height()}})}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3,function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}});