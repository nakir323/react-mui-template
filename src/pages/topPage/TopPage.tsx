import LabelIcon from '@mui/icons-material/Label';
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useSnackbar from '../../shared/components/snackbar/useSnackbar';

export default function TopPage() {
  const { open } = useSnackbar();
  const { data } = useQuery({
    queryKey: ['example'],
    queryFn: async () =>
      Array.from(Array(10).keys()).map((idx) => `List item ${idx}`),
  });
  if (!data) return <></>;
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
          <Button variant="contained" onClick={() => open('hello!!')}>
            Show Snackbar
          </Button>
        </Box>
        <List className="w-96">
          {data.map((element: string) => (
            <>
              <ListItem>
                <ListItemIcon>
                  <LabelIcon />
                </ListItemIcon>
                <ListItemText primary={element} />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
}
