import express from 'express'

const app = express()
const port = 3000

const db = {
    comments: [
        {
            id: 1,
            comment: 'Классный фильм!'
        },
        {
            id: 2,
            comment: 'Хорошо провел время!'
        },
        {
            id: 3,
            comment: 'Все понравилось!'
        },
    ]
}

app.get('/filmInfo', (req, res) => {
    res.json(db.comments)
})