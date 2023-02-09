import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useSnackbar from '../../shared/components/snackbar/useSnackbar';

export default function TopPage() {
  const { open } = useSnackbar();
  return (
    <Box className="h-screen w-full">
      <Box className="flex flex-col gap-y-4">
        <Box className="text-h3 text-red-500">This is Top Page</Box>
        <Box>
          <Link to="/another" className="">
            Go to AnotherPage
          </Link>
        </Box>
        <Box>
          <Button variant="contained" onClick={() => open('hello!')}>
            Show Snackbar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
