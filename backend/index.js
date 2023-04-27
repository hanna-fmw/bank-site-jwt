import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
const saltRound = 10

const app = express()
const PORT = 5000
const secret = 'super-secret-jwt-key'

app.use(express.json())
app.use(
	cors({
		origin: ['http://localhost:5173'],
		methods: ['POST', 'GET'],
		credentials: true,
	})
)
app.use(cookieParser())

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'signup',
})

db.connect((err) => {
	if (err) {
		console.log('Database connection failed')
	}
	console.log('Database connection established')
})

function generateJWT(userId) {
	return jwt.sign(userId, secret)
}

function authenticateJWT(req, res, next) {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]
	console.log('token in auth', token)

	if (token === null) return res.sendStatus(401)

	jwt.verify(token, secret, (err, userId) => {
		console.log(err)
		if (err) return res.sendStatus(401)
		req.userId = userId
		next()
	})
}

app.get('/balance', authenticateJWT, (req, res) => {
	const userId = req.userId
	console.log('userId: ', req.userId)

	db.query('SELECT * FROM accounts WHERE user_id = ?', [userId], (err, result) => {
		if (err) {
			console.log('Error executing SELECT query', err)
			res.sendStatus(500)
			return
		}
		console.log(result)
		const balance = result[0].balance
		res.json({ balance })
	})
})

app.post('/register', (req, res) => {
	bcrypt.hash(req.body.password, saltRound, (err, hash) => {
		if (err) res.send({ Error: 'Failed to hash password' })

		const name = req.body.name
		const email = req.body.email
		const balance = req.body.balance
		const password = hash

		db.query('INSERT INTO login (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err, result) => {
			if (err) {
				res.send({ Error: 'Failed to insert data' })
			} else {
				const userId = result.insertId

				db.query('INSERT INTO accounts (user_id, balance) VALUES (?, ?)', [userId, balance], (err, result) => {
					if (err) {
						res.sendStatus(500)
					} else {
						res.json({ Status: 'Success' })
					}
				})
			}
		})
	})
})

app.post('/login', (req, res) => {
	const email = req.body.email
	const password = req.body.password

	db.query('SELECT * FROM login WHERE email = ?;', [email], (err, data) => {
		if (err) {
			res.send({ Error: 'Login error on server' })
		}

		if (data.length > 0) {
			console.log(data)

			bcrypt.compare(password, data[0].password, (error, isMatch) => {
				if (error) {
					res.send({ Error: 'Password compare error' })
				}
				if (isMatch) {
					const token = generateJWT(data[0].id)
					console.log('token', token)
					res.json({ token })
				} else {
					res.send({ Error: 'Password not matched' })
				}
			})
		} else {
			res.send({ Error: 'Email not found' })
		}
	})
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
