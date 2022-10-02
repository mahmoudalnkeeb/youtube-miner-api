# Youtube-Miner(API) is a simple api built with NodeJs(express) downloading videos from youtube with different formats

### used 3rd part libraries

- express
- dotenv
- cors
- jsonwebtoken
- sequelize
- ytdl-core

### used database :: **postgres**

---

### collected data for improving system

api just collect downloaded video data like title , url , quality to improve user experience and statistical purposes like

- total count of downloaded videos

- the most downloaded video

- the most downloaded video quality

- the most downloaded video file type

### prerequisites

- node v16.14.2

- 8.10.0

### installation

navigate to folder directory

- first create file .env and copy paste line below

`DB_CONNECTION_URL='postgres://user:pass@localhost/dbname'`

replace user , pass , localhost(database host) , dbname(database name) with your database information.

then open command line in the same directory and run this command

`npm install`

### run

- run in development enviroment

`npm run start`

- run in production enviroment

`npm run start`

---

## API USAGE

there are two main endpoints one for get video info like available formats , url , thumbenails and title and second one to download the video with specific format

- get video info

          path : /videos?url='Youtube link here'

          method : GET

          (url) as query string parameter

          response is a json

        {
            formats:Array,
            thumbnails:Array,
            title:String,
            video_url:String
        }

- download video

        path : /videos/download

        method : POST

        body : {
            url : STRING // video url ,
            format : OBJECT // one of formats from video info
        }

        response is a video stream you can directly use html form
        to make request and download will start immediately
