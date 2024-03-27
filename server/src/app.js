const express = require("express")
const cors = require("cors")

require ("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())

module.exports = app

//module.exports = db
//module.exports = User
//module.exports = Post
//module.exports = Comment
//module.exports = Like
//module.exports = Follow
//module.exports = Message
//module.exports = Chat
//module.exports = Notification
//module.exports = Notification_type
//module.exports = Notification_status
//module.exports = Notification_user
//module.exports = Notification_post
//module.exports = Notification_comment
//module.exports = Notification_like
//module.exports = Notification_follow
//module.exports = Notification_message
//module.exports = Notification_chat
//module.exports = Notification_notification_type
//module.exports = Notification_notification_status
//module.exports = Notification_notification_user
//module.exports = Notification_notification_post
//module.exports = Notification_notification_comment
//module.exports = Notification_notification_like
//module.exports = Notification_notification_follow
//module.exports = Notification_notification_message
//module.exports = Notification_notification_chat
