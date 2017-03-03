// JavaScript Document<script type="text/javascript"> 
function showMore(example) {
				var exMore = example + "-more";
				var exLess = example + "-less";
				
                var exElement = document.getElementById(example);
                var exDisplay = exElement.style.display;
                if(exElement.style.display == "") {
                                exElement.style.display = "block";
                } else if(exElement.style.display == "none") {
                                exElement.style.display = "block";
                } else if(exElement.style.display == "block") {
                                exElement.style.display = "none";
                }
				
				var exMoreElement = document.getElementById(exMore);
                var exMoreDisplay = exMoreElement.style.display;
				var exLessElement = document.getElementById(exLess);
                var exLessDisplay = exLessElement.style.display;
                if(exMoreElement.style.display == "") {
                                exMoreElement.style.display = "none";
								exLessElement.style.display = "inline";
                } else if(exMoreElement.style.display == "none") {
                                exMoreElement.style.display = "inline";
								exLessElement.style.display = "none";
                } else if(exMoreElement.style.display == "inline") {
                                exMoreElement.style.display = "none";
								exLessElement.style.display = "inline";
                }
}
