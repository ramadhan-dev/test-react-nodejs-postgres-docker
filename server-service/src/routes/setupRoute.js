import { cources, cource } from "#root/Controllers/cources";
const setupRoute = app => {
    app.get("/cources", cources);

    app.get("/cource/:id", cource);
};

export default setupRoute;