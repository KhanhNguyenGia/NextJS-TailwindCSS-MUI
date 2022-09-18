import { Button } from '@mui/material';

const Home = () => {
	return (
		<div className='flex flex-row gap-5'>
			<Button type='button' variant='contained' className='bg-red-500 text-white flex-grow-[2]'>
				Tailwind CSS
			</Button>
			<Button type='button' variant='contained' className='flex-grow-[1]'>
				Test
			</Button>
		</div>
	);
};

export default Home;
