import React, {Fragment, useEffect} from 'react';
import {toast} from 'react-toastify';
import {NextPage} from 'next';
import Head from 'next/head';
import {gql, useQuery} from '@apollo/client';
import {useRouter} from 'next/router';
import {Button} from 'baseui/button';
import {Input} from 'baseui/input';
import Container
	from 'components/UiElements/Container/Container';
import {withApollo} from '../../../apollo/client';
import {Block} from "baseui/block";
import {Cell, Grid} from "baseui/layout-grid";
import ClassRooms
	from "../../../components/learning/classroom/ClassRoom";
import {
	AvatarWrapper,
	ButtonGroup
} from "../../../components/PageStyles/Settings.styled";
import {FormControl} from "baseui/form-control";
import dynamic from "next/dynamic";
import {useForm} from "react-hook-form";


const AvatarWithNoSSR = dynamic(() => import('react-avatar-edit'), {
	ssr: false,
});

type FormData = {
	avatar: string;
	name: string;
	username: string;
	email: string;
};


const GET_CLASSROOM = gql`
query ClassRoom($classRoomID: String!) {
  classRoom(classRoomID: $classRoomID) {
    title
    studentCount
    price
    Rating
    image 
    badge
  }
}

`;

toast.configure();

const ProductSingle: NextPage<{}> = () => {
	const {
		query: { classRoomID },
	} = useRouter();

	console.log(classRoomID)
	const { data, loading, error } = useQuery(GET_CLASSROOM, {
		variables: {
			classRoomID
		},
		notifyOnNetworkStatusChange: true,
	});

	console.log(data)




	if (!data) return null;
	const {
		title,
		studentCount,
		price,
		Rating,
		image,
		badge,
	} =  data.classRoom;


	console.log(data, 'data');

//form

	const { register, setValue, handleSubmit, reset, errors } = useForm<
		FormData
	>();

	useEffect(() => {
		register({ name: 'avatar' });
	}, [register]);

	const handleOnCrop = (img: string) => {
		setValue('avatar', img);
	};

	const handleBeforeFileLoad = (e: any) => {
		if (e.target.files[0].size > 71680) {
			alert('File is too big!');
			e.target.value = '';
		}
	};

	const handleOnSubmit = handleSubmit((data) => {
		console.log('Form data: ', data);
		alert(JSON.stringify(data, null, 4));
	});

	//endform

	return (
		<>
			<Head>
				<title>{title} | 9ARINI.</title>
				<meta name="Description" content={title} />
			</Head>

			<Container>
				<Block paddingTop={['0', '0', '0', '40px']}>
					<Grid gridColumns={12} gridGutters={0} gridMargins={0}>
						<Cell span={[12, 12, 3]}>
							{/* Assuming ClassRooms component here */}
							<ClassRooms />
						</Cell>
						<Cell span={[12, 12, 9]}>
							<Block paddingTop={['10px', '20px', '30px', '0']}>
								<form onSubmit={handleOnSubmit}>
									<Block marginBottom="30px">
										<AvatarWrapper>
											<AvatarWithNoSSR
												label="Choose avatar"
												labelStyle={{
													fontSize: '16px',
													fontWeight: 500,
													cursor: 'pointer',
												}}
												width={150}
												height={150}
												onCrop={handleOnCrop}
												onBeforeFileLoad={handleBeforeFileLoad}
												src={require('../../assets/images/avatar.jpg')}
											/>
										</AvatarWrapper>
									</Block>
									<Block marginBottom="30px">
										<FormControl
											label="Your Name"
											caption="Please use 32 characters at maximum"
											error={errors.name && 'This field is required'}
											overrides={{
												Label: {
													style: ({ $theme }) => {
														return { ...$theme.typography.font350 };
													},
												},
											}}
										>
											<Input
												name="name"
												autoComplete="off"
												inputRef={register({ required: true, maxLength: 32 })}
												placeholder="Please enter your full name or a display name you comfortable with"
												overrides={{
													InputContainer: {
														style: () => {
															return { backgroundColor: 'transparent' };
														},
													},
												}}
											/>
										</FormControl>
									</Block>

									<Block marginBottom="30px">
										<FormControl
											label="Your User Name"
											caption="Please use 16 characters at maximum"
											error={errors.username && 'This field is required'}
											overrides={{
												Label: {
													style: ({ $theme }) => {
														return { ...$theme.typography.font350 };
													},
												},
											}}
										>
											<Input
												name="username"
												autoComplete="off"
												placeholder="Please enter your user name or a display name you comfortable with"
												inputRef={register({ required: true, maxLength: 16 })}
												overrides={{
													InputContainer: {
														style: () => {
															return { backgroundColor: 'transparent' };
														},
													},
												}}
											/>
										</FormControl>
									</Block>

									<Block marginBottom="30px">
										<FormControl
											label="Your Email"
											caption="jennydoe@example.io"
											error={errors.email && 'This field is required'}
											overrides={{
												Label: {
													style: ({ $theme }) => {
														return { ...$theme.typography.font350 };
													},
												},
											}}
										>
											<Input
												type="email"
												name="email"
												autoComplete="off"
												inputRef={register({
													required: true,
													pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
												})}
												placeholder="Please enter your email address"
												overrides={{
													InputContainer: {
														style: () => {
															return { backgroundColor: 'transparent' };
														},
													},
												}}
											/>
										</FormControl>
									</Block>

									<ButtonGroup>
										<Button
											type="submit"
											size="large"
											overrides={{
												BaseButton: {
													style: ({ $theme }) => {
														return {
															width: '131px',
															...$theme.typography.font250,
														};
													},
												},
											}}
										>
											Save
										</Button>
										<Button
											type="reset"
											onClick={() => reset()}
											kind="tertiary"
											size="large"
											overrides={{
												BaseButton: {
													style: ({ $theme }) => {
														return {
															width: '131px',
															...$theme.typography.font250,
														};
													},
												},
											}}
										>
											Cancel
										</Button>
									</ButtonGroup>
								</form>
							</Block>
						</Cell>
					</Grid>
				</Block>
			</Container>
		</>
	);
};

export default withApollo(ProductSingle);
