
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('paths').del()
    .then(function () {
      // Inserts seed entries
      const paths = [
        { 
          title: 'EVERYONE SAYS I’M RUNNING AWAY', 
          body: 'My dad always asks what I’m running away from with my travels. A few weeks ago, a commenter told me to stop running away and to start living life. “Grow up” they said. \n And, years ago, I once came across a blog called “Mom says I’m running away. \n I’m not sure why, but there is this perception out there that anyone who travels long term and isn’t interested in settling down or getting a conventional job must be running away from something.\nThey are just trying to “escape life.”\nThey are running away from responsibility, being a grown up, heartache, their problems, etc, etc.',
          imgUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjcxMzN9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80',
          timestamp: `${new Date()}`,
          user_id: 1
        },
        { 
          title: 'Um… Why Isn\'t Everyone Taking A French Barge Vacation?',
          body: 'Mel and I bade our sad goodbyes to Hotel d\'Europe in Avignon, and armed with pastries and coffee from our guardian angel Fernando, we set out for our next adventure. But first – a pit stop in my adopted hometown, Montpellier! \n Mel met Ladybird, who gave her some much-needed snuggles; and Cal, who proudly showed off the city he\'s called home for more than 10 years. We walked through the Place de la Comedie and the Esplanade, and then took her on a tour of one of the oldest toy stores in France. \n Mel was thoroughly enchanted, and after a tasty lunch we were off again – this time to Colombiers, a small hamlet on the famous Canal du Midi in the Languedoc region.',
          imgUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80',
          timestamp: `${new Date()}`,
          user_id: 1
        },
        { 
        title: 'How to Travel Like A Spy',
        body: 'Last December, WikiLeaks did one of its notorious document dumps and revealed some information that frankly thrilled me. The WikiLeaks document release included two reports from the CIA whose titles sound like pitches for summer blockbusters: "CIA Assessment on Surviving Secondary Screening at Airports While Maintaining Cover" (dated September 2011) and, even more up my alley, "CIA Advice for Operatives Infiltrating Schengen" (dated January 2012). \n For you civilians, "Schengen" is CIA-talk for Europe and refers to the 1985 Schengen Agreement, which eventually led to the opening of the borders of 26 European countries. \n As for "secondary screening," many people are familiar with being plucked out of the security line, and according to the WikiLeaks document, subjected to "in-depth and lengthy questioning, intrusive searches of personal belongings, cross-checks against external databases, and collection of biometrics."',
        imgUrl: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80',
        timestamp: `${new Date()}`,
        user_id: 1
        },
        { 
        title: 'A Sunday Morning in America',
        body: 'Fresh coffee and a cig on my parents\' porch. Marveling at the big sky, the mighty Atlantic, the salty autumn air. I can hear the Big Band music my dad\'s playing in the bait shop behind the house, and organ music from the church on the corner. \n A burst of laughter from a house down the block, one of the few with year-round residents here at the south end of the island. Other homes are closed up for the winter, leaving behind the hulking silhouettes of covered grills and a few lonely beach toys under patio tables. \n My parents, now in their mid-seventies, have changed in the four years since I last saw them. I\'ve missed personal evolutions and devolutions, and the political revolution I\'m grateful they #resist. I\'ve missed their smell, their hugs, their accents, their cooking.',
        imgUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80',
        timestamp: `${new Date()}`,
        user_id: 1
        },
        { 
        title: 'What It Feels Like To Explore A New Place: Favignana, Sicily',
        body: 'I just realized that in my heated fervor surrounding an epic day trip to Levanzo last year, I forgot all about poor Favignana. It\'s one of the three Egadi Islands accessible by boat from Trapani, Sicily (the third being Marettimo). If you\'ll recall, last year during a visit by my friend Mr. Pants, we got a 10-euro round-trip flight to Trapani from Rome and then randomly hopped on boats to venture farther out into the Mediterranean. \n This is the story of our trip to Favignana. \n I guess it\'s best to start at the beginning, which was the spring of 2004. March, was it? May? Well, it was whenever Mr. Pants came to visit me in Rome. It was his first visit to Rome. It was his first visit to Europe! \n Not one to coddle, a few days after his arrival I put him on a train, alone, to Florence for a day trip. He left terrified and returned triumphant and a travel addict. \n We went to Venice together that first year, too. The trip lasted 24 hours, but it felt like a month of Sundays.',
        imgUrl: 'https://images.unsplash.com/photo-1578359968130-76b59bb5af13?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80',
        timestamp: `${new Date()}`,
        user_id: 1
        },
        { 
        title: 'On Meaningful Road Trips',
        body: 'In January 2004, Fabulous Cousin and I rented a car in Rome and drove to the east coast through the Apennines. They were breathtaking, with snowy caps and tiny mountainside villages and long tunnels and vertigo cliffs. We arrived in Pescara and drove north along the coast for a while. At one point we got out of the car and walked across the beach to the edge of an angry, stormy Adriatic. I love winter beaches.\n We ambled our way blindly up to Città S. Angelo, where our great-grandfather was born. Two dogs followed us through the city walls to a town sitting precariously on the top of a hill. Down every side street there are sweeping views of the Adriatic on one side and mountains on the other.\n It was after lunch and everyone seemed to be taking a nap, leaving a place that existed just for us to discover. We snuck down alleys and broke into courtyards and looked on doorbells for our family name. We went into an 8th-century church and saw S. Felicita\'s final resting place. We found a fresco in a residential garage. We got as lost as one can in a tiny town perched on a hill.',
        imgUrl: 'https://images.unsplash.com/photo-1542654071-7ded22488685?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80',
        timestamp: `${new Date()}`,
        user_id: 1
        }
      ];

      return knex('paths').insert(paths);
    });
};
