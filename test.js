const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');
const env = fs.readFileSync('.env', 'utf8').split('\n').reduce((acc, line) => {
  const [key, ...val] = line.split('=');
  if (key && val.length) acc[key.trim()] = val.join('=').trim();
  return acc;
}, {});
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
supabase.auth.signUp({ email: 'test1@rxnxt.com', password: 'password123', options: { data: { clinic_id: '2924646a-8fdf-422e-b14f-d6734193426a', role: 'doctor', full_name: 'Test Doctor' } } })
  .then(res => { console.log(res); process.exit(0); })
  .catch(err => { console.error(err); process.exit(1); });
