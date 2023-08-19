const posts = [
  { id: 1, title: "첫 번째 게시글", content: "첫 번째 게시글 내용입니다." },
  { id: 2, title: "두 번째 게시글", content: "두 번째 게시글 내용입니다." },
  { id: 3, title: "세 번째 게시글", content: "세 번째 게시글 내용입니다." }
];
// dsdfsdf
export default function Board() {
  return (
    <div className="container mx-auto max-w-4xl mt-12 h-[1000px]">
      <h1 className="text-2xl font-bold">게시판</h1>
      {posts.map((post) => (
        <div key={post.id} className="mt-8 ">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}
