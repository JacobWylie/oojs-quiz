var questions = [
	new Question("Who is the current MLB career home run leader?", 
		["Babe Ruth", "Barry Bonds"], "Barry Bonds"),
	new Question("Which team won the 2016 World Series?", 
		["Chicago Cubs", "Cleveland Indians"], "Chicago Cubs"),
	new Question("Who has the most recorded career strikeouts with 5,714?", 
		["Sandy Koufax", "Nolan Ryan"], "Nolan Ryan"),
	new Question("Who holds the single season stolen base record?", ["Hugh Nicol", "Ricky Henderson"], "Hugh Nicol")
];

var quiz = new Quiz(questions);

QuizUI.displayNext();