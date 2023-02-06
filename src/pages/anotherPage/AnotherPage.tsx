import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AnotherPage() {
  return (
    <>
      <Box className="bg-gray-300">
        <Box className="text-h3 text-blue-500">This is Another Page</Box>

        <Button variant="contained">
          <Link className="no-underline text-white" to={'/'}>
            go to top
          </Link>
        </Button>
      </Box>
    </>
  );
}
