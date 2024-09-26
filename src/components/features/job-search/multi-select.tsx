import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import * as React from 'react';

interface MutliSelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string[];
  enumValues: string[];
  label: string;
}

const MultiSelect = React.forwardRef<HTMLInputElement, MutliSelectProps>(
  ({ enumValues, className, label, value, ...props }, ref) => {
    const [selectedValues, setSelectedValues] = React.useState<string[]>(value);

    const handleCheckedChange = (value: string) => {
      setSelectedValues((prevValues) =>
        prevValues.includes(value)
          ? prevValues.filter((v) => v !== value)
          : [...prevValues, value]
      );
    };
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            className='text-muted-foreground'
          >
            {label}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='space-y-4'>
          {enumValues.map((value) => (
            <div
              key={value}
              className='flex gap-2 items-center'
            >
              <Checkbox
                id={value}
                name='contract_type'
                value={value}
                checked={selectedValues.includes(value)}
                onCheckedChange={() => handleCheckedChange(value)}
              />
              <Label
                htmlFor='contract_type'
                className='capitalize'
              >
                {value}
              </Label>
            </div>
          ))}
        </PopoverContent>
      </Popover>
    );
  }
);

MultiSelect.displayName = 'MultiSelect';

export default MultiSelect;
