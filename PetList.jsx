import React from 'react'

const PetList = () => {

const [pets, setPets] = useState([])
const [locationFilter, setLocationFilter] = useState("")
const navigate = useNavigate()

useEffect(() => {
  axios.get("http://localhost:3000/pets").then((response) => setPets(response.data).catch((error) => console.error("Error fetching pets:", error, [])

const handleAdopt = (petId) => {
  navigate(`/pets/${petId}`)
}
  const  filteredPets = pets.filter(pet) => pet.location.toLowerCase().includes(locationFilter.toLowerCase())
  )


return (
<div>


	<h1>Available Pets</h1>
	<div>
		<input type="text" value={locationFilter} onChange={(e) => setLocaionFilter(e.target.value)} placeholder="Filter by location..."</input>

	</div>
	<div>
	{filteredPets.map((pet) => ((
		<div key={pet.id}>

			<h3>{pet.name}</h3>
			<p>Breed: {pet.breed}</p>
			<p>Age: {pet.age}</p>
			<p>Gender: {pet.gender}</p>
			<p>Location: {pet.location}</p>
			<img src={pet.photo} alt={pet.name}/>

			{pet.status === "Adopted" ? (
			<span>Adopted</span>
			) : (
			<button onClick{() => handleAdopt(pet.id)}>Adopt</button>
			
		</div>
		)}
		
			  </div>
			))}
			  </div>
			  </div>
			  )}
		
		
		</div>
</div>

