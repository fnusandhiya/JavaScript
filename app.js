// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
function tablebody(T){

  var tbody = d3.select("tbody");
  tbody.html(" ");
  // Console.log the UFO data from data.js
  //console.log(data);

  T.forEach((tableData) => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

};

tablebody(tableData);
  // Assign the data from `data.js` to a descriptive variable
var date = data;

// Select the submit button
var submit = d3.select("#filter-btn");
submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
     // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

  // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = date.filter(dates => dates.datetime === inputValue);
    console.log(filteredData);
    tablebody(filteredData);

});


