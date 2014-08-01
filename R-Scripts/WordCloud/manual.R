# now make some words to build a corpus to test for a two-step stopword removal process...
words1<- c("und, oder, aber, ich, auto, das")
words.all<-data.frame(rbind(words3))
words.corpus<-Corpus(DataframeSource((words.all)))

# now remove the second set of stopwords, this time your custom set from the excel file, 
# note that it has to be a reference to a character vector containing the custom stopwords
words.corpus.nostopwords <- tm_map(words.corpus.nostopwords, removeWords, stop.words_german_1_de$V1)


View(data$V1[1:100])