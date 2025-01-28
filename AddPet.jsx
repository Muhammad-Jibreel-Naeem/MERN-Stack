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
      

<form>
  <h1>Add a new pet</h1>
  <br/>
  Name <br/>
  <input type="text"/>
  
  Breed <br/>
  <input type="text"/>
  
  Age <br/>
  <input type="text"/>
  
  Gender <br/>
  <input type="text"/>

  Location <br/>
  <input type="text"/>
  
  Photo <br/>
  <input type="file"/>

<input type="submit"/>
  
</form>
