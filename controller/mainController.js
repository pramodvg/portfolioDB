import mAboutData from '../model/aboutData.js'
import serviceApiData from '../model/ServiceData.js'
import portfolioApiData from '../model/portfolliodata.js'

const maboutData = (req, res) => {
    mAboutData.find((err, data) => {
        if (err) {
            res.status(500).send("Error 500")
        } else {
            res.status(200).send(data)
        }
    })
}
export default maboutData

export const serviceData = (req, res) => {
    serviceApiData.find((err, data) => {
        if (err) {
            res.status(500).send("Error 500")
        } else {
            res.status(200).send(data)
        }
    })
}

export const portfolioData = (req, res) => {
    portfolioApiData.find((err, data) => {
        if (err) {
            res.status(500).send("Error 500")
        } else {
            res.status(200).send(data)
        }
    })
}
