// UpdateGoalForm.jsx

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateGoal } from '../features/goals/goalSlice';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateGoalForm() {
    const dispatch = useDispatch();
    const params = useParams()
    const navigate = useNavigate()

    const { goals } = useSelector((state) => state.goals);
    const [text, setText] = useState('');
    console.log("text:" + text)
    console.log(params.id)
    const goalId = params.id;

    useEffect(() => {
        const goalToUpdate = goals.find((goal) => goal._id === params.id);
        console.log(goalToUpdate)

        console.log(goalId)
        if (goalToUpdate) {
            setText(goalToUpdate.text);
        }
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(updateGoal(goalId, { text }))
            navigate('/')
        } catch (error) {

        }
        // dispatch(updateGoal({ id, goalData: { text } }));

    };
    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='text'>Update Note</label>
                    <textarea
                        type='text'
                        name='text'
                        id='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <button className='btn btn-block' type='submit'>
                        Update Note
                    </button>
                </div>

            </form>
        </section>
    );
}

export default UpdateGoalForm;
