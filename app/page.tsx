export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-slate-900 p-8">
      <header className="text-center max-w-2xl mb-12">
        <h1 className="text-5xl font-black tracking-tight mb-4 text-blue-600">
          GSTACK Padma
        </h1>
        <p className="text-xl text-slate-600 font-medium">
          Welcome to my innovation stack. Bridging the gap between Program Management and modern AI engineering.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Card 1 */}
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold mb-2 text-slate-800">📊 PMO Frameworks</h2>
          <p className="text-sm text-slate-600">
            Enterprise release planning and portfolio optimization tools, built by an expert.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold mb-2 text-slate-800">🤖 AI Experiments</h2>
          <p className="text-sm text-slate-600">
            Connecting modern LLMs directly into project management tracking. Coming soon.
          </p>
        </div>
      </main>
    </div>
  );
}