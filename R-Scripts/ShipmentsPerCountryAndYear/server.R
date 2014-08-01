
# This is the server logic for a Shiny web application.
# You can find out more about building applications with Shiny here:
# 
# http://www.rstudio.com/shiny/
#

library(googleVis)
library(shiny)

shinyServer(function(input, output) {
  
  myYear <- reactive({
    input$Year
  })
  
  output$gv <- renderGvis({
    myData <- subset(data, (Year > (myYear()-1)) & (Year < (myYear()+1)))
    gvisGeoChart(myData, "Customer_Country", "Count", 
        options=list(width=1000, height=500, 
        colors="['#f5dcba','#4d8086','#6f6c5c', '#d6421b', '#3f6d97', '#9a6e80', '#fbb638', '#5b968e']"))

  })
  
})
