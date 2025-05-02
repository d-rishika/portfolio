<script>
        var tablinks = document.getElementsByClassName("tablinks");
        var tabcontents = document.getElementsByClassName("tabcontents");

        function opentab(tabname){
           for( links of tablinks){
            links.classList.remove("activelink");
           }
           for( contents of tabcontents){
            contents.classList.remove("activetab");
           }
           event.currentTarget.classList.add("activelink");
           document.getElementById(tabname).classList.add("activetab")
        }


        var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
           sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }
     </script>
