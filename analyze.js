var emotionValue= new Array();
var dominateEmotion= new Array();
var postTime= new Array();
var emtotionJSONstr=""; 
var JSONobj;
var emotionColors= new Array();

$(document).ready(function(){
	$("#analyzeBtn").click(function(){
			

		$("#article").text('');var lymbix= new 
		$.lymbix("d86c23a11d54af02440cfa27fad021e2d3caee1e");
				
				var article= $("#article").val();
				console.log("article content is: " + article+"\n");
				lymbix.tonalizeDetailed
				(
					article,
					function(object)
					{
							//returnJSONObj= object;						
						JSONobj= object; 
						//emtotionJSONstr=JSON.stringify(object);						
						//console.log("emotion analysis: " + emtotionJSONstr);  

						var articleSentiment= JSONobj.article_sentiment.score; 
						emotionValue.push(articleSentiment);					
						var domEmotion= JSONobj.dominant_emotion; 
						dominateEmotion.push(domEmotion);

						console.log("emotionValue: " + emotionValue);
						console.log("dominateEmotion: " + dominateEmotion);	
					}
				);//tonalizeDetailed

			//emotionAnalyze();				
		});

	$("#drawChartBtn").click(function(){
		drawTheChart();


	});//drawChartBtn click.
});



function drawTheChart()
{
	console.log(" drawChart() was called. ");
	determineEmotionColor();
	//variable bar has to be extracted, and the x lable number must be dynamic, it is determined by the post time.
         var bar = new RGraph.Bar('cvs', emotionValue)            
                .Set('hmargin', 1)
                .Set('colors', emotionColors)
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

/*
According to the dominant emotion, it will return the CSS color. 
*/
function determineEmotionColor()
{

	
	//return map[ domEmotion ];

	for(var index= 0 ; index < dominateEmotion.length ; index++)
	{
		var domEmotion= dominateEmotion[ index ]; 
		console.log("domEmotion is: " + domEmotion);
		emotionColors.push( emotionAndColorTable( domEmotion ) );
		console.log(emotionColors);
	}

}

function emotionAndColorTable(emotion){

	if(emotion == "enjoyment_elation")
	{
		return "#FFFF00";
	}
	else if(emotion == "amusement_excitement")
	{
		return "#CC00CC";
	}
	else if(emotion == "contentment_gratitude")
	{
		return "#800000";
	}
	else if(emotion == "sadness_grief")
	{
		return "#3399FF";
	}
	else if(emotion == "anger_loathing")
	{
		return "#FF0000";
	}
	else if(emotion == "fear_uneasiness")
	{
		return "#000000";
	}
	else if(emotion == "humiliation_shame")
	{
		return "#FF8585";		
	}
	else if(emotion == "affection_friendliness")
	{
		return "#FF66FF";		
	}
	else
	{
		console.log("Exception!");
	}
}

/*
var emotionAndColor= function(domEmotion){
	var map={
		"enjoyment_elation": "#FFFF00",
		"amusement_excitement":"#CC00CC",
		"contentment_gratitude":"#800000",
		"sadness_grief":"#3399FF",
		"anger_loathing":"#FF0000",
		"fear_uneasiness":"#000000",
		"humiliation_shame":"#FF8585",
		"affection_friendliness":"#FF66FF"		
	};
	
}
*/
//Please clarify the concept that how to pass the object correctly. 
function emotionAnalyze()
{
	

}

//dominateEmotion=["amusement_excitement", "enjoyment_elation", "contentment_gratitude", "sadness_grief", "anger_loathing", 
//"fear_uneasiness", "humiliation_shame", "affection_friendliness"]; 