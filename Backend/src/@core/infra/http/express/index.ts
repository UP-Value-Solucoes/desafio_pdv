import  express, { json }  from "express";

export const App = express();

App.use(json());
