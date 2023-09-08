const express= require("express");
const { getAllData, createData, updateData, deleteData, getDataDetails } = require("../controllers/dataController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();


router.route("/data").get(getAllData);
router.route("/data/new").post( isAuthenticatedUser,authorizeRoles("admin"), createData);
router
    .route("/data/:id")
    .put( isAuthenticatedUser,authorizeRoles("admin"), updateData)
    .delete( isAuthenticatedUser,authorizeRoles("admin"), deleteData)
    .get(getDataDetails);

module.exports=router