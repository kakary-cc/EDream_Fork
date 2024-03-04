import './env.mjs';
import moment from 'moment';
import { readFileSync } from 'fs';
import { v4 } from 'uuid';
import { createClient } from '@supabase/supabase-js';
import { languageProcess } from './language_process.mjs';

// create a supabase client
const supabase = createClient(process.env.SUPABASE_PROJECT, process.env.SUPABASE_API_KEY);

async function main(debugMode = false) {
    if (!process.argv[2]) {
        console.log('No file name specified! Quitting...');
        return;
    }
    let fileData;
    try {
        fileData = readFileSync(process.argv[2]);
    }
    catch (err) {
        console.log(debugMode ? err : '');
        console.log('Error reading file! Quitting...');
        return;
    }
    const result = await languageProcess(fileData, debugMode);
    if (!result) { // error occured when running `languageProcess`
        return;
    }
    const [tags, quiz] = result;
    console.log(debugMode ? tags : '');
    console.log(debugMode ? quiz : '');
    const uuid = v4();
    const status = await supabase
        .from('contents')
        .insert({
            uuid: uuid,
            title: 'learn how to do addition',
            description: 'this is a video teaching you how to do addition',
            size: 1024,
            rating: 50,
            // tags: tags,
            tags: ['dummy'],
            uploaded: moment().utc().format("YYYY-MM-DD")
        });
    console.log(debugMode ? status : '');
    if (status.error) {
        console.log('Error querying database! Quitting...');
        return;
    }
    // TODO: Upload file to supabase storage
    // TODO: Let gpt generate a title and description
    // TODO: Return PDF size
}

if (process.env.DEBUG === '1') {
    console.log('Debug mode is on!');
    main(true);
}
else {
    main();
}