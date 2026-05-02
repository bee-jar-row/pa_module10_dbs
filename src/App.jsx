import { useState, useEffect } from "react";

const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/seed/1/500/300",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/seed/2/500/300",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/seed/3/500/300",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/seed/4/500/300",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/seed/5/500/300",
    },
  ],
};

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-zinc-900 border-b border-zinc-700 sticky top-0 z-50">
      <span className="text-white font-bold text-lg tracking-tight">
        Your Name
      </span>
      <div className="flex gap-6">
        {["Home", "Profile", "Contact"].map((menu) => (
          <a
            key={menu}
            href="#"
            className="text-zinc-400 hover:text-white text-sm transition-colors duration-200"
          >
            {menu}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Card({ title, body, image, id }) {
  return (
    <div className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 hover:border-zinc-500 transition-all duration-200 flex flex-col">
      <img
        src={image}
        alt={`post-${id}`}
        className="w-full h-44 object-cover"
      />
      <div className="p-4 flex flex-col gap-2 flex-1">
        <span className="text-xs text-zinc-500 font-mono">#{id}</span>
        <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 capitalize">
          {title}
        </h3>
        <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3 flex-1">
          {body.replace(/\\n/g, " ")}
        </p>
      </div>
    </div>
  );
}

function CardGrid() {
  return (
    <section className="px-8 py-10">
      <h2 className="text-white text-xl font-bold mb-6">Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {response.results.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`${count} is divisible by 10`);
    }
  }, [count]);

  return (
    <section className="px-8 py-10 border-t border-zinc-700">
      <h2 className="text-white text-xl font-bold mb-6">Counter Demo</h2>
      <div className="flex flex-col items-center gap-4 w-fit">
        <span className="text-5xl font-mono text-white">{count}</span>
        <div className="flex gap-3">
          <button
            onClick={() => setCount((c) => c - 1)}
            className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg font-mono text-sm transition-colors"
          >
            −
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg text-sm transition-colors"
          >
            Reset
          </button>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg font-mono text-sm transition-colors"
          >
            +
          </button>
        </div>
        <p className="text-zinc-500 text-xs font-mono">
          alert fires when count % 10 === 0
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main>
        <CardGrid />
        <Counter />
      </main>
    </div>
  );
}