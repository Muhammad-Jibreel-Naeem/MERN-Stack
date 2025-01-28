const createApplication = async (req, res) => {
  try {
    const { petId, adopterName, email } req.body

    const application = new Application(req.body)
    await application.save 

    await Pet.findByIdAndUpdate(petId, { status: "Adopted" })
    res.status(201).json(application)
                                
  } catch(error) {
    res.status(500).json({ error: error.message })
  }

  
}

const singleApp = async (req, res) => {
  try {
      const application = await Application.findById(req.params.id)
    if (!appliction) return res.status(404).json({ message: "APpLicATIon NoT FOUnd" })
    res.json(application)
    
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
