
import TestHome from './pages/TestHome'
// ...
<Route path="/" element={<TestHome />} />
export default function Home() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-green-500">HOME PAGE</h2>
    </div>
  )
}