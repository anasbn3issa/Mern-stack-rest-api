const asyncHandler = require('express-async-handler'); // to not use try catch in async functions

/**
 * 
 * @desc get goals
 * @route GET /api/goals
 * @access private
 */
const getGoals = asyncHandler (async (req, res) => { 
    res.status(200).json({ message : 'Goals' });
});

/**
 * 
 * @desc set goals
 * @route POST /api/goals
 * @access private
 */
 const setGoal = asyncHandler(async (req, res) => { 
    if(!req.body.goal) {
        res.status(400);
        throw new Error('Goal is required');
    }
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
    res.status(200).json(
        { 
            message: 'Goal updated'
        }
        );
});

/**
 * 
 * @desc delete goals
 * @route DELETE /api/goals
 * @access private
 */
 const deleteGoal = asyncHandler(async (req, res) => { 
    res.status(200).json(
        { 
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