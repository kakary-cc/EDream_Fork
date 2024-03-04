import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient('https://ticcscbvmncayhqsodsw.supabase.co',
							'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpY2NzY2J2bW5jYXlocXNvZHN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMzAwODMsImV4cCI6MjAyMjkwNjA4M30.S2_mSheoWqq68YuG9z4mNN-JmeftOudfa7sUDCDpTsQ')

// let error = await supabase.from('contents').insert({title: 'learn how to do addition',
// 												description: 'this is a video teaching you how to do addition',
// 												url: 'https://www.example.com',
// 												size: 1024,
// 												rating: 50,
// 												tags: ['math', 'arithmetic'],
// 												uploaded: '2024-01-01'});
// console.log(error)
//
// console.log(error)

let error = await supabase.from('users').insert({
    email: 'user@example.com',
    nickname: 'foo',
    password: '4457325e0cd32b71d90feacee298a049',
    joined: '2024-01-01',
    interests: ['spanish', 'art'],
})

console.log(error);

let data = await supabase.from('users').select();

console.log(data);
