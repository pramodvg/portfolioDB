import express from "express"
import cores from 'cors'

import mainController, { serviceData, portfolioData } from '../controller/mainController.js'

const router = express.Router();

// const app1 = express()
router.use(express.json())
router.use(cores())

router.get("/get/about", mainController)
router.get("/get/service", serviceData)
router.get("/get/portfolio", portfolioData)

export default router
