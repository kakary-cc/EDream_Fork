import OpenAI from "openai";
import pdf from 'pdf-parse/lib/pdf-parse.js';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

function completionHandler(completion, taskName, debugMode = false) {
    if (completion.choices[0].finish_reason !== 'stop') {
        console.log(`Abnormal termination of LLM caused by ${completion.choices[0].finish_reason}
            when ${taskName}! Quitting...`);
        return;
    }
    console.log(debugMode ? completion.choices[0].message.content : '');
    try {
        return JSON.parse(completion.choices[0].message.content);
    }
    catch (err) {
        console.log(debugMode ? err : '');
        console.log('LLM returned a bad JSON! Quitting...');
        return;
    }
}

async function languageProcess(fileData, debugMode = false) {
    let pdfData;
    await pdf(fileData)
        .then((data) => {
            pdfData = data;
        })
        .catch((err) => {
            console.log(debugMode ? err : '');
            console.log('Error parsing file! Quitting...');
            return;
        });
    const promptTag = [
        {"role": "system", "content": `
            You are designed to output JSON.
            You will be provided a list of popular topics people are interested in.
            Remember those topics and find the ones that are related to the PDF file you will be provided.
        `},
        {"role": "user", "content": `
            List of topics:\n"""\n
                "programming_languages",
                "data_science_and_analytics",
                "web_development",
                "graphic_design",
                "digital_marketing",
                "photography_and_videography",
                "language_learning",
                "music_production",
                "cooking_and_baking",
                "fitness_and_nutrition",
                "personal_finance_and_investing",
                "entrepreneurship_and_business_skills",
                "writing_and_blogging",
                "meditation_and_mindfulness",
                "diy_crafts_and_projects",
                "gardening_and_plant_care",
                "fashion_design_and_styling",
                "home_improvement_and_diy_repairs",
                "yoga_and_pilates",
                "mobile_app_development",
                "artificial_intelligence_and_machine_learning",
                "cybersecurity",
                "game_development",
                "3d_modeling_and_animation",
                "public_speaking_and_communication_skills",
                "psychology_and_mental_health",
                "travel_planning_and_tips",
                "parenting_and_childcare",
                "career_development_and_job_searching_strategies",
                "drawing_and_sketching"
            \n"""
        `},
        {"role": "user", "content": `
            PDF File:\n"""\n${pdfData.text}\n"""
        `}
    ];
    const promptQuiz = [
        {"role": "system", "content": `
            You are designed to output JSON.
            You will be provided with a PDF file and asked to output a quiz based on it.
            The quiz should contain 5 questions, each with 4 possible answers.
        `},
        {"role": "user", "content": `
            PDF File:\n"""\n${pdfData.text}\n"""
        `}
    ];
    let completion;
    completion = await openai.chat.completions.create({
        messages: promptTag,
        model: "gpt-3.5-turbo"
    });
    let tags = completionHandler(completion, 'categorizing', debugMode);
    if (!tags) {
        return;
    }
    tags = tags.related_topics;
    if (!tags) {
        console.log('LLM returned unexpected category values! Quitting...');
        return;
    }
    // console.log(debugMode ? tags : '');
    completion = await openai.chat.completions.create({
        messages: promptQuiz,
        model: "gpt-3.5-turbo"
    });
    let quiz = completionHandler(completion, 'generating quiz', debugMode);
    if (!quiz) {
        return;
    }
    quiz = quiz.quiz;
    if (!quiz) {
        console.log('LLM returned unexpected quiz values! Quitting...');
        return;
    }
    // console.log(debugMode ? quiz : '');
    return [tags, quiz];
}

export {
    languageProcess
};