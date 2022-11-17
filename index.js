import app from "./app/app.js"
const main =()=>{
    app.listen(app.get('port'));
    console.log(`server on port ${app.get("port")}`);
};

main();