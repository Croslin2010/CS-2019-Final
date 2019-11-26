var createGraph = function("HappinessData","LifeExpectancy","SuicideData","WorkingHours")
{
    var w = 500;
    var h = 500;
    
    d3.select("body")
    .selectAll("svg")
    .enter()
    .append("svg")
    .attr("height",h)
    .attr("width",w)
    .attr("y",function(d){
        return h - d;
    })
    .attr("height", function(d){
        return d;
    })
    
    var xAxis = d3.axisBottom()
    
    
    d3.select("svg")
    .selectAll('g')
    .append("g")
    .call(xAxis)
    .attr()
    
}

//promise all like in notes

createGraph(2015.csv, life_expectancy_years.csv, suicide_per_100000_people.csv, working_hours_per_week.csv)