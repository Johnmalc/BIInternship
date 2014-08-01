
library(shiny)

shinyUI(pageWithSidebar(
  
  # Application title
  headerPanel("Display order count  per ZIP Code"),
  
  # Sidebar with a slider input for number of observations
  sidebarPanel(
   h4("it is really slow !!!")
  ),
  
  # Show a plot of the generated distribution
  mainPanel(
    htmlOutput("distPlot")
  )
  
))
