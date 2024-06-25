import express, { json } from 'express';
import cors from 'cors';
import session from 'express-session';

import bodyParser from 'body-parser';
import { Sequelize, Model, DataTypes, Op } from 'sequelize';

const app = express();
const port = 3003;

const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    session({
        secret: 'AQsdEd',
        resave: false,
        saveUninitialized: true,
    }),
);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/login', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    console.log(req.query, req.params);
    console.log(username, password);

    req.session.user_id = 'user';

    res.json([{ user_id: 'user', password: '1234' }]);
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        console.log(err);
    });

    res.json({ code: '200', data: '로그 아웃되었습니다.' });
});

app.get('/mypage', (req, res) => {
    const username = req.session.user_id;

    if (username == undefined) {
        res.json({ code: '404', data: '' });
    } else {
        res.json({ code: '200', data: '마이페이지 입니다.' });
        console.log(username);
    }
});

// DataBase

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
});

class Memo extends Model {}
Memo.init(
    {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
    },
    { sequelize, modelName: 'memo' },
);

sequelize.sync();
// CREATE TABLE IF NOT EXISTS `memos` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `title` VARCHAR(255), `content` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

app.get('/memos', async (req, res) => {
    const keyword = req.query.keyword;
    let search = {};
    if (keyword != undefined) {
        search = { title: { [Op.like]: `%${keyword}%` } };
    }
    const memos = await Memo.findAll({ where: search });
    res.json(memos);
});

app.post('/memos', async (req, res) => {
    const memos = await Memo.create(req.body);
    res.json(memos);
});

app.get('/memos/:id', async (req, res) => {
    const memo = await Memo.findByPk(req.params.id);
    res.json(memo);
});

app.put('/memos/:id', async (req, res) => {
    const memo = await Memo.findByPk(req.params.id);
    if (memo) {
        await memo.update(req.body);
        res.json(memo);
    } else {
        res.status(404).json({ message: 'Memo not found' });
    }
});

app.delete('/memos/:id', async (req, res) => {
    const memo = await Memo.findByPk(req.params.id);
    if (memo) {
        await memo.destroy();
        res.json({ message: 'Memo deleted' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
