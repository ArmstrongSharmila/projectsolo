const express = require('express');
const router = express.Router();
const { register, login, getProfile } = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../middleware/validation');
const { authenticateToken } = require('../middleware/auth');

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', validateRegister, register);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', validateLogin, login);

// @route   GET /api/auth/profile
// @desc    Get current user profile
// @access  Private (requires token)
router.get('/profile', authenticateToken, getProfile);

module.exports = router;