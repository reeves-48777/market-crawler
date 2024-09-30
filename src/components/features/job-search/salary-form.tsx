import * as React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Salary = Partial<{ daily: number; annual: number }>;

//@ts-ignore
export interface SalaryRangeProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: Salary;
}

const SalaryForm = React.forwardRef<HTMLInputElement, SalaryRangeProps>(
  ({ className, value, ...props }, ref) => {
    const [dailyValue, setDailyValue] = React.useState(value.daily);

    const [annualValue, setAnnualValue] = React.useState(value.annual);

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            className='text-muted-foreground'
          >
            Salary
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-80'>
          <fieldset className='space-y-6'>
            <div className='space-y-2'>
              <Label htmlFor='daily'>Min daily rate (TJM)</Label>
              <Input
                id='daily'
                value={dailyValue}
                onChange={(e) => setDailyValue(Number(e.target.value))}
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='annual'>Min annual salary</Label>
              <Input
                id='annual'
                value={annualValue}
                onChange={(e) => setAnnualValue(Number(e.target.value))}
              />
            </div>
          </fieldset>
        </PopoverContent>
      </Popover>
    );
  }
);

SalaryForm.displayName = 'SalaryRange';

export default SalaryForm;
