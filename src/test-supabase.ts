import { supabase } from './lib/supabaseClient';

async function testSupabaseConnection() {
  try {
    // Try to get the current user session
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('❌ Supabase connection error:', error.message);
      return;
    }
    
    // Try to query the page_content table
    const { data: contentData, error: contentError } = await supabase
      .from('page_content')
      .select('*')
      .limit(1);
      
    if (contentError) {
      console.error('❌ Database query error:', contentError.message);
      return;
    }
    
    console.log('✅ Supabase connection successful!');
    console.log('Database query result:', contentData);
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

// Run the test
testSupabaseConnection();
 