import OpenAI from "openai";
import { read, readFile } from "fs";

// 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
// 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

const openai = new OpenAI({apiKey: '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'});

const text = "The quick brown fox jumps over the lazy dog.";


async function main(data) {
  const completion = await openai.chat.completions.create({
    messages: [
        // {"role": "system", "content": "You are a helpful assistant."},
        // {"role": "user", "content": "Who won the world series in 2020?"},
        // {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        // {"role": "user", "content": "Where was it played?"},
        // {"role": "user", "content": 'Translate the following English text to French: "{text}"'}
        // {"role": "user", "content": `: "${text}"`},
        {"role": "user", "content": `: "You have the following interest tags:"`},
        {"role": "user", "content": "programming_languages"},
        {"role": "user", "content": "data_science_and_analytics"},
        {"role": "user", "content": "web_development"},
        {"role": "user", "content": "graphic_design"},
        {"role": "user", "content": "digital_marketing"},
        {"role": "user", "content": "photography_and_videography"},
        {"role": "user", "content": "language_learning"},
        {"role": "user", "content": "music_production"},
        {"role": "user", "content": "cooking_and_baking"},
        {"role": "user", "content": "fitness_and_nutrition"},
        {"role": "user", "content": "personal_finance_and_investing"},
        {"role": "user", "content": "entrepreneurship_and_business_skills"},
        {"role": "user", "content": "writing_and_blogging"},
        {"role": "user", "content": "meditation_and_mindfulness"},
        {"role": "user", "content": "diy_crafts_and_projects"},
        {"role": "user", "content": "gardening_and_plant_care"},
        {"role": "user", "content": "fashion_design_and_styling"},
        {"role": "user", "content": "home_improvement_and_diy_repairs"},
        {"role": "user", "content": "yoga_and_pilates"},
        {"role": "user", "content": "mobile_app_development"},
        {"role": "user", "content": "artificial_intelligence_and_machine_learning"},
        {"role": "user", "content": "cybersecurity"},
        {"role": "user", "content": "game_development"},
        {"role": "user", "content": "3d_modeling_and_animation"},
        {"role": "user", "content": "public_speaking_and_communication_skills"},
        {"role": "user", "content": "psychology_and_mental_health"},
        {"role": "user", "content": "travel_planning_and_tips"},
        {"role": "user", "content": "parenting_and_childcare"},
        {"role": "user", "content": "career_development_and_job_searching_strategies"},
        {"role": "user", "content": "drawing_and_sketching"},
        {"role": "user", "content": `: "Parse the following personal statement and shows top 5 related interest tags:"`},
        {"role": "user", "content": `: "I am interested in sports, specifically I love Tennis and F1.  My favorite Tennis players are Medvedev and Federer.  I follow the driving careers of Carlos Sainz and Checo Perez closely. 

           I also am fascinated by art, largely the surrealist movement and the futurists.  I adore the works of Kay Sage and Yves Tanguey.  I also love Boccioni and Severini.  
       
           History is a subject I love in school.  I enjoy learning about computer science history and the Russian revolution.  Ada Lovelace and Linus Torvalds have incredible stories.  I am intrigued by the downfall of tsar Nicholas the second and by Rasputins influence on the romanovs."`},
        {"role": "user", "content": `: "Parse the following personal statement and shows top 5 related interest tags:"`},
        {"role": "user", "content": `: ${data}`},
        {"role": "user", "content": `: based on the article above, generate a little quiz`}
      ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

readFile('./wiki.txt', 'utf8', (err, data) => {
  // console.log(data);
  main(data);
});

// readFile('./tags.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   data = JSON.parse(data);
//   data = data.tags.reduce((acc, cur) => {
//     acc.concat(cur);
//   }, "");
//   console.log(data);
//   // main(data);
// });