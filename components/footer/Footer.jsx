import * as React from 'react'
import Image from 'next/image'
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import { StyledFooter, StyledBox } from '../../styles/footer/Footer'
import { StyledTxtField, StyledListItemTxt, StyledListItemTxtEmail } from '../../styles/footer/Footer'
import { StyledBtn, StyledDivider, StyledGridCopy } from '../../styles/footer/Footer'
import { StyledMailRoundedIcon, StyledAddressTyp } from '../../styles/footer/Footer'

const Footer = () => {
	const theme = useTheme()
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<StyledFooter>
			<Grid item container justifyContent='center' sx={{ p: '3em 0 1em' }}>
				<Typography variant='h5' align='center'>
					Subscribe for updates. Coming Soon!
				</Typography>
			</Grid>
			<Grid item container justifyContent='center'>
				<StyledBox component='form' noValidate autoComplete='off'>
					<StyledTxtField id='filled-basic-name' label='Name' variant='filled' size='small' disabled />
					<StyledTxtField id='filled-basic-email' label='Email' variant='filled' size='small' disabled />
					<StyledBtn variant='contained'>Subscribe</StyledBtn>
				</StyledBox>
			</Grid>
			<StyledDivider />
			<Grid
				item
				container
				direction={matchesMD ? 'column' : 'row'}
				sx={{ width: '100%' }}
				justifyContent='center'
				alignItems='center'>
				<Grid item container display='block' sx={{ width: '9em', height: '1em', mb: matchesMD ? '1em' : 0 }}>
					<Image
						alt='company logo'
						src='/images/Mindkeyz-Logo_Trans-White.webp'
						width='1920'
						height='246'
						layout='responsive'
					/>
				</Grid>
				<Grid item>
					<List sx={{ color: '#fff' }}>
						{['Mindkeyz', 'South America', 'Paramaribo, Suriname'].map((adress, index) => (
							<ListItem key={index} sx={{ pb: 0, pt: 0 }}>
								<StyledListItemTxt disableTypography align='center'>
									{adress}
								</StyledListItemTxt>
							</ListItem>
						))}
					</List>
				</Grid>
				<Grid item>
					<List sx={{ color: '#fff', pb: matchesMD ? 0 : undefined, pt: matchesMD ? '4px' : undefined }}>
						<ListItem
							sx={{
								ml: matchesMD ? '-0.45em' : undefined,
								pt: matchesMD ? 0 : undefined,
								pb: matchesMD ? 0 : undefined,
							}}>
							<ListItemIcon sx={{ minWidth: '25px' }}>
								<StyledMailRoundedIcon />
							</ListItemIcon>
							<StyledListItemTxtEmail disableTypography>mindkeyz@gmail.com</StyledListItemTxtEmail>
						</ListItem>
					</List>
				</Grid>
			</Grid>
			<StyledGridCopy item container justifyContent='center'>
				<StyledAddressTyp variant='body1'>&copy; 2024 Mindkeyz.com | Created By Mindkeyz</StyledAddressTyp>
			</StyledGridCopy>
		</StyledFooter>
	)
}

export default Footer
