export default function Category() {

  const category = [
      '창업', 
      'IT/프로그래밍', 
      '라이프', 
      '경제/금융', 
      '경영', 
      '인문/사회',
      '예술',
      '마케팅',
      '커리어',
      '과학기술',
      '디자인/영상',
      '의료/의학',
      '행사 기획',
      '관광/여행',
      '기타'
  ]


  return (
    <div className="grid grid-cols-2 gap-3 z-20 py-6 px-5 border rounded-md shadow-lg w-[18rem] bg-white text-slate-500">
      {category.map((item, index) => (
        <div key={index}>
          <span className="p-3 hover:font-semibold hover:text-slate-800 cursor-pointer transition-all">{item}</span>
        </div>
      ))}
    </div>
  )
}
