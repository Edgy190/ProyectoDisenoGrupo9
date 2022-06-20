import express from "express";;
import cors from "cors";
import db from "./config/db.js"
import routesParking from "./routes/routesParking.js"
import routesParkingEncargado from "./routes/routesParkingEncargado.js"
import routesDepartment from "./routes/routesDepartment.js"
import routesUser from "./routes/routesUser.js"
import auth from "./routes/auth.js"

const app = express();

app.use( cors() );
app.use(express.json());
app.use('/', auth);
app.use('/parking', routesParking);
app.use('/parkingEncargado', routesParkingEncargado);
app.use('/registerUser', routesUser);
app.use('/department', routesDepartment);

try {
    await db.authenticate();
    console.log("DB connection");
} catch (error) {
    console.log("Error connection DB: $", {error});
}

app.listen(8000, () => {
    console.log("Server running");
})