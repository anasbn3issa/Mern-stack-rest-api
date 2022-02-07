const asyncHandler = require('express-async-handler'); // to not use try catch in async functions

const Goal = require('../models/goalModel');
/**
 * 
 * @desc get goals
 * @route GET /api/goals
 * @access private
 */
const getGoals = asyncHandler (async (req, res) => { 
    const goals = await Goal.find();
    res.status(200).json(goals);
});

/**
 * 
 * @desc set goals
 * @route POST /api/goals
 * @access private
 */
 const setGoal = asyncHandler(async (req, res) => { 
    if(!req.body.text) {
        res.status(400);
        throw new Error('Goal is required');
    }

    const goal = await Goal.create( {
        text : req.body.text
    });
    res.status(200).json(
        { 
            message: 'Goal created'
        }
        );
});


/**
 * 
 * @desc update goals
 * @route PUT /api/goals
 * @access private
 */
 const updateGoal = asyncHandler(async (req, res) => { 
    const goal = await Goal.findById(req.params.id);
    if(!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(
        updatedGoal
        );
});

/**
 * 
 * @desc delete goals
 * @route DELETE /api/goals
 * @access private
 */
 const deleteGoal = asyncHandler(async (req, res) => { 
    const goal = await Goal.findById(req.params.id);
    if(!goal) { 
        res.status(400);
        throw new Error('Goal not found');
    }
    //const deletedGoal = await Goal.findByIdAndDelete(req.params.id); 
    await Goal.remove();
    res.status(200).json(
        { 
            id : req.params.id,
            message: 'Goal deleted'
        }
        );
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
};