This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

-   [Challendge requirement](./GOAL.md)
-   [Assumptions](#assumptions)
-   [Hightlight](#Hightlight)
-   [Concerns](#concerns)
-   [Prepairation](#prepairation)

## Assumptions

-   I assume that all requirement are based on development environment and i dont need to have CI/CD concern.
-   The surveys url comes from all surveys will not dynamically changed for random which means survey result url will always have `/surveys/:id` this type of endpoint.
-   I assume this test i focus on more functional which improve user experience rather than UI/Color itself
-   About business logic, I dont familar with the relationship between different themes. All data need to be show I just show by the response's structure.
-   Testing coverage is not my main goal for this test, so i wont have prefect testing coverage.
-   I assume the result is time sensitive, so everytime i need to fetch to fresh data so i don't set expired period for functionality

## Hightlight

### Fetching result speed improvment on Desktop

**Problem**

> I notice loading every survey's result would be a hugh response including all themes, questions and responses. It might be my concern for how to improve user experience

Generally, it can loading a spinner for indicate page are still loading. But this wont actually reducing loading speed for user and just telling user that 'we are loading'.

So i implement a solution, not only showing spinner while loading but also have **prefetching** while user cusor on hover the area of the survey title (not only title link). this only works for desktop because of no hover on mobile

However, it will increase a lot of work to split different senarios for this prefetching function and I'm not going to use Next.js directly which already have prefetch function.

---

**Senarios 1: `Users move their mouse randomly around page`**

> if every hover will toggle prefetcing, it will keep sending request to backend and it will totally increase traffic for front and also weaken backend performance.

**Solution**:

I set up a timeout which can be update in `.env` to 500ms that if user stay in that title for 500ms, it will start to toggle prefetching.

---

**Senarios 2: `User click while prefetching is still pending`**

> if user accidently click just prefetching start, he should go to another page but prefetching is still pending.

**Solution**:

Using redux/context or any state management over components, I'll check if prefetching is pending or not, if it's pending, the result page will wait for this prefetching until it solved.

in this app, you can see text 'Prefetching...' when it runs as prefetching data, if not, it only showing as 'Loading...'

---

**Senarios 3: `User immediately click the survey title before prefetching starts`**

> In this senario, use might move his cusor very fast and directly click the link or the survey title area.

**Solution**:

in this case, result page will start to loading the data if prefetching is responsed as false.

---

**Senarios 4: `User refresh result page which has no prefetching toggled`**

> In this senario, use might refresh result page, or directly go some page by url e.g. `/surveys/13`, it wont toggle prefetching function

**Solution**:

while loading the result page, if prefetching is false, it will loading data from endpoint directly.

---

**Senarios 5: `User stay survey title for a long time(1 min, e.g. user away from keyboard) before click`**

> In this senario, data might already be prefetched for a long time and some change might already udpate during this period.

**Solution**:

result page will always loading a data, if prefetched data filled, it will immediately show prefetched data and once page redirect, data will loading in background again and after it is done, the page will update again.

---

**Improvement**

there are something still can be improve for this prefetching function.

1. We can have a memory database for persistent data, every time toggled will save the survey to memory database with a timestamp. We can have a tolerate timeout if it expired.
2. We can also change the response to GraphQL API which will totally fetch what frontend want.

## Prepairation

Please check your node version

```bash
$ node --version    # v10.16.0 or later
```

If you node is old version please update [here](https://nodejs.org/en/download/)

### Install Yarn

if you dont have Yarn, you can installed [here](https://yarnpkg.com/lang/en/docs/install/#mac-stable):

In the project directory, you can run:

```bash
$ yarn start   # start your local server
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
