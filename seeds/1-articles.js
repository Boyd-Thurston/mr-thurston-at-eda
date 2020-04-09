
exports.seed = knex => {
      return knex('articles').insert([
        { banner_url: "images/cultural-blog-banner.JPG", 
          title: "Identity and Values", 
          subtitle: "Sprint 1 Cultural blog", 
          type: "CulturalBlog", 
          content: "<h2 id=\"section1\">What is my personality type</h2>" +
        "<p>" +
          "I found a nice myers briggs personality test on line at" + 
          "<a href=\"https://www.16personalities.com/\">16personalities</a>" +
          ", I have done similar before, however this one is the first to resonate so much" +
          "with me. My previous attempts with these personality types caused me to question" +
          "their effectivness with how the descriptions of the results did not fit. This one" + 
          "however feels bang on. It could be that this is a better version, however I don't" +
          "believe the therory behind them has been updated since developed by Isabel Briggs" +
          "Myers in the 40's and 50's. The honest reallity is more likely just that: honestty." + 
          "To be effective, your answers need to be honest so first you need to be honest " +
          "with yourself, something I have been working on quite a bit lately." +
        "</p>" +
        "<p>" +
          "So what was the result? Drum roll please .... INFP-T aka the Mediator" +
        "</p>" +
        "<p>" +
          "The user friendly terms have changed over time (refered to as the diplomat, the " +
          "visonary, the dove ect. on other versions) however the lettering is the part " +
          "that actually comes from the original myers briggs research. The T is an " +
          "interesting point which I will get to later." +
        "</p>" +
        "<h2 id=\"section2\">What does it mean</h2>" +
        "<p>" +
          "What does it all mean I hear you ask? Well that is up for interpritation. So far" + 
          "my research is starting to take form and personally make sense. The key aspect " +
          "of this personality type is its ability to see things from others perspective, to " +
          "see the good in everyone and everything, to find hope and try to fix it. Filled " +
          "with creativity and inspiration which is however, contradicted as this type of " +
          "personality also sits on the introverted side of the scale. This contradiction " +
          "and the rarity of this personality type (the website I used claims it makes up " +
          "less the 4% of the worlds population) leads to it being misunderstood. The " +
          "information goes further into another contradiction with mediators having a " +
          "talent for communication and self expression, however with a tendancy to hide " +
          "away from the world when life goes wrong even to the extent of withdrawing to the " + 
          "point of a hermit (I personally have lived this contradiction, so I can see where " +
          "this research has come from). Another point which resonated was the visonary " +
          "rebel with a cause: not challanging the system for the sake of anarchy but for a " + 
          "good reason to make things better, the greater good and all that. They even reach " +
          "the point where they give themselves so fully to the cause that they forget to " +
          "focus on day-to-day living (again something that I have lived also). The " +
          "misunderstood nature of this personality type also flows to the perception of group " +
          "conversations, initially seen as shy or just introverted, it is often missed that " +
          "INFP's generally listen first and intently so while being \"shy\" for the first " +
          "bit/couple of times in interactions they are actually collating data, figuring it " +
          "out and will come out with their point of view when it is time to put it forward " +
          "and it will be detailed, indepth  and even leading if they believe your idea is almost " +
          "there but not quite. The biggest mistake you can make while dealing with this " +
          "personality type and myself specifically, is to assume that being quiet means that " +
          "we are quiet people, quite the oposite we/I will talk your ear off when there is " +
          "value to add." +
        "</p>" +
        "<p>" +
          "That last one is a bit funny actually, not in a humourous way but more in a realisation " +
          "of my own habits kind of way. Myself, I have always thought of my personality as " +
          "more of a crusader for the grater good. Not a religous fanatic like the knights " +
          "templar, more of the same fervor but the belief is in soical justice and equality. " +
          "I am that guy that always plays the paladin in a D&D game, chooses to help the " +
          "good NPCs ect. In recent years, I became somewhat political IRL but that didn't " +
          "go down well with everyone as you can imagine. Cue my lateset withdrawal from " +
          "the world which comes with an healthy/unhealthy dose of soul searching now to " +
          "follow what I want for a change, my own cause so to speak. Just a small one: " +
          "become a web developer and use my expression in a more benifical way." +
        "</p>" +
        "<p>" +
          "... that beeing said my mind already wanders ... I see more that could be added " +
          "...... web accessability ....... now there is part of the idea that I can still " +
          "add a bit of equality to my work ......... and that type of thinking is the " +
          "reason I can not put values out of my mind." +
        "</p>" +
        "<p>" +
          "That brings me to the next point taken from the research, and the T from the " +
          "personality type which stands for turbulent. If you couldn't guess, my personality " +
          "type is governed by their values, even ruled by them, hence being able to lose " +
          "oneself in a cause. A turbulent Mediator is more likely to lose themselves than " +
          "an assertive Mediator. It's an interesting personality quirk that can be both a " +
          "strength and a weakness. We would all agree that being passionate is a good thing, " +
          "however being zealous is not. Both come from the same source but the difference is " +
          "the intensity. Something I have known about myself for a long time (which this " +
          "research supports) is that I need to watch how much I am letting myself commit " +
          "to something, its something I need to keep in check and something I have both " +
          "succeded at and completely failed at in the past. Just another of lifes great " +
          "balancing acts, just with a more personal theme." +
        "</p>" +
        "<p>" +
          "As for describing the culture that has influenced and moulded my personality, there " +
          "really is not enough space in this blog to delve into detail. Lets just say I " +
          "take the good and the bad as experiences, all are part of me but not at the same " +
          "time. It's not so much what the experience is but what you learnt from it and how " +
          "you react to them. If you didn't react well it is now history, but as life seems " +
          "to have a habit of doing, there will be more chances to react to experiences later. " +
        "</p>" +
        "<h2 id=\"section3\">Other INFP's</h2>" +
        "<p>" +
          "Before talking about me some more there was one cute little part of the " +
          "16 personalities website where they listed some real people and fictional " +
          "characters the showcase the traits of the same personality type. For the INFP's " +
          "that puts use in the company of createve geniuses such as J.R.R Tolkien, William " +
          "Shakespeare, Johnny Depp etc. and fictional characters like Fox Mulder from the " +
          "X-files and Frodo Baggins form the Lord of the Rings (actually a few Tolkien " +
          "characters made the list... write what you know I guess). It's cute but it does " +
          "put an emphasis on the creativity and passionate aspects of the personality type." +
        "</p>" +
        "<h2 id=\"section4\">Strenghts</h2>" +
        "<h3>To summerise strengths:</h3>" +
        "<ul>" +
          "<li>" +
            "Idelistic" +
          "</li>" +
          "<li>" +
            "Createve" +
          "</li>" +
          "<li>" +
            "Open minded and flexible" +
          "</li>" +
          "<li>" +
            "Passionate" +
          "</li>" +
          "<li>" +
            "Dedicated" +
          "</li>" +
        "</ul>" +
        "<h3>How these will assist my learning?</h3>" +
        "<p>" +
          "One of the outcomes of the combination of these strengths is that you can gain a " +
          "unique perspective about a problem and are able to see things in different ways " +
          "(more often than not in multiple ways simultaneously). It is an asset for problem " +
          "solving. Not only does this work on an individual level but on a group level as " +
          "well, with taking others ideas, working through them side by side and seeing how " +
          "they can be woven togeather." +
        "</p>" +
        "<h2 id=\"section5\">Weaknesses</h2>" +
        "<h3>To summerise weaknesses:</h3>" +
        "<ul>" +
          "<li>" +
            "sometimes too Idealistic" +
          "</li>" +
          "<li>" +
            "sometimes too Altruistic" +
          "</li>" +
          "<li>" +
            "sometimes Impractical" +
          "</li>" +
          "<li>" +
            "Difficult to Get to Know" +
          "</li>" +
        "</ul>" +
        "<h3>What will I have to look out for in my learning?</h3>" +
        "<p>" +
          "As I have talked about a bit thus far, the balance of the mix of personality " +
          "traits is key and it is a constant effort to not go too over the top with ideas, " +
          "care too much about a project and so forth." +
        "</p>" +
        "<h2 id=\"section6\">Making Fun at Behavioural Interviews</h2>" +
        "<p>" +
          "This assignment actually asked a couple of STAR question aka a behavoural " +
          "question. If you have been to a job interview in the last decade you would know " +
          "the type, so for the fun of it, lets pretend this is an interveiw, here goes ..." +
        "</p>" +
        "<p>" +
          "<b>Interviewer</b> - This first question is about ethics and making ethical " +
          "decisions. Tell me of a time when you had to make an ethical decison. how did " +
          "you make your decsion and what was the outcome?" +
        "</p>" +
        "<p>" +
          "<b>Candidate</b> - In my last role I had to make ethical decisions on a daily " +
          "basis, mainly around how hard to push collection of debt. On one hand you had the " +
          "customers that did not have the financial means to do so (or the desire). On the " +
          "other hand you had clients that need the support that these funds generate and " +
          "the financial or health needs that not having the funds impacts. The ethical decision is " +
          "who do you help more the customer or the client?" +
        "</p>" +
        "<p>" +
          "How I dealt with this was to gain more information about the customer and their " +
          "situation (already knowing the importance of the clients situation). Some were " +
          "having dificulty, some were causing their own difficulty, others should just not " +
          "be trading at all. Generally you got a feel for how people responded to your " +
          "questioning what the best course of action would be." +
        "</p>" +
        "<p>" +
          "There were cases when we had to start proceedings to put customers into " +
          "insolvency under the idea that constantly getting further and further into debt " +
          "was bad for everyone involved, not to mention the economy as a whole. There were " +
          "thankfully more situations that you could work with the customers negotiating on " +
          "some extra time to allow them to keep trading in the future and keep funding the " +
          "scheme that benifits the clients." +
        "</p>" +
        "<p>" +
          "<b>Interviewer</b> - This next question is about working together in a stressful " +
          "situation. Tell me about a time when you were trying to work productively with " +
          "others, but there was resistance or tension. What strategies did you use and how " +
          "effective were they?" +
        "</p>" +
        "<p>" +
          "<b>Candidate</b> - In a previous team, there were two of us that were considerd " +
          "subject matter experts (SME's) however, we had very differing styles in how we " +
          "provided information to other team members, so different in fact that we would " +
          "get frustrated with how the other would explain situations. The competting styles " +
          "were mine which revolved around explaining the why and how of a situation so " +
          "the other could learn the way of thinking so they could resolve issues like this " +
          "in future and the other individuals style which was based on quick wins, giving the " +
          "answer only quickly under the idea that no matter how many times the same " +
          "question gets asked others will eventually get it." +
        "</p>" +
        "<p>" +
          "It became apparent that we could not continue under the current situation, so I " +
          "requested a one on one meeting. We discussed the situation and the frustrations. We also " +
          "discussed the merits of the qucik win and the educating approach in our working " +
          "environment. We came to an agreement that we would split the work based upon need." +
        "</p>" +
        "<p>" +
          "The outcome was if the team member needed quick information to get straight back to " +
          "the customer - say if they had been waiting a while or had to go through multiple " +
          "request to hold while the team member asked different questions from us - then the " +
          "quick win approach would be used. However, if the situation had not been resolved " +
          "in multiple calls, or the team member had asked the same question more than one " +
          "then the education approach would be taken." +
        "</p>" +
        "<p>" +
          "<b>Interviewer</b> - If you were in that situation again, would you do anything " +
          "different?" +
        "</p>" +
        "<p>" +
          "<b>Candidate</b> - Ask for the one on one meeting sooner - planning the course of action " +
          "made everything run smoother from then on." +
        "</p>" +
        "<h2>Thank You!</h2>" +
        "<p>" +
          "If you made it this far thank you, I know it was a long one. Cheers for giving it a read." +
        "</p>" 
        },
        {
          banner_url: "images/tech-blog-banner.JPG", 
          title: "The Story of Te Houtaewa", 
          subtitle: "Sprint 1 Technical blog", 
          type: "TechBlog", 
          content: "<h2>E kore e mau i a koe, he wae kai pakiaka. <em>A foot accustomed to running over roots makes the speediest runner.</em></h2>" +
          "<h3>10 November 2010</h3>" +
          "<p>" +
            "Te Houtaewa was the fastest runner of his day and played many pranks on his peoples enemies. One morning his mother wanted kumara for the hangi (earth oven) and asked Te Houtaewa to go to the gardens at Te Kao, a short distance away. He agreed to fetch the kumara and told his mother to prepare the hangi." +
          "</p>" +
          "<p>" +
            "Instead of going to the nearby gardens, Te Houtaewa set off for Ahipara as he wanted to annoy some Te Rarawa people who lived there. Carrying two large baskets for the kumara, he ran like the wind, completing the journey over the hard sands of Te Oneroa a Tohe (Ninety Mile Beach) in the few hours it takes a good hangi to heat up properly. On reaching Ahipara, he went straight to the people's kumara pataka (storehouse for the sweet potatoes) situated at the foot of the hill Whangatauatia." +
          "</p>" +
          "<p>" +
            "While Te Houtaewa was filling his baskets with kumara he was spotted stealing the kai (food). He was immediately recognised." +
          "</p>"
        },
      ])
}
