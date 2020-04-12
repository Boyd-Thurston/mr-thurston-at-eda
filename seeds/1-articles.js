
exports.seed = knex => {
      return knex('articles').insert([
        { 
          banner_url: "images/cultural-blog-banner.JPG", 
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
        {
          banner_url: "images/cultural-blog-banner.JPG",
          title: "Q&A With EDA",
          subtitle: "Sprint 2 Cultural blog",
          type: "CulturalBlog",
          content: "<p>This sprints cultural blog article calls for a Q&A session, some of them are quite " +
          "tricky so here goes...</p>" +
          "<h2 id=\"section1\">What is your long term goal and or career pathway?</h2>" +
          "<p>As a learner yet to enter the industry, my career goal is to simply enter the " +
            "industry as a web developer. To expand on this concept further, to also be " +
            "successful as web developer, after achieving that, who knows what the future holds? " +
            "I may hone my skills further and continue down the path of a web developer for the " +
            "rest of my working career, or I may branch out into other forms of development " +
            "maybe software, games etc. As long as I stay true to my creativity and continue to " +
            "strive for challenge I think I will be fine.</p>" +
          "<h2 id=\"section2\">What skills (non-technical - human skills) would you like to see developed in " +
            "yourself while at EDA?</h2>" +
          "<p>Non-technical skills, human skills, soft skills, many names for the same concept, " +
            "how do you manage yourself and how do you handle interactions with others. These " +
            "are skills that you need to constantly develop as the only constant in life is " +
            "change. If I had to choose one of two to specifically work on right now it would be " +
            "time management and lasting rapport. Not that I do not already possess these skills, " +
            "more that they need to adapt to my changing situations. I have spent so so so many " +
            "years collecting debt and talking to customers on a transactional basis that I " +
            "would be kidding myself If I didn’t believe that I adapted to that methodology, " +
            "managing time on a call by call basis rather than being master of my own clock, " +
            "building rapport over one or a couple of conversations without real lasting contact " +
            "(who wants to be a repeat client of the same debt collector?).</p> " +
          "<h2 id=\"section3\">How would you describe your own strengths and limitations?</h2>" +
          "<p>As I touched on in the last sprints cultural blog post " +
            "<a href=\"sprint1-cultural.html\">Identity and Values</a>, my strengths are my weaknesses " +
            "and my weaknesses are my strengths. A creative creature that is a wellspring of " +
            "inspiration and ideas, however I can get lost in the ideas, coming up with a score " +
            "of new ideas before finishing the first. I never get stuck for inspiration, more " +
            "spoilt for choice, and choosing can sometimes be tricky.</p>" +
          "<h2 id=\"section4\">Based on the above description, how you will manage your workload in this " +
            "programme? This should include - an explanation of how you will manage yourself to " +
            "work productively and safely with other learners, facilitators and " +
            "industry/community representatives.</h2>" +
          "<p>Wow what a question, where do I begin? I think the first thing to unpick from that " +
            "knot of a question is how I will manage myself and my workload. As my strengths and " +
            "weaknesses are so intertwined the real trick is balance. How far down the rabbit " +
            "hole of creativity and inspiration do you need to go before you have sunk too far? " +
            "When do you take the blue pill and wake from your creative dream to get the work " +
            "done and when do you take the red pill and follow your creativity on its journey of " +
            "inspiration?</p>" +
          "<p>The next bit to unravel is how I deal with this with other people. This really has " +
            "two aspects again fixated on balance.The first being internal control, the second " +
            "being external control. By internal control I mean the old noticing social cues " +
            "that are inbuilt into the very fabric of our society, knowing when you are going " +
            "too far with your ideas by others lack of interest. This along with a constant eye " +
            "on the clock coupled with an appreciation on how long each item of work takes to be " +
            "completed or each idea to be realised fully.</p>" +
          "<p>The second part being external control, by this I don’t mean someone telling you " +
            "to “get back to work” (the absolute favourite saying of a former influence of mine " +
            "… and not just at me to set the record straight), no by this I mean educating " +
            "others I work with on what my working style is. As the personality type research " +
            "shows, there is only approximately 4% of the human race on the same wavelength as " +
            "me, leaving room for miscommunication and misinterpretation. A lot of people have " +
            "never met nor worked with someone like me. I get that, so I learnt a long time ago " +
            "that telling others what an outpouring of ideas looks like and what to do with the " +
            "information upfront goes along way to setting a mutual respect for each other's " +
            "working styles. For example a lot of people are attached to their ideas and feel " +
            "bad if they don’t pan out or are not well received. For me ideas are a dime a " +
            "dozen, so to speak, so there is not attachment, they literally an idea, food for " +
            "thought that can be used and expanded or discarded as needed, a notion without a " +
            "substantial form. I respect others attachment to their ideas, however I also try to " +
            "educate others that I am not attached to mine so they can do with them as they see " +
            "fit, that's why I told them the idea in the first place. This has obviously let my " +
            "ideas become something far greater than what they started as but that's the whole " +
            "point of an idea and I'm ok with that. It has also let my ideas be used by others " +
            "without credit to where they came from, again I’m ok with that (might be something " +
            "to the “sometimes too altruistic” weakness pointed out in last sprints blog after " +
            "all).</p>" +
          "<h2 id=\"section5\">How and where you will seek help in a timely way?</h2>" +
          "<p>That's an easy one. Although with the remote learning aspect of the foundations " +
            "part of the course you are not actually alone. Your peers and the facilitators are " +
            "only a chatroom away. So it's not hard to ask a question when you need to. The " +
            "trick is when to ask a question. Well, your peers are also working hard so that has " +
            "to be tempered with respect to their studies.The facilitators are there and hey you " +
            "have really already paid for their help and that is what the resource is for. The " +
            "real point however is your learning, how do you improve your learning but not get " +
            "lost along the way? The answer is try to solve it yourself first, get specific " +
            "about what is your problem and search for a solution online. If you can’t be " +
            "specific then you're tackling too much at once so break it up into chunks and work " +
            "from there. If you have tried and are still stuck, then before you let frustration " +
            "kick in, it is time to seek help from the facilitators. Even if you feel " +
            "embarrassed about it just do it, that's what the resource is there for.</p>" +
          "<h2 id=\"section6\">What do you expect from the facilitation team?</h2>" +
          "<p>What do I expect? Advice when I need it, the occasional checking to see how things " +
            "are going, and the clincher, feedback after the unobtrusive assessments are done. " +
            "The first two are all underway and proven to be as expected and as for the third " +
            "expectation, it's too early to tell. Hopefully it's forthcoming and I don’t have to " +
            "seek it, but it’s me and if I have to, I will.</p>" +
          "<h2 id=\"section7\">How will I plan my schedule?</h2>" +
          "<p>Again an easy one, I maybe one for spontaneity however I know if it's not written " +
            "down it will not get done, that's just who I am. Lists and calendars are my friend. " +
            "Too many years using outlook in an office environment has influenced my style here " +
            "somewhat. I’m no slave to a single brand or software, however I do prefer to use a " +
            "mail client with an inbuilt calendar and task list. So unsurprisingly, that was one of " +
            "the first things installed on this nice new laptop I purchased for this course, and " +
            "yes the calendar does have blocked out time for study, child drop offs and pickups " +
            "etc.</p>"
        },
        {
          banner_url: "images/tech-blog-banner.JPG",
          title: "CSS Positioning",
          subtitle: "Sprint 2 Technical blog",
          type: "TechBlog",
          content: "<h2>CSS Positioning</h2>" +
          "<p>CSS uses positioning to layout all of the bits a pieces that make up a web page. " +
            "Even when no code has been specified CSS still uses static positioning, that is " +
            "the normal way a pages pieces sit together. Being normal isn't that exciting and " +
            "isn't worth talking about, what is are the ways of positioning that give us more " +
            "control and do something outside of the norm. This is where we with a little bit " +
            "of extra code absolute, fixed and relative positioning comes into play.</p>" +
          "<h2>Absolute Positioning</h2>" +
          "<p>" +
            "What absolute positioning does is that it takes elements(a technical name given " +
            "to things that make up the page) out of the flow of the page, being ignored by " +
            "and ignoring other elements on the page." +
          "</p>" +
          "<p>" +
            "An absolute positioned element appears on the page depending on coordinates set " +
            "in its code top, bottom, left etc. If you think of it as an absolute positioned " +
            "element as a boy scout trying to find its way on a map with only a couple of " +
            "grid coordinates A1 utmost top left coordinate in the grid in code terms would " +
            "relate to top: 0; left: 0; so quite straightforward thus far what is really " +
            "interesting is what an absolute positioned element considers the map." +
          "</p>" +
          "<p>" +
            "To determine what the \"map\" is, our boy scout absolute positioned element first " +
            "looks for another type of positioned element to tell it what its boundary is. In " +
            "technical terms this would be an element set to relative positioning that its code" +
             "has been written inside of, or for our hypothetical example think of this as a " +
             "scout leader telling our boy scout where he can and can't go for this exercise " +
             "effectively giving him a smaller map within this boundary. In CSS terms this means " +
             "the element will be positioned within the parent element (scout leader's map). For " +
             "example the title of this blog post is an absolute positioned element given a set " +
             "of coordinates to site in the correct place within the boundaries of the image at " +
             "the top of the page its relative positioned parent element." +
            "</p>" +
            "<img class=\"in-article-img\" src=\"/images/sp2-t4-blog-figure1.PNG\" alt=\"absolute positioning example\">" +
            "<p>" +
            "Now what if there is no relative positioned parent element, no scout leader, what" +
             "does our boy scout do then? It does what any child given an out of context " +
             "instruction does what they think the instruction meant and as in real life this " +
             "does not always work out well. In our orienteering scenario the absolute positioned " +
             "element assumes We meant the whole page is the map regardless of where we put it in " +
             "the code of the document. In the context of this page layout if we removed the " +
             "position: relative; code line from the image at the top then the title would position " +
             "itself on the page as a whole. This would display partially covering the same part of " +
             "the page as the logo at the top left and over part of the navigation bar. This would " +
            "look like a mess." +
          "</p>" +
          "<h2>Relative Positioning</h2>" +
          "<p>" +
            "As you can see from above you can not talk about absolute positioning without going " +
            "into relative positioning. Apart from being \"relative\" to an absolute positioned " +
            "child element providing it with the boundaries that it can use to decide on its " +
            "position it is also \"relative\" to the element it is set inside of, as well as " +
            "\"relative\" to the other elements inside of it. I know that's a lot of relatives " +
            "almost a family reunion going on here, let's think of it in a practical way." +
          "</p>" +
          "<p>" +
            "As we discussed the image earlier, and I am sorry to say but simplicity's sake I " +
            "lied. It is actually an invisible box around the image that both the title and " +
            "the image sit inside. Think of it as putting two different sized photos in the " +
            "same picture frame. They are both encased inside but it does more than just hold " +
            "them in it also keeps its shape it doesn't stretch or contract with the size of " +
            "the screen it well stays \"relative\"." +
          "</p>" +
          "<img class=\"in-article-img\" src=\"/images/sp2-t4-blog-figure2.PNG\" alt=\"absolute positioning example\">" +
          "<p>" +
            "Try resizing the window you are viewing this in you see that the image and title " +
            "stay about the same in relation to each other." +
          "</p>" +
          "<h2>Fixed Positioning</h2>" +
          "<p>" +
            "By now you would have noticed that the navigation bar at the top of the page is " +
            "following you. No it's not a stalker is a fixed positioned element. A fixed " +
            "positioned element is fixed or attached to the same position on the screen. It " +
            "functions similar to our absolute positioned element earlier in that it has its " +
            "set of map coordinates but for a fixed position element there is no searching for " +
            "a parent element to tell it what to do. It already knows what to do its a fixed " +
            "positioned element it has a job and that job is to find its coordinates on your " +
            "screen (viewport in technical jargon) then stay there until it's told otherwise " +
            "and its good at its job." +
          "</p>" +
          "<img class=\"in-article-img\" src=\"/images/sp2-t4-blog-figure3.PNG\" alt=\"absolute positioning example\">" +
          "<h2>More to know</h2>" +
          "<p>" +
            "There is more to positioning than these three (four if you include static " +
            "positioning) types of positioning. There are others like sticky positioning, " +
            "z-index ect. this is however not covered in this post maybe another time. " +
            "Thanks for reading." +
          "</p>"
        },
        {
          banner_url: "images/cultural-blog-banner.JPG",
          title: "Emotional Intelligence and Me",
          subtitle: "Sprint 3 Cultural blog",
          type: "CulturalBlog",
          content: "<p>The cultural theme for this sprint is EQ or emotional intelligence. In it we are " +
            "asked to research the topic and answer the following questions.</p>" +
          "<h2 id=\"section1\">What is Emotional Intelligence?</h2>" +
          "<p>Emotional intelligence  as the dictionary meaning gose is “the capacity to be " +
            "aware of, control, and express one's emotions, and to handle interpersonal " +
            "relationships judiciously and empathetically.” What this means in more detail is " +
            "its a term for the concept of knowing oneself, how you and your actions affect " +
            "others as well as how you are in turn affected by others. Another way to look at it " +
            "as the Literary genius Dr Seuss put it:</p>" +
          "<p> “So be sure when you step. Step with care and great tact and remember that Life’s " +
            "a Great Balancing Act. Just never forget to be dexterous and deft. And <i>never</i> " +
            "mix up your right foot with your left.”</p>" +
          "<p>That is a quote from my favourite children's story of all time Oh, The Places " +
            "You’ll Go! If you never experienced this book in your childhood give it a quick " +
            "look, the whole book is an example of expling (in a cunning rhythmic way that is " +
            "Dr. Suess style.) EQ and personal resilience to a child. As life yoyos between good " +
            "then bad, how to pick yourself up again and continue, be it with groups and on your " +
            "own. It’s a cute little book</p>" +
          "<iframe class=\"centered-iframe\" width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/D6ZeZA6wF-k\"></iframe>" +
          "<p>Please excuse the plug at the end, it is the best rendition I could find without " +
            "the usual host talking “that way” towards the intended young viewers. If you are a " +
            "parent you know what I mean.</p>" +
          "<h2 id=\"section2\">How is it different to IQ?</h2>" +
          "<p>We have touched on what Emotional Intelligence (EQ) is or Emotional Quotient if " +
            "you want to get letrial. To understand how this differs from Intelligence Quotient " +
            "(IQ) first you need to know a bit about IQ. IQ is a measure of a person's ability " +
            "to reason, their ability to problem solve. Whereas EQ is how we control(not " +
            "suppress) our own emotions and can empathise with others emotions. Both can be used " +
            "in a situation without the other however it would feel weird and not be an optimal " +
            "outcome.</p> " +
          "<h2 id=\"section3\">Why is it important?</h2>" +
          "<p>As I just mentioned an interaction with someone without either IQ or EQ would feel " +
            "weird and not come across as a good interaction no matter its success. To " +
            "demonstrate why it is important I think it's good to use a real world example where " +
            "both successful and unsuccessful  experiences existed with the same I level of IQ " +
            "but with a different emphasis on EQ.</p>" +
          "<p>In this scenario I was working in an ISP helpdesk and we have a small business " +
            "owner that was having issues using her modem after an OS update broke the auto " +
            "instal for the hardwares drivers. The fix was easy after applying a little " +
            "knowledge and understanding. It became apparent that it was a driver issue, and the " +
            "best course of action was to talk the customer through manual installation, that’s " +
            "the IQ at work. Now that is where the similarities between the two calls ended.</p>" +
          "<p>It's true that this customer had no concept of how a computer worked. It's even " +
            "fair to say that they hated computers. They saw them as a necessary evil to keep " +
            "track of the financial side of their business. In the first call the helpdesk rep " +
            "displayed poor emotional intelligence, and let this get to them. Their frustration " +
            "became so noticeable that the customer started to respond in kind. This boiled over " +
            "to a point where the helpdesk rep told the customer to call back when they had " +
            "someone with them that understood how to use a computer. As you can imagine the " +
            "response from the customer was enough to have the call terminated.</p>" +
          "<p>Now for the second call and my turn to talk to this customer. Enraged with this " +
            "outcome and still needing to resolve their problem, the now irate small business " +
            "owner called back. From the outset they were displaying a poor sense of emotional " +
            "intelligence but did I let this sway how I would display my sense of emotional " +
            "intelligence? Well a little, I took it as an indication to display an even stronger " +
            "sense to try and compensate for the imbalance. First we talked about the last call " +
            "but not in great detail, just enough to display a little empathy and ascertain that " +
            "the customer felt personally insecure about their own IQ after the last call. Then " +
            "we talked a bit about their business followed by my own admission that I couldn’t " +
            "do what they do (all true, I will admit I had an advantage here being raised by " +
            "self-employed individuals I knew a thing or two about what doing business entailed. " +
            "Some aspects of self-employed life make me thankful to be an employee … well when " +
            "I'm employed and not a student that is). This short conversation putting the " +
            "situation into context helped resolve a lot of the initial stress. All it took was " +
            "some active listening and some honesty. We then moved on to resolve the call, it " +
            "was still not easy. The customer lothing of computers extended to any technical " +
            "jargon so the choice of language that was used had to be tailored to the audience. " +
            "15 years on and I still remember calling the desktop “tulips” based on the " +
            "wallpaper they had because it was the easiest way to talk them through it.</p>" +
          "<p>So to recap in the first call both the helpdesk rep and the customer showed poor " +
            "emotional intelligence resulting in a negative experience. In the second call even " +
            "with the same level of IQ and a stronger sense of emotional intelligence it " +
            "resulted in a successful and positive outcome.</p> " +
          "<p>As it happened I was also the helpdesk soft skill coach at the time thanks to a " +
            "development opportunity we had running, this example became legend and a key " +
            "learning opportunity. I did purposely forget the name of the first help desk rep " +
            "from any future retellings, another use of emotional intelligence. In truth we " +
            "actually built a coaching relationship after that, it got to a point where they " +
            "were as good as me … hopefully better by now if they kept up the practice.</p>"
        },
        {
          banner_url: "images/tech-blog-banner.JPG",
          title: "JavaScrip and its bits and pieces plus the DOM",
          subtitle: "Sprint 3 Technical blog",
          type: "TechBlog",
          content: "<p>" +
          "This week's technical blog is about explaining technical terms without jargon and " +
          "in a non-technical friendly way. That and packing it with analogies too, so let's " +
          "see if mine are at least a little entertaining. " +
        "</p>" +
        "<h2 id=\"section1\">HTML and CSS what's the difference?</h2>" +
        "<p>" +
          "The difference between HTML and CSS is that they are responsible for different " +
          "parts of the website. HTML is the blueprint for the websites it's skeletal " +
          "structure, sure it includes a lot of the content and all its listed parts but only " +
          "in its rawest form. CSS on the other hand is the look. It dresses each HTML element " +
          "based on its instructions, think of it as your costume department manager. If we " +
          "try to put this into a real world idea example say you are putting on a play, HTML " +
          "has sourced all your actors, the set, and the script telling everyone where they " +
          "should be. CSS’s job is to make sure they all look the part, each actor is wearing " +
          "the correct costume, each set item is painted/dressed up in the correct way and so " +
          "forth." +
        "</p>" +
        "<h2 id=\"section2\">Control flow and loops  what are they and how do they relate to real life?</h2>" +
        "<p>" +
          "Control flow as the name suggests controls the flow of a program, it is the " +
          "sequential order that parts of the program activate for example what happens at the " +
          "start when it is loaded, what happens when you click this button and so on. Loops " +
          "are a type of function an activity of the program that does something over and over " +
          "until a set stopping point is reached. This is normally controlled by a conditional " +
          "statement and stops when the condition is no longer met kind of like  “do this " +
          "until it has been done for every item in this container” or in programing terms " +
          "for( item in container){ do this thing;}. " +
        "</p>" +
        "<p>" +
          "Now let's put a in real life example on this idea say you are making a cup of " +
          "coffee. You would generally follow a process (an not the average wellingtonian " +
          "process of walking to the local brewista) you would first get a cup, then put in a " +
          "variable amount of coffee depending on taste maybe some sugar too, boil the kettle " +
          "until it clicks, add hot water, stir until the dry ingredients dissolve, if you are " +
          "so inclined ad milk. Pretty basic but this is the control flow in action. It also " +
          "has a few loops in it as well, such as the kettle keeps boiling until it is hot " +
          "enough, you keep stirring until the dry ingredients are dissolved etc." +
        "</p>" +
        "<h2 id=\"section3\">The DOM what is it? And how you might interact with it?</h2>" +
        "<p>" +
          "The Document Object Model or “The DOM”, is the glue that ties HTML, CSS and " +
          "JavaScript together. What it does in relation to HTML elements is that it creates " +
          "objects for each of the elements, making them into a thing that can be interacted " +
          "with by object oriented programing languages such as JavaScript. " +
        "</p>" +
        "<p>" +
          "To someone not technically inclined this might not sound like much so let's put it " +
          "in a different context. Say you are trying to assemble a flat pack bookcase (in " +
          "website terms say the page shows the blueprint then it morphs into the completed " +
          "product). You are the one actively putting it together handling the transition (the " +
          "animated morphing) from what you have and transforming it into what it's going to " +
          "be, this makes you JavaScript. Now as we touched on earlier HTML is your blueprint " +
          "with its list of parts and CSS is the look of the item your colour/style selection " +
          "in this example. Once it comes time to assemble this bookcase it's not going to get " +
          "very far if you physically only have a blueprint to work from and no parts to " +
          "assemble. That is where the DOM comes in, if you think of the DOM as the " +
          "manufacturer. This manufacture sits on the assembly line making the parts that will " +
          "then be packaged and shipped with the flatpack. How it does this is to take each of " +
          "the listed parts on the blueprint (the HTML elements) say a screw. It then assigned " +
          "properties how it looks based on the CSS instructions, say the screw (defined by " +
          "the HTML tag) is 20mm long and has a phillips head (CSS styles). It does this for " +
          "each part listed in the blueprint then the finished object is then packed and " +
          "shipped off. The DOM’s job is done. The animation of turning the screw and putting " +
          "it in place can then be handled by JavaScript, something that it couldn’t do until " +
          "it had an object(s) to manipulate." +
        "</p>" +
        "<h2 id=\"section4\">What is the difference between accessing data from arrays and objects?</h2>" +
        "<p>" +
          "Objects and arrays on their surface can seem similar as they both hold a bunch of " +
          "data however they are actually very different in their use. An array is more of a " +
          "traditional list or list of lists, holding data that can be accessed via the " +
          "position it takes in the list good if you know where it is but not very dynamic if " +
          "you have something more specific in mind. An object holds data but each piece of " +
          "data or value is assigned to a property or key, this giving you a key value pair. A " +
          "key value pair can be accessed by looking for the value or a key or any combination " +
          "provided it can be logically stated. " +
        "</p>" +
        "<p>" +
          "Sounds confusing I know so let's put it in some context. Say you have a list of " +
          "people and addresses. In an array each person and address is its on sublist from " +
          "the original an array within an array and you need to know where each entry sits to " +
          "use it in a program. Say you have a person ‘bob’ who lives at ‘123 Nowhere Street’, " +
          "you know bob is the third person in the list so you tell the computer to pull the " +
          "third position and just his address which is position two then vala you have his " +
          "address to work with. This is fine if you have a small list and can bring it up to " +
          "check the position if you forget but what if your list has 1000 people in it? This " +
          "would be hard to remember so it would be easier to search by the property itself " +
          "and that's where objects come in. With an object you could search for the ‘Bob’ and " +
          "get his address no matter how many entries you have or where it sits within the " +
          "list. " +
        "</p>" +
        "<p>" +
          "Stopping here would be selling objects short they are so much more than a database " +
          "table, as this course progresses I’m sure we will have to explain classes at way to " +
          "set rules around types of objects and also methods on how the get used tying in a " +
          "function into the object itself, sure it still will have properties listed in key " +
          "value pairs but they take on a new meaning. For example say your object is a tennis " +
          "ball, your class says the object has a shape of spherical, has a colour dictated by " +
          "the object itself in this case green/yellow whatever, but this type of object has a " +
          "method of being thrown. Enter the classes in build function that dictates how this " +
          "happens. This is the basis of an object orientated programing language that allows " +
          "them to do almost anything in a program. " +
        "</p>" +
        "<h2 id=\"section5\">What is a function, and why are they useful?</h2>" +
        "<p>" +
          "A function is a piece of reusable code that does something in a program. If we go " +
          "back to our coffee example a function could be called makeingCoffee that provides " +
          "us with a cup of coffee as the end product. Within this function there are multiple " +
          "blocks of code that all do the different bits to at the end come together to make " +
          "the whole. Now let's say you wanted to make another coffee later you could redefine " +
          "the process and write out the code all over again but who wants to reinvent the " +
          "wheel over and over again. This is where the reusable part comes in, having this " +
          "code in a function means that it never has to be written again in the program, it " +
          "is all held in once place. Having it in one place as a function means the function " +
          "can be called on again and again but only uses the same bit of code every time it " +
          "is called on. It also allows it to be updated without having to find each and every " +
          "copy of that code wasting everyone's time. There is actually a term called WET " +
          "coding that refers to this last point it stands for “Write Everything Twice” or " +
          "“Waste Everyone’s Time” as opposed to DRY coding that means “Don’t Repeat Yourself” " +
          "which is preferable." +
        "</p>"
        },
        {
          banner_url: "images/cultural-blog-banner.JPG",
          title: "Neuroplasticity and the Growth Mindset",
          subtitle: "Sprint 4 Cultural blog",
          type: "CulturalBlog",
          content: "<p>" +
            "For this sprint we touch on two concepts we are all familiar with even if we have " +
            "never used the terms listed here, these are Neuroplasticity and the Growth Mindset. " +
            "If you have ever done anything  with a steep learning curve, that requires lots of " +
            "repetition like learning to dance, or martial arts (or weapon based martial arts " +
            "like me) you will be on intimate terms with the concepts that these principles " +
            "highlight. " +
          "</p>" +
          "<h2 id=\"section1\">Neuroplasticity</h2>" +
          "<p>" +
            "Neuroplasticity is a concept based around the brain (your brain, my brain, " +
            "everyone's brain) being a malleable organ that is constantly strengthening and " +
            "recycling connections between neurons.  It works by building connections and neural " +
            "pathways between neurons that are needed to think in a curtain way, repetition of a " +
            "way of thinking causes these pathways to be strengthened to make them easier to " +
            "follow in future. We have all heard the misnomer practice makes perfect, well it's " +
            "more like practice makes permanent but that in itself is a misnomer, the reality is " +
            "practice makes it easier to practice the same thing in the future until a point " +
            "where we are not using said pathway for any more or much more and it loses priority " +
            "at which point our brain starts to recycle the matter that makes up the pathways to " +
            "be moved to more commonly used pathways." +
          "</p>" +
          "<p>" +
            "You have most undoubtedly come across a time where something was hard the first " +
            "time but with practice you got incremental gains. Now this something is easy to do " +
            "and does not have to be thought of in a meaningful way as the pathway has been so " +
            "strengthened it is something almost unstoppable. For example when you learnt to " +
            "write as a kid, at first it was hard, then it got easier and easier, now you " +
            "probably don't think much about the act of writing, you are more concerned with the " +
            "content or how to coin a phrase so to speak. The same can be said for breaking down " +
            "a neural pathway. Have you ever thought to yourself, “wow I'm rusty at this?” when " +
            "you try to do something you haven't done in a long time. Sure, you remember how, " +
            "but the pathway has started to be recycled. It's diminished and is  more like a " +
            "dirt track than a super highway or it’s gone completely and you will need to build " +
            "it back up again." +
          "</p>" +
          "<p>" +
            "The best thing about this cycle of strengthening and recycling is that you can find " +
            "better ways of doing things without damaging your brain or confusing yourself. " +
            "Think of it in terms of civil engineering: you build a super highway but find there " +
            "is a better route if you but a turn in here or there. Now if you added an extension " +
            "to allow for these turns, you have inadvertently given yourself something else to " +
            "think about. This would disrupt your thought process as the traffic in your brain " +
            "would have to get directions from somewhere. Now, if you streamlined this and " +
            "ripped down the sections of the super highway that were no longer needed, sure the " +
            "traffic now is directed without a choice, but you have left a mess in your wake not " +
            "to mention an environmental disaster. This is where the brain’s recycling process " +
            "becomes an asset. It slowly removes the not used sections until they are completely " +
            "reset and the environment which is your grey matter is returned to a pristine " +
            "state. If only civil engineers had the same ability." +
          "</p>" +
          "<p>This strengthening and recycling process allows us to improve on our " +
            "neuroplasticity with our risk without losing out on what we have learnt by trying " +
            "new things. If you think of it in the concept of what I am trying to do now, " +
            "learning to code, then you build a super highway in the process of doing repetitive " +
            "exercises and build on your experience. Now what happens when a new way of doing " +
            "something comes to light and easier and more efficient way, you don’t just break " +
            "down your super highway and start again. First you try this new way and your brain " +
            "maps this pathway as a dirt track at first then each time you use it it adds more " +
            "and more matter to the build strengthening it until it itself becomes a super " +
            "highway. Now what happens to the old way of doing things well it's still there " +
            "unless it's unused. In which case it will get smaller and smaller until it is now " +
            "the dirt track or no longer existent at all. So in short, if you want to improve on " +
            "neuroplasticity don’t be afraid to try new things and repeat the experiences you " +
            "did like." +
          "</p>" +
          "<p>" +
            "One of the resources I found quite useful is this video, it highlights the " +
            "adaptability that is one of the main reasons for humans success. It is a bit long " +
            "and dry but if you are like me and like these sort of endepth documentaries it's a " +
            "good one." +
          "</p>" +
          "<iframe class=\"centered-iframe\" width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/59ODYOaUbX4\" ></iframe>" +
          "<h2 id=\"section2\">The Growth Mindset</h2>" +
          "<p>" +
            "The growth mindset, a thing of beauty, always taking things in the not yet or " +
            "almost mindset sounds great but sounds a little intangible unless you also describe " +
            "its counterpart and complete opposite: the fixed mindset. Whereas the growth " +
            "mindset thinks of things in an open and optimistic way, the “I can do this!”, “I " +
            "will get there if I try again”, “not yet, I need to practice some more”, “maybe " +
            "next time”. The fixed mindset sees things as absolutes, the “I can’t do this”, “I " +
            "am never going to be good at…”, “why bother trying? lts not going to happen”. This " +
            "is not to say that the fixed mindset is necessarily bad or the growth mindset is " +
            "necessarily good, it's more that they both have a time and a place. Now, if you " +
            "were trying to cross a road for example, you would want to be in the fixed mindset. " +
            "A growth mindset opinion that “I’m not yet strong enough to deflect a truck, but with " +
            "some more practice I might.” is not going to get you far, that would call for an " +
            "absolute of “its a truck, you will lose”. Though if you were in a classroom " +
            "situation and learning a new skill, the fixed mindset of “I can’t do this so don’t " +
            "bother” is going to limit you before you even start, as opposed to the growth " +
            "mindset idea of “I don’t yet understand this but with some practice I will” is " +
            "going to set you up for success. How I plan on integrating this into my learning " +
            "journey is to use the open growth mindset example from the previous example and not " +
            "shoot myself in the foot before I start." +
          "</p>" +
          "<p>" +
            "For resources in this topic it is hard to go past the works of Dr Carol Dweck. " +
            "There are many websites summarising her work one of the ones I found useful was the" +
            "<a href=\"https://www.mindsetworks.com/science/\">mindsetworks website</a>, " +
            "especially if you have a chance to navigate through all its links and read the " +
            "works highlighted." +
          "</p>"
        },
        {
          banner_url: "images/tech-blog-banner.JPG",
          title: "My experiences with JavaScript",
          subtitle: "Sprint 4 Technical blog",
          type: "TechBlog",
          content: "<p>" +
            "In this week's sprint we were asked to practice, practice and do a little more " +
            "practice with JavaScript. It was focused around introducing new (or newish) " +
            "principles, as well as doing coding katas. Yes katas, just like martial arts but " +
            "with repetitive coding practice. We were then asked to share some of our personal " +
            "stories on this blog post so here goes!" +
          "</p>" +
          "<h2 id=\"section1\">What simple problem did I get blocked on?</h2>" +
          "<p>" +
            "Da bees, da damn bees. It was an interesting problem taking a bunch of sentences " +
            "(strings for those technically minded) filled with buzz’s and removing them to " +
            "filter out the annoying bee sounds. I pondered over the solution for a little bit, " +
            "and broke it down into pieces isolating each word and creating a new sentence with " +
            "all words except “buzz”. All was going well but for some reason I could not get it " +
            "to show the result I was expecting. Then came the online research that seemed to " +
            "support my case, but again it still wouldn’t work. Again and again I tried and " +
            "failed but again and again the solutions online supported what I was doing. After " +
            "an hour of almost zero progress I gave up and looked up the official solution to " +
            "reverse engineer it and what did I find, the code was almost identical I had simply " +
            "missed three characters in my original attempt. Where I had a () I should have had " +
            "a (‘ ‘). That was it, one simple error that was causing all my issues, something I " +
            "missed online because I was looking for answers not an unnoticed syntax error for " +
            "what I was trying to achieve. Sigh." +
          "</p>" +
          "<h2 id=\"section2\">What problem did I solve in an elegant way?</h2>" +
          "<p>" +
            "To be honest, after a few similar errors where all it would take was another human " +
            "going hey, you missed a ‘ ‘ out or a ; my confidence is pretty shot. I am not sure " +
            "I would call any of my solutions elegant. Maybe the bees if I had noticed the ‘ ‘ " +
            "was missing and got it first go. As it stands, I would say my solutions were " +
            "passable, functional but not elegant. I may just be being over critical or " +
            "exhausted from the week of revolving illness (every parent knows how that goes when " +
            "one child brings home a bug and everyone then takes turns at being sick) but that " +
            "is how I feel: more frazzled and unconfident than beaming optimism to call anything " +
            "elegant." +
          "</p>" +
          "<h2 id=\"section3\">Reflection on techniques</h2>" +
          "<p>" +
            "For the last part of this week's technical blog, we were asked to state how " +
            "confident we feel in using a list of problem solving techniques. Working through a " +
            "list can read as a little dull but let's try and see how we go, please bear with me." +
          "</p>" +
          "<p>" +
            "<b>Pseudocode:</b> well it's a fine idea. State the intent of a function and how " +
            "it's going to work in brief written steps commented out so the don’t impact the " +
            "code. Personally I like the idea until I do something silly like not comment a line " +
            "and break everything. Easily fixed, though sometimes it seems to get in the way " +
            "when doing exercises like we did this week. Although from previous experience, at " +
            "the last institution I was at we did make a python version of battleships with the " +
            "added challenge of using classes for almost everything, on a project like that " +
            "pseudocode and comments really save the day." +
          "</p>" +
          "<p>" +
            "<b>Trying something:</b> well try and try again as I always say. Although it does " +
            "help to think first or quote another cliche: look before you leap. Getting stuck in " +
            "has never been a problem for me." +
          "</p>" +
          "<p>" +
            "<b>Rubber ducky method:</b> what an interesting methodology. Talk to yourself or an " +
            "inanimate object just to hear yourself explain it. Then give yourself the answer as " +
            "you figure out the thing you didn’t think about when it was just in your head. Who " +
            "ever said talking to yourself is the first sign of insanity? In programming it is " +
            "actively encouraged. As for me, well I am confident in this, (even if I did pester " +
            "the facilitator earlier and answer my own question) if you read the first sprints " +
            "cultural blog you may remember that I am a creative individual, as how it plays out " +
            "with this I could seemingly sit down have a cup of coffee and space out for a time, " +
            "only to come back with the answer. The reason being I can actively envision the " +
            "conversation without it happening. It's like popping into your own realm and " +
            "directing a play about the problem once you have witnessed it and come back to " +
            "reality, then you have effectively done the rubber ducky method without displaying " +
            "a little bit of crazy to everyone around you. Even if it seems slightly more crazy " +
            "now I’m explaining popping off to a different reality at will … let's forget that " +
            "bit shall we." +
          "</p>" +
          "<p>" +
            "<b>Reading error messages:</b> error messages are my friends. They most of the time " +
            "point out what I have done wrong. Just like spell check that most of the time " +
            "works. I think it’s just part of the joy of being dyslexic: you learn to use these " +
            "functions as assistive technology. The one problem with all assistive technology is " +
            "that it is very easy to become over reliant on it. It’s good when you need it but " +
            "you shouldn’t rely on it when you don’t. " +
          "</p>" +
          "<p>" +
            "<b>Console.logging:</b> visibility is key to understanding anything, although I do " +
            "miss debugging programs that do that for you so you don’t need to bother commenting " +
            "out and uncommenting lines of code solely so you can see what one variable is set " +
            "to at a given time. Sadly we have not covered debugging programs yet and are still " +
            "learning the basics of visibility. " +
          "</p>" +
          "<p>" +
            "<b>Googling:</b> the joy of the information revolution is that there is an answer " +
            "to every question somewhere online. In fact it’s more like 100,000 possible answers " +
            "to every question. The problem is that it is hard to know which is the best answer, " +
            "which actually relates to what you want, and which are just down right wrong. I am " +
            "still learning to quickly wade through crap and find the gems of wisdom. Even " +
            "forums that are normally quite good and start out on track can easily go off on a " +
            "tangent and never recover (like half the stack overflow posts I read). What I need " +
            "to do is pick up in speed of deciding what not to continue spending time reading " +
            "and being more precise in my original searches." +
          "</p>" +
          "<p>" +
            "<b>Asking for help:</b> I decided to combine the “Asking your peers for help” and " +
            "“Asking coaches for help” question into one as with me it's the same issue for " +
            "both. Sure, the facilitators are paid for recourse but I do even in my wisdom still " +
            "prescribe to the age old NZ adage of “She’ll be right”. I don’t know what it is " +
            "about this country and being stoic, I see it in others too all the time. I have " +
            "tried to break this mould but I still come back to it. If you happen to be one of " +
            "the few I have directly asked for help you now know that it took some time to even " +
            "get that far, even more so if it was via a messenger or the like as that message " +
            "was probably written and rewritten several times not to mention put through spell " +
            "checking at least twice. " +
          "</p>" +
          "<p>" +
            "Improving your process with reflection: I am a great one at reflecting and by that " +
            "I mean meaningful reflection - a little incremental process here, a lesson learned " +
            "there, it all adds up. I generally never make the same mistake twice or at least I " +
            "make a conscious effort not to, well unless I’m tired. Then I’m like a broken " +
            "record skipping at the same point over and over again, repeated syntax errors " +
            "spring to mind." +
          "</p>"
        },
        {
          banner_url: "images/cultural-blog-banner.JPG",
          title: "Reflection on Foundations",
          subtitle: "Sprint 5 Cultural blog",
          type: "CulturalBlog",
          content: "<p>" +
            "For the last sprint of foundations the cultural blog is a double whammy. Firstly, " +
            "you have reflections on the core skills learnt over five weeks along with a " +
            "journal entry challenge, secondly you have the learning from the technical skills " +
            "over the whole foundation. So, without further ado, let's kick it off with the " +
            "journal exercise, a 2min rant by yours truly. With the lead in statement \"What " +
            "surprised me the most about learning core is...\" so lets start in 3,2,1 .." +
          "</p>" +
          "<h2 id=\"section1\">The Journal Exercise</h2>" +
          "<p>" +
            "What surprised me the most about learning core is the adaptability of the skills " +
            "learnt in this section. Pretty much all of which are life skills, and although " +
            "some are just part of being professional, somewhat surprising to be taught by an " +
            "IT academy. I think the parts about mindfulness, being kind to yourself and the " +
            "growth mindset are all about the fact that although programing is fun and " +
            "creative, it can also be mind boggling and frustrating when things just don’t go " +
            "the way that you want. A lot of this topic is about knowing yourself so you can " +
            "be the best and deliver the best, not push yourself to deliver something that is " +
            "not of high quality because you got so stressed making it you missed out " +
            "something basic. There are quite a few more things I could say about this but I’m " +
            "out of time already. For me, that's actually quite a small rant for two minutes. " +
          "</p>" +
          "<h2 id=\"section2\">Core Skills Reflection</h2>" +
          "<p>" +
            "The next part of the first part, part one, part two or is it really three parts " +
            "out of two exercises … anyhow back on track, this section is a Q&A. " +
          "</p>" +
          "<h3>What are three new things you have learned about yourself and your ego as a result of the core learning?</h3>" +
          "<p>" +
            "I really am too altruistic, this has caused me to lose out on many an " +
            "occasion. It's all well and good wanting to be helpful and going the extra mile, " +
            "but there is a point when you need to ask yourself is it not more helpful to let " +
            "people help themselves or should you really be doing this." +
          "</p>" +
          "<p>" +
            "My crazy amount of asking questions isn’t a bad thing, it's a really good thing " +
            "most of the time. I have just been trying to fit into somewhere where my " +
            "personality just doesn’t fit … yes “..will you pay that by credit card?” I am " +
            "talking to you (in joke for debt collectors)." +
          "</p>" +
          "<p>" +
            "Lastly, having more breaks isn’t skiving off, as long as they are quick and you " +
            "get back on task after they actually make you perform better. " +
          "</p>" +
          "<h3>What are the role of values, empathy and self awareness in learning and programming?</h3>" +
          "<p>" +
            "Values are important in everything, especially if you are in the business of " +
            "making ethical decisions. Intellectual property rights, privacy and security are " +
            "the big three when it comes to IT but they are definitely important. " +
          "</p>" +
          "<p>" +
            "Empathy is a big thing as I see it, and that's empathy not sympathy. There is a " +
            "huge difference between the two. Empathy is effectively gathering and " +
            "understanding data on social interactions in the moment they are happening, it’s " +
            "information that you can use to guide your reactions/further interactions. It's " +
            "like getting a feel for something before you make a choice. Sympathy is where you " +
            "feel bad for someone in a situation, it’s the little brother of guilt even if you " +
            "paid no part in the situation itself. The problem with sympathy is it leads you " +
            "to make decisions without all the information and let's face it, we are human and " +
            "that kind of thinking can go wrong very quickly. I may have lost the plot again " +
            "there for a bit so I will summarise, in short, empathy lets you get along with " +
            "other people/students/coworkers without being an ass. " +
          "</p>" +
          "<p>" +
            "Self awareness, well have you ever heard the saying burning the candle at both " +
            "ends? Sure you have and when it comes to learning, for me that springs to mind " +
            "every time someone talks about being self aware. It's the idea of pushing " +
            "yourself until you’re no use to anyone when you could have just known when to " +
            "step back, take a breath and start again when your mind is at ease. " +
          "</p>" +
          "<h3>What has surprised you the most about the core learning?</h3>" +
          "<p>" +
            "I pretty much covered that in the journal exercise above, I will say it again " +
            "though. The core skills covered in this course are not industry specific " +
            "competencies, they are life skills. Life skills that are needed in employment and " +
            "social situations alike. The most surprising thing to say about it is that they " +
            "are packed into this course whereas other IT courses they don’t really play a " +
            "part. I am not one to make statements before I have information to back them up " +
            "but it does look as if EDA’s commitment to get you ready to be employed after the " +
            "course is more than just words. " +
          "</p>" +
          "<h3>What were the most challenging aspects of the core learning?</h3>" +
          "<p>" +
            "That's an easy one, it is sharing my thoughts and feelings with almost complete " +
            "strangers while my inner critic is saying “that garbage, who in their right mind " +
            "would want to read that?” to which I now reply “ssssssssssh”." +
          "</p>" +
          "<h3>Why do you think we, a programming school, are spending so much time focusing on core learning in a web development bootcamp course?</h3>" +
          "<p>" +
            "Again covered earlier, I get the feeling these questions are trying to get a " +
            "point across by asking it on multiple levels. That point being life skills are " +
            "important and there is a commitment to be ready for employment at the end of this " +
            "course." +
          "</p>" +
          "<h3>Does the time you spent studying core learning here feel like a waste of time? Should you have just used that time to practicing programming instead? Justify your answer.</h3>" +
          "<p>" +
            "Again the same point, yet another way of asking it. Let's put it another way, you " +
            "could be the best programmer in the world and be an asshole or you could be an ok " +
            "programmer but be easy to get along with and take direction. If I was an employer " +
            "I would normally pick the ok programmer especially if I had to spend any decent " +
            "length of time with them. If you can't show empathy people generally don't like " +
            "partnering up with you, there goes that pair programing method they touched on in " +
            "this sprint. Not to mention, if you don’t know how to work around frustration " +
            "when things just aren’t working the way you envisioned you will never succeed as " +
            "a programmer." +
          "</p>" +
          "<h2 id=\"section3\">Learning Reflection</h2>" +
          "<p>" +
            "Next comes the learning reflections and it is another Q&A:" +
          "</p>" +
          "<h3>What is your long term goal and/or career pathway?</h3>" +
          "<p>" +
            "For me it's simple, it's a lifestyle choice as well as a career path. I want to " +
            "be able to use both hemispheres of my brain at the same time and programing is " +
            "something I seem to get and enjoy doing. There was one piece of advice I got a " +
            "long time ago that I never listened to that was “If you do what you enjoy you " +
            "never have to work a day in your life” as for the goals they read like this:" +
          "</p>" +
          "<p>" +
            "Step 1 - learn, learn and learn some more.<br>Step 2 - get into the industry.<br>" +
            "Step 3 - enjoy doing what I love, frustrations and all. It's all part of it." +
          "</p>" +
          "<h3>What do you think your biggest strengths and limitations will be in Bootcamp?</h3>" +
          "<p>" +
            "For strengths I would say coming at a problem sideways, to elaborate: approach a " +
            "problem from many different angles and keep coming up with ideas on how to " +
            "approach things better. As for limitations the inner critic will need to be " +
            "silenced. Plus there is always the joy of being dyslexic - copy and paste may be " +
            "a good work around sometimes but not for coding and being able to spell a word " +
            "three different ways in the same sentence also doesn’t help with coding, I am " +
            "going to need to learn new coding specific work arounds." +
          "</p>" +
          "<h3>What do you think your biggest non-technical challenge at Bootcamp will be?</h3>" +
          "<p>" +
            "Spelling fits into both technical and non-technical, what was that old quote “I " +
            "have no respect for a man who can spell a word only one way?” (even if it's never " +
            "been proven to have been said by Mark Twain) . It really doesn’t help with coding " +
            "nor others perception on your intellect. It's amazing how much emphasis people " +
            "put on spelling and vocabulary when it comes to deciding if someone is smart or " +
            "not. " +
          "</p>" +
          "<h3>What non-technical skills - human skills - would you like to see developed in yourself while at EDA?</h3>" +
          "<p>" +
            "Confidence in my ability … well more solid confidence, I wouldn’t be here if I " +
            "didn’t think success was a chance, I do second guess myself far too often." +
          "</p>" +
          "<h3>What are your expectations of yourself on Bootcamp</h3>" +
          "<p>" +
            "A lot of fast paced work, where I will learn modern coding techniques and most " +
            "importantly put them into practice." +
          "</p>"
        }
      ])
}
