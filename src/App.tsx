export default function TomodachiLifeIdeaGenerator() {
  const ideas = [
    {
      name: 'Ice Cream Truck Hat',
      category: 'Vehicle',
      difficulty: 'Medium',
      colors: ['#FFD34D', '#F75C4C', '#7FD36B', '#7EC8FF'],
      description:
        'A cute mini ice cream truck with a striped awning, wheels, and serving window.',
      steps: [
        'Draw a large rounded rectangle for the truck body.',
        'Add two small dark wheels underneath.',
        'Place a striped awning across the top front.',
        'Add a serving window and tiny menu board.',
        'Finish with soft shading and pastel trim.',
      ],
    },
    {
      name: 'Burger Backpack',
      category: 'Food',
      difficulty: 'Easy',
      colors: ['#F4C542', '#7CCF5A', '#D94841', '#8A5A2B'],
      description:
        'A silly burger bag with bun layers, lettuce frill, and cheese corners.',
      steps: [
        'Start with a rounded bun shape.',
        'Add a darker patty stripe in the middle.',
        'Layer lettuce and cheese sticking out.',
        'Add sesame dots on the top bun.',
        'Use soft highlights to make it look glossy.',
      ],
    },
    {
      name: 'Cloud TV Head',
      category: 'Cute',
      difficulty: 'Medium',
      colors: ['#DFF3FF', '#B6C7FF', '#5E5CE6', '#FFFFFF'],
      description:
        'A fluffy cloud with a tiny TV face screen and cheerful pastel details.',
      steps: [
        'Make a puffy cloud base using rounded bumps.',
        'Place a small screen in the center.',
        'Add tiny antennae on top.',
        'Decorate with sparkles or blush dots.',
        'Finish with soft blue shadows.',
      ],
    },
    {
      name: 'Robot Juice Box',
      category: 'Funny',
      difficulty: 'Easy',
      colors: ['#FF8BC2', '#FFE680', '#6ED3CF', '#7B6DFF'],
      description:
        'A little juice carton mixed with a toy robot, complete with straw antenna.',
      steps: [
        'Draw a box shape for the juice carton body.',
        'Add two square eyes and a smiling mouth.',
        'Put a bent straw on top like an antenna.',
        'Add tiny robot arms and legs.',
        'Use bright pastel blocks for the final look.',
      ],
    },
  ]

  const pastelBg =
    'bg-[linear-gradient(180deg,#fff3bf_0%,#ffe8a3_35%,#ffd86b_100%)]'
  const panel =
    'bg-[#FFF7DB] border-4 border-[#F5C84C] rounded-[2rem] shadow-[0_8px_0_0_rgba(214,159,18,0.45)]'
  const button =
    'rounded-2xl px-5 py-3 font-bold text-[#593B00] border-4 border-[#F5C84C] bg-white shadow-[0_5px_0_0_rgba(214,159,18,0.35)] hover:translate-y-[1px] transition'

  return (
    <div className={`min-h-screen ${pastelBg} text-[#3F2C00]`}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <header className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 items-center">
          <div className={`${panel} p-8 relative overflow-hidden`}>
            <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-white/30" />
            <div className="absolute right-16 bottom-4 w-24 h-24 rounded-full bg-[#FFD34D]/40" />
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 border-4 border-[#F5C84C] text-sm font-bold">
              <span>⭐</span>
              Tomodachi Life Living the Dream Inspired
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Drawing Editor
              <span className="block text-[#F75C4C]">Idea Generator</span>
            </h1>
            <p className="mt-4 text-lg max-w-2xl leading-relaxed">
              Browse cute, silly, and easy-to-copy object ideas with pastel
              colors, playful cards, and simple step-by-step drawing guides.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className={button}>Random Idea</button>
              <button className={button}>Easy Only</button>
              <button className={button}>Cute Theme</button>
            </div>
          </div>

          <div className={`${panel} p-6`}>
            <div className="aspect-[4/3] rounded-[1.75rem] border-4 border-[#F5C84C] bg-[#2B2B2B] relative overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-16 bg-[#555]" />
              <div className="absolute left-10 bottom-12 w-56 h-24 bg-[#FFD34D] rounded-t-2xl border-4 border-[#E6A91A]" />
              <div className="absolute left-24 bottom-28 w-24 h-16 bg-[#FFD34D] border-4 border-[#E6A91A] rounded-t-xl" />
              <div className="absolute left-14 bottom-14 w-12 h-12 rounded-full bg-[#1F1B18] border-4 border-[#6B5E54]" />
              <div className="absolute left-48 bottom-14 w-12 h-12 rounded-full bg-[#1F1B18] border-4 border-[#6B5E54]" />
              <div className="absolute left-28 bottom-22 w-20 h-10 bg-[#E8EEF9] border-4 border-[#B0B9C8]" />
              <div className="absolute left-36 bottom-22 w-8 h-10 bg-[#C6D3E2] border-4 border-[#B0B9C8]" />
              <div className="absolute left-10 bottom-20 w-14 h-8 bg-white border-y-4 border-[#F5C84C] flex">
                <div className="flex-1 bg-[#F75C4C]" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-[#F75C4C]" />
              </div>
              <div className="absolute right-4 top-4 rounded-2xl px-3 py-2 bg-white border-4 border-[#F5C84C] text-sm font-bold">
                Preview
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Featured example: a soft pastel vehicle design guide styled like a
              cheerful in-game object.
            </p>
          </div>
        </header>

        <section className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {ideas.map((idea) => (
            <article key={idea.name} className={`${panel} p-5 flex flex-col`}>
              <div className="rounded-[1.5rem] border-4 border-[#F5C84C] bg-white p-4 min-h-[180px] relative overflow-hidden">
                <div className="absolute top-3 right-3 text-xs font-black bg-[#FFF2C2] border-2 border-[#F5C84C] rounded-full px-3 py-1">
                  {idea.difficulty}
                </div>
                <div className="flex gap-2 mb-4">
                  {idea.colors.map((color) => (
                    <span
                      key={color}
                      className="w-7 h-7 rounded-full border-2 border-white shadow"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-[#FFF8E8] border-2 border-dashed border-[#F5C84C] p-4">
                  <div className="text-xs uppercase tracking-wide font-black text-[#8C6500]">
                    {idea.category}
                  </div>
                  <h2 className="text-2xl font-black mt-1 leading-tight">
                    {idea.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed">
                    {idea.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-[1.5rem] bg-white border-4 border-[#F5C84C] p-4">
                <h3 className="font-black text-lg">How to draw it</h3>
                <ol className="mt-3 space-y-2 text-sm leading-relaxed list-decimal list-inside">
                  {idea.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="mt-4 flex gap-3">
                <button className={`${button} flex-1 text-sm px-3 py-2`}>
                  View Guide
                </button>
                <button className={`${button} flex-1 text-sm px-3 py-2`}>
                  Save Idea
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
          <div className={`${panel} p-6`}>
            <h2 className="text-3xl font-black">Quick generator</h2>
            <p className="mt-2 text-base leading-relaxed">
              This starter version focuses on the first option: a cute object
              idea library with simple guides, themed buttons, and a bright
              Tomodachi-inspired look.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {['Food', 'Vehicle', 'Robot', 'Fantasy', 'Cute', 'Funny'].map(
                (tag) => (
                  <button key={tag} className={button}>
                    {tag}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className={`${panel} p-6`}>
            <h2 className="text-3xl font-black">Future upgrade ideas</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {[
                'Step-by-step screenshots',
                'Interactive shape layers',
                'Community upload page',
                'Difficulty sorting',
                'Pastel color picker',
                'Daily random object',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border-4 border-[#F5C84C] bg-white p-4 font-bold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
