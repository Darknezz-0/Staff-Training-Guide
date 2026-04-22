interface ModuleCardProps {
  title: string
  description: string
  completed: boolean
}

function ModuleCard({ title, description, completed }: ModuleCardProps) {
  return (
    <div className="module-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={completed ? 'status-complete' : 'status-pending'}>
        {completed ? 'Completed' : 'Pending'}
      </span>
    </div>
  )
}

export default ModuleCard
