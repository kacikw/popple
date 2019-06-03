$( document ).ready(function() {

    // this is my reference to the #burger
    var $burger = $('#burger');
    // this is my referrence to the #nav-container
    var $navContainer = $('#nav-container');
    // var to check if you can see the #nav-container
    var navVisible = false;
    // color vars
    var pink = "#E59381";
    var gold = "#E5C88D";


    // This is the function that I will call when ever I tap/click on the #burger or the #nav-container
    function showMenu() {
        console.log(navVisible + " this is from the showMenu Function");

        // this is an if/else statement that will check to see if you CAN see or CAN NOT see the #nav-container. Think of this as a YES or NO question.
        if (navVisible === false) {
            // I'm using Greensock to do all the animations. Here I'm going to animate the #nav-container into view. I'm going to use the width of the #nav-container to determin how far I should animate the #nav-container to the left
            TweenMax.to($navContainer, 0.25, {
                x: -$navContainer.width()
            });

            // I want to check to see if the burger is in the shape of an arrow. If the user went through the whole animation and never moved the mouse, there is a chance the burger is not an arrow in which case we need to set it to one
            TweenMax.set($topLine, {
                y: 9
            });
            TweenMax.set($bottomLine, {
                y: -9
            });


            console.log("NO! I can't see the navigation");

            // rotate $topline and change to pink
            TweenMax.to($topLine, 0.25, {
                rotation: 45,
                stroke: pink
            });
            // rotate $bottomline and change to pink
            TweenMax.to($bottomLine, 0.25, {
                rotation: -45,
                stroke: pink
            });
            // this will bring the ring back into view and change to pink
            TweenMax.set([$ring], {
                alpha: 1,
                stroke: pink,
                drawSVG: "100%",
                strokeWidth: 3
            });
            // draw the $ring set the stroke width to 2
            TweenMax.from($ring, 0.75, {
                drawSVG: "50% 50%"
            });


            navVisible = true;
        }
        // if you CAN see the #nav-container then everyting in the else statement below will excute
        else {

            // This statement will return the #nav-container back to it's origianl position (which is -30vw that was set in the navivation.scss file)
            TweenMax.to($navContainer, 0.25, {
                x: 0
            });

            console.log("YES! I can see the navigation");

            // reset the $topline
            TweenMax.to($topLine, 0.25, {
                rotation: 0,
                stroke: burgerColor,
                y: 0
            });
            // reset $bottomline
            TweenMax.to($bottomLine, 0.25, {
                rotation: 0,
                stroke: burgerColor,
                y: 0
            });
            // fade in middle line
            TweenMax.to($middleLine, 0.25, {
                alpha: 1,
                stroke: burgerColor
            });
            // drag the ring out of view and set the stroke width back to 1
            TweenMax.to($ring, 0.75, {
                drawSVG: "50% 50%",
                strokeWidth: 1
            });
            navVisible = false;
        }
    }

    // This listener is attached to the #burger. It's listneing for a "tap / click" when one happens it will call the showMenu function
    $burger.on("click", showMenu);

    // This listner is attached to the #nav-container. It's listneing for a "tap / click" when one happens it will call the showMenu function
    $navContainer.on("click", showMenu);



    // Burger Animation

    var $ring = $("#ring");
    var $topLine = $("#topLine");
    var $middleLine = $("#middleLine");
    var $bottomLine = $("#bottomLine");
    // I will use this for the burger color, the default color will be pink
    var burgerColor = gold;

    // this is a container element, you can itmes into this array that will effect all items
    // we can use this set call to set the alpha to all the items inside of the $hiddenElements array
    //TweenMax.set(hiddenElements,{alpha:0});

    // change the rotation point of the $topLine and $bottomline
    TweenMax.set([$topLine, $bottomLine], {
        transformOrigin: "50% 50%"
    });


    // this is the function that will be called when the mouse is rolled over the burger
    function burgerOver() {
        // console.log("mouse over");

        // is the nav visible?, then excute the code in the if statement
        if (navVisible === true) {
            // console.log("YES! I can see the navigation");
            // the nav is not visible, excute the code in the else statement
            // rotate $topline
            TweenMax.to($topLine, 0.25, {
                rotation: 0
            });
            // rotate $bottomline
            TweenMax.to($bottomLine, 0.25, {
                rotation: 0
            });

        } else {
            // console.log("NO! I can't see the navigation");
            // move the $topline down to the $middleline
            TweenMax.to($topLine, 0.25, {
                y: 9,
                stroke: burgerColor
            });
            // move the $topline up to the $middleline
            TweenMax.to($bottomLine, 0.25, {
                y: -9
            });
            // fade out $middleline
            TweenMax.to($middleLine, 0.25, {
                alpha: 0
            });

        }

    }
    // this is the listener attached to the $burger that is listening for a mouse enter
    $burger.on("mouseenter", burgerOver);

    // this is the function that will be called when the mouse is rolled over the burger
    function burgerOut() {
        // console.log("mouse out");
        // is the nav visible?, then excute the code in the if statement
        if (navVisible === true) {
            // console.log("YES! I can see the navigation");
            // rotate $topline
            TweenMax.to($topLine, 0.25, {
                rotation: 45
            });
            // rotate $bottomline
            TweenMax.to($bottomLine, 0.25, {
                rotation: -45
            });
        }
        // the nav is not visible, excute the code in the else statement
        else {
            // console.log("NO! I can't see the navigation");
            // move the $topline down to the $middleline
            TweenMax.to($topLine, 0.25, {
                y: 0,
                stroke: gold
            });
            // move the $topline up to the $middleline
            TweenMax.to($bottomLine, 0.25, {
                y: 0,
                stroke: gold
            });
            // fade in $middleline
            TweenMax.to($middleLine, 0.25, {
                alpha: 1
            });
        }
    }
    // this is the listener attached to the $burger that is listening for a mouse leave
    $burger.on("mouseleave", burgerOut);




    // =============================================
    // WAYPOINTS WAYPOINTS WAYPOINTS WAYPOINTS
    // =============================================





    function changeHeaderTransparent() {
        //change the background to pink
        TweenMax.to($('header'), 0.25, {opacity:0});
    }

    function changeHeaderWhite() {
        //change the background to white
        TweenMax.to($('header'), 0.25, {opacity:1});
    }




// hero container
    var inview = new Waypoint.Inview({
        element: $('#hero-container')[0],
        enter: function(direction) {
            $.notify('Enter triggered with direction ' + direction,{  globalPosition: 'top center', className: "success"});

            if (direction === "up") {
                // call the function to change the header to pink
                changeHeaderWhite();
            } else {
                changeHeaderTransparent();
            }
        },
        entered: function(direction) {
            $.notify('Entered triggered with direction ' + direction,{  globalPosition: 'top center', className: "success"});

            if (direction === "up") {
                // call the function to change the header to white
                changeHeaderWhite();
            } else {
                changeHeaderTransparent();

            }
        },
        exit: function(direction) {
            $.notify('Exit triggered with direction ' + direction,{  globalPosition: 'top center'});
            if (direction === "up") {
              changeHeaderWhite();

            } else {
                // call the function to change the header to pink
                changeHeaderTransparent();
            }
        },
        exited: function(direction) {
            $.notify('Exited triggered with direction ' + direction,{  globalPosition: 'top center'});
            if (direction === "up") {
              changeHeaderWhite();

            } else {
                // call the function to change the header to white
                changeHeaderTransparent();
            }
        },
        // this is an offset for the inview, but you will have to use my inview.js file from the bower_components folder
        offset: {
        top: $('header').height() // 300px
        //bottom: 200 // 200px
      }
    })


// our story container
    var inview = new Waypoint.Inview({
        element: $('#our-story-container')[0],
        enter: function(direction) {
            $.notify('Enter triggered with direction ' + direction,{  globalPosition: 'top center', className: "success"});

            if (direction === "up") {
                // call the function to change the header to pink
                changeHeaderWhite();
            } else {
                changeHeaderTransparent();
            }
        },
        entered: function(direction) {
            $.notify('Entered triggered with direction ' + direction,{  globalPosition: 'top center', className: "success"});

            if (direction === "up") {
                // call the function to change the header to white
                changeHeaderWhite();
            } else {
                changeHeaderTransparent();

            }
        },
        exit: function(direction) {
            $.notify('Exit triggered with direction ' + direction,{  globalPosition: 'top center'});
            if (direction === "up") {
              changeHeaderWhite();

            } else {
                // call the function to change the header to pink
                changeHeaderTransparent();
            }
        },
        exited: function(direction) {
            $.notify('Exited triggered with direction ' + direction,{  globalPosition: 'top center'});
            if (direction === "up") {
              changeHeaderWhite();

            } else {
                // call the function to change the header to white
                changeHeaderTransparent();
            }
        },
        // this is an offset for the inview, but you will have to use my inview.js file from the bower_components folder
        offset: {
        top: $('header').height() // 300px
        //bottom: 200 // 200px
      }
    })


// process container
    var inview = new Waypoint.Inview({
        element: $('#process-container')[0],
        enter: function(direction) {
            $.notify('Enter triggered with direction ' + direction,{  globalPosition: 'top center', className: "success"});

            if (direction === "up") {
                // call the function to change the header to pink
                changeHeaderWhite();
            } else {
                changeHeaderTransparent();
            }
        },
        entered: function(direction) {
            $.notify('Entered triggered with direction ' + direction,{  globalPosition: 'top center', className: "success"});

            if (direction === "up") {
                // call the function to change the header to white
                changeHeaderWhite();
            } else {
                changeHeaderTransparent();

            }
        },
        exit: function(direction) {
            $.notify('Exit triggered with direction ' + direction,{  globalPosition: 'top center'});
            if (direction === "up") {
              changeHeaderWhite();

            } else {
                // call the function to change the header to pink
                changeHeaderTransparent();
            }
        },
        exited: function(direction) {
            $.notify('Exited triggered with direction ' + direction,{  globalPosition: 'top center'});
            if (direction === "up") {
              changeHeaderWhite();

            } else {
                // call the function to change the header to white
                changeHeaderTransparent();
            }
        },
        // this is an offset for the inview, but you will have to use my inview.js file from the bower_components folder
        offset: {
        top: $('header').height() // 300px
        //bottom: 200 // 200px
      }
    })


// flavors container
    var inview = new Waypoint.Inview({
        element: $('#flavors-container')[0],
        enter: function(direction) {
            $.notify('Enter triggered with direction ' + direction,{  globalPosition: 'top center', className: "success"});

            if (direction === "up") {
                // call the function to change the header to pink
                changeHeaderWhite();
            } else {
                changeHeaderTransparent();
            }
        },
        entered: function(direction) {
            $.notify('Entered triggered with direction ' + direction,{  globalPosition: 'top center', className: "success"});

            if (direction === "up") {
                // call the function to change the header to white
                changeHeaderWhite();
            } else {
                changeHeaderTransparent();

            }
        },
        exit: function(direction) {
            $.notify('Exit triggered with direction ' + direction,{  globalPosition: 'top center'});
            if (direction === "up") {
              changeHeaderWhite();

            } else {
                // call the function to change the header to pink
                changeHeaderTransparent();
            }
        },
        exited: function(direction) {
            $.notify('Exited triggered with direction ' + direction,{  globalPosition: 'top center'});
            if (direction === "up") {
              changeHeaderWhite();

            } else {
                // call the function to change the header to white
                changeHeaderTransparent();
            }
        },
        // this is an offset for the inview, but you will have to use my inview.js file from the bower_components folder
        offset: {
        top: $('header').height() // 300px
        //bottom: 200 // 200px
      }
    })

// gallery container
    var inview = new Waypoint.Inview({
        element: $('#gallery-container')[0],
        enter: function(direction) {
            $.notify('Enter triggered with direction ' + direction,{  globalPosition: 'top center', className: "success"});

            if (direction === "up") {
                // call the function to change the header to pink
                changeHeaderWhite();
            } else {
                changeHeaderTransparent();
            }
        },
        entered: function(direction) {
            $.notify('Entered triggered with direction ' + direction,{  globalPosition: 'top center', className: "success"});

            if (direction === "up") {
                // call the function to change the header to white
                changeHeaderWhite();
            } else {
                changeHeaderTransparent();

            }
        },
        exit: function(direction) {
            $.notify('Exit triggered with direction ' + direction,{  globalPosition: 'top center'});
            if (direction === "up") {
              changeHeaderWhite();

            } else {
                // call the function to change the header to pink
                changeHeaderTransparent();
            }
        },
        exited: function(direction) {
            $.notify('Exited triggered with direction ' + direction,{  globalPosition: 'top center'});
            if (direction === "up") {
              changeHeaderWhite();

            } else {
                // call the function to change the header to white
                changeHeaderTransparent();
            }
        },
        // this is an offset for the inview, but you will have to use my inview.js file from the bower_components folder
        offset: {
        top: $('header').height() // 300px
        //bottom: 200 // 200px
      }
    })


// contact container
    var inview = new Waypoint.Inview({
        element: $('#flavors-container')[0],
        enter: function(direction) {
            $.notify('Enter triggered with direction ' + direction,{  globalPosition: 'top center', className: "success"});

            if (direction === "up") {
                // call the function to change the header to pink
                changeHeaderWhite();
            } else {
                changeHeaderTransparent();
            }
        },
        entered: function(direction) {
            $.notify('Entered triggered with direction ' + direction,{  globalPosition: 'top center', className: "success"});

            if (direction === "up") {
                // call the function to change the header to white
                changeHeaderWhite();
            } else {
                changeHeaderTransparent();

            }
        },
        exit: function(direction) {
            $.notify('Exit triggered with direction ' + direction,{  globalPosition: 'top center'});
            if (direction === "up") {
              changeHeaderWhite();

            } else {
                // call the function to change the header to pink
                changeHeaderTransparent();
            }
        },
        exited: function(direction) {
            $.notify('Exited triggered with direction ' + direction,{  globalPosition: 'top center'});
            if (direction === "up") {
              changeHeaderWhite();

            } else {
                // call the function to change the header to white
                changeHeaderTransparent();
            }
        },
        // this is an offset for the inview, but you will have to use my inview.js file from the bower_components folder
        offset: {
        top: $('header').height() // 300px
        //bottom: 200 // 200px
      }
    })

// footer container
    var inview = new Waypoint.Inview({
        element: $('footer')[0],

        exited: function(direction) {
            $.notify('Exited triggered with direction ' + direction,{  globalPosition: 'top center'});
            if (direction === "up") {
              changeHeaderWhite();

            } else {
                // call the function to change the header to white
                changeHeaderTransparent();
            }
        },
        // this is an offset for the inview, but you will have to use my inview.js file from the bower_components folder
        offset: {
        top: $('header').height() // 300px
        //bottom: 200 // 200px
      }
    })


});

// SMOOTH SCROLLING

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
