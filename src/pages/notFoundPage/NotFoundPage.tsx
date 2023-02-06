import { Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <Box className="flex justify-center h-screen">
      <Box className="bg-primary-100 flex items-center justify-center flex-col gap-y-4 font-bold">
        <Box className="text-3xl text-neutral-800">404 Not Found</Box>
        <Box className="text-lg text-neutral-500">ページが見つかりません。</Box>
        <Link className="text-xl" component={RouterLink} to="/">
          トップへ戻る
        </Link>
      </Box>
    </Box>
  );
}
