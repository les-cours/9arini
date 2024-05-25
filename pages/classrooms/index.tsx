import React, { Fragment } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { FiShoppingCart } from 'react-icons/fi';
import { Block } from 'baseui/block';
import { StyledTable, StyledBodyCell } from 'baseui/table-grid';
import { StyledTableHeadAlt } from 'components/PageStyles/Apps.styled';
import UiElementsMenu from 'components/SideMenu/UiElementsMenu';
import Badge from 'components/UiElements/Badge/Badge';
import Container from 'components/UiElements/Container/Container';
import {
	useThemeSwitcherCtx,
	THEME,
} from '../../contexts/theme/theme.provider';
import { badgePropsData } from '../../data/uiElementsApiData';
import ProtectedRoute
	from "../../contexts/auth/ProtectedRoute";

import ClassRooms
	from "../../components/learning/classroom/ClassRoom";
import {withApollo} from "../../apollo/client";
import Title from 'components/UiElements/PageTitle/PageTitle';;





const ClassRoomsPage: NextPage<{}> = () => {
	const { theme } = useThemeSwitcherCtx();

	
	return (
		<>
			<Head>
				<title>ClassRooms | 9ARINI.</title>
				<meta name="Description" content="Inst calendar app" />
			</Head>

			<Container>
				<Block paddingTop={['0', '0', '0', '40px']}>
					<Grid gridColumns={12} gridGutters={0} gridMargins={0}>
						<Cell span={[12, 12, 3]}>
							<ClassRooms  />
						</Cell>

					<Cell span={[12, 12, 9]}>
						<Title title="CLASSROOM" subtitle="Select classroom to read , update , delete" />
					</Cell>
				</Grid>
				</Block>
			</Container>
		</>
	);
};

export default ProtectedRoute( withApollo(ClassRoomsPage ));
