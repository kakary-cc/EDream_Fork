// For testing pruposes only
// Will be deleted in the future

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import './config.mjs';

// Create a supabase client
const supabase = createClient(process.env.SUPABASE_PROJECT, process.env.SUPABASE_API_KEY);

const demoPDF = readFileSync(process.argv[2]);

// const avatarFile = event.target.files[0];
const { data, error } = await supabase
  .storage
  .from('content') // name of the bucket
  .upload('public/demo.pdf', demoPDF, {
    cacheControl: '3600',
    upsert: false
  });

console.log(data, error);

export {

}

import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://ticcscbvmncayhqsodsw.supabase.co',
							'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpY2NzY2J2bW5jYXlocXNvZHN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMzAwODMsImV4cCI6MjAyMjkwNjA4M30.S2_mSheoWqq68YuG9z4mNN-JmeftOudfa7sUDCDpTsQ')

let data = await supabase.from('users').select();

let data = await supabase.auth.signUp({
	email: 'mingxuanz@mail.kakari.cc',
	password: 'helloworld123'
});

console.log(data);


const { data: { user } } = await supabase.auth.getUser();
