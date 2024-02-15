# Team YumYum
Dit is een informatica project, de bedoeling is een website te maken met daarop recepten voor eten.
Groepsleden:
- Steven te Voortwis

De domeinen voor de beoordeling die wij hebben gekozen zijn:
1. DOMEIN 1
2. DOMEIN 2
3. DOMEIN 3

## Install the dependencies
```bash
npm install
```

### Configure Firebase
In order to use Firebase you need to configure it. This is actually quite easy:
1. First make sure to create a Firebase application, this is quite straight forward. In our case I already created a project, I invite my team to this project in Firebase, so we work with the same project.
2. Once you have a firebase project then go to: Project settings --> General.
3. Choose your app, and then you see the configuration code, these variables needs to be added to the environment variables.
4. First duplicate the `.env_example` file and rename it to `.env`.
5. Then fill in the variables in the file `.env`, leave `.env_example` empty.

If the project already existed you can skip the last step.
6. Last but not least, enable Email/Password authentication, to do this go to Build --> Authentication in the sidebar. And then press get Started and enable Email/Password authentication.

Make sure to never commit your .env file, because this contains obviously vulnerable data.

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```
Then open your app, most common it runs on `http://localhost:9000/`
