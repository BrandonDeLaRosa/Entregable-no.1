import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import QuotationMarks from './components/QuotationMarks'
import quotes from './quotes.json'

function App (){
  
  // ================ Random Cards ===========================

  const newIndex = Math.floor(Math.random() * quotes.length)
  const [index, setIndex] = useState(newIndex)

  const randomRefresh = Math.floor(Math.random() * quotes.length)
  const cardChange = () => {
    setIndex(randomRefresh)
  }
  
  // ====================Random Colors ========================
  
  const colors = ['#845EC2', '#D65DB1' , '#FF6F91' , '#FF9671' , '#FFC75F', '#F9F871']
  // const colorChange = () =>{
  // }
  const indexColors = Math.floor(Math.random()* colors.length)
  
  document.body.style = `background: ${colors[indexColors]}`

  return (
    <div className='cardContent'>
      <QuotationMarks indexColors={indexColors}/>
      <Card 
      text1={quotes[index].quote} 
      text2={quotes[index].author} 
      indexColors={indexColors}
      />
      <Button cardChange={cardChange} indexColors={indexColors} />
    </div>
  )
}

export default App
