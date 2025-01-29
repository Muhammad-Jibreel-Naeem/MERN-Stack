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
                               
                               
                               
                               
                               )
