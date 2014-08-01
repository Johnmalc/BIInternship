

# This is the server logic 
library(shiny)

shinyServer(function(input, output) {
   
  output$Plot <- renderPlot({
      
    # Graph cars using blue points overlayed by a line 
    plot(data, type="o", col="blue", xaxt='n')
    
    ticks<-c(1:nrow(data))
    axis(1,at=ticks,labels=ticks)
    
   
    
  })
  
})
