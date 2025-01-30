const AddPet = () => {
  const [pet, setPet] = useState({
    name: "",
    breed: "",
    age: "",
    gender: "",
    location: "",
    photo: null
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPet({  ...pet, [e.target.name]: e.target.value })
  }

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) {
      console.error("No file selected")
      return
    }
    const formData = new FormData()
      formData.append("file", file)
      formData.append("upload_preset", "pet_photos")

      try {
        const response = await axios.post("htttps://api.cloudinary.com.v1_1/dkyrhwvue/image/upload", formData)

          setPet((prevPet) => ({
            ...prevPet,
            photo: response.data.secure_url
          }))}
    catch(error) {
      console.error("Error uploading image:", error)
    }
  }

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        await axios.post("http://localhost:3000/pets", pet)
          alert("Pet added successfully")
          navigate(/)
        } catch(error) {
        console.error("Error adding pet:", error)
      }}

<form>
  <h1>Add a new pet</h1>
  <br/>
  Name <br/>
  <input type="text" name="name" value={pet.name} onChange={handleChange} placeholder="Enter Name..." required/>
  
  Breed <br/>
  <input type="text" name="breed" value={pet.breed} onChange={handleChange} placeholder="Enter Breed..." required/>
  
  Age <br/>
  <input type="text" name="age" value={pet.age} onChange={handleChange} placeholder="Enter Age..." required/>
  
  Gender <br/>
  <input type="text" name="gender" value={pet.age} onChange={handleChange} placeholder="Enter Gender..." required/>

  Location <br/>
  <input type="text" name="location" value={pet.location} onChange={handleChange} placeholder="Enter Gender..."/>
  
  Photo <br/>
  <input type="file" name="photo" value={pet.location} onChange={handleFileChange} placeholder="Add Photo..."/>

<button type="submit"> Add Pet </button>
  
</form>
