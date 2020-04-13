import { Entry } from './journal.js';
import './styles.css';

$(document).ready(function() {
  $("#newEntry").submit(function(event){
    event.preventDefault();
    var title = $("#title").val(); 
    var body = $("#body").val();
    var entry = new Entry(title, body);
    var words = entry.countWords(); 
    $("#wordCount").text("Total words: " + words);
    var letters = entry.CountLetters();
    $("#letterCounts").text("Total vowels and consonants: " + letters);
    var teaserText = entry.getTeaser();
    $("#teaser").text(teaserText);
  }); 
});

