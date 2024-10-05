import  express  from "express";

export const App = express();

App.listen(3000, () => {
    console.log("Application sucessfully port 3000!");
});