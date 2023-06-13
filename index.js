const dotenv = require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const {notFound,errorHandler} = require('./middleware/errorHandler')

// ORM
const sequelize = require('./dbConnection')

// 模型定义
const User = require('./models/User')
const Article = require('./models/Article')
const Tag = require('./models/Tag')
const Comment = require('./models/Comments')

const player=require('./models/player')
const weapons=require('./models/Weapons')
const images=require('./models/images')


// 路由设置
const userRoute = require('./routes/users')
const articleRoute = require('./routes/articles')
const commentRoute = require('./routes/comments')
const tagRoute = require('./routes/tags')
const profileRoute = require('./routes/profile')
const favouriteRoute = require('./routes/favourites')

const weaponRoute=require('./routes/weapons')
const playerRoute=require('./routes/players')

const app = express()

//CORS
app.use(cors({credentials: true, origin: true})) 



//RELATIONS: 模型间关系定义
//1 to many relation between user and article
User.hasMany(Article,{
    onDelete: 'CASCADE'
})

User.hasMany(player,{
    onDelete: 'CASCADE'
})//一个账户可以有多个角色，当账户删除时，所创建角色也会删除



Article.belongsTo(User)
player.belongsTo(User)

//many to many relation between article and taglist
Article.belongsToMany(Tag,{through: 'TagList',uniqueKey:false,timestamps:false})
Tag.belongsToMany(Article,{through: 'TagList',uniqueKey:false,timestamps:false})

//One to many relation between Article and Comments
Article.hasMany(Comment,{onDelete: 'CASCADE'})
Comment.belongsTo(Article)

//One to many relation between User and Comments
User.hasMany(Comment,{onDelete: 'CASCADE'})
Comment.belongsTo(User)

//Many to many relation between User and User
User.belongsToMany(User,{
    through:'Followers',
    as:'followers',
    timestamps:false,
})

//favourite Many to many relation between User and article
User.belongsToMany(Article,{through: 'Favourites',timestamps:false})
Article.belongsToMany(User,{through: 'Favourites',timestamps:false})



const sync = async () => await sequelize.sync({alter:true})
sync()

app.use(express.json())
app.use(morgan('tiny'))

app.get('/',(req,res) => {
    res.json({status:"API is running"});
})

// 路由: 用户处理
app.use('/api',userRoute)
app.use('/api/articles',articleRoute)
app.use('/api/articles',commentRoute)
app.use('/api/tags',tagRoute)
app.use('/api/profiles',profileRoute)
app.use('/api/articles',favouriteRoute)

app.use('/api/weapons',weaponRoute)
app.use('/api/players',playerRoute)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3000 

app.listen(PORT,() => {
    console.log(`Server running on http://localhost:3000`);
})