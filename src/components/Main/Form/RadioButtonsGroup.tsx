import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { radioStyle } from '@/components/UI/CommonStyle';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{ mt: 1.8 }}
      >
        <FormControlLabel
          sx={{
            radioStyle,
          }}
          value="General Inquiry1"
          control={<Radio />}
          label="General Inquiry"
        />
        <FormControlLabel
          sx={{
            radioStyle,
          }}
          value="General Inquiry2"
          control={<Radio />}
          label="General Inquiry"
        />
        <FormControlLabel
          sx={{
            radioStyle,
          }}
          value="General Inquiry3"
          control={<Radio />}
          label="General Inquiry"
        />
        <FormControlLabel
          sx={{
            radioStyle,
          }}
          value="General Inquiry4"
          control={<Radio />}
          label="General Inquiry"
        />
      </RadioGroup>
    </FormControl>
  );
}
