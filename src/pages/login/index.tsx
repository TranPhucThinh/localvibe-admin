import FULLLOGO from '@/assets/images/FULL-LOGO.svg'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { AppContext } from '@/contexts/app.context'
import { Label } from '@radix-ui/react-label'
import { useContext } from 'react'
const Login = () => {
  const { setIsAuthenticated } = useContext(AppContext)

  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <div className='flex items-center gap-2 self-center font-medium'></div>
        <div className='flex flex-col gap-6'>
          <Card>
            <CardHeader className='flex items-center gap-2'>
              <img src={FULLLOGO} alt='Localvibe' className='w-32' />
              <CardDescription>Login to your Localvibe account</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className='flex flex-col gap-6'>
                  <div className='grid gap-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input id='email' type='email' placeholder='m@example.com' required />
                  </div>
                  <div className='grid gap-2'>
                    <div className='flex items-center'>
                      <Label htmlFor='password'>Password</Label>
                    </div>
                    <Input id='password' type='password' required placeholder='********' />
                  </div>
                  <Button type='submit' className='w-full' onClick={() => setIsAuthenticated(true)}>
                    Login
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Login
