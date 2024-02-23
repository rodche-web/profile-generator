import { useState } from 'react'
import { useEffectOnce } from './hooks/useEffectOnce'
import ProfileCard from './components/ProfileCard'
import Header from './components/Header'
import axios from 'axios'

interface Profile {
  firstName: string
  lastName: string
  email: string
  imageUrl: string
}

function App() {
  const [profile, setProfile] = useState<Profile>()
  const [isLoading, setIsLoading] = useState(false)

  const fetchProfile = async (): Promise<void> => {
    setIsLoading(true)
    const response = await axios.get<{results: {name: {first: string, last: string}, email: string, picture: {large: string}}[]}>('https://randomuser.me/api/?inc=name,email,picture')
    const result = response.data.results[0]

    const {name: {first, last}, email, picture: {large}} = result
    
    const profile = {
      firstName: first,
      lastName: last, 
      email,
      imageUrl: large,
    }
  
    setProfile(profile)
    setIsLoading(false)
  }

  useEffectOnce(() => {
      fetchProfile()
      return () => {}
  })

  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {profile ? <ProfileCard 
          firstName={profile.firstName}
          lastName={profile.lastName} 
          email={profile.email} 
          imageUrl={profile.imageUrl}
          isLoading={isLoading} 
          onReset={() => fetchProfile()} 
        /> : <p>Loading...</p>}
      </div>
    </>
  )
}

export default App
