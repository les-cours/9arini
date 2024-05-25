import React, {
	useEffect,
} from 'react';
import { toast } from 'react-toastify';
import { NextPage } from 'next';
import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

import Container from 'components/UiElements/Container/Container';

import { withApollo } from '../../../apollo/client';

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

	const { register, setValue, handleSubmit, errors } = useForm<
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

	const router = useRouter()
	const onSubmit = (data: any) => {
		router.push("/classroom/{uuid}/detail")
	};
	//endform

	return (
		<>
			<Head>
				<title>{title} | 9ARINI.</title>
				<meta name="Description" content={title} />
			</Head>

			<Container>
			</Container>
			);
			};
		</>
	);
};

export default withApollo(ProductSingle);
