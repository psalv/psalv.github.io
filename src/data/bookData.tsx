import * as React from "react";

interface IBookData {
  name: string;
  imageUrl: string;
  review: IReview;
}

interface IReview {
  year: number;
  lines: string[];
}

const preventOrphanWords = (s: string) => {
  const lastSpaceIndex = s.lastIndexOf(" ");
  if (!lastSpaceIndex) {
    return s;
  }
  const sArray = s.split("");
  sArray[lastSpaceIndex] = "\u00A0";
  return sArray.join("");
};

export const processReview = (review: IReview) => {
  return (
    <>
      <b>{review.year}</b>
      {review.lines.map((line, index) => (
        <React.Fragment key={index}>
          <br />
          <br />
          {preventOrphanWords(line)}
        </React.Fragment>
      ))}
    </>
  );
};

export const bookData: IBookData[] = [
  {
    name: "The Richest Man in Babylon",
    imageUrl: "https://i.imgur.com/2MzJViU.png",
    review: {
      year: 2021,
      lines: [
        "Relevant and accessible.",
        "A unique marriage of advice and history.",
        "Sensible ideas are reinforced through clever narrative.",
        "A wonderful reminder of the compounding nature of patience, and the value of wisdom."
      ],
    },
  },
  {
    name: "Ready Player Two",
    imageUrl: "https://i.imgur.com/H9AkyTM.png",
    review: {
      year: 2021,
      lines: [
        "Fast-paced and enjoyable.",
        "A much-anticipated revisiting of Cline's futuristic virtual world.",
        "Incredibly detailed, with a fascinating hook, and wonderful settings—a treat for the nostalgic.",
        "Despite some shortcomings in the narrative, this was an entertaining adventure.",
      ],
    },
  },
  {
    name: "Masters of Doom",
    imageUrl: "https://i.imgur.com/1Bw5fL9.png",
    review: {
      year: 2020,
      lines: [
        "A modern Western.",
        "An incredible account of grit, determination, and passion, set during the world's technological coming of age.",
        "Jubilance turns to arrogance in this exploration into new frontiers and the effects of uncompromising idealism.",
        "This true story contextualizes modern computing and gaming, and it’s prevailing forces.",
      ],
    },
  },
  {
    name: "Shōgun",
    imageUrl: "https://i.imgur.com/PoWLP4U.png",
    review: {
      year: 2020,
      lines: [
        "Completely immersive. Truly exceptional.",
        "More than an adventure, an exploration into our preconceptions and capabilities.",
        "A story that becomes so much more the longer it goes on. I didn't want it to end, but was delighted in how it did.",
        "A must read.",
      ],
    },
  },
  {
    name: "Armada",
    imageUrl: "https://i.imgur.com/Ze9ai8i.png",
    review: {
      year: 2020,
      lines: [
        "Constant excitement.",
        "A fast paced, and enjoyable doomsday novel.",
        "Quality sci-fi without any of the frills.",
      ],
    },
  },
  {
    name: "Galápagos",
    imageUrl: "https://i.imgur.com/ZBoIFB7.png",
    review: {
      year: 2020,
      lines: [
        "An insightful idea.",
        "Vonnegut argues our intelligence as our downfall in a very unusual form of storytelling.",
        "While at some points the story's unique flow felt burdensome, the inventiveness in this narrative cannot go unmentioned.",
      ],
    },
  },
  {
    name: "Ready Player One",
    imageUrl: "https://i.imgur.com/vQqznp2.png",
    review: {
      year: 2020,
      lines: [
        "Entirely captivating.",
        "A fantastic adventure that I couldn't put down.",
        "Combines elements of nostalgia with dystopia to create a refreshing and fun read.",
        "The universe is imaginative, detailed, and relatable.",
      ],
    },
  },
  {
    name: "Starship Troopers",
    imageUrl: "https://i.imgur.com/u8XbOTm.png",
    review: {
      year: 2020,
      lines: [
        "Perceptive and intriguing.",
        "A tale of personal growth and duty.",
        "Heinlein cleverly challenges our institutions offering insightful alternatives.",
        "The story’s restraint serves to magnify it’s powerful message.",
      ],
    },
  },
  {
    name: "Elevation",
    imageUrl: "https://i.imgur.com/XsYsWZz.png",
    review: {
      year: 2018,
      lines: [
        "Incredibly unique.",
        "An exceptional story like none I have ever had the pleasure of reading before.",
        "Stephen King's talented writing is surpassed by his incredible characters and undeniable originality.",
      ],
    },
  },
  {
    name: "The Checklist Manifesto",
    imageUrl: "https://i.imgur.com/TlAABXM.png",
    review: {
      year: 2018,
      lines: [
        "Valuable insight.",
        "This methodical investigation into how we can mitigate preventable error in our lives will leave you wishing you had picked it up sooner.",
        "The evidence is overwhelming, and the lesson is simple. Everyone can benefit from this book.",
      ],
    },
  },
  {
    name: "A Life in Parts",
    imageUrl: "https://i.imgur.com/Ephuin9.png",
    review: {
      year: 2018,
      lines: [
        "Truly exceptional.",
        "A fascinating life filled with struggle, self-discovery, and art.",
        "Bryan Cranston tells his story magnificently and masterfully.",
        "A perfectly crafted autobiography.",
      ],
    },
  },
  {
    name: "Spock's World",
    imageUrl: "https://i.imgur.com/RwEAzsv.png",
    review: {
      year: 2018,
      lines: [
        "Marvelous.",
        "A completely compelling account combining history and narrative.",
        "Rich in lessons and reminders about confronting our emotions.",
        "A novel that consistently managed to surprise me and exceed my expectations.",
      ],
    },
  },
  {
    name: "The Lost World",
    imageUrl: "https://i.imgur.com/pdgPrab.png",
    review: {
      year: 2017,
      lines: [
        "Unreachingly wonderful.",
        "An enjoyable read in an undeniably exciting world.",
        "Unoriginal but nevertheless fun.",
      ],
    },
  },
  {
    name: "The Island of Doctor Moreau",
    imageUrl: "https://i.imgur.com/VVH4C9x.png",
    review: {
      year: 2017,
      lines: [
        "Curious fun.",
        "An adventure in an utterly unique setting.",
        "Explores both madness and power just briefly enough to raise a question.",
        "Perfectly an H.G. Wells novel.",
      ],
    },
  },
  {
    name: "The Invisible Man",
    imageUrl: "https://i.imgur.com/pVzQ2bx.png",
    review: {
      year: 2017,
      lines: [
        "Anger, and anguish.",
        "A portrayal of a wonderfully difficult situation and the accompanying struggle to overcome it.",
        "Frustration done right.",
      ],
    },
  },
  {
    name: "The Diamond as Big as the Ritz",
    imageUrl: "https://i.imgur.com/qSu7LJy.png",
    review: {
      year: 2017,
      lines: [
        "Seductive.",
        "Glamour portrayed through ultimate splendour.",
        "A glimpse into the blinding power of wealth.",
      ],
    },
  },
  {
    name: "The Bell Jar",
    imageUrl: "https://i.imgur.com/4AXaFAD.png",
    review: {
      year: 2017,
      lines: [
        "Hollow.",
        "An intentionally unpleasant account of a quietly painful world.",
        "Anxiety and despair rupturing from powerlessness.",
      ],
    },
  },
  {
    name: "Solving the Procrastination Puzzle",
    imageUrl: "https://i.imgur.com/3viZLRS.png",
    review: {
      year: 2017,
      lines: [
        "Necessarily honest.",
        "Does a wonderful job of helping the reader to understand their own behaviour and tactfully present alternatives.",
        "It will not suffice to only read this book once.",
      ],
    },
  },
  {
    name: "Pride and Prejudice",
    imageUrl: "https://i.imgur.com/T7P4Sfk.png",
    review: {
      year: 2017,
      lines: [
        "Giddy enticement.",
        "A book about intrigue, and preconceptions.",
        "The novelty felt by the characters translates wonderfully to the reader.",
        "A perfectly paced romance.",
      ],
    },
  },
  {
    name: "Jurassic Park",
    imageUrl: "https://i.imgur.com/HXiQlHP.png",
    review: {
      year: 2017,
      lines: [
        "Looming tension, and splendid fun.",
        "Impossible dilemmas, a magical island, and magnificent perseverance.",
        "A well-thought-out story.",
      ],
    },
  },
  {
    name: "Jungle Tales of Tarzan",
    imageUrl: "https://i.imgur.com/UrJGU8k.png",
    review: {
      year: 2017,
      lines: [
        "Amusing, and captivating.",
        "Stories from a unique character with a charming perspective.",
        "A small world with much to offer.",
      ],
    },
  },
  {
    name: "Gulliver's Travels",
    imageUrl: "https://i.imgur.com/4tYIFpm.png",
    review: {
      year: 2017,
      lines: [
        "Whimsical, and entertaining.",
        "Well-written and self-contained stories to amuse and surprise.",
        "Precisely adventure.",
      ],
    },
  },
  {
    name: "For Whom the Bell Tolls",
    imageUrl: "https://i.imgur.com/azkLTpy.png",
    review: {
      year: 2017,
      lines: [
        "Powerful, and resonant.",
        "Whispers of hope and the trudge of painful reality are at the forefront of this novel.",
        "An exploration in acceptance.",
        "Hauntingly vivid.",
      ],
    },
  },
  {
    name: "Of Mice and Men",
    imageUrl: "https://i.imgur.com/3R4nroI.png",
    review: {
      year: 2017,
      lines: [
        "Woeful, and humbling.",
        "A tale of the beauty and cruelty in the world.",
        "Provokes one's values and compassion.",
      ],
    },
  },
  {
    name: "To Kill a Mockingbird",
    imageUrl: "https://i.imgur.com/DrZwWVR.png",
    review: {
      year: 2017,
      lines: [
        "Timelessly harrowing.",
        "Reveals ugly truths about our former and current world through the eyes of innocence.",
        "Draws attention to the heroism present in daily life.",
        "And makes you wonder what the difference is between a finch and a mockingbird.",
      ],
    },
  },
  {
    name: "The Wisdom of Insecurity",
    imageUrl: "https://i.imgur.com/P3cXlAb.png",
    review: {
      year: 2017,
      lines: [
        "Illuminating.",
        "Beautifully frames the issue of insecurity and anxiety.",
        'Focuses on the endless lesson of "now".',
        "A very soothing and guiding perspective.",
      ],
    },
  },
  {
    name: "To Have and Have Not",
    imageUrl: "https://i.imgur.com/vk8JX7X.png",
    review: {
      year: 2017,
      lines: [
        "Quiet, rich, and beautiful.",
        "Another Hemingway gem.",
        "This journey from success to annihilation pulls you deeper into the question of what gives life value.",
        "The characters are real and the struggles heartbreaking.",
      ],
    },
  },
  {
    name: "Vice Versa: A Lesson to Fathers",
    imageUrl: "https://i.imgur.com/V2OQLBE.png",
    review: {
      year: 2016,
      lines: [
        "Ceaselessly amusing.",
        "A tale that leaves you with the slightest grin on each page.",
        "A classically beautiful take on a cliche.",
        "Perspectively wonderful.",
      ],
    },
  },
  {
    name: "Under the Dome",
    imageUrl: "https://i.imgur.com/4qRLuw6.png",
    review: {
      year: 2016,
      lines: [
        "Emotionally rich, and powerfully written.",
        "Like having manipulation and paranoia dropped into your backyard.",
        "Incredible depth and character throughout the entire novel.",
        "Enjoyable on every page.",
      ],
    },
  },
  {
    name: "The War of the Worlds",
    imageUrl: "https://i.imgur.com/TzjOgMm.png",
    review: {
      year: 2016,
      lines: [
        "Futility redefined.",
        "A challenge to mankind's self-proclaimed dominance and entitlement.",
        "The impermanence and relativity of strength and weakness.",
      ],
    },
  },
  {
    name: "The Phantom of the Opera",
    imageUrl: "https://i.imgur.com/HNSEPef.png",
    review: {
      year: 2016,
      lines: [
        "Unexpectedly exciting.",
        "Perfectly naive characters and a beautifully arranged mystery.",
        "A romance utterly overshadowed by the setting.",
      ],
    },
  },
  {
    name: "The Book Thief",
    imageUrl: "https://i.imgur.com/Yk9kl0g.png",
    review: {
      year: 2016,
      lines: [
        "Simply beautiful.",
        "An unexpected exploration into the ceaseless persistence of humanity.",
        "Continually touching, introspective, and illuminating.",
        "A literary treasure.",
      ],
    },
  },
  {
    name: "Surely You're Joking, Mr. Feynman",
    imageUrl: "https://i.imgur.com/vBdT7JN.png",
    review: {
      year: 2016,
      lines: [
        "Absolutely riveting.",
        "Richard Feynman's amusing stories, valuable lessons, and unending humour makes this an absolute must read.",
        "Everyday tales form the mind of a genius.",
        "Truly marvelous.",
      ],
    },
  },
  {
    name: "Sled Driver",
    imageUrl: "https://i.imgur.com/Bx4a576.png",
    review: {
      year: 2016,
      lines: [
        "Truly extraordinary.",
        "Stories from an entirely different world.",
        "They will leave you laughing, awed, and humbled.",
        "Passion in one of it's finest forms.",
      ],
    },
  },
  {
    name: "The Old Man and the Sea",
    imageUrl: "https://i.imgur.com/WV0nUdL.png",
    review: {
      year: 2016,
      lines: [
        "Empowering, humbling, and meaningful.",
        "This is the book that began my romance with Hemingway.",
        "The book is short but it's lessons have stayed with me for a long time.",
        "Wise in his years, the fisherman Santiago embodies the virtues that each one of us strive for.",
      ],
    },
  },
  {
    name: "Dune",
    imageUrl: "https://i.imgur.com/vXjV1VK.png",
    review: {
      year: 2016,
      lines: ["Imaginative.", "A mysterious universe with a certain allure."],
    },
  },
  {
    name: "An Astronaut's Guide to Life on Earth",
    imageUrl: "https://i.imgur.com/8tkZFMm.png",
    review: {
      year: 2016,
      lines: [
        "Reassuring, and helpful.",
        "Chris Hadfield has no secret other than hard work and dedication.",
        "A necessary reminder to a generation of instant gratification.",
      ],
    },
  },
  {
    name: "Around the World in 80 Days",
    imageUrl: "https://i.imgur.com/rZrMb2T.png",
    review: {
      year: 2016,
      lines: [
        "Classically fun.",
        "Another book best described by a subtle grin.",
        "Wonderfully captures the feelings of flight and chase.",
        "Ever changing scenery keeps excitement alive throughout the entire novel.",
      ],
    },
  },
  {
    name: "A Farewell to Arms",
    imageUrl: "https://i.imgur.com/7Qu9iXC.png",
    review: {
      year: 2016,
      lines: [
        "Hope, and futility.",
        "Challenges the actions of mankind through startlingly contrast.",
        "Gives the gift of feeling powerless.",
        "Purely Hemingway.",
      ],
    },
  },
  {
    name: "Treasure Island",
    imageUrl: "https://i.imgur.com/SIpqwWF.png",
    review: {
      year: 2015,
      lines: [
        "Captivating from page one.",
        "An intriguing narrative and exciting setting.",
        "A great journey filled with truly fun imagery.",
      ],
    },
  },
  {
    name: "The Time Machine",
    imageUrl: "https://i.imgur.com/cV12K2C.png",
    review: {
      year: 2015,
      lines: [
        "Mysterious, and strange.",
        "Questions rush in as an entirely new and everlastingly eerie world is painted.",
        "A story filled with naivety and discovery.",
      ],
    },
  },
  {
    name: "The Sun Also Rises",
    imageUrl: "https://i.imgur.com/vdX82z4.png",
    review: {
      year: 2015,
      lines: [
        "Patiently moving.",
        "The poetry of life displayed as it is.",
        "Nuances of this novel will travel with you, surprising you for long to come.",
        "An unexpected and unique piece of literature.",
      ],
    },
  },
  {
    name: "The Shining",
    imageUrl: "https://i.imgur.com/2eecA2Z.png",
    review: {
      year: 2015,
      lines: [
        "Eerie, and creeping.",
        "Wonderfully written and perfectly frightening.",
        "The horror sets in slowly; one doesn't realize until they're absolutely terrified.",
        "A captivating story with extremely well-developed characters.",
      ],
    },
  },
  {
    name: "Slaughterhouse-Five",
    imageUrl: "https://i.imgur.com/gKE8MnE.png",
    review: {
      year: 2015,
      lines: [
        "Painfully moving.",
        "The disorientation of wars atrocities as they echo forever.",
        "A breathtaking view on life.",
        "An unexpectedly beautiful take on science fiction.",
      ],
    },
  },
  {
    name: "Siddhartha",
    imageUrl: "https://i.imgur.com/9fF3rKn.png",
    review: {
      year: 2015,
      lines: [
        "Insightful, and nourishing.",
        "A terrific journey through the suffering and wanting of life.",
        "The story's appeal matures well.",
        "An essential read for those seeking more.",
      ],
    },
  },
  {
    name: "How to Win Friends and Influence People",
    imageUrl: "https://i.imgur.com/x5xVk6m.png",
    review: {
      year: 2015,
      lines: [
        "Classically straightforward.",
        "Dale Carnegie isn't teaching you how to be a business man, but rather how to be a decent person.",
        "The lessons aren't shocking, they are things we all know but choose to ignore by our own accord.",
        "The voice of reason needed to guide you back on track.",
      ],
    },
  },
  {
    name: "The Hitchhiker's Guide to the Galaxy",
    imageUrl: "https://i.imgur.com/7lNos1A.png",
    review: {
      year: 2015,
      lines: [
        "Underwhelming.",
        "Funny at times, but largely disappointing.",
        "Perhaps I'm missing something.",
      ],
    },
  },
  {
    name: "Flatland",
    imageUrl: "https://i.imgur.com/VENyp6F.png",
    review: {
      year: 2015,
      lines: [
        "Timeless, and eye-opening.",
        "An extraordinary way of explaining the unexplainable",
        "A two-tiered story, combining intrigue with insight.",
        "A true gem for one's perspective.",
      ],
    },
  },
  {
    name: "Strange Case of Dr. Jekyll and Mr. Hyde",
    imageUrl: "https://i.imgur.com/t6fFwTS.png",
    review: {
      year: 2015,
      lines: [
        "Fresh, and methodical.",
        "A very English take on gritty.",
        "An easy and enjoyable classic.",
        "I enjoyed imagining the reaction incited in the book's own time.",
      ],
    },
  },
  {
    name: "Do Androids Dream of Electric Sheep?",
    imageUrl: "https://i.imgur.com/G5KgVVV.png",
    review: {
      year: 2015,
      lines: [
        "Uniquely captivating.",
        "A quaint take on a mildly dystopian world.",
        "A book that keeps you guessing in the most delightful way.",
      ],
    },
  },
  {
    name: "Call of the Wild",
    imageUrl: "https://i.imgur.com/aXYeNSg.png",
    review: {
      year: 2015,
      lines: [
        "Savage, and astonishing.",
        "A journey of exploration unlike any other.",
        "A steady march towards primitive and instinctual brutality.",
      ],
    },
  },
  {
    name: "The Way of Zen",
    imageUrl: "https://i.imgur.com/YNZmCeQ.png",
    review: {
      year: 2015,
      lines: [
        "Eye-opening, and thought-provoking.",
        "Alan Watts effectively teaches a different way of thinking.",
        "Dense with new lessons and outlooks, every page contains something worth meditating over.",
      ],
    },
  },
  {
    name: "The Martian",
    imageUrl: "https://i.imgur.com/8GoguDX.png",
    review: {
      year: 2015,
      lines: [
        "Fun.",
        "Difficult to put down.",
        "The book manages to top itself time and again with each new feat of ingenuity and creativity.",
        "Climbing into the mind of an astronaut.",
      ],
    },
  },
  {
    name: "The Catcher in the Rye",
    imageUrl: "https://i.imgur.com/J8ayCML.png",
    review: {
      year: 2015,
      lines: [
        "Introspective, and reminiscent.",
        "A character seldom played but very relatable.",
        "Sharing a moment of distress felt by everyone but spoken by few.",
        "A soothing emotion to share.",
      ],
    },
  },
  {
    name: "Animal Farm",
    imageUrl: "https://i.imgur.com/FGzOGor.png",
    review: {
      year: 2015,
      lines: ["Chilling.", "A brief overview into power and corruption."],
    },
  },
  {
    name: "The God Delusion",
    imageUrl: "https://i.imgur.com/kgz5Hbl.png",
    review: {
      year: 2014,
      lines: [
        "Perspective.",
        "The widespread phenomenon of religion as understood by a geneticist.",
        "Human behaviour reexamined.",
        "Challenges the reader's assumed knowledge.",
      ],
    },
  },
  {
    name: "The Count of Monte Cristo",
    imageUrl: "https://i.imgur.com/Qdj0Wax.png",
    review: {
      year: 2014,
      lines: [
        "Unprecedented excellence.",
        "A compelling story of patient justice and unrelenting composure.",
        "Consistently clever, tremendously written, and perfectly moving.",
        "A masterpiece.",
      ],
    },
  },
  {
    name: "Brave New World",
    imageUrl: "https://i.imgur.com/F7JghRM.png",
    review: {
      year: 2014,
      lines: [
        "Unnerving.",
        "The weakness and arrogance of mankind as we grow comfortable and proud.",
        "Numb curiosity becomes festering fear as the realities outlined become all too relatable.",
        "Echos louder with each passing year.",
      ],
    },
  },
  {
    name: "20000 Leagues Under the Sea",
    imageUrl: "https://i.imgur.com/vnkRKvS.png",
    review: {
      year: 2014,
      lines: [
        "Constant adventure.",
        "A journey to captivate one's sense of discovery.",
        "You can feel the electricity of being on the move.",
      ],
    },
  },
  {
    name: "The Ordeal of Gilbert Pinfold",
    imageUrl: "https://i.imgur.com/QiuQLtk.png",
    review: {
      year: 2014,
      lines: [
        "Unnerving, and fascinating",
        "A brief journey into the delusional mind.",
        "A true story making it all the more impactful.",
        "Through life's greatest challenges one's courage is tested.",
      ],
    },
  },
  {
    name: "Sherlock Holmes",
    imageUrl: "https://i.imgur.com/np2agdP.png",
    review: {
      year: 2014,
      lines: [
        "Delightfully magnificent.",
        "Never has being on the edge of your seat been so fun.",
        "Sherlock Holmes is the epitome of characters.",
        "Arthur Conan Doyle's genius never ceases to amaze me.",
      ],
    },
  },
  {
    name: "1984",
    imageUrl: "https://i.imgur.com/BnvrnlW.png",
    review: {
      year: 2013,
      lines: [
        "Tremendously agitating.",
        "An account of strength and weakness.",
        "The bleakest overtones fill this oppressive world.",
        "A warning or prediction.",
      ],
    },
  },
];
