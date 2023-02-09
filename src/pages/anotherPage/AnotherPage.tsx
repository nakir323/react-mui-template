import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useConfirmDialog from '../../shared/components/confirmDialog/useConfirmDialog';

export default function AnotherPage() {
  const { open } = useConfirmDialog();
  return (
    <Box className="h-screen w-full">
      <Box className="flex flex-col gap-y-4">
        <Box className="text-h3 text-blue-500">This is Another Page</Box>
        <Box>
          <Button variant="contained">
            <Link className="no-underline text-white" to="/">
              go to top
            </Link>
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            onClick={() =>
              open('Are you sure?', () => {}, {
                dialogTitle: 'DELETE',
              })
            }
          >
            Show Confirm Dialog
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
