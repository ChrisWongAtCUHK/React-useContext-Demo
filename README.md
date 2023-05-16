# React useContext Demo
## Create an app by Vite
```
$ yarn create vite react-useContext-demo --template react -y
```

## Deploy to GitHub Pages
* Commands
    - build and commit 
    ```
    $ yarn build
    $ git add -f dist
    $ git commit -m "Add dist folder"
    ```
    - push to branch `gh-pages`
    ```
    $ git subtree push --prefix dist/ origin gh-pages
    ```
    - delete `gh-pages` if necessary
    ```
    $ git push --delete origin gh-pages
    ```
* [React useContext Demo](https://chriswongatcuhk.github.io/React-useContext-Demo/)

##