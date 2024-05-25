import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Sticky from 'react-stickynode';
import MenuWrapper, { Menu, MenuItem, MenuLink } from "../../SideMenu/SideMenu.styled";
import {gql, useQuery} from "@apollo/client";


type MenuProps = {
    className?: string;
    onClick?: () => void;
};


const GET_Chapters = gql`
query Chapters($classRoomID: String!) {
  chapters(classRoomID: $classRoomID) {
   chapterID
    title
    arabicTitle
    description
  }
}

`;


const Chapters = ({  id }) => {
    const {query} = useRouter();


    const { data, loading, error, fetchMore } =
        useQuery<{ chapters: { title: string; chapterID: string }[] }>(GET_Chapters, {
        variables: { classRoomID : id },
        notifyOnNetworkStatusChange: true,
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No data available</p>;

console.log(data)
    const { chapters } = data;

if (chapters.length == 0 )
    return <p>No data available</p>;






    return (
        <Sticky top=".navbar" innerZ="1">
            <MenuWrapper className="side-menu-wrapper">
                <Menu className={`side-menu ${className}`}>
                    {chapters.map((item) => {

                        return (
                            <MenuItem key={`side-menu--key${item.classRoomID}`} onClick={onClick}>
                                <Link href={"/classrooms/"+item.classRoomID}>
                                    <MenuLink className={query.classRoomID == item.classRoomID ? 'active' : ''}>
                                        {item.title}
                                    </MenuLink>
                                </Link>
                            </MenuItem>
                        );
                    })}
                </Menu>
            </MenuWrapper>
        </Sticky>
    );
};

export default Chapters;
