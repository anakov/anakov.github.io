
/* Institutions ***************************************************************/

$('a[id=upf]'        ).attr('href','https://www.upf.edu/');
$('a[id=ecb]'        ).attr('href','https://www.ecb.int');

/* People *********************************************************************/

$('a[id=jim]'          ).attr('href','https://sites.google.com/site/jimcostain/');
$('a[id=borja]'        ).attr('href','https://www.cunef.edu/en/claustro/petit-zarzalejos-borja-maria/');

/* Defined links options *******************************************************/

$('a'                  ).attr('target','_blank');
$('a[class=simple]'    ).attr('target','_self');
$('a[class=top]'       ).attr('target','_self');
$('a[class=down]'      ).attr('target','_self');
$('a[class=toc]'       ).attr('target','_self');
$('a[class=toca]'      ).attr('target','_self');
$('a[class=toccv]'     ).attr('target','_blank');
$('a[class=title]'     ).attr('target','_self');

/* Show/Hide functions *********************************************************/

$(document).on("click", "a.plus", function(event){
    event.preventDefault();
    $(this).next('.hidden').slideDown('slow');
    $(this).attr('class', 'minus');
});

$(document).on("click", "a.minus", function(event){
    event.preventDefault();
    $(this).next('.hidden').slideUp('slow');
    $(this).attr('class', 'plus');
});

$(document).on("click", "a.more", function(event){
    event.preventDefault();
    $(this).attr('class', 'less');
});

$(document).on("click", "a.less", function(event){
    event.preventDefault();
    $(this).attr('class', 'more');
});

function showhide(xx) {
  var x = document.getElementById(xx)
  if (x.style.display === "none") {
    $(x).slideDown('slow');
  } else {
    $(x).slideUp('slow');
  }
}

/******************************************************************************/
