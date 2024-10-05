import  express, { json }  from "express";

export const App = express();

App.use(json());

App.listen(3000, () => {
    console.log("Application sucessfully started at port 3000!");
});