const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Grace',
    'Levi',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];
  
  const ThoughtDescriptions = [
    'Decision Tracker',
    'Find My iPad',
    'Learn Piano',
    'Starbase Defender',
    'Tower Defense',
    'Safari',
    'Movie trailers',
    'Hello world',
    'Social Media App',
    'Notes',
    'Messages',
    'Email',
    'Compass',
    'Firefox',
    'Running app',
    'Cooking app',
    'Poker',
    'Deliveries',
  ];
  
  const possibleReactions = [
    'cool',
    'great',
    'awesome',
    'yay',
    'nice',
    'keep it up',
    'hurray',
    'ha ha ha',
    'fa la la',
    'good job',
    'well done',
    'impressive',
    'wow',
    'ok',
    'fine',
  ];
  
  const users = [];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  // Function to generate random thoughts that we can add to the database. Includes thought reactions.
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(ThoughtDescriptions),
        username: getRandomName(),
        buildSuccess: Math.random() < 0.5,
        reactions: [...getThoughtReactions(3)],
      });
    }
    return results;
  };

  const getUserFriends = (int) => {
    if (int === 1) {
      return getRandomArrItem(names);
    }
    const results = [];
    for (let i = 0; i < int; i++){
      results.push({
        tagBody: getRandomArrItem(names),
        thoughts: getRandomThoughts(),
      });
    }
    return results;
  };
  
  // Create the reactions that will be added to each thought
  const getThoughtReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(possibleReactions);
    }
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        tagBody: getRandomArrItem(possibleReactions),
        username: getRandomName(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomThoughts };
  