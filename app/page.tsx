'use client';

import { useState } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [aiResult, setAiResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    setAiResult('');

    const token = process.env.NEXT_PUBLIC_HF_API_KEY;

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/microsoft/Phi-3-mini-4k-instruct",
        {
          headers: { 
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            inputs: `<|system|>\nYou are a Senior Director of a Transformation Command Center. Your job is to analyze chaotic, highly technical notes from engineering tiger teams and transform them into a crisp, high-impact executive update regarding transformation velocity, risk mitigation, and strategic alignment.\n\nSTRUCTURE THE OUTPUT EXACTLY LIKE THIS:\n🟢 STRATEGIC ALIGNMENT & HEALTH STATUS (1-2 sentences on customer-first impact)\n🎯 KEY DELIVERABLES & TECHNICAL VELOCITY (Bullet points broken down into actionable accomplishments)\n⚠️ RISK MITIGATION & BOTTLENECK RESOLUTION (Reframe technical constraints into proactive mitigation steps)<|end|>\n<|user|>\nAnalyze this raw tiger team output and format it for executive leadership: "${inputText}"<|end|>\n<|assistant|>`,
            parameters: { max_new_tokens: 600, return_full_text: false }
          }),
        }
      );

      const data = await response.json();
      
      if (data && data[0] && data[0].generated_text) {
        setAiResult(data[0].generated_text.trim());
      } else {
        setAiResult("Inference complete. Please refine raw engineering notes input to generate output.");
      }
    } catch (error) {
      console.error(error);
      setAiResult('⚠️ System Architecture Error: Ensure your Hugging Face Token is successfully mapped in .env.local.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-slate-100 p-8">
      <header className="text-center max-w-3xl mb-12">
        <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 bg-cyan-950 border border-cyan-800 rounded-full mb-4 uppercase">
          GSTACK Padma // Innovation Engine
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
          Transformation Command Center
        </h1>
        <p className="text-lg text-slate-400 max-w-xl mx-auto">
          Orchestrating cross-functional tiger teams, technical plan translations, and AI-accelerated delivery tracking.
        </p>
      </header>

      <main className="w-full max-w-3xl space-y-6">
        {/* Core Input Console */}
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
          <h2 className="text-xl font-bold mb-2 text-slate-200 flex items-center gap-2">
            <span>🤖</span> Tiger Team Technical Output Capture
          </h2>
          <p className="text-xs text-slate-400 mb-4 leading-relaxed">
            Input raw engineering data, pipeline bottlenecks, architectural trade-offs, or fragmented milestone updates below.
          </p>
          
          <textarea
            className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none text-sm mb-4 text-slate-300 font-mono"
            rows={5}
            placeholder="[Paste raw engineering stream here] e.g., Network virtualization scripts failing regression testing in staging environment. 5G core integration delayed by 48 hours. Team shifting to manual validation of data layers to keep the customer billing interface rollout on track for Friday."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <button
            onClick={handleGenerate}
            disabled={isLoading || !inputText}
            className="w-full py-3.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold rounded-xl transition disabled:bg-slate-800 disabled:text-slate-600 font-sans uppercase tracking-wider text-xs"
          >
            {isLoading ? 'Orchestrating AI Inference...' : 'Synthesize Executive Command Update ⚡'}
          </button>
        </div>

        {/* Real-time Executive Insight Generation */}
        {aiResult && (
          <div className="p-6 bg-slate-900 rounded-2xl border border-cyan-900 shadow-lg animate-fade-in">
            <h3 className="font-bold text-cyan-400 text-xs uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">
              📋 Synthesized Executive Insight (Command Center Ready)
            </h3>
            <p className="text-slate-300 text-sm性能 whitespace-pre-line leading-relaxed font-sans">{aiResult}</p>
          </div>
        )}
      </main>
    </div>
  );
}