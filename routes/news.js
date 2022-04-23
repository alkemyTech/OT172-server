const express = require ("express")
const router = express.Router();
const { validateNew } = require("../middlewares/validations/news")
const { updateEntrie } = require("../controllers/entriesController")
const { createNewsSchema } = require("../middlewares/validations/schemas")
router.put("/:id", [validateNew(createNewsSchema)], updateEntrie)//news is a subtype of entries

module.exports = router;