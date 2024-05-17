import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import LoginForm from 'containers/HookForm/LoginForm';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import { H4 } from 'baseui/typography';
import FormMenu from 'components/SideMenu/FormMenu';
import Container from 'components/UiElements/Container/Container';

const Login: NextPage<{}> = () => {
  const router = useRouter();


  return (
    <>
      <Head>
        <title>Login | 9arini.</title>
        <meta name="Description" content="9arini login page" />
      </Head>

      <Container>
				<Block  overrides={{
            Block: {
              style: {
                minHeight: 'calc(100vh - 213px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              },
            },
          }}>
				
				
						<Cell span={[12, 12, 9]}>
							<Block paddingTop={['10px', '15px', '30px', '0']}>
								<H4 marginBottom="30px">Login | 9arini.</H4>
								<LoginForm />
							</Block>
						</Cell>
					
				</Block>
			</Container>
    </>
  );
};

export default Login;
