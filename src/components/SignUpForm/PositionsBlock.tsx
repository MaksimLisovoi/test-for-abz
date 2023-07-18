import { FormControl, FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import { useEffect, useState } from 'react';
import { getPositions } from '../../services/userApi';
import { CustomRadioBtn } from '../CustomRadioBtn';
import { PositionsState } from '../../types';
import { PositionsBlockPropsType } from '../../types';

export const PositionsBlock = ({ register }: PositionsBlockPropsType) => {
  useEffect(() => {
    getPositions().then(data => setPositions(data));
  }, []);
  const [positions, setPositions] = useState<PositionsState>([]);
  const [positionValue, setPositionValue] = useState<number>(1);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPositionValue(Number((event.target as HTMLInputElement).value));
  };

  const theme = useTheme();
  return (
    <Box sx={{ mb: '47px' }}>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Select your position</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          // defaultChecked={true}
          defaultValue={1}
          value={positionValue ? positionValue : 1}
          onChange={handleRadioChange}
        >
          {positions &&
            positions.map(position => (
              <FormControlLabel
                {...register('position_id')}
                key={position.id}
                value={position.id}
                control={
                  <CustomRadioBtn
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 20,
                      },
                      '&.Mui-checked': {
                        color: `${theme.palette.custom.accent}`,
                      },
                    }}
                  />
                }
                label={position.name}
              />
            ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
