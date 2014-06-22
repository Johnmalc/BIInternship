
# This is the user-interface definition of a Shiny web application.
# You can find out more about building applications with Shiny here:
#
# http://shiny.rstudio.com
#

library(shiny)

shinyUI(fluidPage(

  # Application title
  titlePanel("CS Feedback since 2014"),

  # Show a plot of the generated distribution
  mainPanel(
    plotOutput("distPlot", width="600px", height="600px")
  )
  
))
