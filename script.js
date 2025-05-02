        var tablinks = document.getElementsByClassName("tablinks");
        var tabcontents = document.getElementsByClassName("tabcontents");

        function opentab(tabname,event){
           for( let links of tablinks){
            links.classList.remove("activelink");
           }
           for( let contents of tabcontents){
            contents.classList.remove("activetab");
           }
           event.currentTarget.classList.add("activelink");
           document.getElementById(tabname).classList.add("activetab")
        }
