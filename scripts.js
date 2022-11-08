document.getElementById("WW").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://www.breakingbadapi.com/api/characters/1";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json);
      let results = "";
      results += '<img id="jsonimg" src="' + json[0].img + '"/><div class="jsonText">';
      results += '<h1><strong>' + json[0].name + '</strong></h1>';
      results += '<br><p><strong>Occupation';
      if (json[0].occupation.length > 1) {results += 's'}
      results += ':</strong></p>';
      for (let i=0; i < json[0].occupation.length; i++) {
	    results += '<p>' + json[0].occupation[i] + '</p>';
      }
      results += '<br>';
      results += '<p><strong>Birthday:</strong> ' + json[0].birthday + '</p>';
      
      results += '<br><p><strong>Appeared in Season';
      if (json[0].appearance.length > 1) {results += 's'}
      results += ': </strong>';
      for (let i=0; i < json[0].appearance.length; i++) {
	    results += json[0].appearance[i].toString();
	    if (i != (json[0].appearance.length - 1)) {
	        results += ", ";
	    }
      }
      results += "</p><br>";
      results += '<p><strong>Played by:</strong> ' + json[0].portrayed + '</p>';
      
      results += '</div>';
      document.getElementById("results").innerHTML = results;
    });
});

document.getElementById("JP").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://www.breakingbadapi.com/api/characters/2";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json);
      let results = "";
      results += '<img id="jsonimg" src="' + json[0].img + '"/><div class="jsonText">';
      results += '<h1><strong>' + json[0].name + '</strong></h1>';
      results += '<br><p><strong>Occupation';
      if (json[0].occupation.length > 1) {results += 's'}
      results += ':</strong></p>';
      for (let i=0; i < json[0].occupation.length; i++) {
	    results += '<p>' + json[0].occupation[i] + '</p>';
      }
      results += '<br>';
      results += '<p><strong>Birthday:</strong> ' + json[0].birthday + '</p>';
      
      results += '<br><p><strong>Appeared in Season';
      if (json[0].appearance.length > 1) {results += 's'}
      results += ': </strong>';
      for (let i=0; i < json[0].appearance.length; i++) {
	    results += json[0].appearance[i].toString();
	    if (i != (json[0].appearance.length - 1)) {
	        results += ", ";
	    }
      }
      results += "</p><br>";
      results += '<p><strong>Played by:</strong> ' + json[0].portrayed + '</p>';
      
      results += '</div>';
      document.getElementById("results").innerHTML = results;
    });
});

document.getElementById("HS").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://www.breakingbadapi.com/api/characters/5";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json);
      let results = "";
      results += '<img id="jsonimg" src="' + json[0].img + '"/><div class="jsonText">';
      results += '<h1><strong>' + json[0].name + '</strong></h1>';
      results += '<br><p><strong>Occupation';
      if (json[0].occupation.length > 1) {results += 's'}
      results += ':</strong></p>';
      for (let i=0; i < json[0].occupation.length; i++) {
	    results += '<p>' + json[0].occupation[i] + '</p>';
      }
      results += '<br>';
      results += '<p><strong>Birthday:</strong> ' + json[0].birthday + '</p>';
      
      results += '<br><p><strong>Appeared in Season';
      if (json[0].appearance.length > 1) {results += 's'}
      results += ': </strong>';
      for (let i=0; i < json[0].appearance.length; i++) {
	    results += json[0].appearance[i].toString();
	    if (i != (json[0].appearance.length - 1)) {
	        results += ", ";
	    }
      }
      results += "</p><br>";
      results += '<p><strong>Played by:</strong> ' + json[0].portrayed + '</p>';
      
      results += '</div>';
      document.getElementById("results").innerHTML = results;
    });
});

document.getElementById("ME").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://www.breakingbadapi.com/api/characters/7";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json);
      let results = "";
      results += '<img id="jsonimg" src="' + json[0].img + '"/><div class="jsonText">';
      results += '<h1><strong>' + json[0].name + '</strong></h1>';
      results += '<br><p><strong>Occupation';
      if (json[0].occupation.length > 1) {results += 's'}
      results += ':</strong></p>';
      for (let i=0; i < json[0].occupation.length; i++) {
	    results += '<p>' + json[0].occupation[i] + '</p>';
      }
      results += '<br>';
      results += '<p><strong>Birthday:</strong> ' + json[0].birthday + '</p>';
      
      results += '<br><p><strong>Appeared in Season';
      if (json[0].appearance.length > 1) {results += 's'}
      results += ': </strong>';
      for (let i=0; i < json[0].appearance.length; i++) {
	    results += json[0].appearance[i].toString();
	    if (i != (json[0].appearance.length - 1)) {
	        results += ", ";
	    }
      }
      results += "</p><br>";
      results += '<p><strong>Played by:</strong> ' + json[0].portrayed + '</p>';
      
      results += '</div>';
      document.getElementById("results").innerHTML = results;
    });
});

document.getElementById("SG").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://www.breakingbadapi.com/api/characters/8";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json);
      let results = "";
      results += '<img id="jsonimg" src="' + json[0].img + '"/><div class="jsonText">';
      results += '<h1><strong>' + json[0].name + '</strong></h1>';
      results += '<br><p><strong>Occupation';
      if (json[0].occupation.length > 1) {results += 's'}
      results += ':</strong></p>';
      for (let i=0; i < json[0].occupation.length; i++) {
	    results += '<p>' + json[0].occupation[i] + '</p>';
      }
      results += '<br>';
      results += '<p><strong>Birthday:</strong> ' + json[0].birthday + '</p>';
      
      results += '<br><p><strong>Appeared in Season';
      if (json[0].appearance.length > 1) {results += 's'}
      results += ': </strong>';
      for (let i=0; i < json[0].appearance.length; i++) {
	    results += json[0].appearance[i].toString();
	    if (i != (json[0].appearance.length - 1)) {
	        results += ", ";
	    }
      }
      results += "</p><br>";
      results += '<p><strong>Played by:</strong> ' + json[0].portrayed + '</p>';
      
      results += '</div>';
      document.getElementById("results").innerHTML = results;
    });
});

document.getElementById("charSub").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("charIn").value;
  const url = "https://www.breakingbadapi.com/api/characters?name=" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json);
      let results = "";
      results += '<img id="jsonimg" src="' + json[0].img + '"/><div class="jsonText">';
      results += '<h1><strong>' + json[0].name + '</strong></h1>';
      results += '<br><p><strong>Occupation';
      if (json[0].occupation.length > 1) {results += 's'}
      results += ':</strong></p>';
      for (let i=0; i < json[0].occupation.length; i++) {
	    results += '<p>' + json[0].occupation[i] + '</p>';
      }
      results += '<br>';
      results += '<p><strong>Birthday:</strong> ' + json[0].birthday + '</p>';
      
      results += '<br><p><strong>Appeared in Season';
      if (json[0].appearance.length > 1) {results += 's'}
      results += ': </strong>';
      for (let i=0; i < json[0].appearance.length; i++) {
	    results += json[0].appearance[i].toString();
	    if (i != (json[0].appearance.length - 1)) {
	        results += ", ";
	    }
      }
      results += "</p><br>";
      results += '<p><strong>Played by:</strong> ' + json[0].portrayed + '</p>';
      
      results += '</div>';
      document.getElementById("results").innerHTML = results;
    });
});