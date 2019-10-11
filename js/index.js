// // fds

// ready is a method.   When you put code in there, it executes after other stuff has been loaded. 
// ready will sit and wait, and load after everything else goes.
// whenever you want to initialize your page with certain values, use the ready method.  


$().ready( () => {  // this line is almost universal when using jQuery
    console.log("Ready with jQuery!");
    /*by tag*/  $("h1").text("Ready with jQuery!");    // we're setting something, not readinig // see the <h1> tag in the html file.  The line above applies to that. It will do the same thing to EVERY <h1> tag.  It IS the tag seletor.  Every h1 tag affected.
    /*by id*/   $("#h0").html("<span style='color:red;'>Ready with jQuery by id!</span>");     // couldnt do this just with "text"    (.text)
    /*by class*/$(".abc").css("color", "blue").css("fontStyle", "italic");      // "color" is the css style to change text color // css takes TWO parameters, whereas .text and .html take just one. // what if want italic?  Can chain stuff together.  See above
    
    
    // .text represents the innerTEXT property we did with pure js
    // equivalent to var control get DocumentById.  Does all of it at same time in jQuery. Don't have to do something multiple times with jQuery, does it all at once.
    // there are a myriad of methods
    // can put other stuff in here.  Put functions in here?
    
    
    
    
    $("#displayname").click( () => { /* here we put the code we want to execute every time the button is clicked*/
        $("#out").val( $("#in").val() );      // gets whatever is in the left input box, stores it in a variable called input
         // out is the selector.  Second one isn't creating sometinig, just reading. 
        } ) ;  // the click method, in jQuery?  inside the () of lc  click, we can pass an anonymous function  // var input holds whatever the user keys in
    

});
//the jQuery statem


// need a function to handle the click event.  Read from one place, write to another
// need a selector for the button


const list = () => {
};

const add = () => {
};


