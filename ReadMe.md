# Fullstack CRUD application

<div align="center">
A simple CRUD app i made to try out this beautiful stack i thought would be amazing to work with in the future !

Features implemented :

| Feature                             | status |
| ----------------------------------- | ------ |
| add user                            | ✅     |
| fetch all users                     | ✅     |
| fetch user by id                    | ✅     |
| edit user                           | ✅     |
| edit user's image                   | ❌     |
| delete user                         | ✅     |
| upload picture to firestore storage | ✅     |
| get url from storage into db        | ✅     |

</div>

### Made using :

<div align="center">
    <img src="https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg" alt="nuxtjs" width="40" height="40"/>
    <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="express" width="40" height="40"/>
    <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="nocejd" width="40" height="40"/>
    <img src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg" alt="sequelize" width="40" height="40"/>
    <img src="https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg" alt="mysql" width="100" height="40"/>
    <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/>
    <br>
     <img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" alt="vuejs" width="20" height="20"/>
    <img src="https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png" alt="vuetify" width="20" height="20"/>
</div>

### Demo :

<div align="center">
    <img src="demo.gif" alt="demo" />
</div>

### Client Side

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

### Server Side

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm start

```

### Mysql Database Config

#### Config File location :

📦server-api  
┣ 📂config  
┃ ┗ 📜config.json

<p>Just edit these fields with your config</p>

```json
"username": "YOUR-USERNAME",
"password": "YOUR PASSWORD | NULL IF YOU HAVE NONE",
"database": "YOUR DATABASE NAME",
"host": "LOCALHOST",
```

#### Models :

<p>This project only uses a single table/model which is USER, but you can add as many as you wish by creating models in the models folders :  </p>

📦server-api  
┣ 📂models  
┃ ┣ 📜index.js  
┃ ┗ 📜User.js

<p>Check out the sequelize documentation for the syntax here : <a href="http://sequelize.org" target="_">Sequelize</a></p>
 <p>Once that's done just restart your server</p>
 <p>IN CASE CHANGES AREN'T MADE DURING THE RESTART , DROP TABLE THEN TRY AGAIN .</p>

### Firestore Config Files

#### Config File location :

📦firestore  
┣ 📜config.js  
┗ 📜storage.js

<p>Just edit these fields with your config</p>

```javascript
var firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
  authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
  databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
  projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
  storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
  messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
  appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
};
```

## Heresy warning 😂 :

<p><small>Iam aware of my <strong>unconventional</strong> approach to using firebase config this way , so please feel free to use it how you normally would in your projects .</small></p>

# Contact

<div align="center">
<p>you can contact me at ZTF666@protonmail.ch or via my portfolio</p>

</div>

<div align="center">

<table>
  <tr>
    <td align="center"><a href="https://ztfportfolio.web.app/" target='_blank'><img src="https://avatars1.githubusercontent.com/u/32502988?v=4" width="100px;" alt=""/><br /><sub><b>ZTF666</b></sub></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.paypal.com/paypalme/ztf666" target='_blank'><img src="https://1000logos.net/wp-content/uploads/2017/05/emblem-Paypal.jpg" width="100px;" alt=""/><br /><sub><b>Donations</b></sub></a></td>
  </tr>
</table>

</div>

## License

<div align="center">

**Fullstack CRUD application**
released under the [MIT](LICENSE) License.
<br><br>

<strong><p>Made with 🖤 by ZTF - N.EA | 2021 </p> </strong>

</div>
