interface QuizCardProps {
  question: string
  options: string[]
}

function QuizCard({ question, options }: QuizCardProps) {
  return (
    <div className="quiz-card">
      <h3>{question}</h3>
      <div className="quiz-options">
        {options.map((option) => (
          <button key={option} className="quiz-option">
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuizCard
