// ── ◆ ──  Séparateur signature Yash Jewelry
export default function Divider({ light = false, className = '' }) {
  const color = light ? 'bg-gold-light' : 'bg-gold'
  const gemColor = light ? 'text-gold-light' : 'text-gold'
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <span className={`flex-1 max-w-[52px] h-px ${color} opacity-70`} />
      <span className={`text-[7px] ${gemColor}`}>◆</span>
      <span className={`flex-1 max-w-[52px] h-px ${color} opacity-70`} />
    </div>
  )
}
