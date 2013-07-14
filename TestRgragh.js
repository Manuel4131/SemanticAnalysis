//var emotionValue= new Array();
var emotionValue= new Array();
// I need a MAP.  javascript object.
var tmpValue= -4; 
var colorsCandidate= ["#FF3300","#0066FF" ,"#FF3300", "#0066FF"];
var colors= new Array();
var index= 0 ;
$(document).ready(function(){
	$("#testBtn").click(function(){
		
		emotionValue.push(tmpValue);
		 
		colors.push(colorsCandidate[index]);
		index++;
		tmpValue++;
		drawTheChart();

	});//testBtn click
});//doc ready.

function drawTheChart()
{
	//emotionValue.push(newValue);
	
	//variable bar has to be extracted, and the x lable number must be dynamic, it is determined by the post time.
         var bar = new RGraph.Bar('cvs', emotionValue)            
                .Set('hmargin', 1)
                .Set('colors', colors)
                .Set('colors.sequential', true)
                .Set('xaxispos', 'center')
                .Set('background.grid.autofit.numhlines', 10)		//How many grids I want.
                .Set('ymax', 10)
                .Set('gutter.bottom', 40)	//The margin below the bottom number.
                .Set('labels', ['1997', '1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011'])
                
            /**
            * Now add the line chart
            */
            /*
            var line = new RGraph.Line('cvs', lineData)
                .Set('colors', ['#FFD600'])
                .Set('xaxispos', 'center')
                .Set('linewidth', 2)
                .Set('shadow', true)
                .Set('shadow.offsetx', 0)
                .Set('shadow.offsety', 0)
                .Set('shadow.blur', 5)
                */
                
            /**
            * Create the combined class
            */
            combo = new RGraph.CombinedChart(bar);
            combo.Draw();  
}


