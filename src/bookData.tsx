import * as React from "react";

interface IBookData {
  name: string;
  imageUrl: string;
  review: JSX.Element;
}

export const bookData: IBookData[] = [
  {
    name: "Shōgun",
    imageUrl: "https://i.imgur.com/PoWLP4U.png",
    review: (
      <>
        <b>2020.</b>
        <br />
        <br />
        Completely immersive. Truly exceptional.
        <br />
        <br />
        More than an adventure, an exploration into our preconceptions and
        capabilities.
        <br />
        <br />
        A story that becomes so much more the longer it goes on. I didn't want
        it to end, but was delighted in how it did.
        <br />
        <br />A must read.
      </>
    ),
  },
  {
    name: "To Have and Have Not",
    imageUrl: "https://i.imgur.com/vk8JX7X.png",
    review: (
      <>
        <b>2017.</b>
        <br />
        <br />
        Quiet, rich, and beautiful.
        <br />
        <br />
        Another Hemingway gem.
        <br />
        <br />
        This journey from success to annihilation pulls you deeper into the
        question of what gives life value.
        <br />
        <br />
        The characters are real and the struggles heartbreaking.
      </>
    ),
  },
  {
    name: "Armada",
    imageUrl: "https://i.imgur.com/Ze9ai8i.png",
    review: (
      <>
        <b>2020.</b>
        <br />
        <br />
        Constant excitement.
        <br />
        <br />
        A fast paced, and enjoyable doomsday novel.
        <br />
        <br />
        Quality sci-fi without any of the frills.
      </>
    ),
  },
  {
    name: "Galápagos",
    imageUrl: "https://i.imgur.com/ZBoIFB7.png",
    review: (
      <>
        <b>2020.</b>
        <br />
        <br />
        An insightful idea.
        <br />
        <br />
        Vonnegut argues our intelligence as our downfall in a very unusual form
        of storytelling.
        <br />
        <br />
        While at some points the story's unique flow felt burdensome, the
        inventiveness in this narrative cannot go unmentioned.
      </>
    ),
  },
  {
    name: "Ready Player One",
    imageUrl: "https://i.imgur.com/vQqznp2.png",
    review: (
      <>
        <b>2020.</b>
        <br />
        <br />
        Entirely captivating.
        <br />
        <br />
        A fantastic adventure that I couldn’t put down.
        <br />
        <br />
        Combines elements of nostalgia with dystopia to create a refreshing and
        fun read.
        <br />
        <br />
        The universe is imaginative, detailed, and relatable.
      </>
    ),
  },
  {
    name: "Starship Troopers",
    imageUrl: "https://i.imgur.com/u8XbOTm.png",
    review: (
      <>
        <b>2020.</b>
        <br />
        <br />
        Perceptive and intriguing.
        <br />
        <br />
        A tale of personal growth and duty.
        <br />
        <br />
        Heinlein cleverly challenges our institutions offering insightful
        alternatives.
        <br />
        <br />
        The story’s restraint serves to magnify it’s powerful message.
      </>
    ),
  },
  {
    name: "Elevation",
    imageUrl: "https://i.imgur.com/XsYsWZz.png",
    review: (
      <>
        <b>2018.</b>
        <br />
        <br />
        Incredibly unique.
        <br />
        <br />
        An exceptional story like none I have ever had the pleasure of reading
        before.
        <br />
        <br />
        Stephen King's talented writing is surpassed by his incredible
        characters and undeniable originality.
      </>
    ),
  },
  {
    name: "The Checklist Manifesto",
    imageUrl: "https://i.imgur.com/TlAABXM.png",
    review: (
      <>
        <b>2018.</b>
        <br />
        <br />
        Valuable insight.
        <br />
        <br />
        This methodical investigation into how we can mitigate preventable error
        in our lives will leave you wishing you had picked it up sooner.
        <br />
        <br />
        The evidence is overwhelming, and the lesson is simple. Everyone can
        benefit from this book.
      </>
    ),
  },
  {
    name: "A Life in Parts",
    imageUrl: "https://i.imgur.com/Ephuin9.png",
    review: (
      <>
        <b>2018.</b>
        <br />
        <br />
        Truly exceptional.
        <br />
        <br />
        A fascinating life filled with struggle, self-discovery, and art.
        <br />
        <br />
        Bryan Cranston tells his story magnificently and masterfully.
        <br />
        <br />A perfectly crafted autobiography.
      </>
    ),
  },
  {
    name: "Spock's World",
    imageUrl: "https://i.imgur.com/RwEAzsv.png",
    review: (
      <>
        <b>2018.</b>
        <br />
        <br />
        Marvelous.
        <br />
        <br />
        A completely compelling account combining history and narrative.
        <br />
        <br />
        Rich in lessons and reminders about confronting our emotions.
        <br />
        <br />A novel that consistently managed to surprise me and exceed my
        expectations.
      </>
    ),
  },
  {
    name: "The Wisdom of Insecurity",
    imageUrl: "https://i.imgur.com/P3cXlAb.png",
    review: (
      <>
        <b>2017.</b>
        <br />
        <br />
        Illuminating.
        <br />
        <br />
        Beautifully frames the issue of insecurity and anxiety.
        <br />
        <br />
        Focuses on the endless lesson of "now".
        <br />
        <br />A very soothing and guiding perspective.
      </>
    ),
  },
  {
    name: "To Kill a Mockingbird",
    imageUrl: "https://i.imgur.com/DrZwWVR.png",
    review: (
      <>
        <b>2017.</b>
        <br />
        <br />
        Timelessly harrowing.
        <br />
        <br />
        Reveals ugly truths about our former and current world through the eyes
        of innocence.
        <br />
        <br />
        Draws attention to the heroism present in daily life.
        <br />
        <br />
        And makes you wonder what the difference is between a finch and a
        mockingbird.
      </>
    ),
  },
  {
    name: "Animal Farm",
    imageUrl: "https://i.imgur.com/FGzOGor.png",
    review: (
      <>
        <b>2015.</b>
        <br />
        <br />
        Chilling.
        <br />
        <br />A brief overview into power and corruption.
      </>
    ),
  },
  {
    name: "An Astronaut's Guide to Life on Earth",
    imageUrl: "https://i.imgur.com/8tkZFMm.png",
    review: (
      <>
        <b>2016.</b>
        <br />
        <br />
        Reassuring, and helpful.
        <br />
        <br />
        Chris Hadfield has no secret other than hard work and dedication.
        <br />
        <br />A necessary reminder to a generation of instant gratification.
      </>
    ),
  },
  {
    name: "Dune",
    imageUrl: "https://i.imgur.com/vXjV1VK.png",
    review: (
      <>
        <b>2016.</b>
        <br />
        <br />
        Imaginative.
        <br />
        <br />A mysterious universe with a certain allure.
      </>
    ),
  },
  {
    name: "Of Mice and Men",
    imageUrl: "https://i.imgur.com/3R4nroI.png",
    review: (
      <>
        <b>2017.</b>
        <br />
        <br />
        Woeful, and humbling.
        <br />
        <br />
        A tale of the beauty and cruelty in the world.
        <br />
        <br />
        Provokes one's values and compassion.
      </>
    ),
  },
  {
    name: "Sherlock Holmes",
    imageUrl: "https://i.imgur.com/np2agdP.png",
    review: (
      <>
        <b>2014.</b>
        <br />
        <br />
        Delightfully magnificent.
        <br />
        <br />
        Never has being on the edge of your seat been so fun.
        <br />
        <br />
        Sherlock Holmes is the epitome of characters.
        <br />
        <br />
        Arthur Conan Doyle's genius never ceases to amaze me.
      </>
    ),
  },
  {
    name: "The Catcher in the Rye",
    imageUrl: "https://i.imgur.com/J8ayCML.png",
    review: (
      <>
        <b>2015.</b>
        <br />
        <br />
        Introspective, and reminiscent.
        <br />
        <br />
        A character seldom played but very relatable.
        <br />
        <br />
        Sharing a moment of distress felt by everyone but spoken by few.
        <br />
        <br />A soothing emotion to share.
      </>
    ),
  },
  {
    name: "The Martian",
    imageUrl: "https://i.imgur.com/8GoguDX.png",
    review: (
      <>
        <b>2015.</b>
        <br />
        <br />
        Fun.
        <br />
        <br />
        Difficult to put down.
        <br />
        <br />
        The book manages to top itself time and again with each new feat of
        ingenuity and creativity.
        <br />
        <br />
        Climbing into the mind of an astronaut.
      </>
    ),
  },
  {
    name: "The Ordeal of Gilbert Pinfold",
    imageUrl: "https://i.imgur.com/QiuQLtk.png",
    review: (
      <>
        <b>2014.</b>
        <br />
        <br />
        Unnerving, and fascinating
        <br />
        <br />
        A brief journey into the delusional mind.
        <br />
        <br />
        A true story making it all the more impactful.
        <br />
        <br />
        Through life's greatest challenges one's courage is tested.
      </>
    ),
  },
  {
    name: "The Way of Zen",
    imageUrl: "https://i.imgur.com/YNZmCeQ.png",
    review: (
      <>
        <b>2015.</b>
        <br />
        <br />
        Eye-opening, and thought-provoking.
        <br />
        <br />
        Alan Watts effectively teaches a different way of thinking.
        <br />
        <br />
        Dense with new lessons and outlooks, every page contains something worth
        meditating over.
      </>
    ),
  },
  {
    name: "The Old Man and the Sea",
    imageUrl: "https://i.imgur.com/WV0nUdL.png",
    review: (
      <>
        <b>2016.</b>
        <br />
        <br />
        Empowering, humbling, and meaningful.
        <br />
        <br />
        This is the book that began my romance with Hemingway.
        <br />
        <br />
        The book is short but it's lessons have stayed with me for a long time.
        <br />
        <br />
        Wise in his years, the fisherman Santiago embodies the virtues that each
        one of us strive for.
      </>
    ),
  },
  {
    name: "1984",
    imageUrl: "https://i.imgur.com/BnvrnlW.png",
    review: (
      <>
        <b>2013.</b>
        <br />
        <br />
        Tremendously agitating.
        <br />
        <br />
        An account of strength and weakness.
        <br />
        <br />
        The bleakest overtones fill this oppressive world.
        <br />
        <br />A warning or prediction.
      </>
    ),
  },
  {
    name: "20000 Leagues Under the Sea",
    imageUrl: "https://i.imgur.com/vnkRKvS.png",
    review: (
      <>
        <b>2014.</b>
        <br />
        <br />
        Constant adventure.
        <br />
        <br />
        A journey to captivate one's sense of discovery.
        <br />
        <br />
        You can feel the electricity of being on the move.
      </>
    ),
  },
  {
    name: "A Farewell to Arms",
    imageUrl: "https://i.imgur.com/7Qu9iXC.png",
    review: (
      <>
        <b>2016.</b>
        <br />
        <br />
        Hope, and futility.
        <br />
        <br />
        Challenges the actions of mankind through startlingly contrast.
        <br />
        <br />
        Gives the gift of feeling powerless.
        <br />
        <br />
        Purely Hemingway.
      </>
    ),
  },
  {
    name: "Around the World in 80 Days",
    imageUrl: "https://i.imgur.com/rZrMb2T.png",
    review: (
      <>
        <b>2016.</b>
        <br />
        <br />
        Classically fun.
        <br />
        <br />
        Another book best described by a subtle grin.
        <br />
        <br />
        Wonderfully captures the feelings of flight and chase.
        <br />
        <br />
        Ever changing scenery keeps excitement alive throughout the entire
        novel.
      </>
    ),
  },
  {
    name: "Brave New World",
    imageUrl: "https://i.imgur.com/F7JghRM.png",
    review: (
      <>
        <b>2014.</b>
        <br />
        <br />
        Unnerving.
        <br />
        <br />
        The weakness and arrogance of mankind as we grow comfortable and proud.
        <br />
        <br />
        Numb curiosity becomes festering fear as the realities outlined become
        all too relatable.
        <br />
        <br />
        Echos louder with each passing year.
      </>
    ),
  },
  {
    name: "Call of the Wild",
    imageUrl: "https://i.imgur.com/aXYeNSg.png",
    review: (
      <>
        <b>2015.</b>
        <br />
        <br />
        Savage, and astonishing.
        <br />
        <br />
        A journey of exploration unlike any other.
        <br />
        <br />A steady march towards primitive and instinctual brutality.
      </>
    ),
  },
  {
    name: "Do Androids Dream of Electric Sheep?",
    imageUrl: "https://i.imgur.com/G5KgVVV.png",
    review: (
      <>
        <b>2015.</b>
        <br />
        <br />
        Uniquely captivating.
        <br />
        <br />
        A quaint take on a mildly dystopian world.
        <br />
        <br />A book that keeps you guessing in the most delightful way.
      </>
    ),
  },
  {
    name: "Strange Case of Dr. Jekyll and Mr. Hyde",
    imageUrl: "https://i.imgur.com/t6fFwTS.png",
    review: (
      <>
        <b>2015.</b>
        <br />
        <br />
        Fresh, and methodical.
        <br />
        <br />
        A very English take on gritty.
        <br />
        <br />
        An easy and enjoyable classic.
        <br />
        <br />I enjoyed imagining the reaction incited in the book's own time.
      </>
    ),
  },
  {
    name: "Flatland",
    imageUrl: "https://i.imgur.com/VENyp6F.png",
    review: (
      <>
        <b>2015.</b>
        <br />
        <br />
        Timeless, and eye-opening.
        <br />
        <br />
        An extraordinary way of explaining the unexplainable
        <br />
        <br />
        A two-tiered story, combining intrigue with insight.
        <br />
        <br />A true gem for one's perspective.
      </>
    ),
  },
  {
    name: "For Whom the Bell Tolls",
    imageUrl: "https://i.imgur.com/azkLTpy.png",
    review: (
      <>
        <b>2017.</b>
        <br />
        <br />
        Powerful, and resonant.
        <br />
        <br />
        Whispers of hope and the trudge of painful reality are at the forefront
        of this novel.
        <br />
        <br />
        An exploration in acceptance.
        <br />
        <br />
        Hauntingly vivid.
      </>
    ),
  },
  {
    name: "Gulliver's Travels",
    imageUrl: "https://i.imgur.com/4tYIFpm.png",
    review: (
      <>
        <b>2017.</b>
        <br />
        <br />
        Whimsical, and entertaining.
        <br />
        <br />
        Well-written and self-contained stories to amuse and surprise.
        <br />
        <br />
        Precisely adventure.
      </>
    ),
  },
  {
    name: "The Hitchhiker's Guide to the Galaxy",
    imageUrl: "https://i.imgur.com/7lNos1A.png",
    review: (
      <>
        <b>2015.</b>
        <br />
        <br />
        Underwhelming.
        <br />
        <br />
        Funny at times, but largely disappointing.
        <br />
        <br />
        Perhaps I'm missing something.
      </>
    ),
  },
  {
    name: "How to Win Friends and Influence People",
    imageUrl: "https://i.imgur.com/x5xVk6m.png",
    review: (
      <>
        <b>2015.</b>
        <br />
        <br />
        Classically straightforward.
        <br />
        <br />
        Dale Carnegie isn't teaching you how to be a business man, but rather
        how to be a decent person.
        <br />
        <br />
        The lessons aren't shocking, they are things we all know but choose to
        ignore by our own accord.
        <br />
        <br />
        The voice of reason needed to guide you back on track.
      </>
    ),
  },
  {
    name: "Jungle Tales of Tarzan",
    imageUrl: "https://i.imgur.com/UrJGU8k.png",
    review: (
      <>
        <b>2017.</b>
        <br />
        <br />
        Amusing, and captivating.
        <br />
        <br />
        Stories from a unique character with a charming perspective.
        <br />
        <br />A small world with much to offer.
      </>
    ),
  },
  {
    name: "Jurassic Park",
    imageUrl: "https://i.imgur.com/HXiQlHP.png",
    review: (
      <>
        <b>2017.</b>
        <br />
        <br />
        Looming tension, and splendid fun.
        <br />
        <br />
        Impossible dilemmas, a magical island, and magnificent perseverance.
        <br />
        <br />A well-thought-out story.
      </>
    ),
  },
  {
    name: "Pride and Prejudice",
    imageUrl: "https://i.imgur.com/T7P4Sfk.png",
    review: (
      <>
        <b>2017.</b>
        <br />
        <br />
        Giddy enticement.
        <br />
        <br />
        A book about intrigue, and preconceptions.
        <br />
        <br />
        The novelty felt by the characters translates wonderfully to the reader.
        <br />
        <br />A perfectly paced romance.
      </>
    ),
  },
  {
    name: "Siddhartha",
    imageUrl: "https://i.imgur.com/9fF3rKn.png",
    review: (
      <>
        <b>2015.</b>
        <br />
        <br />
        Insightful, and nourishing.
        <br />
        <br />
        A terrific journey through the suffering and wanting of life.
        <br />
        <br />
        The story's appeal matures well.
        <br />
        <br />
        An essential read for those seeking more.
        <br />
        <br />
      </>
    ),
  },
  {
    name: "Slaughterhouse-Five",
    imageUrl: "https://i.imgur.com/gKE8MnE.png",
    review: (
      <>
        <b>2015.</b>
        <br />
        <br />
        Painfully moving.
        <br />
        <br />
        The disorientation of wars atrocities as they echo forever.
        <br />
        <br />
        A breathtaking view on life.
        <br />
        <br />
        An unexpectedly beautiful take on science fiction.
      </>
    ),
  },
  {
    name: "Sled Driver",
    imageUrl: "https://i.imgur.com/Bx4a576.png",
    review: (
      <>
        <b>2016.</b>
        <br />
        <br />
        Truly extraordinary.
        <br />
        <br />
        Stories from an entirely different world.
        <br />
        <br />
        They will leave you laughing, awed, and humbled.
        <br />
        <br />
        Passion in one of it's finest forms.
      </>
    ),
  },
  {
    name: "Solving the Procrastination Puzzle",
    imageUrl: "https://i.imgur.com/3viZLRS.png",
    review: (
      <>
        <b>2017.</b>
        <br />
        <br />
        Necessarily honest.
        <br />
        <br />
        Does a wonderful job of helping the reader to understand their own
        behaviour and tactifully present alternatives.
        <br />
        <br />
        It will not suffice to only read this book once.
      </>
    ),
  },
  {
    name: "Surely You're Joking, Mr. Feynman",
    imageUrl: "https://i.imgur.com/vBdT7JN.png",
    review: (
      <>
        <b>2016.</b>
        <br />
        <br />
        Absolutely riveting.
        <br />
        <br />
        Richard Feynman's amusing stories, valuable lessons, and unending humour
        makes this an absolute must read.
        <br />
        <br />
        Everyday tales form the mind of a genius.
        <br />
        <br />
        Truly marvelous.
      </>
    ),
  },
  {
    name: "The Bell Jar",
    imageUrl: "https://i.imgur.com/4AXaFAD.png",
    review: (
      <>
        <b>2017.</b>
        <br />
        <br />
        Hollow.
        <br />
        <br />
        An intentionally unpleasant account of a quietly painful world.
        <br />
        <br />
        Anxiety and despair rupturing from powerlessness.
      </>
    ),
  },
  {
    name: "The Book Thief",
    imageUrl: "https://i.imgur.com/Yk9kl0g.png",
    review: (
      <>
        <b>2016.</b>
        <br />
        <br />
        Simply beautiful.
        <br />
        <br />
        An unexpected exploration into the ceaseless persistence of humanity.
        <br />
        <br />
        Continually touching, introspective, and illuminating.
        <br />
        <br />A literary treasure.
      </>
    ),
  },
  {
    name: "The Count of Monte Cristo",
    imageUrl: "https://i.imgur.com/Qdj0Wax.png",
    review: (
      <>
        <b>2014.</b>
        <br />
        <br />
        Unprecedented excellence.
        <br />
        <br />
        A compelling story of patient justice and unrelenting composure.
        <br />
        <br />
        Consistently clever, tremendously written, and perfectly moving.
        <br />
        <br />A masterpiece.
      </>
    ),
  },
  {
    name: "The Diamond as Big as the Ritz",
    imageUrl: "https://i.imgur.com/qSu7LJy.png",
    review: (
      <>
        <b>2017.</b>
        <br />
        <br />
        Seductive.
        <br />
        <br />
        Glamour portrayed through ultimate splendour.
        <br />
        <br />A glimpse into the blinding power of wealth.
      </>
    ),
  },
  {
    name: "The God Delusion",
    imageUrl: "https://i.imgur.com/kgz5Hbl.png",
    review: (
      <>
        <b>2014.</b>
        <br />
        <br />
        Perspective.
        <br />
        <br />
        The widespread phenomenon of religion as understood by a geneticist.
        <br />
        <br />
        Human behaviour reexamined.
        <br />
        <br />
        Challenges the reader's assumed knowledge.
      </>
    ),
  },
  {
    name: "The Invisible Man",
    imageUrl: "https://i.imgur.com/pVzQ2bx.png",
    review: (
      <>
        <b>2017.</b>
        <br />
        <br />
        Anger, and anguish.
        <br />
        <br />
        A portrayal of a wonderfully difficult situation and the accompanying
        struggle to overcome it.
        <br />
        <br />
        Frustration done right.
      </>
    ),
  },
  {
    name: "The Island of Doctor Moreau",
    imageUrl: "https://i.imgur.com/VVH4C9x.png",
    review: (
      <>
        <b>2017.</b>
        <br />
        <br />
        Curious fun.
        <br />
        <br />
        An adventure in an utterly unique setting.
        <br />
        <br />
        Explores both madness and power just briefly enough to raise a question.
        <br />
        <br />
        Perfectly an H.G. Wells novel.
      </>
    ),
  },
  {
    name: "The Lost World",
    imageUrl: "https://i.imgur.com/pdgPrab.png",
    review: (
      <>
        <b>2017.</b>
        <br />
        <br />
        Unreachingly wonderful.
        <br />
        <br />
        An enjoyable read in an undeniably exciting world.
        <br />
        <br />
        Unoriginal but nevertheless fun.
      </>
    ),
  },
  {
    name: "The Phantom of the Opera",
    imageUrl: "https://i.imgur.com/HNSEPef.png",
    review: (
      <>
        <b>2016.</b>
        <br />
        <br />
        Unexpectedly exciting.
        <br />
        <br />
        Perfectly naive characters and a beautifully arranged mystery.
        <br />
        <br />
        A romance utterly overshadowed by the setting.
        <br />
        <br />
      </>
    ),
  },
  {
    name: "The Shining",
    imageUrl: "https://i.imgur.com/2eecA2Z.png",
    review: (
      <>
        <b>2015.</b>
        <br />
        <br />
        Eerie, and creeping.
        <br />
        <br />
        Wonderfully written and perfectly frightening.
        <br />
        <br />
        The horror sets in slowly; one doesn't realize until they're absolutely
        terrified.
        <br />
        <br />A captivating story with extremely well-developed characters.
      </>
    ),
  },
  {
    name: "The Sun Also Rises",
    imageUrl: "https://i.imgur.com/vdX82z4.png",
    review: (
      <>
        <b>2015.</b>
        <br />
        <br />
        Patiently moving.
        <br />
        <br />
        The poetry of life displayed as it is.
        <br />
        <br />
        Nuances of this novel will travel with you, surprising you for long to
        come.
        <br />
        <br />
        An unexpected and unique piece of literature.
      </>
    ),
  },
  {
    name: "The War of the Worlds",
    imageUrl: "https://i.imgur.com/TzjOgMm.png",
    review: (
      <>
        <b>2016.</b>
        <br />
        <br />
        Futility redefined.
        <br />
        <br />
        A challenge to mankind's self-proclaimed dominance and entitlement.
        <br />
        <br />
        The impermanence and relativity of strength and weakness.
      </>
    ),
  },
  {
    name: "The Time Machine",
    imageUrl: "https://i.imgur.com/cV12K2C.png",
    review: (
      <>
        <b>2015.</b>
        <br />
        <br />
        Mysterious, and strange.
        <br />
        <br />
        Questions rush in as an entirely new and everlastingly eerie world is
        painted.
        <br />
        <br />A story filled with naivety and discovery.
      </>
    ),
  },
  {
    name: "Treasure Island",
    imageUrl: "https://i.imgur.com/SIpqwWF.png",
    review: (
      <>
        <b>2015.</b>
        <br />
        <br />
        Captivating from page one.
        <br />
        <br />
        An intriguing narrative and exciting setting.
        <br />
        <br />A great journey filled with truly fun imagery.
      </>
    ),
  },
  {
    name: "Under the Dome",
    imageUrl: "https://i.imgur.com/4qRLuw6.png",
    review: (
      <>
        <b>2016.</b>
        <br />
        <br />
        Emotionally rich, and powerfully written.
        <br />
        <br />
        Like having manipulation and paranoia dropped into your backyard.
        <br />
        <br />
        Incredible depth and character throughout the entire novel.
        <br />
        <br />
        Enjoyable on every page.
      </>
    ),
  },
  {
    name: "Vice Versa: A Lesson to Fathers",
    imageUrl: "https://i.imgur.com/V2OQLBE.png",
    review: (
      <>
        <b>2016.</b>
        <br />
        <br />
        Ceaselessly amusing.
        <br />
        <br />
        A tale that leaves you with the slightest grin on each page.
        <br />
        <br />
        A classically beautiful take on a cliche.
        <br />
        <br />
        Perspectively wonderful.
      </>
    ),
  },
];
