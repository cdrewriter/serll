import Link from 'next/link';
import Box from '@material-ui/core/Box';
function Logo() {
  return (

    <Box className={'logo'}
        ><Link href="/">
          <a>Грузовой <span>URAL</span></a>
        </Link>

    </Box>

  );
};

export default Logo;
