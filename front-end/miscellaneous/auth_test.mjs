import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://ticcscbvmncayhqsodsw.supabase.co',
							'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpY2NzY2J2bW5jYXlocXNvZHN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMzAwODMsImV4cCI6MjAyMjkwNjA4M30.S2_mSheoWqq68YuG9z4mNN-JmeftOudfa7sUDCDpTsQ')

let data = await supabase.auth.signUp({
	email: 'mingxuanz@mail.kakari.cc',
	password: 'helloworld123'
});

console.log(data);


const { data: { user } } = await supabase.auth.getUser();
