import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import { useNavigate } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'

function GoalItem({ goal }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  var EditProduct = (goal) => {
    navigate(`Editgoal/${goal}`)
  }
  return (
    <div className='goal'>
      <div className='btn-cont'>
        <div className='time'>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
        <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        <FaTrash color={'lightgrey'} />
        <span class="tooltip">Delete</span>
      </button>
      </div>

      <h2 className='text'>{goal.text}</h2>
      
      
      {/* <button onClick={() => { EditProduct(goal._id) }}>Update</button> */}
    </div>
  )
}

export default GoalItem
