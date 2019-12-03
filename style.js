var createGraph = function(Data)
{
    var w = 1000;
    var h = 500;
    
    d3.select("body")
    .append("svg")
    .attr("height",h)
    .attr("width",w)

    d3.select("svg")
    .selectAll("circle")
    .data(Data)
    .enter()
    .append("circle")
    .attr("x",function(D)
          {return D.working_Hours})
    .attr("y",Data.Happiness_Score)
    .attr("r",5)
    

    
    

    
}





var DataPromise = d3.csv("CompiledData.csv")
DataPromise.then(
function(Data)
    {
        createGraph("CompiledData.csv");
    },
    function()
    {
        console.log("Not Finding Data")
    }
)