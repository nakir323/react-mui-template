import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useSnackbar from '../../shared/components/snackbar/useSnackbar';

export default function TopPage() {
  const { open } = useSnackbar();
  return (
    <Box className="bg-gray-300">
      <Box className="text-h3 text-red-500">This is Top Page</Box>
      <Link to="/another">Go to AnotherPage</Link>
      <Box>
        <Button variant="contained" onClick={() => open('hello!')}>
          Show Snackbar
        </Button>
      </Box>
    </Box>
  );
}
