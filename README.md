# Team YumYum
Dit is een informatica project, de bedoeling is een website te maken met daarop recepten voor eten.
Groepsleden:
- Steven te Voortwis
- Chun-Zhi Zweverink
- Emanuelle Coutinho da Silva

De domeinen voor de beoordeling die wij hebben gekozen zijn:
1. Website
2. Interactie
3. User experience

## Install the dependencies
To let this project work in intelij please read the following link: https://www.jetbrains.com/help/idea/installing-and-removing-external-software-using-node-package-manager.html#installingNodeJs

When you want to develop this project you need to make sure to go through the following steps, if you just want to see our beautiful product then please go to: https://yumyum-01.firebaseapp.com/.
```bash
npm install
```

We use the Quasar Framework, the documentation of this Framework can be found at: https://quasar.dev/components <br>
With help of this documentation can every component be easily used in the project. Once you've worked with it for a bit then you will get used to it. And remember, suffering because things don't work on the first try is part of the job.

### Configure Firebase
In order to use Firebase you need to configure it. This is actually quite easy:
1. First make sure to create a Firebase application. In our case I already created a project, I invite my team to this project in Firebase, so we work with the same project. Send me (Steven te Voortwis) a message via Microsoft Teams with your Google email address, then I can add you to the project.
2. Once you have a firebase project, or have been added to one, then go to: Project settings --> General.
3. Choose your app (in our case yumyum-food), and then you see the configuration code, these variables needs to be added to the environment variables.
4. First duplicate the `.env_example` file and rename it to `.env`.
5. Then fill in the variables in the file `.env`, leave `.env_example` empty.

If the project already existed you can skip step 6.

6. Last but not least, enable Email/Password authentication, to do this go to Build --> Authentication in the sidebar. And then press get Started and enable Email/Password authentication.

Make sure to never commit your .env file, because this contains vulnerable data which you prefer to not reveal them on the internet.

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```
Then open your app, it runs, in most cases, at http://localhost:9000/

## Hosting
The site is hosted with Firebase Hosting, using the Firebase CLI. This makes it quite easy to do. But I am to lazy to explain exactly how it works and how to set it up...<br>
When new features have been coded, then I (scrum master) can deploy these to Firebase.

The hosting URL of this project is: https://yumyum-01.firebaseapp.com/ or https://yumyum-01.web.app/.


## Database and storage
A quick note from me about the database and storage:

I've used firestore since its really easy in use and setup, with the right knowledge...
I have set it up in like less than an hour, so it's absolutely not designed for high use efficiency. Probably if you would benchmark it (how to benchmark? idk, sounds like a you problem), it would be terrifying, but yeah then just use a scale of the seventies or one that was used long long very long ago, then it probably will be pretty good.

Edit: Yes, if you see the commit history I knew beforehand that I was able to set up the firestore in less than an hour... Only if I remembered how it was done... I didn't so it took me a bit longer, maybe 2 to 3...


## Fun and not so useful facts (lol)
- You can't change your user details, nor password
- You can't delete your own recipes without access to the firebase console
