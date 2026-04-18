// src/app/page.tsx
import { supabase } from '@/lib/supabase'

export default async function Home() {
  const { data, error } = await supabase.from('services').select('*')

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Avedan Karo</h1>
      {error && <p className="text-red-500">Error: {error.message}</p>}
      {!error && <p className="text-green-500">✅ Supabase connected successfully!</p>}
    </main>
  )
}