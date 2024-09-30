import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { auth } from '@/lib/auth';

export default async function AccountPage() {
  const session = await auth();

  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-8'>
      <Card>
        <CardHeader className='gap-4'>
          <CardTitle>Your profile</CardTitle>
          <Avatar className='mx-auto'>
            <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
            <AvatarImage
              src={session?.user?.image}
              alt='account image'
            />
          </Avatar>
        </CardHeader>
        <CardContent className='flex flex-col gap-8'>
          <Input
            value={session?.user?.name}
            label='Name'
          />
          <Input
            value={session?.user?.email}
            label='Email'
          />
        </CardContent>
      </Card>
      <Card className='border-none bg-muted/20'>
        <CardHeader>
          <CardTitle>Your linked accounts</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <Button
            variant='outline'
            size='lg'
          >
            Freework
          </Button>
          <Button
            variant='outline'
            size='lg'
          >
            HelloWork
          </Button>
          <Button
            variant='outline'
            size='lg'
          >
            Linkedin
          </Button>
          <Button size='lg'>Add account</Button>
        </CardContent>
      </Card>
      <Card className='col-span-2'>
        <CardHeader>
          <CardTitle>Source websites</CardTitle>
        </CardHeader>
        <CardContent className='grid grid-cols-4 gap-6'>
          <Card className='border-dashed'>
            <CardContent>Free work</CardContent>
          </Card>
          <Card className='border-dashed'>
            <CardContent>Hello Work</CardContent>
          </Card>
          <Card className='border-dashed'>
            <CardContent>Welcome to the Jungle</CardContent>
          </Card>
          <Card className='border-dashed'>
            <CardContent>Indeed</CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
