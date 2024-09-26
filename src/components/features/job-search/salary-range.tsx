import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

type SalarySchema = z.ZodObject<{
  daily: z.ZodNumber;
  annual: z.ZodNumber;
}>;

type Salary = Partial<{ daily: number; annual: number }>;

//@ts-ignore
export interface SalaryRangeProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: Salary;
  schema: SalarySchema;
}

const SliderContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='flex flex-row justify-between'>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Slider) {
          return React.cloneElement(child, {
            //@ts-ignore
            className: cn(child.props.className, 'w-52'),
          });
        }
        return child;
      })}
    </div>
  );
};

const SalaryRange = React.forwardRef<HTMLInputElement, SalaryRangeProps>(
  ({ className, value, onChange, schema, ...props }, ref) => {
    const sliderStep = 50;

    const [dailyValue, setDailyValue] = React.useState(value.daily);
    const dailyMin = schema.shape.daily.minValue || 0;
    const dailyMax = schema.shape.daily.maxValue || 10000;

    const [annualValue, setAnnualValue] = React.useState(value.annual);
    const annualMin = schema.shape.annual.minValue || 0;
    const annualMax = schema.shape.annual.maxValue || 100000;

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
              <Label htmlFor='daily'>Daily Rate (TJM)</Label>
              <SliderContainer>
                <Slider
                  min={dailyMin}
                  max={dailyMax}
                  step={sliderStep}
                  value={[dailyValue || 0]}
                  onValueChange={(value) => setDailyValue(value[0])}
                />
                <strong>{dailyValue}</strong>
              </SliderContainer>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='annual'>Annual Salary</Label>
              <SliderContainer>
                <Slider
                  min={annualMin}
                  max={annualMax}
                  step={sliderStep}
                  value={[annualValue || 0]}
                  onValueChange={(value) => setAnnualValue(value[0])}
                />
                <strong>{annualValue}</strong>
              </SliderContainer>
            </div>
          </fieldset>
        </PopoverContent>
      </Popover>
    );
  }
);

SalaryRange.displayName = 'SalaryRange';

export default SalaryRange;
