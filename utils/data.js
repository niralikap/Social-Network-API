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

  const emails = [
    'test1@test.com',
    'test2@test.com',
    'test3@test.com',
    'test4@test.com',
    'test5@test.com',
    'test6@test.com',
    'test7@test.com',
    'test8@test.com',
    'test9@test.com',
    'test10@test.com',
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
    'Social Media',
    'Notes',
    'Messages',
    'Email',
    'Compass',
    'Firefox',
    'Running',
    'Cooking',
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
    'like it',
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
    //`${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
    `${getRandomArrItem(names)}`;

    const getRandomEmail = () =>
    //`${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
    `${getRandomArrItem(emails)}`;
  
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
  module.exports = { getRandomName, getRandomEmail, getRandomThoughts };
  