import axios from 'axios'

const API_URL = '/api/goals/'

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, goalData, config)

  return response.data
}

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + goalId, config)

  return response.data
}

// Update user goal
const updateGoal = async (goalId = '655a31957f1405ecfe60cee3', goalData, token) => {
  if (!goalId) {
    console.error('Invalid goalId:', goalId);
    return; // or throw an error, depending on your error handling strategy
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(goalId)
  const response = await axios.put(API_URL + goalId, goalData, config);
  console.log(response.data);
  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
  updateGoal
}

export default goalService
