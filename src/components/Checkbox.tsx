import * as Checkbox_ from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'; 

export interface CheckboxProps extends Checkbox_.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return(
    <Checkbox_.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded" {...props}>
      <Checkbox_.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </Checkbox_.Indicator> 
    </Checkbox_.Root>
  );
}