import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { auth } from '@/lib/auth';

export default async function AccountPage() {
  const session = await auth();

  return (
    <div className='grid grid-cols-2 grid-rows-2 p-16 items-center gap-8 w-full h-4/5'>
      <Card className='row-span-2'>
        <CardHeader className='flex flex-row gap-4 items-center justify-center'>
          <Avatar>
            <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
            <AvatarImage
              src={session?.user?.image}
              alt='account image'
            />
          </Avatar>
          <div className='flex flex-col'>
            <span>{session?.user?.name}</span>
            <span>{session?.user?.email}</span>
          </div>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <Label>
            Name
            <Input
              type='text'
              label='name'
            />
          </Label>
          <Label>
            Email
            <Input
              type='text'
              label='email'
            />
          </Label>
        </CardContent>
      </Card>
      <Card />
      <Card />
    </div>
  );
}
