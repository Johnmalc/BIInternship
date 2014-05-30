

library(googleVis)
library(shiny)

shinyServer(function(input, output) {
   
  output$distPlot <- renderGvis({
    
    gvisGeoChart(lsd, "destZIP", "Count", 
                 options=list(region = "DE", width=1000, height=500, displayMode="markers", resolution="provinces"))
   
  })
  
})
