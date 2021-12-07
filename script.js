



let signs = ['Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];

let events = ['suffer unimaginable despair', 'find a cool looking rock', 'run a half marathon', 'get set up in an arranged marriage', 'seriously consider a sex change', 'pick up an elderly hitchhiker', 'stumble upon a grisly crime scene', 'kill a bat', 'fall in love with a surprisingly sweet and thoughtful horse', 'choke', 'go on a gay booze cruise unknowingly', 'lose the ashes of a loved one' ];

let dates = ['tomorrow', 'in 4000 years', 'as soon as possible', 'in 2 minutes and 13 seconds', 'anytime between 2 months from now and 12 years from now', 'when you least expect it', 'yesterday in an alternate timeline', 'in an hour', 'the next time you get in your car', '2 birthdays from now'];




let randomSign = signs[Math.floor(Math.random() * signs.length)];
let randomEvent = events[Math.floor(Math.random() * events.length)];
let randomDate = dates [Math.floor(Math.random() * dates.length)];

process.stdout.write(`Your Sign: ${randomSign} \nYou will ${randomEvent} ${randomDate}. \n`);