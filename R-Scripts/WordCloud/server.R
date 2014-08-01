
# This is the server logic for a Shiny web application.
# You can find out more about building applications with Shiny here:
#
# http://shiny.rstudio.com
#

library(shiny)
library(tm)
library(wordcloud)

shinyServer(function(input, output) {

  output$distPlot <- renderPlot({
    
    newData <- data$V1[1:100]
    we <- data$V2[1:100]
    
    # create corpus
    mach_corpus = Corpus(VectorSource(newData))
    
    tdm = TermDocumentMatrix(mach_corpus,
          control = list(removePunctuation = TRUE, removeNumbers=TRUE ))
    
    # now remove the standard list of stopwords
    # words.nostopwords <- tm_map(mach_corpus, removeWords, stop.words_german_1_de$V1)
    
    # define tdm as matrix
    m = as.matrix(tdm)
    # http://stackoverflow.com/questions/6437164/removing-empty-rows-of-a-data-file-in-r
    # get word counts in decreasing order
    # (after inspecting the words, you could remove similar terms if you want)
    word_freqs = sort(rowSums(m), decreasing=TRUE)
    
    # create a data frame with words and their frequencies
    dm = data.frame(word=names(word_freqs), freq=word_freqs)
    
    # plot wordcloud    or data$v2
    wordcloud(newData, we, random.order=FALSE, colors=brewer.pal(8, "Dark2"))
    

  })

})
