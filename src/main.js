import { Entry } from './journal.js';
import './styles.css';

$(document).ready(function() {
  var entry = new Entry("Rugs", "Rugs can be made of wool, silk, cotton, jute, or synthetic fibers.");
  var value = entry.countWords(); 
  console.log(value);
  var letters = entry.CountLetters();
  console.log(letters);
});

