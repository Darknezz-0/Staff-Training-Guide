interface ProgressBarProps {
  completed: number
  total: number
}

function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage = (completed / total) * 100

  return (
    <div className="progress-wrapper">
      <div className="progress-text">
        {completed} / {total} Modules Completed
      </div>
      <div className="progress-bar-bg">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
