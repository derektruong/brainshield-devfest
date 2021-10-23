const express = require("express");

const env = require("../config/env");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(env.CLIENT_ID);

const router = new express.Router();

// POST
router.post("/api/v1/auth/google", async (req, res) => {
	try {
		const {token} = req.body;
		const ticket = await client.verifyIdToken({
			idToken: token,
			audience: env.CLIENT_ID,
		});

		// const {name, email, picture} = ticket.getPayload();
		res.json(ticket.getPayload());
	} catch (error) {
		res.status(500).json({error: error.message});
	}

});

// GET

