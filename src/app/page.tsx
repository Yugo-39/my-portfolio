

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">山田太郎のポートフォリオ</h1>
      <p className="mt-4">フロントエンドエンジニアを目指して日々学習中！</p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">主な制作物</h2>
        <ul className="mt-4 space-y-4">
          <li className="border p-4 rounded shadow">
            <h3 className="text-xl font-bold">くじ引きアプリ</h3>
            <p>ReactとTypeScriptで作ったアプリです</p>
            <a href="https://example.com" className="text-blue-500 underline" target="_blank">見る</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
