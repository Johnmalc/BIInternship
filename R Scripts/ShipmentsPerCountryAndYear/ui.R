
# This is the user-interface definition of a Shiny web application.
# You can find out more about building applications with Shiny here:
# 
# http://www.rstuidio.com/shiny/
#

library(shiny)

shinyUI(pageWithSidebar(
  
  # Application title
  headerPanel("Shipments per Customer Country and year: Animated Geo Chart"),
  
  # Sidebar with a slider input for number of observations
  sidebarPanel(
    sliderInput("Year", "Choose year to be displayed:", 
                min=2007, max=2014, value=2007,  step=NULL,
                format="###0",animate=animationOptions(interval = 5000, 
                                                       loop = FALSE,
                                                       playButton = NULL,
                                                      pauseButton = NULL))
    
  ),
 
  
  # Show a plot of the generated distribution
  mainPanel(
    htmlOutput("gv")
  )
))
