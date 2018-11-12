function parseResult(sentence) {
  var commands = ["테스트", "안녕", "전계현"];
  var command = "";

  for (var i = 0; i < commands.length; i++) {
    if (sentence.indexOf(commands[i]) != -1) {
      command = commands[i];
      break;
    }
  }

  $.getJSON('/data/SampleData.json', function(data) {
    console.log(data[command]);
  });
}
