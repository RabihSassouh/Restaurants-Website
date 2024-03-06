document.addEventListener("DOMContentLoaded", function () {
  const click = document.getElementById("click");
  const wrapper = document.getElementById("wrapper");

  function highlightText() {
    // Get the input text and search word
    var inputText = wrapper.textContent;
    var searchWord = document.getElementById("search-word").value;

    // Create a regular expression with the search word and the global flag for multiple occurrences
    var regex = new RegExp(searchWord, "gi");

    // Replace the matched words with a span having the id 'highlighted-text'
    var highlightedText = inputText.replace(
      regex,
      '<span id="highlighted-text"">$&</span>'
    );

    // Display the highlighted text
    wrapper.innerHTML = highlightedText;
  }

  click.addEventListener("click", function () {
    highlightText();
  });
});
