
// --------------------------------------------------
// SCENES
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// 1) add fields for each scene, as relevant, to match your mockup
// 2) customize the scenes to fit your story
// 3) add any new fields to the function below
// --------------------------------------------------

// First, we create a variable for the current scene being displayed
let currentScene = "library";

const scenes = {

  
  library: {
    title: "The Grimm Estate",
    image: "outside.jpg", //add later
    children: [
      {
        text: "THIS IS NOT THE FINISHED GAME. SOOO MUCH STORY AND CHIT CHAT HAS BEEN CUT, PLAY THE REAL THING SOON THO! Kay?",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "The house sat before me. Despite years of decay, nature's vigor had yet to reach its walls and craggled chimneys. A lone chill sparked in my brain and ran deep into the soles of my feet.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "It seemed truly malevolent. As though god, in his wisdom, was unable to strike this beast down.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Banished, it now stood before me. Beckoning, pulling as the tide whisks a body into its maw.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “I wish we could burn it down.”",
        choices: [
          { text: "Enter", nextScene: "Entrance" }, { text: "Talk to Ariane", nextScene: "Ariane" }
        ]
      }
    ]
  },
  Ariane: {
    title: "Ariane",
    image: "outside.jpg",
    text: "",
    children: [
      {
        text: "Ariane: There's no turning back now, Andy. I'm sorry.",
        choices: [
          { text: "Enter", nextScene: "Entrance" }
        ]
      }
    ]
    },

  Entrance: {
    title: "Entrance",
    image: "Entrance.jpg",
    children: [
      {
        text: "The door was unlocked. Perhaps the latch had long since rusted and decayed. Electricity seemed to remain, sporadically powering certain lamps.",
        choices: [
          { text: "Go to Bedroom", nextScene: "Bedroom" },
          { text: "Go to living Room", nextScene: "Livingroom" },
          {text: "Go to study", nextScene: "Study"}
          
        ]
      }
    ]
  },
Bedroom: {
  action: function () {
    updateRooms(1);
  },
  title: "The bedroom",
    image: "bedroom.jpg", 
    children: [
      {
        text: "My room had long since lost its luster. All that remained was dust and a rotten smell.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Even after my departure, my room felt clinical. Academic books lined the shelves. ",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "I remembered leaving my and Eve's secret letters behind the lone portrait on my wall. It was the only painting I could keep. ",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Behind the portrait a small note was wedged against the wall.",
        choices: [
          { text: "Continue", action: "next" }
          
        ]
      },
      {
        text: "“She's had me locked in my room for a few days now, but I'm sick of this. She hit me so hard my cheek got cut open! Can you believe this, Andrew dear?”",//make em?
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane: “What is it?”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "She pressed herself against my back and stared over my shoulder.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
            {
        text: "Ariane: “Ugh. Is that really why we’re here?”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
            {
        text: "I crumpled the letter and folded it into my pocket.", //add to inv
        choices: [
          {text: "Go to living room", nextScene: "Livingroom" },
          {text: "Go to your father's study", nextScene: "Study"}
        ]
      }
    ]
  },
Study: {
    action: function () {
    updateRooms(1);
  },
    title: "The study",
    image: "study.jpg", 
    children: [
      {
        text: "The study was in disrepair. It seemed almost ransacked. Papers were scattered about.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane picked one up and started reading.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "I love you like sap loves the tree, like the sun loves the clear sky. You are so wonderful, if only I could see you more often! Alas, such is merely a dream.",
        choices: [
          { text: "Check portrait", action: "next" }
        ]
      },
      {
        text: "Ariane: “Well, he's not exactly a poet…”",
        choices: [
          { text: "Continue", action: "next" }
          
        ]
      },
{
        text: "Ariane: “Hm, do you think this was to your mom?”",
        choices: [
          { text: "Continue", action: "next" }
          
        ]
      },
      {
        text: "Andrew: “I doubt it. She hated him.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “Let's keep searching. I don't like jumping to hasty conclusions”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane: “So self aware...”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
            {
        text: "A lone portrait of my father hung on the wall. I wiped the welling tears away with an angry fist.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "There was a vault embedded into the wall next to it.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane: “Any idea about the combination?”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “No. I'll keep an eye out, though.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "I sifted through the sea of documents, but nothing else piqued my interest.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane: “You done? I think we should move on, Andrew.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
            {
        text: "Andrew: “Yeah, you're right.”", //add to inv
        choices: [
          { text: "Go to living room", nextScene: "Livingroom" },
          { text: "Go to bedroom", nextScene: "Bedroom"},
        ]
      }
    ]
  },

Livingroom: { 
    action: function () {
    updateRooms(1);
  },
    title: "The living room",
    image: "livingroom.jpg", 
    children: [
      {
        text: "Ariane was meandering about the room, expressively scouring for clues. At one point, she hung completely upside down behind an old chair, searching beneath it.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane: “Hmm… nothing yet. It's odd, though… why would there still be electricity if this place has been abandoned for so long?”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane: “If they really did kill themselves, wouldn't it make sense for this place to be long gone or recommissioned?”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
            {
        text: "Andrew: “I have to say, you make a good point.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane wandered about more. Every few moments, she would pause, fingers along her mouth, thinking.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane: “Hey, Andy.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
            {
        text: "Ariane: “This clock looks a little off.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “Maybe it's j-.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "She yanked it off the wall and, sure enough, a small gap remained behind it.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
            {
        text: "Ariane: “Well, well, if I'm not the greatest detective in all of-”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “And waitress.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane: “Oh, right. If I'm not the greatest detective and waitress in allll of New York.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
            {
        text: "Andrew: “Hmph.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "There was a small bag in the hole.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “Is this what I think it is?!”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
{
        text: "Ariane: “Drugs…”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “This is a breakthrough! The reports never mentioned anything about drugs!”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “Of course, it all makes sense!”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “They were involved in the mob! Their death had nothing to do with me; they simply got caught up in the wrong crowd”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane: “I don't know if you should celebrate your parents' executions.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane: “And this isn't definitive. Rich white guys partied all the time.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "A loud creak sounded from a distant room.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane didn't seem to hear it",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “No matter, this is big. Let's take it along with us.”", 
        choices: [
          { text: "Go to study", nextScene: "Study"},
          {text: "Go to your bedroom", nextScene: "Bedroom"}
        ]
      }
    ]
  },
MasterBedroom: {
  title: "Master Bedroom",
    image: "Fstudy.jpg", 
    text: "Upon getting this far, I realized that not only is this script HEAVILY condensed, but the lack of my prolouge would make the following scenes I had planned pointless. What you are reading now is a less deep version of the last room. Bet you cant wait for the final tho ! ",

    children: [
      {
        text: "Ariane: “Coming back here… it's hard to imagine the life which once resided so listlessly among these halls.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “Yeah, though, I wonder if it's all truly gone.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “I still feel a flicker, the tiniest inkling of soul left in this forsaken place.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane: “Does it make you sad?”",
        choices: [
          { text: "Continue", action: "next" }
          
        ]
      },
      {
        text: "Andrew: “Does what?”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane: “What happened here”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "I paused for a few moments, trying on different thoughts.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
            {
        text: "Andrew: “I don't know if I ever loved them”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “And yet, here you are now.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Andrew: “It's different; this is out of duty.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “And to whom do you owe this duty to?”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Andrew: “I-I suppose myself.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Andrew: “Right, this is for me. I need to let them… go.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "My eyes started to water",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Why? Why was I crying?",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "They were horrible people! They hurt me; they destroyed my work!",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "I hate those bastards! I'm glad… I'm glad they're gone!",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
             {
        text: "Right, Andy, rationalize.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Feeling bad for them now was a waste.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Look at all that's come out of love.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Look at the needless suffering it's brought you.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "My mind began to scrub the sparkling memories, marking Twain those joyous things.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
             {
        text: "BEEP BEEP IMAGINE THE CENTER OF THE SCREEN FADING INTO THE WORDS, 'I love you son' with a color that was used to show his mother and father talking, then a line going through the text. If you wana see that please play the actual game I made for my college passion project!!",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “And yet, you weep.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "She placed her arms around me",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “What a hilarious thing you are.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “Sigh.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
             {
        text: "Andrew: “It's not like I want to cry; it's not like I miss them or any of that!”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “So defensive. jeez.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane turned to look out the window and onto the distant hills.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “Remember when your parents first discovered your art? They tore it to countless little shreds and left its remains strewn about your room.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “Poor you, ran all the way to big sister Ari, crying, shredded beauty in hand.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
             {
        text: "Ariane: “We went up the hill again that day, and you let them go with the wind. They flew across the endless sky, twirling about.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “It must have been like Christmas in the town below.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “Thousands of white scraps, fluttering down from the heavens.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “And onto thee, the sky opened itself, and from thee, it wept.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Andrew: “Are you trying to cheer me up?”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
             {
        text: "Ariane: “Hm, no.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “I just felt bad seeing you cry.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “You’re usually so… stoic.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Andrew: “I didnt want to cry. I don't know why I did.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Andrew: “It was a pathetic thing to do.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane: “I used to cry too. It's natural.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
             {
        text: "Ariane sat down beside me.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “I'm also starting to get a little annoyed.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “A savior can only do so much.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “It's the will of her subjects to make the final leap.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “You picked a bad subject, then.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
             {
        text: "Andrew: “Hehe, perhaps I'm a bad savior.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "BEEP a cut has occured. Please play the full game to figure out what happened!",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "I turned to the window, to the trees and grass lying beyond the glass veil.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "I imagined we looked ridiculous.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Like two toy figures set up in a shop window.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "At that moment, however, I felt truly animated.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
             {
        text: "Wrestless with vigor.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “My, my, perhaps you could be my apostle.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “I have needed a resident artist.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Andrew: “Maybe if you supply the paint.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane: “Honestly, Andrew, I don't know why you act so poor…”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
             {
        text: "Andrew: “ Wait! Wait! Ari!”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ari: “Ari? I haven't heard that name in a while…”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Andrew: “The password, I know it!”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “My father's hometown, my mother's too, Annecy!”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
       {
        text: "Ariane: “Honestly?”",
        choices: [
            {
              text: "Write down the code",
              action: function () {
                pickUpItem("code");
                currentChildIndex++; //I'm not super sure on the whole js aspect of this but I got some understanding by reading thru it.
                updateScene(currentScene);
              }
            },
        ]
      },
      {
        text: "Lets head back!”", //add to inv
        choices: [
          {text: "Go back to the living room", nextScene: "Livingroom" },
          {text: "Go back to the study", nextScene: "Study"},
          {text: "Go back to the bedroom", nextScene: "Bedroom"}
        ]
      }
    ]
  },
  
  solution: {
  title: "The study",
    image: "vault.jpg", 
    children: [
      {
        text: "I sprinted back to the safe.",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “What if…”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “1…”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: ”………14, then 14 again.”",
        choices: [
          { text: "Continue", action: "next" }
          
        ]
      },
      {
        text: "Andrew: ”and… 3”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “Then…”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Ariane: “twenty-five.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
            {
        text: "Ariane: “Y is the twenty-fifth letter in the alphabet.”",
        choices: [
          { text: "Continue", action: "next" }
        ]
      },
      {
        text: "Andrew: “Right.”",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Click, click, click, chaching",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Inside were a gun and some papers.",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "I feverishly scanned them.",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Ari grabbed some too.",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Ari: “Finnace, finnance, god, you'd think this guy was a banker or something.“",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Andrew “Oh my god, this is it!“",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: " Andrew: “Divorce records, Ari, look!“",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Andrew: “June 9th, 1985. He was filing for a divorce!“",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Ari: “So you think she killed him?“",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Andrew: “Maybe, but no investigations mentioned this.“",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Ari:  “How did nobody discover this safe? They could have broken it open if they really wanted to.“",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Andrew: “Perhaps they felt there was no need. I mean, think about it.“",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Andrew: “The case looked like a suicide; there was enough motive, and one of the most powerful families in New York discouraged any progress. Who would possibly investigate further?“",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Ari: “Why wouldn't they want the police to figure out the truth?“",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Andrew: “Because that would create drama between the two families.“",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Andrew: “It all makes sense, oh my god, Ari, this is it!“",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Bang!",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Andrew: “Okay, I know you heard that.“",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Ari's face contorted a little.",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Andrew: “H-“",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "Ari: “Shhhhhh!“",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "AWWW DRATS! It looks like a good ol cliffhanger. Perhaps if you play the full game, youll know what happens and the story behind who these random bums are! Alas, such is only a pipedream. JK! you can play it righttttt NOW! just hmu on any socail media, even tiktok.com! Ik, IK, crazy stuff. Anyways, thanks for being here, cya!",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },
            {
        text: "It's over. Shoo",
        choices: [
          {text: "Continue", action: "next"}
        ]
      },

            {
        text: "I said shoo", //add to inv
        choices: [
          {text: "I'm sorry, I'll go", nextScene: "enter" },
          {text: "I don't wana goooooo!", nextScene: "solution"}
        ]
      }
    ]
  },

}

// --------------------------------------------------
// UPDATE SCNES
// Create a function that updates the scene, inserting the title, text, choices, makes each choice a button
// --------------------------------------------------

const sceneTitle = document.querySelector("#scene-title");
const sceneText = document.querySelector("#scene-text");
const choicesContainer = document.querySelector("#choices-container");
const characterName = document.querySelector("#character-name");
const childText = document.querySelector("#child-text");

let currentChildIndex = 0;

function updateScene(sceneName) {

  currentScene = sceneName;

  const scene = scenes[sceneName];
  const child = scene.children[currentChildIndex];

  sceneTitle.textContent = scene.title;
  sceneText.textContent = scene.text;
  characterName.textContent = scene.character;
  childText.textContent = child.text;

  choicesContainer.innerHTML = "";

  const choices = child.choices.slice();
  if (
    rooms >= 3 && //I had to use google but I somewhat understand this. 
    sceneName !== "MasterBedroom" &&
    !choices.some(function (choice) {
      return choice.nextScene === "MasterBedroom";
    }) &&
    choices.some(function (choice) {
      return choice.nextScene;
    })
  ) {
    choices.push({
      text: "Visit the master bedroom",
      nextScene: "MasterBedroom"
    });
  }

  choices.forEach(function (choice) {
    const button = document.createElement("button");

    button.textContent = choice.text;

    button.addEventListener("click", function () {
      if (choice.action === "next") {

        if (currentChildIndex < scene.children.length - 1) {
          currentChildIndex++;
          updateScene(currentScene);
        }
        //same as above this is a little more confusing but I spent forever trying to get it and I wasnt sure what to do. 

      } else if (choice.nextScene) {

        const destinationScene =
          choice.nextScene === "Study" && inventory.includes("code")
            ? "solution"
            : choice.nextScene;

        currentScene = destinationScene;
        currentChildIndex = 0;
        const nextScene = scenes[destinationScene];
        if (nextScene.action) {
          nextScene.action();
        }
        updateScene(destinationScene);
      } else if (typeof choice.action === "function") {
        choice.action();
      }
    });

    choicesContainer.appendChild(button);
  });
}

let rooms = 0;

// Display current health
const roomsDisplay = document.getElementById("rooms-display");

// Create a function to update health
function updateRooms(amount) {
  rooms += amount;
  roomsDisplay.textContent = rooms;
}

// This refreshes the health display
updateRooms(0);
updateScene(currentScene);

// --------------------------------------------------
// INVENTORY
// Read through the comments below to see what this section does
//
// For now, you are probably leaving this section as is. 
// --------------------------------------------------

// Create a variable for inventory
let inventory = [];

// Display current inventory
const inventoryDisplay = document.querySelector("#inventory-display");
const messageDisplay = document.getElementById("message-display");

// Create a function to update inventory 
function pickUpItem(itemName) {
    // Add itemName to the inventory array
    // Show the updated inventory on the page
  inventory.push(itemName);
  inventoryDisplay.textContent = inventory.join(", ");
}

// --------------------------------------------------
// CONDITIONAL 
// Depending on how you want to implement the conditional logic, you may 
// simply adjust the names below or you may need to expand upon this section
// --------------------------------------------------

// Create a function that checks if the inventory contains one item and if so shows the win condition scene.
function unlockDoor() {
  if (inventory.includes("code")) {
    updateScene("solution");
  } else {
    messageDisplay.textContent = "I dont know the code";
  }
}