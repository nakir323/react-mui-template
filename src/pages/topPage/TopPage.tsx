import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TopPage() {
  return (
    <>
      <Box className="bg-gray-300">
        <Box className="text-h3 text-red-500">This is Top Page</Box>
        <Link to={'/another'}>Go to AnotherPage</Link>
      </Box>
    </>
  );
}
