import * as React from "react";
import styled from "styled-components";

interface IBookData {
  name: string;
  imageUrl: string;
  review: IReview;
  yearRead: number;
}

interface IReview {
  yearWritten: number;
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

const YearTypography = styled.b`
  right: 16px;
  bottom: 16px;
  position: absolute;
  color: #aaaa;
`;

export const processReview = (bookInfo: IBookData) => {
  const { review } = bookInfo;
  return (
    <>
      <b>{review.yearWritten}</b>
      <YearTypography>{bookInfo.yearRead}</YearTypography>
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

/*
Images are 600x900 pixels
 */
export const bookData: IBookData[] = [
  {
    name: "Fear and Loathing in Las Vegas",
    imageUrl: "https://i.imgur.com/ctJT4m7.png",
    yearRead: 2024,
    review: {
      yearWritten: 1971,
      lines: [
        "A tempest of madness.",
        "Self-righteousness longing for place.",
        "Looking behind the curtain only to be greeted by paranoia and delusion.",
        "The feeling of grasping for progress but going nowhere.",
      ],
    },
  },
  {
    name: "American Psycho",
    imageUrl: "https://i.imgur.com/DKuxNF6.png",
    yearRead: 2024,
    review: {
      yearWritten: 1991,
      lines: [
        "Deeply unpleasant.",
        "A cacophony of disturbing imagery, obsessive ranting, and stark juxtapositions.",
        "A blunt and tireless critique of narcissism.",
        "You probably don’t want to read this book.",
      ],
    },
  },
  {
    name: "Lord of the Flies",
    imageUrl: "https://i.imgur.com/u0SqVbk.png",
    yearRead: 2024,
    review: {
      yearWritten: 1954,
      lines: [
        "Spiteful pride and childish loathing.",
        "Voices of reason deafen under cries of savagery.",
        "Order and civility succumb to chaos and fear.",
        "A magnifying glass held to our tenuous social balance.",
      ],
    },
  },
  {
    name: "I, Robot",
    imageUrl: "https://i.imgur.com/p6fAR9n.png",
    yearRead: 2023,
    review: {
      yearWritten: 1950,
      lines: [
        "Contemplation of a once distant reality.",
        "A hopelessly optimistic view on man’s relationship with technology.",
        "Retrospectively gripping as the reader weighs old fears against the modern age.",
        "The self contained stories each have a distinctive charm.",
      ],
    },
  },
  {
    name: "The Grapes of Wrath",
    imageUrl: "https://i.imgur.com/w4tB3Vy.png",
    yearRead: 2023,
    review: {
      yearWritten: 1939,
      lines: [
        "Heartbreaking then, and now.",
        "A harsh critique of capitalism in America, and the commodification and dehumanization of man.",
        "Cautious optimism crumbles as desperation mounts under the might of unending greed.",
        "A transparent look at the foundations of disparity that never left our society, and the values that we left behind.",
      ],
    },
  },
  {
    name: "2001: A Space Odyssey",
    imageUrl: "https://i.imgur.com/ObHaVH9.png",
    yearRead: 2023,
    review: {
      yearWritten: 1968,
      lines: [
        "A roller coaster of intrigue.",
        "This journey across mankind’s evolution appeals to the great sense of human curiosity.",
        "The unique storytelling creates a captivating and immersive narrative. ",
        "Wonderfully fun and masterfully suspenseful.",
      ],
    },
  },
  {
    name: "The Icewind Dale Trilogy",
    imageUrl: "https://i.imgur.com/2EY5xil.png",
    yearRead: 2022,
    review: {
      yearWritten: 1988,
      lines: [
        "Gripping excellence.",
        "Masterfully woven stories continue to build immersive and delightful narratives.",
        "The peak of fast paced high fantasy.",
        "With a world so large and filled with so much detail and allure, each chapter brings a new adventure.",
      ],
    },
  },
  {
    name: "The Godfather",
    imageUrl: "https://i.imgur.com/J2ykYft.png",
    yearRead: 2022,
    review: {
      yearWritten: 1969,
      lines: [
        "Cool reasoning, masterful planning, and unwavering resolve.",
        "Interweaving stories are used to form an expansive world with diverse perspectives and constant fascination.",
        "In the world of organized crime, respect and friendship live above all else.",
      ],
    },
  },
  {
    name: "What Got You Here Won't Get You There",
    imageUrl: "https://i.imgur.com/5Jt0lva.png",
    yearRead: 2022,
    review: {
      yearWritten: 2007,
      lines: [
        "Sensible, honest, enlightening.",
        "Examines barriers to effective leadership, and the steps to grow past them.",
        "The lessons felt relevant and particularly well-timed.",
        "The expertise and experience of Goldsmith is overwhelming, each chapter contains worthwhile insights.",
      ],
    },
  },
  {
    name: "Project Hail Mary",
    imageUrl: "https://i.imgur.com/k1BgNxX.png",
    yearRead: 2022,
    review: {
      yearWritten: 2021,
      lines: [
        "Sensational and enthralling.",
        "Tremendously written, and always captivating.",
        "A charmingly idealistic take on solidarity and our ability to overcome adversity.",
        "Weir is a master of first person problem solving narratives.",
      ],
    },
  },
  {
    name: "The Death of Ivan Ilyich",
    imageUrl: "https://i.imgur.com/w8hUuxg.png",
    yearRead: 2021,
    review: {
      yearWritten: 1886,
      lines: [
        "Hopelessness and dissatisfaction.",
        "The tale of a painful and unfulfilling life chasing expectations.",
        "Despair turns to fear, and grows into clarity as Tolstoy confronts mortality and purpose.",
      ],
    },
  },
  {
    name: "Into the Wild",
    imageUrl: "https://i.imgur.com/q5SOhrI.png",
    yearRead: 2021,
    review: {
      yearWritten: 1996,
      lines: [
        "Determination, jubilation, and introspection.",
        "An investigation into societal expectations and finding purpose.",
        "Relatable emotions in unrelatable situations helps the reader revisit preconceptions.",
        "The authentic optimism of youth.",
      ],
    },
  },
  {
    name: "Ender's Game",
    imageUrl: "https://i.imgur.com/GM6dPsR.png",
    yearRead: 2021,
    review: {
      yearWritten: 1985,
      lines: [
        "Chaotic exhilaration.",
        "Impossible hardships underscore mankind’s unlimited potential.",
        "The burden is overwhelming, the victories are visceral, and the stress is palpable.",
        "Truly wonderful writing complemented by powerful ideas.",
      ],
    },
  },
  {
    name: "Shoe Dog",
    imageUrl: "https://i.imgur.com/V3Sl7ia.png",
    yearRead: 2021,
    review: {
      yearWritten: 2016,
      lines: [
        "Incredibly honest and thoroughly exceptional.",
        "An absorbing account of grit, dedication, and drive.",
        "A manual for overcoming adversity and finding one’s purpose.",
        "Phil Knight demystifies success and the difficult paths and decisions that lead to it.",
      ],
    },
  },
  {
    name: "The Dark Elf Trilogy",
    imageUrl: "https://i.imgur.com/veLfL27.png",
    yearRead: 2021,
    review: {
      yearWritten: 1990,
      lines: [
        "Endlessly exciting, completely compelling, and thoroughly immersive.",
        "An outstanding fantasy trilogy that explores virtue, goodness, and pre-conceptions.",
        "Stark contrast and masterfully placed details breathe life to this universe.",
        "R.A Salvatore’s fast-paced style is truly addictive.",
      ],
    },
  },
  {
    name: "Rendezvous with Rama",
    imageUrl: "https://i.imgur.com/0rOOg4d.png",
    yearRead: 2021,
    review: {
      yearWritten: 1973,
      lines: [
        "Fantastically executed.",
        "A gripping and hopeful narrative about mankind and their place in the universe.",
        "Arthur C. Clarke is not afraid to imagine big, and it's contagious.",
        "Succinct writing paired with an awe-inspiring setting made this a hard one to put down.",
      ],
    },
  },
  {
    name: "The Richest Man in Babylon",
    imageUrl: "https://i.imgur.com/2MzJViU.png",
    yearRead: 2021,
    review: {
      yearWritten: 1926,
      lines: [
        "Relevant and accessible.",
        "A unique marriage of advice and history.",
        "Sensible ideas are reinforced through clever narrative.",
        "A wonderful reminder of the compounding nature of patience, and the value of wisdom.",
      ],
    },
  },
  {
    name: "Ready Player Two",
    imageUrl: "https://i.imgur.com/H9AkyTM.png",
    yearRead: 2021,
    review: {
      yearWritten: 2020,
      lines: [
        "Fast-paced and enjoyable.",
        "A much-anticipated revisiting of Cline's futuristic virtual world.",
        "Heavily reliant on nostalgia and a fascinating, yet unoriginal, hook.",
        "If you can get past shortcomings in the narrative, this is an entertaining adventure.",
      ],
    },
  },
  {
    name: "Masters of Doom",
    imageUrl: "https://i.imgur.com/1Bw5fL9.png",
    yearRead: 2020,
    review: {
      yearWritten: 2003,
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
    yearRead: 2020,
    review: {
      yearWritten: 1975,
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
    yearRead: 2020,
    review: {
      yearWritten: 2015,
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
    yearRead: 2020,
    review: {
      yearWritten: 1985,
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
    yearRead: 2020,
    review: {
      yearWritten: 2011,
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
    yearRead: 2020,
    review: {
      yearWritten: 1959,
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
    yearRead: 2018,
    review: {
      yearWritten: 2018,
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
    yearRead: 2018,
    review: {
      yearWritten: 2009,
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
    yearRead: 2018,
    review: {
      yearWritten: 2016,
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
    yearRead: 2018,
    review: {
      yearWritten: 1988,
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
    yearRead: 2017,
    review: {
      yearWritten: 1912,
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
    yearRead: 2017,
    review: {
      yearWritten: 1896,
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
    yearRead: 2017,
    review: {
      yearWritten: 1897,
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
    yearRead: 2017,
    review: {
      yearWritten: 1922,
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
    yearRead: 2017,
    review: {
      yearWritten: 1963,
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
    yearRead: 2017,
    review: {
      yearWritten: 2010,
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
    yearRead: 2017,
    review: {
      yearWritten: 1813,
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
    yearRead: 2017,
    review: {
      yearWritten: 1990,
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
    yearRead: 2017,
    review: {
      yearWritten: 1919,
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
    yearRead: 2017,
    review: {
      yearWritten: 1726,
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
    yearRead: 2017,
    review: {
      yearWritten: 1940,
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
    yearRead: 2017,
    review: {
      yearWritten: 1937,
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
    yearRead: 2017,
    review: {
      yearWritten: 1960,
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
    yearRead: 2017,
    review: {
      yearWritten: 1951,
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
    yearRead: 2017,
    review: {
      yearWritten: 1937,
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
    yearRead: 2016,
    review: {
      yearWritten: 1882,
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
    yearRead: 2016,
    review: {
      yearWritten: 2009,
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
    yearRead: 2016,
    review: {
      yearWritten: 1898,
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
    yearRead: 2016,
    review: {
      yearWritten: 1909,
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
    yearRead: 2016,
    review: {
      yearWritten: 2005,
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
    yearRead: 2016,
    review: {
      yearWritten: 1985,
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
    yearRead: 2016,
    review: {
      yearWritten: 1991,
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
    yearRead: 2016,
    review: {
      yearWritten: 1952,
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
    yearRead: 2016,
    review: {
      yearWritten: 1965,
      lines: ["Imaginative.", "A mysterious universe with a certain allure."],
    },
  },
  {
    name: "An Astronaut's Guide to Life on Earth",
    imageUrl: "https://i.imgur.com/8tkZFMm.png",
    yearRead: 2016,
    review: {
      yearWritten: 2013,
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
    yearRead: 2016,
    review: {
      yearWritten: 1872,
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
    yearRead: 2016,
    review: {
      yearWritten: 1929,
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
    yearRead: 2015,
    review: {
      yearWritten: 1883,
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
    yearRead: 2015,
    review: {
      yearWritten: 1895,
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
    yearRead: 2015,
    review: {
      yearWritten: 1926,
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
    yearRead: 2015,
    review: {
      yearWritten: 1977,
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
    yearRead: 2015,
    review: {
      yearWritten: 1969,
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
    yearRead: 2015,
    review: {
      yearWritten: 1922,
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
    yearRead: 2015,
    review: {
      yearWritten: 1936,
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
    yearRead: 2015,
    review: {
      yearWritten: 1979,
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
    yearRead: 2015,
    review: {
      yearWritten: 1884,
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
    yearRead: 2015,
    review: {
      yearWritten: 1886,
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
    yearRead: 2015,
    review: {
      yearWritten: 1968,
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
    yearRead: 2015,
    review: {
      yearWritten: 1903,
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
    yearRead: 2015,
    review: {
      yearWritten: 1957,
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
    yearRead: 2015,
    review: {
      yearWritten: 2011,
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
    yearRead: 2015,
    review: {
      yearWritten: 1951,
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
    yearRead: 2015,
    review: {
      yearWritten: 1945,
      lines: ["Chilling.", "A brief overview into power and corruption."],
    },
  },
  {
    name: "The God Delusion",
    imageUrl: "https://i.imgur.com/kgz5Hbl.png",
    yearRead: 2014,
    review: {
      yearWritten: 2006,
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
    yearRead: 2014,
    review: {
      yearWritten: 1844,
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
    yearRead: 2014,
    review: {
      yearWritten: 1932,
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
    yearRead: 2014,
    review: {
      yearWritten: 1870,
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
    yearRead: 2014,
    review: {
      yearWritten: 1957,
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
    yearRead: 2014,
    review: {
      yearWritten: 1887,
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
    yearRead: 2013,
    review: {
      yearWritten: 1949,
      lines: [
        "Tremendously agitating.",
        "An account of strength and weakness.",
        "The bleakest overtones fill this oppressive world.",
        "A warning or prediction.",
      ],
    },
  },
];
