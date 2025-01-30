import React from 'react'

const PetDetails = () => {
  const { id } = useParams()
  const [pet, setPet] = useState({
    adopterName: "",
    email: "",
    phoneNumber: ""
  })

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3000/pets/${id}`).then((response) => setPet(response.data)).catch((error) => console.error("Error fetching pet details:", error))
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/applications", {
      ...form, petId: id}).then(() => {
      alert("Application submitted successfully!"))
      navigate("/")}).catch((error) => console.error("Error submitting application:", error
))    }

if (!pet) return <div>Loading...</div>
                               
                               
return (
  <div>
  <img src={pet.photo} alt={pet.name}/>
    <h2>{pet.name}</h2>
    <p>Breed: {pet.breed}</p>
    <p>Age: {pet.age} years</p>
    <p>Location: {pet.location}</p>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Name..." name="adopterName" value={form.adopterName} onChange={(e) => setForm({ ...form, adopterName: e.target.value })} required/>
      
        <input type="email" placeholder="Enter Your Email..." name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required/>

        <input type="text" placeholder="Enter Your Phone Number..." name="phoneNumber" value={form.phoneNumber} onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })} required/>

        <input type="text" placeholder="Enter Your Name..." name="adopterName" value={form.adopterName} onChange={(e) => setForm({ ...form, adopterName: e.target.value })} required/>

        <button type="submit" >Submit</button>
      
    </form>
  </div>
                               
)
export default PetDetails
