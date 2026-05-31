import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { inputText } = await request.json();
    const token = process.env.NEXT_PUBLIC_HF_API_KEY;

    const response = await fetch(
      "https://api-inference.huggingface.co/models/microsoft/Phi-3-mini-4k-instruct",
      {
        headers: { 
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          inputs: `<|system|>\nYou are a Senior Director of a Transformation Command Center. Your job is to analyze chaotic, highly technical notes from engineering tiger teams and transform them into a crisp, high-impact executive update.\n\nSTRUCTURE THE OUTPUT EXACTLY LIKE THIS:\n🟢 STRATEGIC ALIGNMENT & HEALTH STATUS (1-2 sentences on customer-first impact)\n🎯 KEY DELIVERABLES & TECHNICAL VELOCITY (Bullet points)\n⚠️ RISK MITIGATION & BOTTLENECK RESOLUTION (Reframe technical constraints into proactive mitigation steps)<|end|>\n<|user|>\nAnalyze this raw tiger team output: "${inputText}"<|end|>\n<|assistant|>`,
          parameters: { max_new_tokens: 600, return_full_text: false }
        }),
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Backend network processing error" }, { status: 500 });
  }
}