import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

interface ProfileCardProps {
  firstName: string
  lastName: string
  email: string
  imageUrl: string
  isLoading: boolean
  onReset: () => void
}

const ProfileCard: React.FC<ProfileCardProps> = ({firstName, lastName, email, imageUrl, isLoading, onReset}) => {

  return (
    <Card sx={{ width: { xs: '100%', sm: '50%' }, display: { xs: 'flex', flexDirection: 'column', alignItems: 'center'}, m: 5, p: 5 }}>
        <CardMedia
        component="img"
        image={imageUrl}
        alt="Profile"
        sx={{ width: 100, height: 100, borderRadius: '50%', mb: 2 }}
        />
        <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6">
            {firstName} {lastName}
        </Typography>
        <Typography variant="body1">
            {email}
        </Typography>
        </CardContent>
        <LoadingButton loading={isLoading} variant="contained" onClick={onReset} sx={{ mt: 2 }}>
          Reset
        </LoadingButton>
    </Card>
  )
}

export default ProfileCard