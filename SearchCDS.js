function searchLBC() {
        
        var buttons = document.querySelectorAll('button');
        //for(var i=0; i<buttons.length; i++) 
        {
                //if (buttons[i] !== null) 
                {
                        //if (buttons[i].outerText.includes('Rechercher'))
                        {
                                //buttons[i].outerText = "Change"

                                buttons[0].addEventListener("click", function() {
                                        
                                        var input = document.querySelectorAll('.hSrcInput input')[0].value;
                                        
                                        window.location = "https://www.amazon.fr/s?k=" + input + "&__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_2"
                                      });
                        }
                }
        }
        
}

// Trigger a new ad into the page
setTimeout(searchLBC, 5000);

